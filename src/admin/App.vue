<template lang="pug">  
  .div
    appTitle
    .tabs
      a.tab-link(href="#") Обо мне
      a.tab-link(href="#") Блог
      a.tab-link(href="#") Мои работы
    .content-admin
      skills(
        :skills="skills"
      )
</template>

<script>
import appTitle from "./components/title";
import skills from "./components/skills";
import appAbout from "./components/about";
export default {
  components: {
      appTitle,
      skills,
      appAbout},
    data() {
      return {
        skills:data
      }
    }
  };
const data = [
  {id:1, title: "HTML", percent: 40, category:0},
  {id:2, title: "CSS3", percent: 35, category:0},
  {id:3, title: "javaScript & jQuery", percent: 10, category:0},
  {id:4, title: "Php", percent: 0, category:1},
  {id:5, title: "mySql", percent: 10, category:1},
  {id:6, title: "Node.js & npm", percent: 20, category:1},
  {id:7, title: "Mongo.db", percent: 5, category:1},
  {id:8, title: "Git", percent: 60, category:2},
  {id:9, title: "Gulp", percent: 50, category:2},
  {id:10, title: "Yarn", percent: 55, category:2}
];
</script>
<style lang="scss">
body {
  padding: 0;
  margin: 0;
}
.div {
  margin: 0 auto;
  height: 100vh;
  background: url(../assets/images/bg/hero.jpg) center center / cover no-repeat;
  width: 100%;
  position: relative;
  z-index: 1;
  &:after {
    background-color: #fff;
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    opacity: 0.85;
    z-index: -1;
  }
}
.tabs {
  height: 60px;
  width: 100%;
  background-color:#f0efe9;
  display: flex;
  
  
}
.tab-link {
  color:#696c74;
  text-decoration: none;
  /* padding: 0px 30px; */
  height: 100%;
  width: 14%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 2px solid #fff;

  &:hover {
    background-color: #fff;
    color:#0548be;
    transition: 0.3s;
  }
}
</style>
