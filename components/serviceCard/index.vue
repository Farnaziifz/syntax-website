<script setup lang="ts">
type cardProps = {
  title: string
  text: string
  gradiant: string
}

const props = defineProps<cardProps>()
</script>

<template>
  <div class="w-full border border-primary-light rounded-lg p-4 max-h-[700px] relative z-10">
    <slot name="icon" />
    <p class="text-primary-light text-xl font-bold mt-4">{{ props.title }}</p>
    <p class="mt-4 text-primary-light text-md">{{ props.text }}</p>
  </div>
</template>
