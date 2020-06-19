<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <p class="logo_descp">
          <a href="#" class="navbar-brand main-logo">
            <picture>
              <source srcset="./img/logo2.png" alt="Лого" class="logo_h" media="(max-width: 960px)" />
              <img src="./img/logo.png" class="logo_h" alt="Лого" />
            </picture>
          </a>
        </p>

        <router-link class="navbar-brand" to="/mainp">Марков, Вариант 10</router-link>
        <button class="navbar=toggler" data-toggle="collapse" data-targer="#navBarNavM">
          <span
            class="navbar-toggler-icon"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <router-link class="nav-item nav-link dropdown-item" to="/mainp">Главная</router-link>

              <router-link class="nav-item nav-link dropdown-item" to="/worker">Сотрудники</router-link>

              <router-link
                class="nav-item nav-link dropdown-item"
                to="/motherboard"
              >Материнские платы</router-link>
              <router-link class="nav-item nav-link dropdown-item" to="/car">Каталог автомобилей</router-link>
            </div>
          </span>
        </button>
        <div class="collapse navbar-collapse" id="#navBarNavM">
          <div class="navbar-nav">
            <router-link class="nav-item nav-link" to="/mainp">Главная</router-link>
            <router-link class="nav-item nav-link" to="/worker">Сотрудники</router-link>
            <router-link class="nav-item nav-link" to="/motherboard">Материнские платы</router-link>
            <router-link class="nav-item nav-link" to="/car">Каталог автомобилей</router-link>
          </div>
        </div>
      </nav>
    </header>

    <main>
      <div class="container">
        <router-view></router-view>
      </div>
    </main>

    <footer class="blue">
      <div>
        <h4>Автор работы:</h4>
        <p>ФИО: Марков Даниил Андреевич</p>
        <p>Группа: 181-361</p>
        <p>Дата создания: 22.06.2020</p>
      </div>

      <div class="col">
        <h4>Список источников:</h4>
        <div class="row">
          <a href="http://help-ru.tilda.ws/fontsgoogle" target="_blank">Подключение шрифтов</a>
        </div>
        <div class="row">
          <a
            href="https://ru.vuejs.org/v2/guide/installation.html"
            target="_blank"
          >Подключение Vue.js к проекту</a>
        </div>
        <div class="row">
          <a href="https://router.vuejs.org/ru/" target="_blank">Vue Router библиотека</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
<script>
import Mainp from "./components/mainp.vue";
import Worker from "./components/worker.vue";
import Motherboard from "./components/motherboard.vue";
import Car from "./components/car.vue";

export default {
  name: "App",
  components: {
    mainp: Mainp,
    worker: Worker,
    motherboard: Motherboard,
    car: Car
  }
};
</script>

<style>
#app {
  align-content: center;
  text-align: center;
  background-color: grey;
  width: 100%;
  /* height: 800px; */
  /* position: absolute; */
  left: 0%;
  font-family: "Comfortaa", cursive;
  font-size: 16px;
}

footer {
  display: grid;
  grid-template-columns: 50% 50%;
  background-color: rgb(84, 213, 230);
  /* position: fixed; */
}

.menu {
  background-color: #53ca63fb;
  padding-top: 5px;
}

.delete {
  background-color: #f08080;
  padding-top: 5px;
}

.change {
  background-color: #ffff00;
  padding-top: 5px;
}

.book {
  /* width: 100%; */
  background-color: #f7d794;
}

li {
  padding-left: 1px;
}

h3 {
  text-align: center;
  background: #f19066;
  color: black;
  letter-spacing: 0.1em;
}

select {
  margin-top: 5px;
}

button {
  margin-top: 5px;
  font-weight: 700;
  color: white;
  text-decoration: none;
  padding: 0.8em 1em calc(0.8em + 3px);
  border-radius: 3px;
  background: rgb(64, 199, 129);
  box-shadow: 0 -3px rgb(53, 167, 110) inset;
  transition: 0.2s;
}

button:hover {
  background: rgb(53, 167, 110);
}

button:active {
  background: rgb(33, 147, 90);
  box-shadow: 0 3px rgb(33, 147, 90) inset;
}

.main-logo {
  margin-top: 10px;
}
.logo_h {
  width: 80px;
  -webkit-transition: all 0.7s ease;
  -moz-transition: all 0.7s ease;
  -o-transition: all 0.7s ease;
  transition: all 0.7s ease;
}
.logo_h:hover {
  border-radius: 100%;
  -webkit-transform: rotate(360deg);
  -moz-transform: rotate(360deg);
  -o-transform: rotate(360deg);
  transform: rotate(360deg);
}

@media (max-width: 800px) {
  #app {
    width: 100%;
    margin-left: 0px;
    display: grid;
    font-size: 16px;
    grid-template-columns: repeat(1fr, 1fr, 1fr);
    grid-template-rows: auto auto auto auto;
  }

  main {
    width: 100%;
  }

  .container {
    padding: 0px;
  }

  .menu {
    width: 130%;
    background-color: green;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  .change {
    width: 130%;
    background-color: yellow;
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 4;
  }

  #app .book {
    font-size: 11px;
    width: 100%;
    background-color: red;
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;
  }
}
</style>
