<script setup>
defineProps({
  error: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <div>
    <h1>500 error</h1>
    <p>{{ error }}</p>
  </div>
</template>
