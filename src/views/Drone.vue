<template>
    <div class="container">
        <section class="drone">
            <div class="drone__descr">
                <h2 class="title_h2">{{ tit }}</h2>
                <p>{{ descr }}</p>
                <p>{{ descr2 }}</p>
            </div>
            <div class="drone__img">
                <div class="drone__sub">
                    <h3 class="drone__subtit">{{ sub }}</h3>
                </div>
                <div class="drone__block frame">
                    <img class="drone__images" src="@/assets/img/section/mavic-2.png" alt="mavic">
                </div>
            </div>
        </section>
    </div> 
</template>

<script>
export default {
    name: 'drone',
    data() {
        return {
            tit: 'Что такое Mavic 2 Pro?',
            descr: 'Дрон Mavic 2 Pro - это инженерное чудо, идеальное для аэросъемки. Дрон обладает всеми лучшими технологиями DJI, он преобразит мир аэросъемки.',
            descr2: 'Mavic 2 Pro оснащен совершенно новой камерой Hasselblad L1D-20c. Камера L1D-20c работает по уникальной технологии Hasselblad Natural Colour Solution (HNCS)5, позволяющей пользователям делать великолепные снимки с воздуха с разрешением в 20 мегапикселей и потрясающими цветами.',
            sub: 'Лучшая беспилотная технология аэросъемки',
        }
    }   
}
</script>

<style lang="scss">
.drone {
    padding: 1em 0 2em 0;
        @media (min-width: 75em) {
            padding: 5em 1em;
            display: flex;
        }
    &__descr {
        margin-bottom: 3em;
        @media (min-width: 36em) {
            max-width: 30em;
            margin: 0 auto;
        }
        @media (min-width: 75em){
            flex: 1 1 45%;   
        }
    } 
    &__img {
        @media (min-width: 36em) {
            max-width: 30em;
            margin: 0 auto;
        }
        @media (min-width: 75em){
            flex: 1 1 55%;
            display: flex;
            align-items: center;  
        }
    }
    &__sub {
        margin-bottom: 3em;
    }
    &__subtit {
        @media (min-width: 75em) {
            padding-top: 24em ;
            margin-right: -5em;
            z-index: 1;
            position: relative;
        }
    }
    &__block {
        border: 0.2em solid var(--color, #fff );
        @media (min-width: 75em){
            max-height: 13em;
        }
        &:hover {
            transform: scale(1.1);
            transition: ease-in 0.8s;
        }
    }
    &__images {
        margin: 1em 0 -1em -2em;
        @media (min-width: 75em) {
            margin: 1em 0 -2em -3em;
        }  
    }
}
</style>