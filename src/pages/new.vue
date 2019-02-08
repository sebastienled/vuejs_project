<!-- // Formulaire d'ajout de film, affichage avec le composant Card // -->
<template>
  <div class="text-xs-center pb-5">
    <v-flex>
      <v-layout>
        <!-- // Icone permettant de revenir sur la page d'accueil // -->
        <a class="mt-4 pl-4">
          <v-icon @click="go_back" color="teal" large>arrow_back</v-icon>
        </a>
        <v-layout justify-center>
          <h1 class="pa-3 pt-4 mr-5">Nouveau film</h1>
        </v-layout>
      </v-layout>
    </v-flex>
    <v-layout justify-center>
      <!-- // Positionnement (responsive) // -->
      <v-flex xs12 sm10 md8 lg6>
        <v-card ref="form">
          <v-card-text>
            <!-- // Tous les champs du film, éditable via le formulaire // -->
            <b class="edit-color left">Film</b><br>

            <!-- // Champ de texte - Titre // -->
            <v-text-field ref="title" color="teal" v-model="movie_to_add.title" 
              label="Titre" type="text">
            </v-text-field>
            <!-- // Selection de la date, un seul choix possible // -->
            <v-select ref="release_date" color="teal" :items="release_date" v-model="movie_to_add.release_date" 
              label="Date de sortie" placeholder="...">
            </v-select>
            <!-- // Selection du genre, un seul choix possible // -->
            <v-select ref="genre" color="teal" :items="genre" v-model="movie_to_add.genre" 
              label="Genre" placeholder="...">
            </v-select>
            <!-- // Selection de la langue, plusieurs choix possible // -->
            <v-select ref="language" color="teal" :items="languages" v-model="movie_to_add.language" 
              label="Langues disponibles" placeholder="..." multiple>
            </v-select>

            <b class="edit-color left">Réalisateur</b><br>

            <!-- // Champ de texte - Nom du réalisateur // -->
            <v-text-field ref="director.name" color="teal" v-model="movie_to_add.director.name" 
              label="Nom" type="text">
            </v-text-field>
            <!-- // Champ de texte - Nationalité du réalisateur // -->
            <v-text-field ref="director.nationality" color="teal" v-model="movie_to_add.director.nationality" 
              label="Nationalité" type="text">
            </v-text-field>
            <!-- // Champ de texte - Date de naissance du réalisateur // -->
            <v-text-field ref="director.birth_date" color="teal" v-model="movie_to_add.director.birth_date" 
              label="Date de naissance" type="text">
            </v-text-field>

            <b class="edit-color left">Liens</b><br>

            <!-- // Champ de texte - Lien vers le poster // -->
            <v-text-field ref="poster" color="teal" v-model="movie_to_add.poster" 
              label="Lien de l'image" type="text">
            </v-text-field>
            <!-- // Zone de texte - Synopsys // -->
            <div class="pt-3">
              <b class="edit-color left">Informations complémentaires</b><br>
              <v-textarea ref="synopsys" color="teal" auto-grow v-model="movie_to_add.synopsys" 
                label="Synopsys" type="text" height="auto">
              </v-textarea>
            </div>
          </v-card-text>
          <v-card-actions>
            <!-- // Spacer pour que l'élément suivant soit à l'opposé du précédent, mais toujours sur la même ligne // -->
            <v-spacer></v-spacer>
            <!-- // Bouton ajouter qui appelle la méthode newmovie, redirection vers la page d'accueil // -->
            <router-link :to="{name:'home'}" tag="button">
              <v-btn color="green" flat v-on:click="newmovie">Ajouter</v-btn>
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
        /* -- Déclaration de l'objet director -- */
        movie_to_add: {
          director: {}
        },
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
      /* -- Permet créer un nouveau film et de le push pour le sauvegarder -- */
      newmovie: function () {
        /* -- Permet d'éditer un film ajouté à la main, créé un id au nouveau film en fonction du nombre de films -- */
        this.movie_to_add.id = this.movies[this.movies.length - 1].id + 1
        this.movies.push(this.movie_to_add)
      },
      /* -- Permet de revenir à la page d'accueil -- */
      go_back: function () {
        this.$router.replace({
          name: "home"
        });
      },
    },

    computed: {
      /* -- Fonction permettant l'ajout d'un film -- */
      movie_to_add: function () {
        return this.movies.find(obj => {
          return obj.id == this.$route.params.id;
        })
      }
    }
  }
</script>