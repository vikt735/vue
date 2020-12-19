<template>
  <div class="container">
    <section class="advantages" >
      <h2 class="title_h2">{{advantages}}</h2>
      <div class="advantages__items">
        <div class="advantages__item" v-for="item in descriptions " v-bind:key="item.id">
          <div class="advantages__number"><span >{{ item.id}}</span></div>
        <div class="advantages__border frame">
          <img class="advantages__img" :src="item.src" alt="advantages">
        </div>
        <div class="advantages__text">
          <h3 class="subtitle_h3">{{ item.subTitle}}</h3>
          <p>{{ item.description}}</p>
        </div>
      </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'Advantages',
  props: {
    msg: String
  },
  data() {
    return {
        advantages: 'Преимущества',
        descriptions: [
          {
            id: 1,
            src: require('@/assets/img/advantages/item1.png'),
            subTitle: 'Интеллектуальные режимы',
            description: 'Mavic 2 унаследовал 6 стандартных режимов интеллектуальной съемки'
          },
          {
            id: 2,
            src: require('@/assets/img/advantages/item2.png'),
            subTitle: 'Active Track 2.0',
            description: 'Усовершенствованный режим второго поколения распознаёт и отслеживает объекты ещё точнее, быстрее и умнее.'
          },
          {
            id: 3,
            src: require('@/assets/img/advantages/item3.png'),
            subTitle: 'Панорамная съемка',
            description: 'Mavic 2 поддерживает 4 режима панорамной съёмки: сферическая, 180 градусов, горизонтальная, вертикальная'
          },
          {
            id: 4,
            src: require('@/assets/img/advantages/item2.png'),
            subTitle: 'Крутая камера!',
            description: 'Технология Hyperlapse в четырёх режимах исполнения. Улучшенный фото режим HDR Функция HyperLight для съёмки в условиях слабого освещения 4К съёмка'
          }
        ]
    }
  },
}
</script>

<style lang="scss">
.advantages {
  padding: 1em;
  @media (min-width: 75em) {
    padding-top: 5em;
    }
    &__items {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(12em, 1fr));
    gap: 1em;
    @media (min-width: 48em) {
      gap: 1em 2em;
    }
    @media (min-width: 62em) {
      grid-template-columns: 1fr 1fr;
    }
  }
  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media (min-width: 75em) {
      flex-direction: row;
      justify-content: space-around;
    }
  }
  &__number {
    margin-bottom: 0.5em;
    font-size: 2.25em;
    @media (min-width: 75em) {
      padding-top: 5em;
    }
  }
  &__border {
    max-width: 12em;
  }
  &__img {
    margin: 1em 0 -1em -2em;
  }
  &__text {
    letter-spacing: 1.2;
    max-width: 12em;
    
  }
}
</style>
