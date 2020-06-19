<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-3">
          <header class="col-md-7">
            <nav class="sidebar-sticky bg-dark navbar-dark navbar-expand-md">
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto flex-column">
                  <li class="nav-item active">
                    <a href class="nav-link">Каталог машин</a>
                  </li>
                  <li class="nav-item">
                    <input @click="LoadAUDI" type="button" value="AUDI" />
                  </li>
                  <li class="nav-item">
                    <input @click="LoadMitsubishi" type="button" value="Mitsubishi" />
                  </li>
                  <li class="nav-item">
                    <input @click="LoadBMW" type="button" value="BMW" />
                  </li>
                </ul>
              </div>
            </nav>
          </header>
        </div>

        <div class="col-8">
          <div class="book">
            <h3>Автомобили :</h3>

            <div class="row">
              <!-- <div class="col-2">id</div> -->
              <div class="col-3">Название</div>
              <div class="col-3">Макс. скорость</div>
              <div class="col-3">Вес</div>
              <div class="col-3">Цена</div>
            </div>
            <hr />
            <div id="listaudi">
              <div class="row" v-for="audi in audi" :key="audi.id">
                <!-- <div class="col-2">{{ audi.id }}</div> -->
                <div class="col-3">{{ audi.name }}</div>
                <div class="col-3">{{ audi.maxSpeed }}</div>
                <div class="col-3">{{ audi.weigth }}</div>
                <div class="col-3">{{ audi.price }}</div>
              </div>
            </div>

            <div id="listmitsubishi">
              <div class="row" v-for="mitsubishi in mitsubishi" :key="mitsubishi.id">
                <!-- <div class="col-2">{{ mitsubishi.id }}</div> -->
                <div class="col-2">{{ mitsubishi.name }}</div>
                <div class="col-2">{{ mitsubishi.maxSpeed }}</div>
                <div class="col-3">{{ mitsubishi.weigth }}</div>
                <div class="col-3">{{ mitsubishi.price }}</div>
              </div>
            </div>

            <div id="listbmw">
              <div class="row" v-for="bmw in bmw" :key="bmw.id">
                <!-- <div class="col-2">{{ bmw.id }}</div> -->
                <div class="col-2">{{ bmw.name }}</div>
                <div class="col-2">{{ bmw.maxSpeed }}</div>
                <div class="col-3">{{ bmw.weigth }}</div>
                <div class="col-3">{{ bmw.price }}</div>
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
      deleteid: 1,
      id: "",
      name: "",
      maxSpeed: "",
      price: "",
      weigth: "",
      audi: [],
      mitsubishi: [],
      bmw: []
    };
  },
  components: {},
  methods: {
    LoadAUDI() {
      this.$http
        .get("http://localhost:3000/audi")
        .then(res => res.json())
        .then(res => (this.audi = res));
    },
    LoadMitsubishi() {
      this.$http
        .get("http://localhost:3000/mitsubishi")
        .then(res => res.json())
        .then(res => (this.audi = res));
      // .then(this.onDelete());
    },
    LoadBMW() {
      this.$http
        .get("http://localhost:3000/bmw")
        .then(res => res.json())
        .then(res => (this.audi = res));
    }
  },

  // async onDelete() {
  //   try {
  //     await this.$http.delete("http://localhost:3000/audi" + "/" + this.id);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // },

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