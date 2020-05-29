<template>
  <v-container>
    <custom-breadcrumbs justify-start :breadcrumbs="breadcrumbs" />
    <v-row>
      <v-col cols="12" sm="12" class="d-flex justify-end my-1 py-0">
        <v-btn large class="primary" @click="showContactForm">
          まとめてお問い合わせする（３件）
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="hidden-sm-and-down">
      <v-col cols="12" v-for="item in 3" :key="item" class="mt-5">
        <v-card
        class="d-flex"
        outlined
        flat
        >
          <v-img
            max-width="300"
            class="mr-3"
            src="https://www.mitsui-chintai.co.jp/resident/original/toranomon_hills/img/top01.jpg"
          />
          <v-card-text>
            <v-row>
              <v-col cols="12" md="8" sm="8">
                <v-chip
                  class="mb-1"
                  color="red"
                  text-color="red"
                  small
                  outlined
                >
                  まとめてお問い合わせに追加済み
                </v-chip>
                <p class="title mb-1">
                  日本橋八重洲デュープレックスポーション 12階/-
                </p>
                <v-row>
                  <v-col class="py-0" cols="12" md="10">
                    <p class="caption mb-0">
                      <span class="font-weight-bold">賃料/管理費等</span>　19.7万円 / 13,000円
                    </p>
                    <p class="caption mb-0">
                      <span class="font-weight-bold">所在地</span>　東京都中央区勝どき5丁目
                    </p>
                    <p class="caption mb-0">
                      <span class="font-weight-bold">交通</span>　都営大江戸線 勝どき駅 徒歩6分
                    </p>
                    <p class="caption mb-0">
                      <span class="font-weight-bold">専有面積/間取り</span>　42.04m² / 1LDK
                    </p>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12" md="4" sm="4" class="d-flex justify-end flex-column pr-0">
                <v-btn
                  depressed
                  large
                  color="red"
                  class="mr-3 white--text"
                  @click="showContactForm"
                >
                  今すぐお問い合わせ
                </v-btn>
                <v-btn
                  depressed
                  large
                  color="orange"
                  class="mr-3 mt-3 white--text"
                  to="/properties/1"
                >
                  詳細を見る
                </v-btn>
                <v-btn
                  depressed
                  large
                  color="grey"
                  outlined
                  class="mr-3 mt-3 grey--text"
                >
                  まとめてお問い合せから削除
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
        <v-card
        class="d-flex mt-5"
        outlined
        >
          <v-img
            max-width="300"
            class="mr-3"
            src="https://www.mitsui-chintai.co.jp/resident/original/toranomon_hills/img/top01.jpg"
          />
          <v-card-text>
            <v-row>
              <v-col cols="12" md="8" sm="8">
                <p class="title mb-1">
                  日本橋八重洲デュープレックスポーション 12階/-
                </p>
                <v-row>
                  <v-col class="py-0" cols="12" md="10">
                    <p class="caption mb-0">
                      <span class="font-weight-bold">賃料/管理費等</span>　19.7万円 / 13,000円
                    </p>
                    <p class="caption mb-0">
                      <span class="font-weight-bold">所在地</span>　東京都中央区勝どき5丁目
                    </p>
                    <p class="caption mb-0">
                      <span class="font-weight-bold">交通</span>　都営大江戸線 勝どき駅 徒歩6分
                    </p>
                    <p class="caption mb-0">
                      <span class="font-weight-bold">専有面積/間取り</span>　42.04m² / 1LDK
                    </p>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12" md="4" sm="4" class="d-flex justify-end flex-column pr-0">
                <v-btn
                  depressed
                  large
                  color="red"
                  class="mr-3 white--text"
                  @click="showContactForm"
                >
                  今すぐお問い合わせ
                </v-btn>
                <v-btn
                  depressed
                  large
                  color="orange"
                  class="mr-3 mt-3 white--text"
                  to="/properties/1"
                >
                  詳細を見る
                </v-btn>
                <v-btn
                  depressed
                  large
                  color="red"
                  class="mr-3 mt-3 red--text"
                  outlined
                >
                  まとめてお問い合せに追加
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="start" class="hidden-md-and-up">
      <v-col cols="12" md="4" sm="10" v-for="index in 3" :key="index">
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
            <v-col cols="12" md="4" sm="4" class="d-flex justify-end flex-column pr-0">
              <v-btn
                depressed
                large
                color="red"
                class="mr-3 white--text"
                @click="showContactForm"
              >
                今すぐお問い合わせ
              </v-btn>
              <v-btn
                depressed
                large
                color="orange"
                class="mr-3 mt-3 white--text"
                to="/properties/1"
              >
                詳細を見る
              </v-btn>
              <v-btn
                depressed
                large
                color="red"
                class="mr-3 mt-3 red--text"
                outlined
              >
                まとめてお問い合せに追加
              </v-btn>
            </v-col>
          </v-card-actions>
        </v-card>

        <v-card
          class="mx-auto mt-5"
          max-width="344"
        >
          <v-img
            src="https://www.mitsui-chintai.co.jp/resident/original/toranomon_hills/img/top01.jpg"
            height="200px"
          ></v-img>
          <v-chip
            class="ma-2"
            color="red"
            text-color="red"
            small
            outlined
          >
            まとめてお問い合わせに追加済み
          </v-chip>
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
            <v-col cols="12" md="4" sm="4" class="d-flex justify-end flex-column pr-0">
              <v-btn
                depressed
                large
                color="red"
                class="mr-3 white--text"
                @click="showContactForm"
              >
                今すぐお問い合わせ
              </v-btn>
              <v-btn
                depressed
                large
                color="orange"
                class="mr-3 mt-3 white--text"
                to="/properties/1"
              >
                詳細を見る
              </v-btn>
              <v-btn
                depressed
                large
                color="grey"
                class="mr-3 mt-3 grey--text"
                outlined
              >
                まとめてお問い合せから削除
              </v-btn>
            </v-col>
          </v-card-actions>
        </v-card>


      </v-col>
    </v-row>
    <custom-contact-form
      ref="contactForm"
      @show-contact-confirm-dialog="showContactConfirmDialog"
    />
    <custom-contact-confirm-dialog
      ref="contactConfirmDialog"
      @show-contact-complete-dialog="showContactCompleteDialog"
    />
    <custom-contact-complete-dialog
      ref="contactCompleteDialog"
    />
  </v-container>
</template>
<script>
import breadcrumbs from "~/components/breadcrumbs.vue"
import contactForm from "~/components/contactForm.vue"
import contactConfirmDialog from "~/components/contactConfirmDialog.vue"
import contactCompleteDialog from "~/components/contactCompleteDialog.vue"

export default {
  components: {
    "custom-breadcrumbs": breadcrumbs,
    "custom-contact-form": contactForm,
    "custom-contact-confirm-dialog": contactConfirmDialog,
    "custom-contact-complete-dialog": contactCompleteDialog
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
          text: "あとで問い合せ一覧",
          disabled: true,
          href: ""
        }
      ]
    }
  },
  methods: {
    showContactForm() {
      this.$refs.contactForm.show()
    },
    showContactConfirmDialog () {
      this.$refs.contactConfirmDialog.show()
    },
    showContactCompleteDialog () {
      this.$refs.contactCompleteDialog.show()
    },
  }
}
</script>