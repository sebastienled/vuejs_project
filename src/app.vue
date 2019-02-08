<template>
  <v-app>
    <div>
      <!-- // Bar de navigation // -->
      <v-toolbar dark color="teal">
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title class="white--text"><router-link :to="{name:'home'}" tag="button">Mes films</router-link></v-toolbar-title>
        <!-- // Spacer pour que l'élément suivant soit à l'opposé du précédent, mais toujours sur la même ligne // -->
        <v-spacer></v-spacer>
        <!-- // Lien vers le formulaire pour ajouter un film // -->
        <router-link :to="{name:'newMovie'}" tag="button"><v-btn color="green" class="white--text">Ajouter un film<v-icon right dark>cloud_upload</v-icon></v-btn></router-link>
      </v-toolbar>
      <router-view></router-view>
      <!-- // Footer // -->
      <v-footer height="auto">
        <v-layout justify-center row wrap>
        <v-flex teal py-3 text-xs-center white--text xs12>
            &copy;2019 | <strong>Sébastien Leduc</strong>
        </v-flex>
        </v-layout>
      </v-footer>
    </div>
  </v-app>
</template>