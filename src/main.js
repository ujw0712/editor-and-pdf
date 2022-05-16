import { createApp } from 'vue'
import App from '@/App.vue'
import { store } from '@/store'
import { router } from '@/router'

// toast
import toast from '@/plugins/toast'

// 전역 사용자 정의 디렉티브 v-click-outside 등록
import vClickOutside from "click-outside-vue3"

const app = createApp(App);

// socket io
import io from 'socket.io-client'
const socket = io(process.env.VUE_APP_API_URL)
app.provide('socket', socket)

// 메시지
import message from '@/plugins/message'
app.provide('msg', message)


app
  // 전역 사용자 정의 디렉티브 v-focus 등록
  .directive('focus', {
    mounted(el) {
      el.focus()
    }
  })

  .use(store)
  .use(router)
  .use(toast)
  .use(vClickOutside)

  .mount('#app');

// route v4.x changed (라우터가 많은 경우 로드가 완료 되는 시점에 앱이 활성화 되도록 처리)
// async () => await router.isReady()
