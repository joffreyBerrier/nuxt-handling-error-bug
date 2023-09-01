<script setup>
import Error404 from "./components/Error/Error404.vue";
import Error500 from "./components/Error/Error500.vue";

const props = defineProps({
  error: {
    type: Object,
    default: () => ({}),
  },
});

const errorPage = computed(() => {
  if (props.error?.statusCode === 404) {
    return Error404;
  }

  return Error500;
});
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <component :is="errorPage" :error="error" />
  </div>
</template>
