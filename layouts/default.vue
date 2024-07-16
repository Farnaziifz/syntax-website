<template>
  <div class="bg-primary min-h-screen relative">
    <div class="fixed z-[100] py-5 w-full">
      <div class="container flex justify-between">
        <div class="flex">
          <a href="">
            <p class="text-primary-light mr-10">Home</p>
          </a>
          <a href="">
            <p class="text-primary-light mr-10">Our Services</p>
          </a>
          <a href="">
            <p class="text-primary-light mr-10">Contact Us</p>
          </a>
        </div>
        <div>
          <p class="text-white">logo</p>
        </div>
      </div>
    </div>
    <slot />
    <p>footer</p>
  </div>
</template>
