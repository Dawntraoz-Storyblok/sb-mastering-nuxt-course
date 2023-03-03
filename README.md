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

### Routes

#### Nested Routes

It is possible to display nested routes with `<NuxtPage>`.
Example: `course.vue` works as a "layout" for the `course` folder. Any `.vue` files inside the `course` folder will be render as children using `<NuxtPage/>` in`course.vue`.

Check the [official nested routes docs](https://nuxt.com/docs/guide/directory-structure/pages#nested-routes).

#### Dynamic Routes

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

### Error handling

> If you want to go in depth in this topic, check the official guide of [Error Handling in Nuxt 3](https://nuxt.com/docs/getting-started/error-handling).

#### `NuxtErrorBoundary`

We can handle client-side errors using `<NuxtErrorBoundary>`, isolating errors to specific parts of the app.

Check the [official `<NuxtErrorBoundary>` api docs](https://nuxt.com/docs/api/components/nuxt-error-boundary)

#### `createError`

A function available to create an error object with additional metadata meant to be thrown.

```js
throw createError('Could not update') // Simple usage
throw createError({ // More specific
    statusCode: 404,
    statusMessage: 'Page Not Found'
  })
```

- Server-side: trigger a full-screen error page
- Client-side: throw a non-fatal error (if you want full-screen error add `fatal: true`)

Check the [official `createError` api docs](https://nuxt.com/docs/api/utils/create-error)

#### `useError`

A composable that returns the global Nuxt error, available on both client and server.

Check the [official `useError` api docs](https://nuxt.com/docs/api/composables/use-error/)

#### Clean errors

- Server-side: use `clearError`
- Client-side: reset the `error` ref from the `<NuxtErrorBoundary>` with `error.value = null` and, in some cases, navigate to a new route to avoid the error again using [`navigateTo`](https://nuxt.com/docs/api/utils/navigate-to). If you choose to navigate always do it before resetting `error`

#### Route validation

Route can handle errors via the `validate` method inside `definePageMeta`.

```js
definePageMeta({
  validate({ params }) {
    const myPage = null;
    if (!myPage) {
      return createError({
        statusCode: 404,
        message: 'My page is not found',
      });
    }
    return true;
  },
});
```

Check out the [official `definePageMeta` docs](https://nuxt.com/docs/api/utils/define-page-meta) where you can find `validate` defition.

### Route middlewares

Navigation guards that receive the current route _(from)_ and the next route _(to)_ as arguments, and that can be use to run code before navigating to a route.

Check out the [official route middleware docs](https://nuxt.com/docs/guide/directory-structure/middleware)

#### Inline

Defined in the pages where they are used.

```js
definePageMeta({
  middleware: function ({ params }, from) {
    const myPage = null;
    if (!myPage) {
      return abortNavigation(
        createError({
          statusCode: 404,
          message: 'My page is not found',
        })
      );
    }
  },
});
```

#### Named

Placed in the `middleware` folder, automatically loaded via async import when used on a page.

```js
definePageMeta({
  middleware: 'auth' // loads middleware/auth.ts
})
```

#### Global

Placed in the `middleware` folder with a .global suffix, automatically run on every route change. Example: `middleware/history.global.ts`

#### Helpers - Return options inside a middleware

1. navigateTo(): Redirects/navigates to the given route.
2. abortNavigation(): Aborts the navigation.

### Modules

- [Supabase Nuxt module](https://supabase.nuxtjs.org/)
