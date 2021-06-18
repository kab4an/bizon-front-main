<template>
  <div>
    <p class="title is-3" style="margin: 40px;">
      Ми спеціалізуємося на
    </p>

    <div class="columns" style="margin: 40px 0;">
      <div class="column" v-for="item in items[0]" :key="item.name">
        <div class="card" style="width: 350px;">
          <div class="card-image" style="width: 100%; display: flex;">
            <div
              :style="
                `height: 250px; width: 100%; background-image: url(${item.img}); background-size: cover;`
              "
            ></div>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="subtitle is-6">
                  {{ item.name }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="columns" style="margin: 40px 0;">
      <div class="column" v-for="item in items[1]" :key="item.name">
        <div class="card" style="width: 350px;">
          <div class="card-image" style="width: 100%; display: flex;">
            <div
              :style="
                `height: 250px; width: 100%; background-image: url(${item.img}); background-size: cover;`
              "
            ></div>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="subtitle is-6">
                  {{ item.name }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        [
          {
            name: "Зведення будівель",
            img:
              "https://megaobzor.com/uploads/stories/85492/63_sotsialnyy_gorodok_budet.jpg"
          },
          {
            name: "Керування проектами",
            img:
              "https://getsynapse.com/wp-content/uploads/2019/09/blueprint.jpg"
          },
          {
            name: "Устновка технологічного обладнання",
            img:
              "https://www.metobr-expo.ru/common/img/uploaded/articles/metobr/17034-1.jpg"
          }
        ],
        [
          {
            name: "Чистка річок",
            img:
              "https://uploads.ifdesign.de/award_img_342/oex_large/286703_01_342_286703_river_cleaner_1.jpg"
          },
          {
            name: "Буріння скважин",
            img:
              "https://aquatoria.kiev.ua/images/blog/%D0%A0%D0%B0%D0%B7%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D0%B5_%D0%BD%D0%B0_%D0%B1%D1%83%D1%80%D0%B5%D0%BD%D0%B8%D0%B5_%D1%81%D0%BA%D0%B2%D0%B0%D0%B6%D0%B8%D0%BD.jpg"
          },
          {
            name: "Реконструкція будівель",
            img:
              "data:image/jpeg;base64,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"
          }
        ]
      ]
    };
  }
};
</script>
