<template>
    <div class="container">
        <section class="characteristics">
            <h2 class="title_h2">{{ title2 }}</h2>
            <div class="characteristics__block">
                <div class="characteristics__col1">
                    <div class="characteristics__item" v-for="item in characteristics " v-bind:key="item.id">
                        <h4>{{ item.data }}</h4>
                        <p>{{ item.description }}</p>
                    </div>
                </div>
                <div class="characteristics__col2">
                    <picture>
                        <source media="(min-width: 36em)" srcset="../assets/img/header/drone.png">
                        <img src="../assets/img/header/dronemobile.png" alt="drone">
                    </picture>
                </div>
                <div class="characteristics__col3" >
                    <div class="characteristics__item" v-for="item in characteristics2 " v-bind:key="item.id">
                        <h4>{{ item.data }}</h4>
                        <p>{{ item.description }}</p>
                    </div>
                </div>
            </div>
        </section>  
    </div>
    
</template>

<script>
export default {
    name: 'characteristics',
    data() {
        return {
            title2: 'Характеристики',
            characteristics: [
                {
                id: 1,
                data: 'Интеллектуальные режимы',
                description: 'Mavic 2 Pro поддерживает цветовой профиль Dlog-M 10 бит с более широким динамическим диапазоном, дающим больше возможностей для цветокоррекции.'
                },
                {
                id: 2,
                data: 'Камера Hasselblad',
                description: 'Mavic 2 Pro поддерживает цветовой профиль Dlog-M 10 бит с более широким динамическим диапазоном, дающим больше возможностей для цветокоррекции.'
                }
            ],
            characteristics2: [
                {
                id: 1,
                data: 'Матрица CMOS 1',
                description: 'Зона активной работы новой 1-дюймовой матрицы CMOS в четыре раза превышает показатели Mavic Pro'
                },
                {
                id: 2,
                data: 'Видео HDR',
                description: 'Благодаря поддержке видео 4K HDR 10 бит, Mavic 2 Pro можно подсоединить к совместимому с HLG 4K ТВ и просматривать запись в полном цветовом спектре'
                }
            ]
        }
    }
}
</script>

<style lang="scss">
.characteristics {
    padding: 2em 0;
    @media (min-width: 75em) {
    padding-top: 5em;
    }
    &__block {
        @media (min-width: 62em){
            display: flex;
            justify-content: space-between;
            align-items: center;
        } 
    }
    &__col1 {
        @media (min-width: 62em) {
            flex: 1 1 25%;
        }
        
    }
    &__col2 {
        @media (min-width: 62em) {
            flex: 1 1 50%;
        }
    }
    &__col3 {
        @media (min-width: 62em) {
            flex: 1 1 25%;
        }
    }
    &__item {
        margin-bottom: 2em;
        @media (min-width: 62em) {
            margin-bottom: 5em;
        }
    }
}
.col {
    margin-bottom: 5em;
}
</style>
