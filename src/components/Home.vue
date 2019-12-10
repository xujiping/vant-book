<template>
  <div>
    <van-search
      placeholder="请输入搜索关键词"
      v-model="value"
      background="#986724"
    />

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
          @click="toDetail(item.id)"
        >
          <van-image id="book-image" :src="item.cover"></van-image>
          <p id="bookName">{{ item.bookName }}</p>
          <p id="bookAuthor">{{ authorList[item.authorId - 1].name }}</p>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import { carouselList, books } from "@/data/book";
import { authorList } from "@/data/author";

export default {
  name: "Home",
  data() {
    return {
      carousels: carouselList,
      books: books,
      authorList: authorList
    };
  },
  created() {
    window.console.log("首页");
  },
  methods: {
    toDetail(id) {
      this.$router.push({ path: "/detail", query: { bookId: id } });
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
