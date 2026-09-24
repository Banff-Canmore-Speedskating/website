/**
 * Redirects legacy WordPress URLs to their new paths.
 *
 * The old site used plain permalinks, so every inbound link out in the world -
 * Facebook posts, search results, old emails, previous ad creatives - looks like
 * `/?page_id=1453` or `/?p=2915`. Static assets alone cannot route on a query
 * string, so those requests would silently return the homepage with a 200:
 * nothing appears broken, but the visitor never reaches the page they clicked.
 *
 * Everything else falls through to the static assets untouched.
 */
import redirects from "../legacy-redirects.json";

const MAP = redirects as Record<string, string>;

export default {
  async fetch(request: Request, env: { ASSETS: Fetcher }): Promise<Response> {
    const url = new URL(request.url);
    const legacyId = url.searchParams.get("page_id") ?? url.searchParams.get("p");

    if (legacyId && MAP[legacyId]) {
      const target = new URL(MAP[legacyId], url.origin);
      // Carry through anything that is not the WordPress id (e.g. utm_* tags).
      for (const [k, v] of url.searchParams) {
        if (k !== "page_id" && k !== "p") target.searchParams.set(k, v);
      }
      return Response.redirect(target.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
};
