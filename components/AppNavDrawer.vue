<template>
  <div>
    <v-navigation-drawer
      app
      floating
      class="rounded-lg"
      :class='{ "my-4": $vuetify.breakpoint.mdAndUp, "my-2": $vuetify.breakpoint.smAndDown, "mx-4": $vuetify.breakpoint.mdAndUp && drawer, "mx-2": $vuetify.breakpoint.smAndDown && drawer }'
      overlay-opacity=".75"
      v-model="drawer"
      :width='$vuetify.breakpoint.smAndDown ? 310 : 360'
      :height='`calc(100vh - ${$vuetify.breakpoint.smAndDown ? "16" : "32"}px)`'
      temporary
      color="primary"
      dark
    >

      <v-list
        nav
      >

        <v-list-item-group
          v-model="group"
          active-class="primary"
        >
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>

        </v-list-item-group>

      </v-list>
      <v-list-item-group active-class="primary">

      </v-list-item-group>

    </v-navigation-drawer>

    <v-app-bar
      app
      flat
      color="transparent"
    >

      <v-app-bar-nav-icon v-show="$vuetify.breakpoint.mdAndDown" aria-label="Nav button"
                          @click.stop="drawer = !drawer"></v-app-bar-nav-icon>


      <v-toolbar-title v-if="$nuxt.$route.path !== localePath('/')" class="primary--text title--movixel"
                       id="title--movixel">
        <NuxtLink class="text-decoration-none" :to="localePath('/')">MoviXel</NuxtLink>
      </v-toolbar-title>

      <v-spacer/>
      <v-spacer></v-spacer>


      <v-btn v-for="locale in availableLocales"
             :key="locale.code"
             :to="switchLocalePath(locale.code)"
             elevation="0" light fab small>{{ locale.icon }}
      </v-btn>
      <v-btn aria-label="Theme button" icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">

        <v-icon>
          {{ $vuetify.theme.dark ? "mdi-white-balance-sunny" : "mdi-brightness-3" }}
        </v-icon>

      </v-btn>

    </v-app-bar>


  </div>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    selectedItem: 0,
  }),
  watch: {
    group() {
      this.drawer = false
    },
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
</script>
<style>
#title--movixel {
  font-size: 2rem;
  font-weight: bold;
}
</style>
