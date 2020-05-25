<template>
  <v-container fluid>
    <v-btn 
      to="/prefectures"
      outlined
      color="warning"
      class="mb-5 mr-2"
    >
      都道府県選択へ戻る
    </v-btn>
    <p>{{ filtered_stations.length || 0 }} 駅を選択中</p>
    <v-divider />
    路線選択 - {{ prefectures[$route.params.id - 1].name }}
    <v-row>
      <v-switch
        v-for="dat in data"
        :key="dat.line_cd"
        height="5"
        class="ma-1"
        :label="dat.line_name"
        @change="hello(dat.line_cd)"
      />
    </v-row>
    <v-divider />
    <v-row>
      <v-switch
        v-for="dat in filtered_stations"
        :key="dat.station_cd"
        height="5"
        class="ma-1"
        :label="dat.station_name"
      />
    </v-row>
  </v-container>
</template>

<script>
import { routes } from '~/assets/routes.js'
import { prefectures } from '~/assets/prefectures.js'
import { stations } from '~/assets/stations.js'
export default {
  data () {
    return {
      selectedLines: [],
      checkbox: [],
      prefectures,
      stations,
      data: routes.filter(_ => _.lat > 35.3 && _.lat < 35.7 && _.lon > 139.4 && _.lon < 139.8).slice(0, 10),
      selectId: 13
    }
  },
  computed: {
    selected_lines () {
      return this.selectedLines
    },
    filtered_stations () {
      const lines = this.selected_lines
      return this.stations.filter(_ => lines.includes(_.line_cd))
    }
  },
  methods: {
    hello (code) {
      if (this.selectedLines.includes(code)) {
        this.selectedLines = this.selectedLines.filter(_ => _ !== code)
      } else {
        this.selectedLines.push(code)
      }
    }
  }
}
</script>
