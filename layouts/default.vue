<template>
  <v-app v-if="ready" id="keep">
    <v-app-bar app clipped-left color="primary">
      <v-app-bar-nav-icon
        class="white--text"
        @click="drawer = !drawer"
      />
      <nuxt-link to="/">
        <span class="title ml-3 mr-5 white--text">
          不動産検索&nbsp;
        </span>
      </nuxt-link>
      <v-spacer />
        <v-btn outlined to="/favorites/" class="white--text">
          <v-icon left>mdi-heart</v-icon>お気に入り
        </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      color="grey lighten-4"
    >
      <v-list dense class="grey lighten-4">
        <template v-for="(item, i) in items">
          <v-row v-if="item.heading" :key="i" align="center">
            <v-col cols="6">
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-col>
          </v-row>
          <v-divider v-else-if="item.divider" :key="i" dark class="my-4" />
          <v-list-item v-else :key="i" link :to="item.href">
            <v-list-item-action v-if="item.icon">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="grey--text">
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { icon: 'mdi-home', text: 'ホーム', href: '/' },
        { divider: true },
        { heading: 'メニュー' },
        {
          text: '運営会社',
          href: '/company'
        },
        {
          text: 'プライバシーポリシー',
          href: '/privacy_policy'
        },
        {
          text: '利用規約',
          href: '/terms_of_service'
        }      ],
      drawer: false,
      ready: false
    }
  },
  mounted () {
    this.ready = true
  }
}
</script>
<style scoped>
#home-link {
  text-decoration: none;
}
</style>
