<template>
  <v-container fluid>
    <custom-breadcrumbs justify-start :breadcrumbs="breadcrumbs" />
    <v-btn
      outlined
      color="primary"
      class="my-5 mr-2"
      @click="showConditionsForm"
    >
      条件で絞り込む
    </v-btn>
    <v-row justify="start">
      <v-col cols="12" md="4" sm="10" v-for="index in 12" :key="index">
        <v-card
          class="mx-auto"
          max-width="344"
        >
          <v-img
            src="https://www.mitsui-chintai.co.jp/resident/original/toranomon_hills/img/top01.jpg"
            height="200px"
          ></v-img>
          <v-card-title 
          >
            日本橋八重洲デュープレックスポーション 12階/-
          </v-card-title>
          <v-card-subtitle class="py-0">
            <span class="font-weight-bold">賃料/管理費等</span>　19.7万円 / 13,000円
          </v-card-subtitle>
          <v-card-subtitle class="pt-1 pb-0">
            <span class="font-weight-bold">所在地</span>　東京都中央区勝どき5丁目
          </v-card-subtitle>
          <v-card-subtitle class="pt-1 pb-0">
            <span class="font-weight-bold">交通</span>　都営大江戸線 勝どき駅 徒歩6分
          </v-card-subtitle>
          <v-card-subtitle class="pt-1 pb-0">
            <span class="font-weight-bold">専有面積/間取り</span>　42.04m² / 1LDK
          </v-card-subtitle>
          <v-card-actions>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-spacer />
            <v-btn
              to="/properties/1"
              color="primary"
              outlined
            >
              詳しく見る
            </v-btn>

          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <custom-conditions-form
      ref="conditionsForm"
    />
  </v-container>

</template>
<script>
import breadcrumbs from "~/components/breadcrumbs.vue"
import conditionsForm from "~/components/conditionsForm.vue"

export default {
  components: {
    "custom-breadcrumbs": breadcrumbs,
    "custom-conditions-form": conditionsForm,
  },
  data () {
    return {
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
          disabled: false,
          href: "/conditions/"
        },
        {
          text: "物件一覧",
          disabled: true,
          href: ""
        }
      ]
    }
  },
  methods: {
    showConditionsForm() {
      this.$refs.conditionsForm.show()
    },
  }
}
</script>