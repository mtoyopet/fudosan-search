<template>
  <v-container>
    <v-dialog v-model="dialog" width="700">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          お問い合わせが完了しました
        </v-card-title>
          <v-container class="d-flex justify-center my-5">
            <p class="subtitle-1 red--text font-weight-bold">お問い合わせが完了しました。担当者からのご連絡をお待ちください。</p>
          </v-container>
        <v-container class="my-5">
          <v-row justify="center" dense>
            <v-col cols="12" sm="10">
              <span class="title font-weight-bold pr-1">あなたの条件にマッチする物件</span>
            </v-col>
            <v-col cols="12" sm="10" class="mb-4">
              <v-divider />
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" md="5" sm="10" v-for="index in 6" :key="index">
              <v-card
                class="mx-auto"
                max-width="270"
              >
                <v-img
                  src="https://www.mitsui-chintai.co.jp/resident/original/toranomon_hills/img/top01.jpg"
                  height="200px"
                ></v-img>
                <v-card-title>
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
                <v-card-actions>
                  <v-spacer />
                  <v-btn
                    to="/properties/1"
                    color="orange"
                    text
                  >
                    詳しく見る
                  </v-btn>

                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

        <v-divider />

        <v-card-actions>
          <v-btn color="primary" text @click="dialog = false">
            閉じる
          </v-btn>
          <v-spacer />
          <v-btn
            to="/properties/"
            color="primary"
            text
          >
            他の物件を見る
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    }
  },
  methods: {
    show() {
      this.dialog = true
    }
  }
}
</script>