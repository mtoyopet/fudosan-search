<template>
  <div>
    <h3>種別選択</h3>
    <v-row justify="start">
      <v-btn
        v-for="(item, i) in type"
        :key="i"
        :value="item"
        to="/select_prefecture"
        class="ml-3 mt-2"
        outlined
        color="primary"
      >
        {{ item }}
      </v-btn>
    </v-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      type: ['マンション', 'アパート', '一戸建て'],
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
