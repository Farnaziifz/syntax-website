import Vue3Toastify, { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3Toastify, {
    autoClose: 5000,
    toastStyle: {
      FontFace: 'dana-demi',
    },
    position: toast.POSITION.TOP_CENTER,
    toastClassName: 'font-tost'
  })

  return {
    provide: { toast },
  }
})
