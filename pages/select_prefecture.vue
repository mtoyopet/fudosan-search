<template>
  <div>
    <h3>都道府県を選択してください</h3>
    <v-row justify="start">
      <v-btn
        v-for="item in prefectures"
        :key="item.code"
        :value="item.name"
        to="/select_prefecture"
        class="ml-3 mt-2"
        outlined
        color="primary"
      >
        {{ item.name }}
      </v-btn>
    </v-row>
  </div>
</template>

<script>
import { prefectures } from '~/assets/prefectures.js'

export default {
  data () {
    return {
      prefectures,
      url: ''
    }
  },
  head () {
    return {
      title: '都道府県を選択'
    }
  }
}
</script>
