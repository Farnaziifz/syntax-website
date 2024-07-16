<template>
  <div class="max-w-md mx-auto bg-black rounded-lg shadow-md p-6 text-white mt-10 relative z-10">
    <h2 class="text-center text-xl font-bold mb-6">
      If You want to change your business and lub lib lub, submit your request
      here:
    </h2>
    <form>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          type="text"
          placeholder="Your name"
          class="col-span-1 bg-gray-800 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
        <input
          type="text"
          placeholder="Phone number"
          class="col-span-1 bg-gray-800 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
        <input
          type="email"
          placeholder="Email Address"
          class="col-span-1 bg-gray-800 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
        <input
          type="text"
          placeholder="What you need?"
          class="col-span-1 bg-gray-800 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
      </div>
      <button
        type="submit"
        class="mt-6 w-full bg-gradient-to-r from-purple-600 to-purple-400 text-black rounded-lg p-3 hover:from-purple-700 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
      >
        Submit
      </button>
    </form>
  </div>
</template>
