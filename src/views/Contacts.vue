<template>
    <div class="container">
        <section class="contacts">
            <h2 class="title_h2">{{ title3 }}</h2>
            <div class="contacts__block">
                <div class="contacts__data">
                    <div class="contacts__item" v-for="item in contacts" v-bind:key="item.id">
                        <p class="contacts__sity">{{item.sity}}</p>
                        <a href="tel:" class="contacts__tel">{{item.tel}}</a>
                        <a href="email:" class="contacts__email">{{item.email}}</a>
                    </div>
                </div>
                <form action="">
                    <p class="contacts__question contacts__sity">{{question}}</p>
                    <p class="contacts__connection">{{connection}}</p>
                    <div class="contacts__enter">
                        <div class="contacts__box">
                            <div class="contacts__row"><input  type="text" placeholder="Ваше имя"></div>
                            <div class="contacts__row"><input type="text" placeholder="Ваш e-mail"></div> 
                        </div>
                        <div class=""><textarea name="" id="" placeholder="Что вас интересует?"></textarea></div>    
                    </div>
                    <button class="contacts__btn">{{enter}}</button>  
                </form>
                <div class="contacts__icons">
                    <a class="contacts__link" href="https://4vision.ru/products/mavic-2-pro.html" ><Facebook /></a>
                    <a class="contacts__link" href="https://4vision.ru/products/mavic-2-pro.html" ><Youtube /></a>
                    <a class="contacts__link" href="https://4vision.ru/products/mavic-2-pro.html" ><Instogram /></a>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Facebook from '@/components/Facebook.vue';
import Youtube from '@/components/Youtube.vue';
import Instogram  from '@/components/Instogram.vue';
export default {
    name: 'contacts',
    components: {
        Facebook, Youtube, Instogram
    },
    data() {
        return {
            enter: 'ОТПРАВИТЬ',
            title3: 'Контакты',
            question: 'Остались вопросы?',
            connection: 'Мы обязательно свяжемся с вами в течение двух рабочих дней',
            contacts: [
                {
                    sity: 'Киев',
                    tel: '+8 (050) 567– 67 – 67',
                    email: 'dgi.mavic2pro.kiev@mail.ru'
                },
                {
                    sity: 'Москва',
                    tel: '+7 (499) 567– 67 – 67',
                    email: 'dgi.mavic2pro.moscow@mail.ru'
                },
                {
                    sity: 'Минск',
                    tel: '+3 (7517) 567– 67 – 67',
                    email: 'dgi.mavic2pro.minsk@mail.ru'
                }
            ]

        }
    }
}
</script>

<style lang="scss">
.contacts {
    @media (min-width: 75em){
        padding-top: 5em;
    }
    &__block {
        @media (min-width: 75em) {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
    &__item {
        display: flex;
        flex-direction: column;
        @media (min-width: 48em) {    
        }
        a {
            padding: 0.2em 0;
        }
    }
    &__sity {
        font-size: 1.3em;
    }
    &__icons {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    &__link {
        margin: 0.5em 0;
    }
    &__enter {
        display: flex;
        flex-direction: column;
        margin-bottom: 1em; 
        @media (min-width: 62em) {
            max-width: 38em;
            margin: 0 auto;
            margin-bottom: 1.5em;
        }
    }
    &__box {
        @media (min-width: 62em) {
            display: flex;
            justify-content: space-between;
        }
    }
    &__btn {
        padding: 0.8em 1.75em;
        background: none;
        border: none;
        border: 0.0625em solid var(--color, #fff);
        color: var(--color, #fff);
        margin-bottom: 1em;
    }
}
input, textarea {
    background:rgba(81, 91, 71, 0.7);
    border: none;
    margin-top: 0.5em;
    padding: 1em 0.5em;
    color: var(--color, #fff);
    width: 11em;
    @media (min-width: 25em){
        width: 17.5em;
    }
}
textarea {
    height: 8em;
    resize: none;
    @media (min-width: 62em) {
        width: 37em;
        height: 13em;
    }
}
</style>
