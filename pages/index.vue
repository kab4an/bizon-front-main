<template>
  <section class="section">
    <b-carousel>
        <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
            <section :class="`hero is-medium`" >
            
                <div class="card">
                    <div class="card-image" :style="`background-image: url(${carousel.img}); background-size: cover; height: 300px; background-position: center;`">
                    </div>
                    <div class="card-content title">
                        {{ carousel.text }}
                    </div>
            </div>
            </section>
        </b-carousel-item>
    </b-carousel>

    <section class="section">Полтава, вул. Гоголя 22-а офіс 118<br>
        телефон: +38-095-452-86-99</section>
            <nuxt-link
              
              :to="{name: 'about'}"
              exact-active-class="is-active"
              class="is-primary"
            >
               <b-button type="is-primary"> Про нас </b-button>
            </nuxt-link>
    
  </section>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'HomePage',

  components: {
    Card
  },
  data(){
        return {
            carousels: [
                { text: 'Будівництво інженерної інфораструктури', color: 'primary', img: "http://ic.pics.livejournal.com/newislamru/37355234/382746/382746_original.jpg" },
                { text: 'Монтаж зовнішніх інженерних споруд', color: 'primary', img: "https://worldscholarshipforum.com/wp-content/uploads/2021/01/civil-engineering-technician.png" },
                { text: 'Будівельно-монтажні роботи', color: 'primary', img: "https://st37.domofond.ru/image/1/tAzesba2vORq8ggvY8D_frpZGuVuEPr1oBka" },
            ]
        }
    },
    methods: {
        getImgUrl(value) {
            value += 50
            return `https://picsum.photos/id/10${value}/1230/500`
        },
        switchGallery(value) {
            this.gallery = value
            if (value) {
                return document.documentElement.classList.add('is-clipped')
            } else {
                return document.documentElement.classList.remove('is-clipped')
            }
        }
    }

}
</script>
