<!-- // Page d'accueil  // -->
<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-container>
          <v-layout class="mr-4 ml-4 mt-4">
            <v-flex sm6 class="pt-3">
              <!-- // movies.length permet d'afficher le nombre de films créés // -->
              <h2>Nombre de films enregistrés : {{movies.length}}</h2>
            </v-flex>
            <!-- // Spacer pour que l'élément suivant soit à l'opposé du précédent, mais toujours sur la même ligne // -->
            <v-spacer></v-spacer>
            <v-flex sm3>
            <!-- // Champ de texte permettant de rechercher un film // -->
              <v-text-field class="mb-3" color="teal" prepend-inner-icon="search" v-model="search" single-line
                placeholder="Rechercher..."></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <!-- // Affichage des films sur la page d'accueil (depuis movieitem.vue) // -->
            <movie-item v-for="(movie,index) in movies_search" v-bind:key="movie.title" v-bind:movie="movie"
              v-on:remove="remove(index)"></movie-item>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        /* -- Partager les données dans plusieurs vues -- */
        movies: window.shared_data.movies,
        movie: window.shared_data.movies[this.$route.params.id],
        /* -- Le champ rechercher est à vide par défaut -- */
        search: "",
      }
    },

    methods: {
      /* -- Suppression du film sur la page d'accueil -- */
      remove: function (index) {
        this.movies.splice(index, 1)
      },
    },

    computed: {
      movies_search: function () {
        /* -- Recherche à l’intérieur des différents paramètres -- */
        return this.movies.filter(m => {
          /* -- Titre -- */
          if (m.title.toLowerCase().indexOf(this.search.toLowerCase()) != -1) {
            return true;
          }
          /* -- Genre -- */
          if (m.genre.toLowerCase().indexOf(this.search.toLowerCase()) != -1) {
            return true;
          }
          /* -- Nom du réalisateur -- */
          if (m.director.name.toLowerCase().indexOf(this.search.toLowerCase()) != -1) {
            return true;
          }
        });
      }
    },
  }
</script>