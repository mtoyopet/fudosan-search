<template>
  <v-container fluid>
    都道府県検索
    <v-row justify="start">
      <v-btn
        v-for="pref in prefectures"
        :key="pref.code"
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
import { prefectures } from '~/assets/prefectures.js'
export default {
  data () {
    return {
      prefectures
    }
  }
}
</script>
