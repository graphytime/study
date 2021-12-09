<template>
  <div>
    <!-- <HelloWorld
      :msg="message"
      @click="handler" />
    <HelloWorld msg="Good" /> -->

    <h1 @click="increase"> {{ count }} / {{ doubleCount }}</h1>
    <h1 @click="changeMessage"> {{ message }} // {{ reversedMessage }} </h1>
  </div>
</template>

<script>
// import HelloWorld from '~/components/HelloWorld'

// export default {
//   components: {
//     HelloWorld
//   },
//   data() {
//     return {
//       message: 'Hello Vue!'
//     }
//   },
//   methods: {
//     handler() {
//       console.log(this.message)
//       this.message += '!'
//     }
//   }
// }

  import { ref, computed, watch, onMounted } from 'vue'

  export default {
    setup() {
      // setup 자체가 created 임
      const count = ref(0)
      const doubleCount = computed(() => {
        return count.value * 2
      })
      function increase() {
        count.value +=1
      }

      const message = ref('에휴')
      const reversedMessage = computed(() => {
        return message.value.split('').reverse().join('')
      })
      watch(message, newValue => {
          console.log(newValue)
        })
      function changeMessage() {
        message.value = "Good!"
      }

      console.log(message.value) // created에서 하고 싶은걸 넣어요

      onMounted(() => {
        console.log(count.value)
      })

      return {
        count,
        doubleCount,
        increase,
        message,
        reversedMessage,
        changeMessage
      }
    }
  }
</script>
