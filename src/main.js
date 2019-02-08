import Vue from 'vue' //librairie "vue" dans node_modules
import VueRouter from 'vue-router'
import app from './app.vue' //fichier app.vue local
import MovieItemComponent from './components/movieitem.vue'
import home from './pages/home.vue' //vue page d'accueil
import editMovie from './pages/edit.vue' //vue pour éditer un film
import newMovie from './pages/new.vue' //vue pour ajouter un film
import Vuetify from 'vuetify'//librairie vuetify
import 'vuetify/dist/vuetify.min.css'

Vue.component('movie-item', MovieItemComponent);
Vue.use(VueRouter);
Vue.use(Vuetify)

/* -- Paramètres des films -- */
window.shared_data = {
  movies : [
    {
        id: 0,
        title: "22 Miles",
        release_date: 2018,
        /* -- Plusieurs langues peuvent être ajoutées -- */
        language: ["Français", "Anglais"],
        /* -- Plusieurs champs pour le réalisateur -- */
        director: { 
            name: "Peter Berg",
            nationality: "Américain",
            birth_date: "11/03/1964",
          },
        genre: "Thriller",
        /* -- Lien du poster -- */
        poster: "http://fr.web.img6.acsta.net/r_1280_720/pictures/18/08/08/15/23/5182038.jpg",
        synopsys: "Un officier d'élite du renseignement américain tente d'exfiltrer un policier qui détient des informations compromettantes. Ils vont être traqués par une armée d'assassins tout au long des 22 miles les séparant de l'avion qui leur permettra de quitter le pays."
    },
    {
      id: 1,
      title: "John Wick 2",
      release_date: 2017,
      language: ["Français"],
      director: { 
          name: "Chad Stahelski",
          nationality: "Américain",
          birth_date: "20/09/1968",
        },
      genre: "Action",
      poster: "http://fr.web.img2.acsta.net/r_1920_1080/pictures/17/01/23/13/18/115327.jpg",
      synopsys: "John Wick est forcé de sortir de sa retraite volontaire par un de ses ex-associés qui cherche à prendre le contrôle d’une mystérieuse confrérie de tueurs internationaux. Parce qu’il est lié à cet homme par un serment, John se rend à Rome, où il va devoir affronter certains des tueurs les plus dangereux du monde."
  },
]
}

/* -- Routes -- */
const routes = [
  { path: '/', component: home, name: "home" },
  { path: '/new', component: newMovie, name: "newMovie" },
  { path: '/edit/:id', component: editMovie, name: "editMovie" },
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  data: () => ({
    show: false
  }),
  render: h => h(app),
  router
})

