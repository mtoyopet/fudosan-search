<template>
  <v-container fluid>
    <custom-breadcrumbs justify-start :breadcrumbs="breadcrumbs" />
      <v-row>
        <v-col cols="12" md="6" sm="12">
          <v-card outlined>
            <v-system-bar color="primary" dark>
              <span class="ma-1">賃料</span>
            </v-system-bar>
            <v-card-text>
              <v-row align="center">
                <v-col class="pt-0" cols="12" sm="4">
                  <v-select
                    :items="rent"
                    label="下限なし"
                    dense
                  ></v-select>
                </v-col>
                ~ 
                <v-col class="pt-0" cols="12" sm="4">
                  <v-select
                    :items="rent"
                    label="上限なし"
                    dense
                  ></v-select>
                </v-col>
              </v-row>
              <v-row align="center">
                <v-col class="mt-0 py-0" cols="12" sm="4">
                  <v-checkbox
                    label="礼金なし"
                  ></v-checkbox>
                </v-col>
                <v-col class="mt-0 py-0" cols="12" sm="4">
                  <v-checkbox
                    label="敷金なし"
                  ></v-checkbox>
                </v-col>
                <v-col class="mt-0 py-0" cols="12" sm="4">
                  <v-checkbox
                    label="共益費/管理費を含む"
                  ></v-checkbox>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="6" sm="12">
          <v-card outlined>
            <v-system-bar color="primary" dark>
              <span class="ma-1">間取り</span>
            </v-system-bar>
            <v-card-text>
              <v-row>
                <v-col class="mt-0 py-0" cols="12" sm="4" v-for="item in madori" :key="item">
                  <v-checkbox
                    class="my-1"
                    :label="item"
                  ></v-checkbox>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="6" sm="12">
          <v-card outlined>
            <v-system-bar color="primary" dark>
              <span class="ma-1">駅徒歩分</span>
            </v-system-bar>
            <v-card-text>
              <v-col class="mt-0 pt-0" cols="12" sm="12">
                <v-radio-group v-model="distance" :mandatory="false" row>
                  <v-radio class="mb-2" v-for="item in toho" :key="item" :label="item" :value="item" />
              </v-radio-group>
              </v-col>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="6" sm="12">
          <v-card outlined>
            <v-system-bar color="primary" dark>
              <span class="ma-1">築年数</span>
            </v-system-bar>
            <v-card-text>
              <v-col class="mt-0 pt-0" cols="12" sm="12">
                <v-radio-group v-model="year" :mandatory="false" row>
                  <v-radio class="mb-2" v-for="item in chikunen" :key="item" :label="item" :value="item"/>
              </v-radio-group>
              </v-col>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="6" sm="12">
          <v-card outlined class="mt-5">
            <v-system-bar color="primary" dark>
              <span class="ma-1">建物構造</span>
            </v-system-bar>
            <v-card-text>
              <v-row>
                <v-col class="mt-0 py-0" cols="12" sm="4" v-for="item in buildingType" :key="item">
                  <v-checkbox
                    class="my-1"
                    :label="item"
                  ></v-checkbox>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="6" sm="12">
          <v-card outlined class="mt-5">
            <v-system-bar color="primary" dark>
              <span class="ma-1">こだわり条件</span>
            </v-system-bar>
            <v-card-text>
              <v-row>
                <v-col class="mt-0 py-0" cols="12" sm="4" v-for="item in kodawari" :key="item">
                  <v-checkbox
                    class="my-1"
                    :label="item"
                  ></v-checkbox>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-btn
        to="/properties/"
        outlined
        color="primary"
        class="my-5 mr-2"
      >
        この条件で検索する
      </v-btn>
  </v-container>
</template>

<script>
import breadcrumbs from "~/components/breadcrumbs.vue"
export default {
  components: {
    "custom-breadcrumbs": breadcrumbs
  },
  data () {
    return {
      rent: ['3.0万円','3.5万円','4.0万円','4.5万円','5.0万円','5.5万円','6.0万円','6.5万円','7.0万円','7.5万円','8.0万円'],
      madori: ['ワンルーム', '1K', '1DK', '1LDK', '2K', '2DK', '2LDK', '3K', '3DK', '3LDK', '3LDK以上'],
      toho: ["指定なし", "1分以内", "5分以内", "7分以内","10分以内", "15分以内", "20分以内"],
      chikunen: ["指定なし", "新築", "1年以内", "3年以内", "5年以内", "10年以内", "15年以内", "20年以内", "25年以内", "30年以内"],
      buildingType: ["鉄筋系", "木造系", "鉄骨系", "ブロック・その他"],
      kodawari: ["バス・トイレ別", "２階以上", "室内洗濯機置場", "エアコン", "駐車場あり", "南向き", "オートロック", "追焚機能"],
      reikin: false,
      distance: '指定なし',
      year: '指定なし',
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
          disabled: false,
          href: "/prefectures/13"
        },
        {
          text: "条件選択",
          disabled: true,
          href: ""
        }
      ]
    }
  }
}
</script>