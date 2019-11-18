<template>
  <div>
    <van-row>
      <van-col span="24">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <van-image lazy-load :src="image">
              <img :lazy="image" alt="提示" />
            </van-image>
          </van-swipe-item>
        </van-swipe>
      </van-col>
    </van-row>
    <van-row gutter="10">
      <van-col
        id="book-panel"
        span="8"
        v-for="item in books"
        :key="item"
        @click="toDetail"
      >
        <van-image
          id="book-image"
          width="100"
          height="100"
          :src="item.image"
        ></van-image>
        <p id="bookName">{{ item.title }}</p>
        <p id="bookAvatar">{{ item.avatar }}</p>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      images: [
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573916504237&di=d9365d6117ee594dd7cb53cfd7130f0d&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2Fw640h480%2F20180114%2Ff69c-fyqrewh9918851.jpg"
      ],
      books: [
        {
          title: "道德经",
          avatar: "老子",
          image:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1122844215,532756123&fm=26&gp=0.jpg"
        },
        {
          title: "道德经",
          avatar: "老子",
          image:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1122844215,532756123&fm=26&gp=0.jpg"
        },
        {
          title: "道德经",
          avatar: "老子",
          image:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1122844215,532756123&fm=26&gp=0.jpg"
        },
        {
          title: "道德经",
          avatar: "老子",
          image:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1122844215,532756123&fm=26&gp=0.jpg"
        },
        {
          title: "道德经",
          avatar: "老子",
          image:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1122844215,532756123&fm=26&gp=0.jpg"
        },
        {
          title: "道德经",
          avatar: "老子",
          image:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1122844215,532756123&fm=26&gp=0.jpg"
        }
      ]
    };
  },
  methods: {
    toDetail() {
      this.$router.push({ path: "/detail" });
    }
  }
};
</script>

<style scoped>
#book-panel {
  margin-top: 10px;
}

p {
  margin-block-start: 0;
  margin-block-end: 0;
}

#bookAvatar {
  color: #666;
  font-size: 12px;
}
</style>
