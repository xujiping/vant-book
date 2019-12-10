<template>
  <div class="detail">
    <van-row class="book">
      <van-col span="8" class="left">
        <van-image fit="full" :src="book.image" />
      </van-col>
      <van-col span="16">
        <p>{{ book.name }}</p>
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
export default {
  name: "Detail",
  props: {
    msg: String
  },
  data() {
    return {
      book: {
        name: "道德经",
        author: "老子（李耳）",
        intro:
          "《道德经》，春秋时期老子（李耳）的哲学作品，又称《道德真经》、《老子》、《五千言》、《老子五千文》，是中国古代先秦诸子分家前的一部著作，是道家哲学思想的重要来源。道德经分上下两篇，原文上篇《德经》、下篇《道经》，不分章，后改为《道经》37章在前，第38章之后为《德经》，并分为81章。《道德经》文本以哲学意义之“道德”为纲宗，论述修身、治国、用兵、养生之道，而多以政治为旨归，乃所谓“内圣外王”之学，文意深奥，包涵广博，被誉为万经之王。 [1-2]《道德经》是中国历史上最伟大的名著之一，对传统哲学、科学、政治、宗教等产生了深刻影响 [3]  。据联合国教科文组织统计，《道德经》是除了《圣经》以外被译成外国文字发布量最多的文化名著。",
        image:
          "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1122844215,532756123&fm=26&gp=0.jpg"
      }
    };
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
