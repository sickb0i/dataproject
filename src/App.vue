<template>
  <v-app>
    <v-app-bar
      absolute
      color="primary"
      dark
      shrink-on-scroll
      scroll-target="#scrolling-techniques-2"
    >

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-app-bar-title>Répartition des cliens SNCF</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-2"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 200px"></v-container>
    </v-sheet>

    <v-main>
      <v-card class="mx-5">
        <v-card-text>
          <Search/>
        </v-card-text> 
      </v-card> 
    </v-main>
  </v-app>
</template>

<script>
import Search from './components/Search';

export default {
  name: "App",

  components: {
    Search,
  },

  data: () => ({
    //
  }),
};
</script>
