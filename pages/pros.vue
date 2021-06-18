<template>
    <section>
    <p class="title is-3" style="margin: 40px;">Чому користувачі обирають нас</p>
    <div class="columns" style="margin: 100px 0;">
        <div class="column">
            <div class="card" style="width: 250px;">
                <div class="card-image"  style="width: 100%; display: flex;"> 
                    <b-icon :type="{ 'is-success': isGreen }" icon="clock"  style="margin: 10px auto;" size="is-medium"></b-icon>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-5" style="margin-bottom: 40px;">Пунктуальність</p>
                            <p class="subtitle is-6">Наші робітники завжди виконують змовлення вчасно</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="column">
            <div class="card" style="width: 250px;">
                <div class="card-image"  style="width: 100%; display: flex;">
                    <b-icon :type="{ 'is-success': isGreen }" icon="account"  style="margin: 10px auto;" size="is-medium"></b-icon>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-5" style="margin-bottom: 40px;">Ввічливість</p>
                            <p class="subtitle is-6">Для нашої компанії діє правило "клієнт завжди правий"!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="column">
            <div class="card" style="width: 250px;">
                <div class="card-image" style="width: 100%; display: flex;">
                    <b-icon :type="{ 'is-success': isGreen }" icon="star" style="margin: 10px auto;" size="is-medium"></b-icon>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-5" style="margin-bottom: 40px;">Якість</p>
                            <p class="subtitle is-6">Наші клієнти в 90% випадків рекомендують наші послуги</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <nuxt-link
              
              :to="{name: 'spec'}"
              exact-active-class="is-active"
              class="is-primary"
  
            >
               <b-button type="is-primary">Наша спеціалізація </b-button>
            </nuxt-link>
    </section>
</template>

<script>
export default {
    
}
</script>