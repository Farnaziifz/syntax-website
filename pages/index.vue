<script setup lang="ts">
import FirstSection from '@/components/firstSection/index.vue'
import ServiceSection from '@/components/ServiceSection/index.vue'
import ContactSection from '@/components/contactSection/index.vue'
</script>
<template>
  <div class="h-full relative">
    <FirstSection />
    <ServiceSection />
    <ContactSection />
    <div
      class="h-[700px] w-full bg-gradiant absolute bottom-0 right-[-500px] z-[2]"
    ></div>
    <div class="h-[700px] w-full bg-gradiant-image absolute bottom-0 right-[-500px] z-[1]"></div>
  </div>
</template>

<style lang="scss" scoped>
.bg-gradiant {
  background: radial-gradient(
      circle,
      rgba(220, 202, 233, 0.5312718837535014) 0%,
      rgba(11, 2, 5, 1) 74%
    );

}
.bg-gradiant-image {
  background: url('../assets/images/bg-main.png');
}
</style>
