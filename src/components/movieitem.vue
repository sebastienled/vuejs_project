<!-- // Utilisation du composant Card pour l'affichage des films // -->
<template>
  <!-- // Positionnement (responsive) // -->
  <v-flex xs12 sm6 md6 lg4>
    <v-card class="ml-4 mr-4 mt-2 mb-4">
      <v-hover>
        <!-- // Affichage de l'image, toujours de la même taille (ratio 0.75) // -->
        <v-img slot-scope="{ hover }" v-bind:src="movie.poster" height="auto" aspect-ratio="0.75" class="cursor-img"
          @click="show = !show" title="Afficher les informations">
          <!-- // Hover sur l'image // -->
          <v-expand-transition>
            <div v-if="hover" class="d-flex transition-ease-in-out white v-card--reveal" style="height: 100%;"></div>
          </v-expand-transition>
        </v-img>
      </v-hover>
      <!-- // Affichage des informations concernant le film // -->
      <v-card-title teal-title class="pt-3 pb-0">
        <div>
          <!-- // Titre du film // -->
          <div class="headline teal--text">{{ movie.title }}</div>
          <!-- // Date de sortie du film + genre // -->
          <span class="black--text">{{ movie.release_date }} - {{ movie.genre }}</span>
        </div>
        <!-- // Spacer pour que l'élément suivant soit à l'opposé du précédent, mais toujours sur la même ligne // -->
        <v-spacer></v-spacer>
        <div class="text-xs-center">
          <!-- // Affichage des étoiles pour le vote // -->
          <v-rating v-model="rating" size="18" dense color="yellow darken-3" background-color="grey darken-1"
            empty-icon="$vuetify.icons.ratingFull" half-increments hover></v-rating>
          <!-- // Affichage de la note // -->
          <span class="caption">
            {{ rating }} / 5
          </span>
        </div>
      </v-card-title>
      <!-- // Icone qui permet, au clic, de dévoiler les détails du films // -->
      <v-btn icon @click="show = !show" class="pt-0">
        <v-icon>{{ show ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
      </v-btn>
      <!-- // Transition au moment du clic // -->
      <v-slide-y-transition>
        <!-- // Affichage du synopsys et du réalisateur // -->
        <v-card-text v-show="show" class="grey--text pt-0 text-xs-justify">
          {{ movie.synopsys }}<br><br>
          <div class="font-italic"> - Réalisé par {{ movie.director.name }}</div>
        </v-card-text>
      </v-slide-y-transition>
      <!-- // Séparation avec une petite ligne // -->
      <v-divider></v-divider>
      <v-card-actions>
        <!-- // Lien vers le formulaire d'étidion du film // -->
        <router-link :to="{name:'editMovie',params:{id:movie.id}}" tag="button">
          <v-btn flat color="green">Editer</v-btn>
        </router-link>
        <!-- // Bouton pour supprimer le film // -->
        <v-btn flat color="red" v-on:click="removeItem">Supprimer</v-btn>
        <v-spacer></v-spacer>
        <!-- // Bouton permettant de mettre un coeur sur un film (favori) // -->
        <v-btn :class="fav ? 'pink--text' : 'grey--text'" icon @click="fav = !fav">
          <v-icon>favorite</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>
<script>
  export default {
    data: () => ({
      /* -- Etablie les valeurs par défaut au chargement de la page -- */
      rating: 0,
      fav: false,
      show: false,
    }),
    props: ['movie'],
    methods: {
      /* -- Méthode permettant de supprimer un film -- */
      removeItem() {
        this.$emit('remove')
      },
      /* -- Méthode permettant d'éditer un film -- */
      editItem() {
        this.$emit('edit', this.movie)
      },
    }
  }
</script>

<!-- // Quelques styles pour la Card // -->
<style>
  .cursor-img {
    cursor: pointer;
  }

  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .2;
    position: absolute;
    width: 100%;
  }
</style>