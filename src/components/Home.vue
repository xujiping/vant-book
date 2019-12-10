<template>
  <div>
    <van-search placeholder="请输入搜索关键词" v-model="value" background="#986724" />

    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(carousel, index) in carousels" :key="index">
        <van-image lazy-load :src="carousel.image">
          <img :lazy="carousel.image" alt="提示" />
        </van-image>
      </van-swipe-item>
    </van-swipe>
    <div class="books-panel">
      <van-row gutter="10">
        <van-col
          id="book-panel"
          span="8"
          v-for="(item, index) in books"
          :key="index"
          @click="toDetail"
        >
          <van-image id="book-image" :src="item.cover"></van-image>
          <p id="bookName">{{ item.bookName }}</p>
          <p id="bookAuthor">{{ item.gjAuthor.name }}</p>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import { httpCarouselPage, httpBooks } from "@/api/api";

export default {
  name: "Home",
  data() {
    return {
      carousels: [
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573916504237&di=d9365d6117ee594dd7cb53cfd7130f0d&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2Fw640h480%2F20180114%2Ff69c-fyqrewh9918851.jpg"
      ],
      books: [
        {
          bookName: "道德经",
          gjAuthor: {
            name: "李耳",
            biName: "老子"
          },
          cover:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1122844215,532756123&fm=26&gp=0.jpg"
        }
      ]
    };
  },
  created() {
    window.console.log("创建实例");
    this.getCarousels();
    this.getBooks();
  },
  methods: {
    getCarousels() {
      httpCarouselPage({
        subject: "gj_home"
      }).then(response => {
        window.console.log(
          "列表：" + JSON.stringify(response.data.data.records)
        );
        if (response.data.code === 0) {
          this.carousels = response.data.data.records;
        } else {
          this.$toast(response.data.msg);
        }
      });
    },
    getBooks() {
      httpBooks({
        page: 1,
        size: 10
      }).then(response => {
        if (response.data.code == 0) {
          this.books = response.data.data.records;
        } else {
          this.$toast(response.data.msg);
        }
      });
    },
    toDetail() {
      this.$router.push({ path: "/detail" });
    }
  }
};
</script>

<style scoped>
.books-panel {
  padding: 0 5px;
}

#book-panel {
  margin-top: 10px;
  background-color: #fff;
  text-align: center;
  padding: 10px 5px;
}

p {
  margin-block-start: 0;
  margin-block-end: 0;
}

#bookAuthor {
  color: #666;
  font-size: 12px;
}
</style>
