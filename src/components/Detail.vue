<template>
  <div class="detail">
    <van-row class="book">
      <van-col span="8" class="left">
        <van-image fit="full" :src="book.cover" />
      </van-col>
      <van-col span="16">
        <p>{{ book.bookName }}</p>
        <p>{{ book.gjAuthor.name }}</p>
      </van-col>
    </van-row>
    <van-row class="intro">
      <van-col span="24">
        <div v-html="book.bookIntroduce"></div>
      </van-col>
    </van-row>
    <van-row class="download">
      <van-button type="primary" size="large" round="true">TXT下载</van-button>
    </van-row>
  </div>
</template>

<script>
import { httpBookInfo } from "@/api/api";


export default {
  name: "Detail",
  props: {
    msg: String
  },
  data() {
    return {
      book: {}
    };
  },
  created(){
    this.getBookInfo()
  },
  methods: {
    getBookInfo(){
      const that = this;
      window.console.log('bookId=' + this.$route.query.bookId)
      httpBookInfo(this.$route.query.bookId).then(response => {
        if (response.data.code == 0) {
          that.book = response.data.data;
        } else {
          that.$toast(response.data.msg);
        }
      })
    }
  }
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
