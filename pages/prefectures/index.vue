<template>
  <v-container fluid>
    <custom-breadcrumbs justify-start :breadcrumbs="breadcrumbs" />
    <v-col cols="12" md="12" sm="12">
      <p class="title">都道府県を選択してください</p>
      <v-card flat>
        <v-card-text class="pt-0" v-for="(prefecture, index) in prefectures" :key="index">
          <v-row justify="start">
            <v-col cols="12" sm="12" class="pt-0">
              <p class="subtitle-1 font-weight-bold mb-0">{{ prefecture.area}}</p>
              <v-divider/>
            </v-col>
          </v-row>
          <v-row justify="start">
            <v-col cols="12" md="1" sm="6" class="mt-0 pt-0" v-for="site in prefecture.sites" :key="site.code">
              <v-btn
                to="/prefectures/1"
                text 
                class="mr-2" 
                color="primary"
              >
                {{ site.name }}
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-container>
</template>

<script>
import breadcrumbs from "~/components/breadcrumbs.vue"
import { prefectures } from '~/assets/prefectures_2.js'
export default {
  components: {
    "custom-breadcrumbs": breadcrumbs
  },
  data () {
    return {
      prefectures,
      breadcrumbs: [
        {
          text: "ホーム",
          disabled: false,
          href: "/"
        },
        {
          text: "都道府県選択",
          disabled: true,
          href: "/prefectures"
        }
      ]
    }
  }
}
</script>
