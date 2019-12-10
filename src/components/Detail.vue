<template>
  <div class="detail">
    <van-row class="book">
      <van-col span="8" class="left">
        <van-image fit="full" :src="book.cover" />
      </van-col>
      <van-col span="16">
        <p>{{ book.bookName }}</p>
        <p>{{ book.author }}</p>
      </van-col>
    </van-row>
    <van-row class="intro">
      <van-col span="24">
        <div v-html="book.intro"></div>
      </van-col>
    </van-row>
    <van-row class="download">
      <van-button type="primary" size="large" round="true">TXT下载</van-button>
    </van-row>
  </div>
</template>

<script>
import { books } from "@/data/book";

export default {
  name: "Detail",
  props: {
    msg: String
  },
  data() {
    return {
      book: books[this.$route.query.bookId - 1]
    };
  },
  created() {
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  text-align: left;
}

.book {
  padding: 20px 10px;
  background-color: #fff;
  margin-bottom: 10px;
}

.intro {
  padding: 20px 10px;
  background-color: #fff;
  margin-top: 20px;
}

.download {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #fff;
  padding: 5px 0;
}
</style>
