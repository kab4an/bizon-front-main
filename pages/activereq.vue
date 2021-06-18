<template>
  <div>
    <p class="title is-3" style="margin: 40px;">
      Активні заявки
    </p>

    <b-table
      :data="data"
      :columns="columns"
      :sticky-header="true"
      checkable
      :checked-rows.sync="checkedRows"
    >
      <template slot="actions" slot-scope="row">
        <b-button> Edit </b-button>
        <b-button> Delete </b-button>
      </template>
    </b-table>

    <div class="buttons" style="margin-top: 20px;">
      <b-button type="is-success" @click="approve">Підтвердити обране</b-button>
      <b-button type="is-danger" @click="reject">Відхилити обране</b-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkedRows: [],
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
    let raw = ((
      await this.$axios.$get("https://bizon-restapi.herokuapp.com/api/request")
    ).data);

    this.data = raw.filter((item) => item.status == "CREATED");
  },
  methods: {
    async approve() {
      for (let itm of this.checkedRows) {
        this.$axios.$post("https://bizon-restapi.herokuapp.com/api/request/status", {
          id: itm._id,
          status: "CONFIRMED"
        })
        this.data = this.data.filter((item) => item._id != itm._id)
      }
    },
    async reject() {
      for (let itm of this.checkedRows) {
        this.$axios.$post("https://bizon-restapi.herokuapp.com/api/request/status", {
          id: itm._id,
          status: "REJECTED"
        })
        this.data = this.data.filter((item) => item._id != itm._id)
      }
    }
  }
};
</script>
