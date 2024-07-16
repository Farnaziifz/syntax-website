<script setup lang="ts">
import ServiceCard from '@/components/serviceCard/index.vue'
</script>

<template>
  <div>
    <h2 class="text-center text-primary-light text-[32px]">Our Services</h2>
    <div class="container mt-10">
      <div class="grid grid-cols-3 gap-4">
        <ServiceCard title="DevOps" text="lorem" gradiant="test">
          <template v-slot:icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 20 20"
            >
              <path
                fill="#DCCAE9"
                d="m22 18l-5 4l-8-3v3l-4.19-5.75l12.91 1.05V6.34L22 5.65zM4.81 16.25V8.96l12.91-2.62L10.6 2v2.84L3.97 6.76L2 9.38v5.69z"
              />
            </svg>
          </template>
        </ServiceCard>
        <ServiceCard title="DevOps" text="lorem" icon="devpops" gradiant="test">
          <template v-slot:icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 20 20"
            >
              <path
                fill="#DCCAE9"
                d="m22 18l-5 4l-8-3v3l-4.19-5.75l12.91 1.05V6.34L22 5.65zM4.81 16.25V8.96l12.91-2.62L10.6 2v2.84L3.97 6.76L2 9.38v5.69z"
              />
            </svg> </template
        ></ServiceCard>
        <ServiceCard title="DevOps" text="lorem" icon="devpops" gradiant="test">
          <template v-slot:icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 20 20"
            >
              <path
                fill="#DCCAE9"
                d="m22 18l-5 4l-8-3v3l-4.19-5.75l12.91 1.05V6.34L22 5.65zM4.81 16.25V8.96l12.91-2.62L10.6 2v2.84L3.97 6.76L2 9.38v5.69z"
              />
            </svg> </template
        ></ServiceCard>
        <ServiceCard title="DevOps" text="lorem" icon="devpops" gradiant="test">
          <template v-slot:icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 20 20"
            >
              <path
                fill="#DCCAE9"
                d="m22 18l-5 4l-8-3v3l-4.19-5.75l12.91 1.05V6.34L22 5.65zM4.81 16.25V8.96l12.91-2.62L10.6 2v2.84L3.97 6.76L2 9.38v5.69z"
              />
            </svg>
          </template>
        </ServiceCard>
        <ServiceCard title="DevOps" text="lorem" icon="devpops" gradiant="test">
          <template v-slot:icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 20 20"
            >
              <path
                fill="#DCCAE9"
                d="m22 18l-5 4l-8-3v3l-4.19-5.75l12.91 1.05V6.34L22 5.65zM4.81 16.25V8.96l12.91-2.62L10.6 2v2.84L3.97 6.76L2 9.38v5.69z"
              />
            </svg>
          </template>
        </ServiceCard>
        <ServiceCard title="DevOps" text="lorem" icon="devpops" gradiant="test">
          <template v-slot:icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 20 20"
            >
              <path
                fill="#DCCAE9"
                d="m22 18l-5 4l-8-3v3l-4.19-5.75l12.91 1.05V6.34L22 5.65zM4.81 16.25V8.96l12.91-2.62L10.6 2v2.84L3.97 6.76L2 9.38v5.69z"
              />
            </svg>
          </template>
        </ServiceCard>
      </div>
    </div>
  </div>
</template>
