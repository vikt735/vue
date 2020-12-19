<template>
  <section class="home">
    <h1 class="home__title">{{ title }}</h1>
    <div class="home__img">
      <picture>
        <source media="(min-width: 36em)" srcset="../assets/img/header/drone.png">
        <img src="../assets/img/header/dronemobile.png" alt="drone">
      </picture>
    </div>
    <p class="home__text">{{ text }}</p>
    <p class="">{{ text2 }}</p>
    <p class="">{{ text3 }}</p>
    <div class="home__icons">
        <a href="https://4vision.ru/products/mavic-2-pro.html" class="home__link"><Facebook /></a>
        <a href="https://4vision.ru/products/mavic-2-pro.html" class="home__link"><Youtube /></a>
        <a href="https://4vision.ru/products/mavic-2-pro.html" class="home__link"><Instogram /></a>
    </div>
  </section>
</template>

<script>
import Facebook from '@/components/Facebook.vue';
import Youtube from '@/components/Youtube.vue';
import Instogram  from '@/components/Instogram.vue';
export default {
  name: 'Home',
  components: {
    Facebook,
    Youtube,
    Instogram
  },
  data() {
    return {
      title: 'Mavic 2 PRO',
      text: 'Квадрокоптер Dji Mavic 2 Pro',
      text2: 'с профессиональной камерой ',
      text3: 'Hasselblad'
    }

  }
  
}
</script>

<style lang="scss">
.home {
  padding: 1em 0.5em;
  @media (min-width: 75em) {
    text-align: center;
  }
  &__title {
    padding-top: 1em;
    @media (min-width: 48em) {
      font-size: 3em;
    }
    @media (min-width: 62em) {
      font-size: 6em;
    }
  }
  &__img {
    padding: 3em 0;
  }
  &__icons {
    padding: 1em 0;
  }
  &__link {
    padding: 0 1em;
  }
}
</style>

