<template>
  <div
    v-bind="$attrs"
    class="btn"
    @click="hello"
    >
    <!--v-bind="$attrs" : 모든 요소 상속 -->
    <slot></slot>
  </div>
</template>
<script>
import { onMounted } from 'vue'

export default {
  inheritAttrs: false,
  props: {
    color: {
      type: String,
      default: 'gray'
    }
  },
  setup(props, context) {
    function hello() {
      context.emit('hello')
    }
    onMounted(() => {
      console.log(props.color)
      console.log(context.attrs)
    })

    return {
      hello
    }
  }
}
</script>