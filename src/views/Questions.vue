<template>
    <div class="container">
        <section class="questions">
            <h2 class="title_h2">{{ title3 }}</h2>
                <div class="questions__items" >
                    <div class="questions__item" v-for="item in questions " v-bind:key="item.id">
                        <div class="questions__que" >
                            <div class="questions__question" @click="top = !top">
                                <p>{{item.question}}</p>
                            </div>
                            <div class="questions__btn" name="fade" >
                                <div class="questions__bottom" v-if="top" @click="top = !top"></div>
                                <div class="questions__top" v-else @click="top = !top"></div>
                            </div>
                        </div>
                        <transition name="fade" >
                            <div class="questions__answer" v-if="top" >
                                <p >{{item.answer}}</p>
                            </div>
                        </transition>  
                    </div> 
                </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'questions',
    data() {
        return {
            title3: 'Остались вопросы?',
            top: false,
            questions: [
                {
                    id: '1',
                    question: 'Какие отличия между Mavic 2 Pro и Mavic 2 Zoom?',
                    answer: 'В Mavic 2 улучшены практически все аспекты: камера, передача видеосигнала, полётное время, скорость, уровень шума, обнаружение препятствий в нескольких направлениях, интеллектуальные функции и уникальная функция Hyperlapse (гиперлапс).'
                },
                {
                    id: '2',
                    question: 'Чем Mavic 2 лучше Mavic Pro?  ',
                    answer: 'В Mavic 2 улучшены практически все аспекты: камера, передача видеосигнала, полётное время, скорость, уровень шума, обнаружение препятствий в нескольких направлениях, интеллектуальные функции и уникальная функция Hyperlapse (гиперлапс).'
                },
                {
                    id: '3',
                    question: 'Можно ли подключить Mavic 2 к очкам DJI Goggles?',
                    answer: 'В Mavic 2 улучшены практически все аспекты: камера, передача видеосигнала, полётное время, скорость, уровень шума, обнаружение препятствий в нескольких направлениях, интеллектуальные функции и уникальная функция Hyperlapse (гиперлапс).'
                },
                {
                    id: '4',
                    question: 'Является ли Mavic 2 водонепроницаемым？',
                    answer: 'В Mavic 2 улучшены практически все аспекты: камера, передача видеосигнала, полётное время, скорость, уровень шума, обнаружение препятствий в нескольких направлениях, интеллектуальные функции и уникальная функция Hyperlapse (гиперлапс).'
                }
            ]
        }
    }
}
</script>
<style lang="scss">
.questions {
    padding: 1em 0;
    @media (min-width: 75em) {
    padding-top: 5em;
    text-align: center;
    }
    &__items {
        max-width: 43em;
        padding: 2em 0;  
        margin: 0 auto;
    }
    &__que {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: rgba(81, 91, 71, 0.7);
        margin: 0 auto;
        max-width: 43em;
        margin-bottom: 0.5em;
        padding: 0.5em;
    } 
    &__question > p {
        word-break: break-all;
        hyphens: auto;
        line-break: strict;
    }
    &__btn {
        padding-left: 0.5em;
    }
    &__bottom {
        width: 0;
        height: 0;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-bottom: 15px solid  rgba(154, 205, 50, 0.7);
    }
    &__top {
        width: 0;
        height: 0;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-top: 15px solid  rgba(154, 205, 50, 0.7);
    }
    &__answer {
        max-width: 43em;
        margin-bottom: 0.5em;
        background-color: rgba(81, 91, 71, 0.7);
        padding: 0.5em;
    }

}
</style>

