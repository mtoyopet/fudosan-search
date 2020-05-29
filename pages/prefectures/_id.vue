<template>
  <v-container fluid>
    <custom-breadcrumbs justify-start :breadcrumbs="breadcrumbs" />
    <v-btn 
      to="/prefectures"
      outlined
      color="orange"
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
              <p class="subtitle-1">{{ filtered_stations.length || 0 }} 駅を選択中</p>
              <v-divider class="my-3" />
              <p class="subtitle-2">路線選択 - {{ prefectures[12].name }}</p>
              <v-row>
                <v-col cols="12" sm="2" class="pt-0" v-for="dat in data" :key="dat.line_cd">
                  <v-checkbox
                    height="5"
                    :label="dat.line_name"
                    @change="hello(dat.line_cd)"
                  />
                </v-col>
              </v-row>
              <v-divider class="my-3"/>
              <v-row>
                <v-col cols="12" sm="2" class="pt-0" v-for="dat in filtered_stations" :key="dat.station_cd">
                  <v-checkbox
                    height="5"
                    :label="dat.station_name"
                  />
                </v-col>
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
              <v-row>
                <v-col cols="12" sm="12" class="pt-0" v-for="(district, index) in tokyo" :key="index">
                  <p class="subtitle-1 mb-0 font-weight-bold">{{ district.area }}
                  </p>
                  
                  <v-divider class="my-3" />
                  <v-row>
                    <v-col cols="12" sm="2" class="pt-0" v-for="city in district.cities" :key="city.name">
                      <v-checkbox
                        height="5"
                        :label="`${city.name} (${city.quantity})`"
                        :disabled="city.quantity === 0 ? true : false"
                      />
                    </v-col>
                  </v-row>
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
import { tokyo } from '~/assets/tokyo.js'

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
      tokyo,
      tabItems: ["駅から検索", "市区から検索"],
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
