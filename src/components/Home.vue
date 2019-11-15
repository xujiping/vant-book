<template>
  <van-swipe :autoplay="3000">
    <van-swipe-item
      v-for="(image, index) in images"
      :key="index"
    >
      <img v-lazy="image">
    </van-swipe-item>
  </van-swipe>
  export default {
  data() {
  return {
  images: [
  'https://img.yzcdn.cn/vant/apple-1.jpg',
  'https://img.yzcdn.cn/vant/apple-2.jpg'
  ]
  }
  }
  }
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>
