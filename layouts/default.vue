<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case hover:bg-base-200 text-xl">{{ appConfig.title }}</a>
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
