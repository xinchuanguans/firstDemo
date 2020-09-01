<template>
  <swiper :options="swiperOption" ref="mySwiper" class="rotation">
    <swiper-slide>001</swiper-slide>
    <swiper-slide>002</swiper-slide>
    <swiper-slide>003</swiper-slide>
    <swiper-slide>004</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev" @click="prev"></div>
    <div class="swiper-button-next" slot="button-next" @click="next"></div>
  </swiper>
</template>

<script>

import {Swiper,SwiperSlide} from 'vue-awesome-swiper'
export  default {
  data(){
    return{
    swiperOption:{
      loop:true,

      pagination:{
        el:".swiper-pagination",
        type:'bullets',
        // clickable:true
      },
      slidesPerView:1,
      speed:500,
      autoplay:{
        delay:3000,
        disableOnInteraction:false,
        stopOnLastSlide:false,

      },
      navigation:{
        prevEl:'.swiper-button-prev',
        nextEl:'.swiper-button-next'
      }
    }
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods:{
    prev(){
      this.$refs.mySwiper.$swiper.slidePrev()
    },
    next(){
      this.$refs.mySwiper.$swiper.slideNext()
    }
  }
}
</script>

