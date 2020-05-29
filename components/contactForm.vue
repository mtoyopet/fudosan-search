<template>
  <v-container>
    <v-dialog v-model="dialog" width="700">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          お問い合わせ
        </v-card-title>
        <v-container>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-row justify="center" dense>
              <v-col cols="12" sm="10">
                <span class="title font-weight-bold pr-1">お客様の情報</span>
              </v-col>
            </v-row>
            <v-row justify="center" dense>
              <v-col cols="12" sm="10" class="mb-4">
                <v-divider />
              </v-col>
            </v-row>
            <v-row justify="center" dense>
              <v-col cols="12" sm="10">
                <span class="pr-1">お問い合わせ内容</span>
                <v-chip x-small label color="orange white--text" class="font-weight-bold">
                  必須
                </v-chip>
                <p class="caption mb-1 pb-0">複数選択可</p>
              </v-col>
            </v-row>
            <v-row justify="center" dense>
              <v-col class="mt-0 pt-0" cols="12" sm="10">
                <v-radio-group 
                  v-model="distance" 
                  :mandatory="false"
                  :multiple="true"
                  row
                  class="mt-0"
                  >
                  <v-radio label="最新の空室状況を知りたい" value="指定なし"></v-radio>
                  <v-radio label="物件の詳しい情報を知りたい" value="1分以内"></v-radio>
                  <v-radio label="物件を実際に見たい" value="5分以内"></v-radio>
                  <v-radio label="入居に関して相談したい" value="7分以内"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
            <v-row justify="center" dense>
              <v-col cols="12" sm="10">
                <span class="pr-1">氏名</span>
                <v-chip x-small label color="orange white--text" class="font-weight-bold">
                  必須
                </v-chip>
              </v-col>
            </v-row>
            <v-row justify="center" dense>
              <v-col cols="12" sm="10" class="pt-0">
                <v-text-field
                  outlined
                  required
                  dense
                  color="theme-color"
                  placeholder="山田 太郎"
                />
              </v-col>
            </v-row>
            <v-row justify="center" dense>
              <v-col cols="12" sm="10">
                <span class="pr-1">お電話番号</span>
                <v-chip x-small label color="orange white--text" class="font-weight-bold">
                  必須
                </v-chip>
              </v-col>
            </v-row>
            <v-row justify="center" dense>
              <v-col cols="12" sm="10" class="pt-0">
                <v-text-field
                  outlined
                  required
                  dense
                  color="theme-color"
                  placeholder="080-1234-5656"
                />
              </v-col>
            </v-row>
            <v-row justify="center" dense>
              <v-col cols="12" sm="10">
                <span class="pr-1">メールアドレス</span>
                <v-chip x-small label color="orange white--text" class="font-weight-bold">
                  必須
                </v-chip>
              </v-col>
            </v-row>
            <v-row justify="center" dense>
              <v-col cols="12" sm="10" class="pt-0">
                <v-text-field
                  outlined
                  required
                  dense
                  color="theme-color"
                  placeholder="test@test.com"
                />
              </v-col>
            </v-row>
            <v-row justify="center" dense>
              <v-col cols="12" sm="10">
                <span class="pr-1">備考欄</span>
                <v-chip x-small label color="grey white--text" class="font-weight-bold">
                  任意
                </v-chip>
                <p class="caption mb-1">ご希望の連絡方法・時間帯、見学希望日時、希望条件、質問などをご記入ください。</p>
              </v-col>
            </v-row>
            <v-row justify="center" dense>
              <v-col cols="12" sm="10" class="pt-0">
                <v-textarea
                  outlined
                  required
                  dense
                  color="theme-color"
                  rows="3"
                />
              </v-col>
            </v-row>
          </v-form>
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
            @click="showContactConfirmDialog"
          >
            内容を確認する
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
      rent: ['3.0万円','3.5万円','4.0万円','4.5万円','5.0万円','5.5万円','6.0万円','6.5万円','7.0万円','7.5万円','8.0万円'],
      reikin: false,
      distance: '指定なし',
      year: '指定なし',
    }
  },
  methods: {
    show() {
      this.dialog = true
    },
    showContactConfirmDialog () {
      this.dialog = false
      this.$emit('show-contact-confirm-dialog')
    }
  }
}
</script>