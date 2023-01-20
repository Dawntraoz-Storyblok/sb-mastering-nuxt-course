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

Check the [official `nuxi add` docs](https://nuxt.com/docs/api/commands/add#nuxi-add).

### Universal Rendering

Universal (client-side + server-side) rendering allows a Nuxt app to provide quick page load times while preserving the benefits of client-side rendering.

Server: The browser requests a URL, the server returns a fully rendered HTML page to the browser.

Client: The client loads the JS code in the background once the HTML document has been downloaded. The browser interprets it again (Hydration) and Vue takes control of the document enabling interactivity.

Check the [official rendering docs](https://nuxt.com/docs/guide/concepts/rendering#universal-rendering).

### NuxtLink

Is a drop-in replacement for both Vue Router's `<RouterLink>` component and HTML's `<a>` tag. It determines whether the link is internal or external and renders it accordingly with available optimizations (prefetching, default attributes, etc).

Check the [official NuxtLink docs](https://nuxt.com/docs/api/components/nuxt-link).

### Use `useState` globally

Nuxt provides `useState` composable to create a reactive and SSR-friendly shared state across components.

Check the [official state management docs](https://nuxt.com/docs/getting-started/state-management).

### `useHead`

The `useHead` composable allows you to manage your head tags in a reactive way, powered by `@vueuse/head`.

Check the [official useHead composable docs](https://nuxt.com/docs/getting-started/seo-meta#composable-usehead).
