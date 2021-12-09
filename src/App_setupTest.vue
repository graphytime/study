<template>
  <div>
    <MyBtn
      class="heropy"
      style="color: red"
      color="#ff0000"
      @hello="log"
    >
      Apple
    </MyBtn>
  </div>
</template>

<script>
import MyBtn from '~/components/MyBtn'

export default {
  components: {
    MyBtn
  },
  data() {
    return {
      message: 'Hello Vue!'
    }
  },
  methods: {
    log() {
      console.log('test message')
    }
  }
}

  // import { ref, computed, watch, onMounted } from 'vue'

  // export default {
  //   setup() {
  //     // setup 자체가 created 임
  //     const count = ref(0)
  //     const doubleCount = computed(() => {
  //       return count.value * 2
  //     })
  //     function increase() {
  //       count.value +=1
  //     }

  //     const message = ref('에휴')
  //     const reversedMessage = computed(() => {
  //       return message.value.split('').reverse().join('')
  //     })
  //     watch(message, newValue => {
  //         console.log(newValue)
  //       })
  //     function changeMessage() {
  //       message.value = "Good!"
  //     }

  //     console.log(message.value) // created에서 하고 싶은걸 넣어요

  //     onMounted(() => {
  //       console.log(count.value)
  //     })

  //     return {
  //       count,
  //       doubleCount,
  //       increase,
  //       message,
  //       reversedMessage,
  //       changeMessage
  //     }
  //   }
  // }
</script>
