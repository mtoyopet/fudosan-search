<template>
  <v-container fluid>
    <custom-breadcrumbs justify-start :breadcrumbs="breadcrumbs" />
    <v-btn 
      to="/prefectures"
      outlined
      color="warning"
      class="mb-5 mr-2"
    >
      都道府県選択へ戻る
    </v-btn>
    <v-card>
      <v-tabs class="mt-3" dark background-color="blue darken-3">
        <v-tab v-for="tabName in tabItems" :key="tabName">
          {{ tabName }}
        </v-tab>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
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
              <v-btn
                to="/conditions/"
                outlined
                color="primary"
                class="my-5 mr-2"
              >
                選択した駅で条件選択をする
              </v-btn>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              市区町村(東京都)
              <v-row>
                <v-col
                  cols="12"
                  sm="3"
                  v-for="(city, index) in cities"
                  :key="index"
                >
                  <v-checkbox
                    height="5"
                    class="ma-1"
                    :label="city"
                  />
                </v-col>
              </v-row>
              <v-divider />
              <v-btn
                to="/conditions/"
                outlined
                color="primary"
                class="my-5 mr-2"
              >
                選択した市区で条件選択をする
              </v-btn>
            </v-card-text>
          </v-card>

        </v-tab-item>
      </v-tabs>
    </v-card>
  </v-container>
</template>

<script>
import breadcrumbs from "~/components/breadcrumbs.vue"
import { routes } from '~/assets/routes.js'
import { prefectures } from '~/assets/prefectures.js'
import { stations } from '~/assets/stations.js'
export default {
  components: {
    "custom-breadcrumbs": breadcrumbs
  },
  data () {
    return {
      selectedLines: [],
      checkbox: [],
      prefectures,
      stations,
      tabItems: ["駅から検索", "市町村名から検索"],
      cities: ["千代田区", "中央区", "港区", "新宿区", "文京区", "渋谷区", "台東区", "墨田区", "江東区", "荒川区", "足立区", "葛飾区"],
      data: routes.filter(_ => _.lat > 35.3 && _.lat < 35.7 && _.lon > 139.4 && _.lon < 139.8).slice(0, 10),
      selectId: 13,
            breadcrumbs: [
        {
          text: "ホーム",
          disabled: false,
          href: "/"
        },
        {
          text: "都道府県選択",
          disabled: false,
          href: "/prefectures"
        },
        {
          text: "（東京都）駅選択",
          disabled: true,
          href: ""
        }
      ]

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
