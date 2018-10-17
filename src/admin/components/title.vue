<template lang="pug">
  .title
    h2.title__text Панель администрирования
    a.title__link(href="#") Вернуться на сайт
</template>
<style lang="scss">
.title {
    background-color: #0548be;
    display: flex;
    justify-content: space-between;
    &__text {
      color: #fff;
      margin: 30px 30px;
    }
    &__link {
      color: #fff;
      background: transparent;
      opacity: 0.7;
      border: none;
      margin: 30px 30px;
      &:hover {
        opacity: 1;
        transition: 0.3s;
      }

    }
  }
</style>


