<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="menu">
            <label for="name">Фамилия</label>
            <input
              type="text"
              id="surname"
              class="form-control"
              placeholder="Марков"
              v-model="surname"
            />

            <label for="name">Имя</label>
            <input type="text" id="name" class="form-control" placeholder="Даниил" v-model="name" />

            <label for="name">Отчество</label>
            <input
              type="text"
              id="patronymic"
              class="form-control"
              placeholder="Андреевич"
              v-model="patronymic"
            />

            <label for="name">Отдел</label>
            <select id="otdel" class="form-control" v-model="otdel">
              <option selected>IT отдел</option>
              <option>Отдел продаж</option>
              <option>Отдел доставки</option>
              <option>Юридический отдел</option>
            </select>

            <button class="btn btn-info" v-on:click="onSave()">Добавить</button>
          </div>

          <div class="delete">
            <label for="name">id</label>
            <input type="text" id="deleteid" class="form-control" v-model="deleteid" />
            <button class="btn btn-outline-warning" @click="onDelete()">Удалить элемент по id</button>
          </div>

          <div class="change">
            <label for="id">id</label>
            <input
              type="text"
              id="changeid"
              class="form-control"
              placeholder="2"
              v-model="changeid"
            />

            <label for="surname">Фамилия</label>
            <input
              type="text"
              id="changesurname"
              class="form-control"
              placeholder="Шолохов"
              v-model="changesurname"
            />

            <label for="name">Имя</label>
            <input
              type="text"
              id="changename"
              class="form-control"
              placeholder="Григорий"
              v-model="changename"
            />

            <label for="patronymic">Отчество</label>
            <input
              type="text"
              id="changepatronymic"
              class="form-control"
              placeholder="Денисович"
              v-model="changepatronymic"
            />

            <select
              id="changeotdel"
              class="form-control"
              placeholder="Отдел продаж"
              v-model="changeotdel"
            >
              <option>IT отдел</option>
              <option>Отдел продаж</option>
              <option>Отдел доставки</option>
              <option>Юридический отдел</option>
            </select>

            <button class="btn btn-outline-info" @click="onChange()">Изменить элемент по id</button>
          </div>
        </div>
        <div class="col-8">
          <div class="book">
            <h3>Сотрудники :</h3>

            <div class="row">
              <div class="col-1">id</div>
              <div class="col-3">Фамилия</div>
              <div class="col-2">Имя</div>
              <div class="col-3">Отчество</div>
              <div class="col-3">Отдел</div>
            </div>
            <hr />

            <div class="list-group">
              <div class="row" v-for="worker in workers" :key="worker.id">
                <div class="col-1">{{ worker.id }}</div>
                <div class="col-3">{{ worker.surname }}</div>
                <div class="col-2">{{ worker.name }}</div>
                <div class="col-3">{{ worker.patronymic }}</div>
                <div class="col-3">{{ worker.otdel }}</div>

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
      workers: [],
      name: "",
      surname: "",
      patronymic: "",
      otdel: ""
    };
  },
  components: {},
  methods: {
    async onSave() {
      let worker = {
        name: this.name,
        surname: this.surname,
        patronymic: this.patronymic,
        otdel: this.otdel
      };
      try {
        await this.$http.post("http://localhost:3000/workers", worker);
        this.updateData();
      } catch (err) {
        console.error(err);
      }
    },

    async onDelete() {
      try {
        await this.$http.delete(
          "http://localhost:3000/workers" + "/" + this.deleteid
        );
        this.updateData();
      } catch (err) {
        console.error(err);
      }
    },

    async onChange() {
      let note = {
        id: this.changeid,
        name: this.changename,
        surname: this.changesurname,
        patronymic: this.changepatronymic,
        otdel: this.changeotdel
      };
      try {
        await this.$http.put(
          "http://localhost:3000/workers" + "/" + this.changeid,
          note
        );
        this.updateData();
      } catch (err) {
        console.error(err);
      }
    },

    updateData() {
      try {
        this.$http
          .get("http://localhost:3000/workers")
          .then(res => res.json())
          .then(res => (this.workers = res));
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
  width: 130%;
  background-color: #f7d794;
}
</style>
