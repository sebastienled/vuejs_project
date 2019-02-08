<!-- // Formulaire d'édition du film, affichage avec le composant Card // -->
<template>
  <div class="text-xs-center pb-5">
    <h1 class="pa-3 pt-4">Éditer le film</h1>
    <v-layout justify-center>
      <!-- // Positionnement (responsive) // -->
      <v-flex xs12 sm10 md8 lg6>
        <v-card ref="form">
          <v-card-text>
            <!-- // Tous les champs du film, éditable via le formulaire // -->
            <b class="edit-color left">Film</b><br>

            <!-- // Champ de texte - Titre // -->
            <v-text-field ref="title" color="teal" v-model="movie_to_edit.title" 
              label="Titre" type="text">
            </v-text-field>
            <!-- // Selection de la date, un seul choix possible // -->
            <v-select ref="release_date" color="teal" :items="release_date" v-model="movie_to_edit.release_date" 
              label="Date de sortie" placeholder="...">
            </v-select>
            <!-- // Selection du genre, un seul choix possible // -->
            <v-select ref="genre" color="teal" :items="genre" v-model="movie_to_edit.genre" 
              label="Genre" placeholder="...">
            </v-select>
            <!-- // Selection de la langue, plusieurs choix possible // -->
            <v-select ref="language" color="teal" :items="languages" v-model="movie_to_edit.language" 
              label="Langues disponibles" placeholder="..." multiple>
            </v-select>

            <b class="edit-color left">Réalisateur</b><br>

            <!-- // Champ de texte - Nom du réalisateur // -->
            <v-text-field ref="director.name" color="teal" v-model="movie_to_edit.director.name" 
              label="Nom" type="text">
            </v-text-field>
            <!-- // Champ de texte - Nationalité du réalisateur // -->
            <v-text-field ref="director.nationality" color="teal" v-model="movie_to_edit.director.nationality" 
              label="Nationalité" type="text">
            </v-text-field>
            <!-- // Champ de texte - Date de naissance du réalisateur // -->
            <v-text-field ref="director.birth_date" color="teal" v-model="movie_to_edit.director.birth_date" 
              label="Date de naissance" type="text">
            </v-text-field>

            <b class="edit-color left">Liens</b><br>

            <!-- // Champ de texte - Lien vers le poster // -->
            <v-text-field ref="poster" color="teal" v-model="movie_to_edit.poster" 
              label="Lien de l'image" type="text">
            </v-text-field>
            <!-- // Aperçu du poster // -->
            <v-img v-bind:src="movie.poster" height="267px" width="200px"></v-img>
            <!-- // Zone de texte - Synopsys // -->
            <div class="pt-3">
              <b class="edit-color left">Informations complémentaires</b><br>
              <v-textarea ref="synopsys" color="teal" auto-grow v-model="movie_to_edit.synopsys" 
                label="Synopsys" type="text" height="auto">
              </v-textarea>
            </div>
          </v-card-text>
          <v-card-actions>
            <!-- // Spacer pour que l'élément suivant soit à l'opposé du précédent, mais toujours sur la même ligne // -->
            <v-spacer></v-spacer>
            <!-- // Bouton sauvegarder qui appelle la méthode save, redirection vers la page d'accueil // -->
            <router-link :to="{name:'home'}" tag="button">
              <v-btn color="green" flat v-on:click="save">Sauvegarder</v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        /* -- Partager les données dans plusieurs vues -- */
        movies: window.shared_data.movies,
        movie: window.shared_data.movies[this.$route.params.id],
        /* -- Données : genre du film -- */
        genre: [
          'Action', 'Thriller', 'Horreur', 'Science Fiction', 'Guerre', 'Fantastique'
        ],
        /* -- Données : date de sortie du film -- */
        release_date: [
          2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019
        ],
        /* -- Données : Langues du film -- */
        languages: [
          'Français', 'Américain', 'Anglais', 'Espagnol', 'Italien', 'Allemand'
        ],
      }
    },

    methods: {
      /* -- Permet de sauvegarder l'édition -- */
      save: function () {
        this.movie_to_edit = null
      },
    },

    computed: {
      /* -- Fonction permettant l'édition d'un film -- */
      movie_to_edit: function () {
        return this.movies.find(obj => {
          return obj.id == this.$route.params.id;
        })
      },
    }
  }
</script>
<style>
  .edit-color {
    color: teal;
  }
</style>