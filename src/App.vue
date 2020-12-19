<template>
    <div id="nav">
      <div class="nav__logo">
        <router-link to="/"><img src="@/assets/icons/loggray.svg"></router-link>
        
      </div>
      <div class="nav__menu">
        <router-link to="/" class="nav__left">MAVIC 2 PRO</router-link>
        <router-link to="/drone">О ДРОНЕ</router-link>
        <router-link to="/advantages">ПРЕИМУЩЕСТВА</router-link>
        <router-link to="/characteristics">ХАРАКТЕРИСТИКИ</router-link>
        <router-link to="/questions">ВОПРОСЫ</router-link>
        <router-link to="/contacts">КОНТАКТЫ</router-link>
      </div>
      <div class="nav__phone">
        <Button />
        <a href="tel:80505676767">8 (050) 567 67 67</a>
      </div>
  </div>
  <div class="mobile">
    <div class="mobile__menu">
        <div class="mobile__logo">
          <router-link to="/"><img src="@/assets/icons/loggray.svg"></router-link>
        </div>
        <Button />
        <div class="mobile__show" @click="show = !show">
          <div class=" mobile__btn"></div>
          <div class=" mobile__btn"></div>
          <div class=" mobile__btn"></div>
        </div>  
    </div>
    <transition name="fade" >
      <div class="mobile__nav" v-if="show" @click="show = false">
        <router-link to="/" class="mobile__link">MAVIC 2 PRO</router-link>
        <router-link to="/drone" class="mobile__link">О ДРОНЕ</router-link>
        <router-link to="/advantages" class="mobile__link">ПРЕИМУЩЕСТВА</router-link>
        <router-link to="/characteristics" class="mobile__link">ХАРАКТЕРИСТИКИ</router-link>
        <router-link to="/questions" class="mobile__link">ВОПРОСЫ</router-link>
        <router-link to="/contacts" class="mobile__link">КОНТАКТЫ</router-link>
      </div>
    </transition>
    
  </div>
  
  <router-view/>
  
</template>
<script>
import Button from  '@/components/Button.vue';


export default {
  name: 'Home',
  components: {
    Button,
    
  },
  data() {
    return {
      show: false
    }
  },
  props: {
    msg: Object
  }
}
</script>

<style lang="scss">
:root {
  --color: #fff;
  --paddingTop: 2em;
  --paddingTopMobile: 1.2em;
  --titleH2: 2.75em;
  --border: 0.2em solid #fff ;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  text-align: center;
  color: var(--color, #fff);
  background-image: url(assets/img/header/bgmobile.png);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  @media (min-width: 48em) {
    background-image: url(assets/img/header/bg2.png);
  }
  @media (min-width: 75em){
    text-align: start;
  }
}
.container {
  max-width: 33em;
  width: 80%;
  margin: 0 auto;
  padding: 0 1em;
  @media (min-width: 36em) {
    max-width: 33em;
  }
  @media (min-width: 48em) {
    max-width: 36em;
  }
  @media (min-width: 62em) {
    max-width: 50em;
  }
  @media (min-width: 75em) {
    max-width: 74em;
    
  }
}
a {
  font-weight: bold;
  text-decoration: none;
  color: inherit;
}
.title_h2 {
  @media (min-width: 36em) {
    font-size: 2em;
  }
  @media (min-width: 48em) {
    font-size: 2.2em;
  }
  @media (min-width: 62em) {
    font-size: 2.4em;
  }
  @media (min-width: 75em){
    font-size: var(--titleH2, 2.75em);
  }
  
}
.subtitle_h3 {
  font-size: 1.3em;
}
.frame {
  border: var(--border, 0.2em solid #fff );
}
.pt_75em {
  
}
#nav { 
  display: none;
  @media (min-width: 75em) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-top: var(--paddingTop, 2em);
  }
  a {
    padding-left: 1.56em;
  }
}
#nav a.router-link-exact-active {
  color: rgba(154, 205, 50, 0.9);
  
}
.nav__phone {
  display: flex;
  justify-content: center;
  align-items: center;
}
.mobile {
  padding-top: var(--paddingTopMobile, 1.2em);
  @media (min-width: 75em) {
    display: none;
  }
  &__menu {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  &__btn {
    width: 1.5em;
    height: 0.1em;
    background-color: var(--color, #fff);
    margin: 0.4em 0;
  }
  &__nav {
    display: flex;
    flex-direction: column;
    padding: 1em 0;
  }
  &__link {
    padding: 0.6em 0;
    background: linear-gradient(360deg,  rgba(154, 205, 50, 0.7),rgba(81, 91, 71, 0.7));
    &:hover {
      background: linear-gradient(360deg, #86f186, #42b983 );
    }
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
html {
  line-height: 1.3; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}
body {
  margin: 0;
}
main, article, footer, header, hgroup, menu, nav, section { 
    display: block;
}
h1 {
  font-size: 2em;
  margin: 0;
}
p, a {
  word-break: break-all;
  hyphens: auto;
  line-break: strict;
}
p {
  margin: 0.5em;
}
abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}
b,
strong {
  font-weight: bolder;
}
code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
img {
  border-style: none;
  max-width: 100%;
  height: auto;

}
button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}
button,
input { /* 1 */
  overflow: visible;
}
button,
select { /* 1 */
  text-transform: none;
}
button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}
fieldset {
  padding: 0.35em 0.75em 0.625em;
}
legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}
textarea {
  overflow: auto;
}
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */

[hidden] {
  display: none;
}
</style>
