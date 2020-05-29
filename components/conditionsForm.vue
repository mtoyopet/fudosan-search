<template>
  <v-container>
    <v-dialog v-model="dialog" width="700">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          条件を追加
        </v-card-title>
        <v-container>

          <v-form ref="form" v-model="valid" lazy-validation>
            <v-card outlined>
              <v-container>
                <div class="title">賃料</div>
                <v-row align="center">
                  <v-col class="d-flex" cols="12" sm="4">
                    <v-select
                      :items="rent"
                      label="下限なし"
                      dense
                    ></v-select>
                  </v-col>
                  <v-col class="d-flex" cols="12" sm="4">
                    <v-select
                      :items="rent"
                      label="上限なし"
                      dense
                    ></v-select>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="d-flex mt-0 pt-0" cols="12" sm="4">
                    <v-checkbox
                      v-model="reikin"
                      label="礼金なし"
                    ></v-checkbox>
                  </v-col>
                  <v-col class="d-flex mt-0 pt-0" cols="12" sm="4">
                    <v-checkbox
                      v-model="shikikin"
                      label="敷金なし"
                    ></v-checkbox>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
            <v-card outlined class="mt-5">
              <v-container>
                <v-row align="center">
                  <v-col class="d-flex mb-0 pb-0" cols="12" sm="12">
                    <p class="title">間取り</p>
                  </v-col>
                  <v-col class="d-flex mt-0 pt-0" cols="12" sm="4">
                    <v-checkbox
                      label="ワンルーム"
                    ></v-checkbox>
                  </v-col>
                  <v-col class="d-flex mt-0 pt-0" cols="12" sm="4">
                    <v-checkbox
                      label="1K"
                    ></v-checkbox>
                  </v-col>
                  <v-col class="d-flex mt-0 pt-0" cols="12" sm="4">
                    <v-checkbox
                      label="1DK"
                    ></v-checkbox>
                  </v-col>
                  <v-col class="d-flex mt-0 pt-0" cols="12" sm="4">
                    <v-checkbox
                      label="1LDK"
                    ></v-checkbox>
                  </v-col>
                  <v-col class="d-flex mt-0 pt-0" cols="12" sm="4">
                    <v-checkbox
                      label="2K"
                    ></v-checkbox>
                  </v-col>
                  <v-col class="d-flex mt-0 pt-0" cols="12" sm="4">
                    <v-checkbox
                      label="2DK"
                    ></v-checkbox>
                  </v-col>
                  <v-col class="d-flex mt-0 pt-0" cols="12" sm="4">
                    <v-checkbox
                      label="2LDK"
                    ></v-checkbox>
                  </v-col>
                  <v-col class="d-flex mt-0 pt-0" cols="12" sm="4">
                    <v-checkbox
                      label="3K"
                    ></v-checkbox>
                  </v-col>
                  <v-col class="d-flex mt-0 pt-0" cols="12" sm="4">
                    <v-checkbox
                      label="3DK"
                    ></v-checkbox>
                  </v-col>
                  <v-col class="d-flex mt-0 pt-0" cols="12" sm="4">
                    <v-checkbox
                      label="3LDK"
                    ></v-checkbox>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
            <v-card outlined class="mt-5">
              <v-container>
                <v-row align="center">
                  <v-col class="d-flex mb-0 pb-0" cols="10" sm="12">
                    <p class="title">駅徒歩分</p>
                  </v-col>
                  <v-col class="mt-0 pt-0" cols="10" sm="10">
                    <v-radio-group v-model="distance" :mandatory="false" row>
                      <v-radio label="指定なし" value="指定なし"></v-radio>
                      <v-radio label="1分以内" value="1分以内"></v-radio>
                      <v-radio label="5分以内" value="5分以内"></v-radio>
                      <v-radio label="7分以内" value="7分以内"></v-radio>
                      <v-radio label="10分以内" value="10分以内"></v-radio>
                  </v-radio-group>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
            <v-card outlined class="mt-5">
              <v-container>
                <v-row align="center">
                  <v-col class="d-flex mb-0 pb-0" cols="10" sm="12">
                    <p class="title">築年数</p>
                  </v-col>
                  <v-col class="mt-0 pt-0" cols="10" sm="10">
                    <v-radio-group v-model="year" :mandatory="false" row>
                      <v-radio label="指定なし" value="指定なし"></v-radio>
                      <v-radio label="新築" value="新築"></v-radio>
                      <v-radio label="3年以内" value="3年以内"></v-radio>
                      <v-radio label="5年以内" value="5年以内"></v-radio>
                      <v-radio label="10年以内" value="10年以内"></v-radio>
                      <v-radio label="15年以内" value="15年以内"></v-radio>
                      <v-radio label="20年以内" value="20年以内"></v-radio>
                      <v-radio label="25年以内" value="25年以内"></v-radio>
                      <v-radio label="30年以内" value="30年以内"></v-radio>
                  </v-radio-group>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
            <v-card outlined class="mt-5">
              <v-container>
                <v-row align="center">
                  <v-col class="d-flex mb-0 pb-0" cols="10" sm="12">
                    <p class="title">建物構造</p>
                  </v-col>
                  <v-col class="d-flex mt-0 pt-0" cols="10" sm="3">
                    <v-checkbox
                      label="鉄筋系"
                    ></v-checkbox>
                  </v-col>
                  <v-col class="d-flex mt-0 pt-0" cols="10" sm="3">
                    <v-checkbox
                      label="木造系"
                    ></v-checkbox>
                  </v-col>
                  <v-col class="d-flex mt-0 pt-0" cols="10" sm="3">
                    <v-checkbox
                      label="鉄骨系"
                    ></v-checkbox>
                  </v-col>
                  <v-col class="d-flex mt-0 pt-0" cols="10" sm="3">
                    <v-checkbox
                      label="ブロック・その他"
                    ></v-checkbox>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
            <v-card outlined class="mt-5">
              <v-container>
                <v-row align="center">
                  <v-col class="d-flex mb-0 pb-0" cols="10" sm="12">
                    <p class="title">こだわり条件</p>
                  </v-col>
                  <v-col class="d-flex mt-0 pt-0" cols="10" sm="3">
                    <v-checkbox
                      label="バス・トイレ別"
                    ></v-checkbox>
                  </v-col>
                  <v-col class="d-flex mt-0 pt-0" cols="10" sm="3">
                    <v-checkbox
                      label="２階以上"
                    ></v-checkbox>
                  </v-col>
                  <v-col class="d-flex mt-0 pt-0" cols="10" sm="3">
                    <v-checkbox
                      label="南向き"
                    ></v-checkbox>
                  </v-col>
                  <v-col class="d-flex mt-0 pt-0" cols="10" sm="3">
                    <v-checkbox
                      label="オートロック"
                    ></v-checkbox>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
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
            @click="dialog = false"
          >
            条件を追加する
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
    }
  }
}
</script>