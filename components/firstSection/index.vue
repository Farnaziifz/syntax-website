<template>
  <div
    class="main-section h-screen relative flex justify-end items-center flex-col"
  >
    <div class="w-full h-full first-shadow absolute bottom-0"></div>
    <div class="z-[101] text-center mb-[150px]">
      <h1 class="text-[70px] text-primary-light z-[101] font-bolder">
        We Turn Your Idea Into Reality
      </h1>
      <p class="text-sec-gray text-md font-bold z-[101] mt-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      </p>
      <button class="px-10 py-3 bg-primary-light rounded-lg z-[101] mt-5">
        Get Start
      </button>
    </div>
    <div class="sec-shadow absolute bottom-0 w-full h-[100px] z-[100]"></div>
  </div>
</template>

<style lang="scss" scoped>
.main-section {
  background-image: url('../../assets/images/bg-main.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  .first-shadow {
    background: linear-gradient(
      0deg,
      rgba(11, 2, 5, 1) 50%,
      rgba(11, 2, 5, 0.5239889705882353) 100%
    );
  }
  .sec-shadow {
    background: linear-gradient(
      0deg,
      rgba(11, 2, 5, 1) 32%,
      rgba(220, 202, 233, 0.1) 58%,
      rgba(11, 2, 5, 0.9206276260504201) 68%
    );
  }
}
</style>