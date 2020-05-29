<template>
  <v-container fluid>
    <custom-breadcrumbs justify-start :breadcrumbs="breadcrumbs" />
    都道府県検索
    <v-row justify="start">
      <v-btn
        v-for="pref in prefectures"
        :key="pref.code"
        to="/prefectures/13"
        class="ml-3 mt-2"
        outlined
        color="primary"
      >
        {{ pref.name }}
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import breadcrumbs from "~/components/breadcrumbs.vue"
import { prefectures } from '~/assets/prefectures.js'
export default {
  components: {
    "custom-breadcrumbs": breadcrumbs
  },
  data () {
    return {
      prefectures,
      breadcrumbs: [
        {
          text: "ホーム",
          disabled: false,
          href: "/"
        },
        {
          text: "都道府県選択",
          disabled: true,
          href: "/prefectures"
        }
      ]
    }
  }
}
</script>
