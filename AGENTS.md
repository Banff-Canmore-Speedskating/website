## Before any work: pull first

This site is also edited by a cloud agent (when club execs request changes)
and through Pages CMS, so a local checkout is often behind `origin/main`.

1. Run `git pull --ff-only` on `main` before reading or editing anything.
2. If it can't fast-forward, stop and ask. Don't merge or rebase over
   someone else's change.
3. Pull (or `git fetch` and compare) again right before pushing.

`main` is the production branch: a push deploys to
banffcanmorespeedskating.ca in about 75 seconds.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
