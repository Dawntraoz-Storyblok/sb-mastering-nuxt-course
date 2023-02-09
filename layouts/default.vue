<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
        <NuxtLink to="/">

            <a class="btn btn-ghost normal-case hover:bg-base-300 text-xl">{{ appConfig.title }}</a>
        </NuxtLink>
    </div>
    <div class="flex-none">
      <ThemeSwitcher />
    </div>
  </div>
  <slot/>
</template>
<script setup>
const appConfig = useAppConfig()
</script>
