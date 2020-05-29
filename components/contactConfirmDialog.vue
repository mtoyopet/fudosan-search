<template>
  <v-container>
    <v-dialog v-model="dialog" width="700">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          内容の確認
        </v-card-title>
        <v-container>
          <v-row justify="center" dense>
            <v-col cols="12" sm="10">
              <span class="title font-weight-bold pr-1">お問い合わせ内容</span>
            </v-col>
            <v-col cols="12" sm="10" class="mb-4">
              <v-divider />
            </v-col>
          </v-row>
          <v-row justify="center" dense>
            <v-col cols="12" sm="10">
              <v-chip small label color="orange white--text" class="font-weight-bold">お問い合わせ内容</v-chip>
            </v-col>
            <v-col class="mt-0 pt-0" cols="12" sm="10">
              最新の空室状況を知りたい
            </v-col>
          </v-row>
          <v-row class="mt-3" justify="center" dense>
            <v-col cols="12" sm="10">
              <v-chip small label color="orange white--text" class="font-weight-bold">氏名</v-chip>
            </v-col>
            <v-col cols="12" sm="10" class="pt-0">
              山田太郎
            </v-col>
          </v-row>
          <v-row class="mt-3" justify="center" dense>
            <v-col cols="12" sm="10">
              <v-chip small label color="orange white--text" class="font-weight-bold">お電話番号</v-chip>
            </v-col>
            <v-col cols="12" sm="10" class="pt-0">
              080-1234-5678
            </v-col>
          </v-row>
          <v-row class="mt-3" justify="center" dense>
            <v-col cols="12" sm="10">
              <v-chip small label color="orange white--text" class="font-weight-bold">メールアドレス</v-chip>
            </v-col>
            <v-col cols="12" sm="10" class="pt-0">
              text@test.com
            </v-col>
          </v-row>
          <v-row class="mt-3" justify="center" dense>
            <v-col cols="12" sm="10">
              <v-chip small label color="orange white--text" class="font-weight-bold">備考欄</v-chip>
            </v-col>
            <v-col cols="12" sm="10" class="pt-0">
              メールでの連絡を希望します
            </v-col>
          </v-row>
        </v-container>

        <v-divider />

        <v-card-actions>
          <v-btn color="primary" text @click="dialog = false">
            キャンセル
          </v-btn>
          <v-spacer />
          <v-btn
            color="primary"
            text
            @click="showContactCompleteDialog"
          >
            送信
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
    },
    showContactCompleteDialog () {
      this.dialog = false
      this.$emit('show-contact-complete-dialog')
    }
  }
}
</script>