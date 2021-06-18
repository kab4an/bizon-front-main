<template>
  <div>
    <p class="title is-3" style="margin: 40px;">
      Усі заявки
    </p>

    <b-table
      :data="data"
      :columns="columns"
      :sticky-header="true"

    >

    </b-table>

  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      columns: [
        {
          field: "type",
          label: "Тип замовлення"
        },
        {
          field: "status",
          label: "Статус"
        },
        {
          field: "address",
          label: "Адреса"
        },
        {
          field: "user.name",
          label: "Ім'я клієнта"
        },
         {
          field: "user.surname",
          label: "Прізвище клієнта"
        },
        {
          field: "user.phone_number",
          label: "Номер клієнта"
        },
        {
          field: "date",
          label: "Дата"
        },
        {
          field: "createdAt",
          label: "Дата стоврення замовлення"
        }
      ]
    };
  },
  async created() {
    this.data = ((
      await this.$axios.$get("https://bizon-restapi.herokuapp.com/api/request")
    ).data);

  }
};
</script>
