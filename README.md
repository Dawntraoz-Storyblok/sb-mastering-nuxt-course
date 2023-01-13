# Mastering Nuxt 3 course

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
pnpm run dev
```

## Production

Build the application for production:

```bash
pnpm run build
```

Locally preview production build:

```bash
pnpm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.

## Learnings

### Nested Routes

It is possible to display nested routes with `<NuxtPage>`.
Example: `course.vue` works as a "layout" for the `course` folder. Any `.vue` files inside the `course` folder will be render as children using `<NuxtPage/>` in`course.vue`.

Check the [official nested routes docs](https://nuxt.com/docs/guide/directory-structure/pages#nested-routes).

### Dynamic Routes

- 1 square bracket: dynamic route parameter. Example: `[lessonSlug].vue` or`lesson-[slug].vue`.
- 2 square brackets: dynamic route optional parameter. Example: `[[parameterSlug]].vue`.

Check the [complete dynamic routes docs](https://nuxt.com/docs/guide/directory-structure/pages#dynamic-routes) for more info or examples.

### Nuxi add command

Help you generates composables, components, layouts, pages, api, middlewares and plugins.

Check the ([official `nuxi add` docs](https://nuxt.com/docs/api/commands/add#nuxi-add)).
