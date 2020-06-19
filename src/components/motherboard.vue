<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="menu">
            <label for="name">Название</label>
            <input
              type="text"
              id="name"
              class="form-control"
              placeholder="Socket A12"
              v-model="name"
            />

            <label for="name">Гарантия</label>
            <input type="text" id="garant" class="form-control" placeholder="24" v-model="garant" />

            <label for="name">Стоимость</label>
            <input type="text" id="cost" class="form-control" placeholder="5600" v-model="cost" />

            <button class="btn btn-info" v-on:click="onSave()">Добавить</button>
          </div>
        </div>
        <div class="col">
          <div class="book">
            <h3>Материнские платы :</h3>

            <div class="row">
              <div class="col-2">id</div>
              <div class="col-3">Название</div>
              <div class="col-3">Гарантия</div>
              <div class="col-3">Цена</div>
            </div>
            <hr />

            <div class="list-group">
              <div class="row" v-for="motherboard in motherboards" :key="motherboard.id">
                <div class="col-2">{{ motherboard.id }}</div>
                <div class="col-3">{{ motherboard.name }}</div>
                <div class="col-3">{{ motherboard.garant }} мес.</div>
                <div class="col-3">{{ motherboard.cost }} рублей</div>

                <hr />
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
  name: "App",
  data() {
    return {
      motherboards: [],
      name: "",
      garant: "",
      cost: ""
    };
  },
  components: {},
  methods: {
    async onSave() {
      let motherboard = {
        name: this.name,
        garant: this.garant,
        cost: this.cost
      };
      try {
        await this.$http.post(
          "http://localhost:3000/motherboards",
          motherboard
        );
        this.updateData();
      } catch (err) {
        console.error(err);
      }
    },

    updateData() {
      try {
        this.$http
          .get("http://localhost:3000/motherboards")
          .then(res => res.json())
          .then(res => (this.motherboards = res));
      } catch (err) {
        console.error(err);
      }
    }
  },
  created() {
    this.updateData();
  }
};
</script>

<style>
.book {
  width: 100%;
  background-color: #f7d794;
}

.nav-pills > li > a {
  border-radius: 8px;
}
.nav-pills > li.active > a,
.nav-pills > li.active > a:hover,
.nav-pills > li.active > a:focus {
  color: #fff;
  background-color: #b8af3d;
}

@media screen and (max-width: 900px) {
  .attr {
    flex-direction: column;
  }
}
</style>

