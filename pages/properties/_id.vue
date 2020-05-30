<template>
  <v-container fluid>
    <custom-breadcrumbs justify-start :breadcrumbs="breadcrumbs" />
    <v-row justify="center">
      <v-col cols="12" md="10" sm="10">
        <v-card
          class="mx-auto"
        >
        <v-carousel class="hidden-sm-and-down" height="430">
          <v-carousel-item
            v-for="(image,i) in images"
            :key="i"
            :src="image.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
          >
            <v-btn color="error" dark large class="ma-3" @click="showContactForm">今すぐお問い合わせ</v-btn>
          </v-carousel-item>
        </v-carousel>
        <v-carousel class="hidden-md-and-up" height="230">
          <v-carousel-item
            v-for="(image,i) in images"
            :key="i"
            :src="image.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
          >
            <v-btn color="error" dark small class="ma-2" @click="showContactForm">今すぐお問い合わせ</v-btn>
          </v-carousel-item>
        </v-carousel>
        <v-card-text>
          <v-row justify="center" dense>
            <v-col cols="12" sm="11">
              <v-chip small label color="orange white--text">
                物件名
              </v-chip>
            </v-col>
            <v-col cols="12" sm="11">
              <span class="headline">
                日本橋八重洲デュープレックスポーション 12階/-
              </span>
            </v-col>
          </v-row>
          <v-row justify="center" dense>
            <v-col cols="12" sm="11" class="mt-2">
              <v-chip small label color="orange white--text">
                賃貸（管理費)
              </v-chip>
            </v-col>
            <v-col cols="12" sm="11">
              <span class="title">19.7万円（13,000円）</span>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" sm="11" class="mt-2">
              <v-chip small label color="orange white--text">
                所在地
              </v-chip>
            </v-col>
            <v-col cols="12" sm="11" class="my-0 py-0">
              <span class="subtitle-2">東京都中央区勝どき5丁目</span>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" sm="11" class="mt-2">
              <v-chip small label color="orange white--text">
                交通
              </v-chip>
            </v-col>
            <v-col cols="12" sm="11" class="my-0 py-0">
              <span class="subtitle-2">
                都営大江戸線/勝どき駅/徒歩6分・東京メトロ有楽町線/月島駅/徒歩20分・都営大江戸線/汐留駅/徒歩23分
              </span>
            </v-col>
          </v-row>
          <v-row justify="center">
              <v-col cols="12" sm="12">
                <v-chip small v-for="tag in tags" :key="tag" class="ma-2">
                  #{{ tag }}
                </v-chip>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" md="10" sm="10">
        <v-btn color="error" x-large block @click="showContactForm">今すぐお問い合わせ(無料)</v-btn>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" md="5" sm="10">
        <v-card min-height="150px">
          <v-system-bar color="primary" dark>
            <span class="ma-1">物件詳細情報</span>
          </v-system-bar>
          <v-list>
            <v-list-item
              v-for="item in basicInfo"
              :key="item.title"
            > 
              <v-list-item-content>
                <v-list-item-title v-html="item.title"></v-list-item-title>
                <v-list-item-subtitle v-html="item.content"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="12" md="5" sm="10">
        <v-card min-height="150px">
          <v-system-bar color="primary" dark>
            <span class="ma-1">この物件のこだわり/設備・条件</span>
          </v-system-bar>
          <v-list>
            <v-list-item
              v-for="item in additionalInfo"
              :key="item.title"
            > 
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ item.content }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="10" sm="10">
        <v-btn color="error" x-large block @click="showContactForm">今すぐお問い合わせ(無料)</v-btn>
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
      tags: ["セキュリティ対策", "24時間ゴミ出し可", "新宿まで乗換なし", "渋谷まで乗換なし", "東京まで乗換なし", "洋室で暮らしたい", "人気のこだわり条件", "浴室追焚き可"],
      basicInfo: [
        {
          title: "賃料（管理費等）",
          content: "19万円 （15,000円）"
        },
        {
          title: "敷金 / 礼金",
          content: "1ヶ月 / 1ヶ月"
        },
        {
          title: "その他費用",
          content: "鍵交換費用：22,000円、24ｈサポート：16,500円"
        },
        {
          title: "建物構造",
          content: "SRC(鉄骨鉄筋コンクリート)"
        },
        {
          title: "所在階 / 階数",
          content: "12階 / 15階建 (地下1階)"
        },
        {
          title: "駐車場",
          content: "無"
        },
        {
          title: "総戸数",
          content: "40戸"
        }
      ],
      additionalInfo: [
        {
          title: "この物件のこだわり",
          content: "2階以上の物件・オートロック・エアコン・バス・トイレ別"
        },
        {
          title: "位置",
          content: "角部屋"
        },
        {
          title: "キッチン/バス・トイレ",
          content: "コンロ二口、システムキッチン、食器洗い乾燥機、給湯"
        },
        {
          title: "その他",
          content: "ごみ出し24時間OK 、 デザイナーズ 、 分譲賃貸"
        }
      ],
      images: [
        {
          src: 'https://www.mitsui-chintai.co.jp/resident/original/toranomon_hills/img/top01.jpg',
        },
        {
          src: 'https://www.mitsui-chintai.co.jp/resident/original/toranomon_hills/images/01.jpg',
        },
        {
          src: 'https://www.mitsui-chintai.co.jp/resident/original/toranomon_hills/images/02.jpg',
        },
        {
          src: 'https://www.mitsui-chintai.co.jp/resident/original/toranomon_hills/images/03.jpg',
        },
        {
          src: 'https://www.mitsui-chintai.co.jp/resident/original/toranomon_hills/images/04.jpg',
        },
      ],
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
          disabled: false,
          href: "/properties/"
        },
        {
          text: "詳細",
          disabled: true,
          href: "/properties/1"
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