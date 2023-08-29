<template>
  <StackLayout class="content">
    <Label class="rankingTitle">Classifiche</Label>
    <Label class="rankingSection">Tipo di classifica</Label>
    <FlexboxLayout class="lbTypes">
      <FlexboxLayout class="lbType" :class="{ active: lbType === 'month' }" @tap="changeLbType('month')">
        <Label>Mensile</Label>
      </FlexboxLayout>
      <FlexboxLayout class="lbType" :class="{ active: lbType === 'allTime' }" @tap="changeLbType('allTime')">
        <Label>Tutti i tempi</Label>
      </FlexboxLayout>
    </FlexboxLayout>
    <Label class="rankingSection" style="margin-top: 20px"><Span>Classifica </Span> <Span
        style="text-decoration: underline">{{ lbTypeNames[lbType] }}</Span></Label>
    <StackLayout class="lbContainer">
      <FlexBoxLayout class="lbLegend">
        <FlexBoxLayout>
          <Label class="lbRank" style="font-weight: normal">Rank</Label>
          <Label class="lbName">Name</Label>
        </FlexBoxLayout>
        <FlexBoxLayout>
          <Label col="0" text.decode="&#xf1ea;" class="fas lbStat"
            style="background-color: rgba(161, 165, 42, 0.226)"></Label>
          <Label col="0" text.decode="&#xe4c5;" class="fas lbStat"
            style="background-color: rgba(42, 147, 165, 0.226)"></Label>
          <Label col="0" text.decode="&#xf468;" class="fas lbStat"
            style="background-color: rgba(165, 42, 42, 0.163); margin-right: 0;"></Label>
        </FlexBoxLayout>
      </FlexBoxLayout>
      <FlexBoxLayout class="lbPlayer" v-for="(player, index) in lbData" :key="player.id">
        <FlexBoxLayout>
          <Label class="lbRank">#{{ index + 1 }}</Label>
          <Label class="lbName">{{ player.user.name }}</Label>
        </FlexBoxLayout>
        <FlexBoxLayout>
          <Label class="lbStat">{{ player.stats.paper.value }}g</Label>
          <Label class="lbStat">{{ player.stats.plastic.value }}g</Label>
          <Label class="lbStat">{{ player.stats.cardboard.value }}g</Label>
        </FlexBoxLayout>
      </FlexBoxLayout>
    </StackLayout>
  </StackLayout>
</template>

<script lang="ts">
import Vue from 'vue';
import { Http, HttpContent, HttpResponse } from '@nativescript/core';
import * as AppSettings from "@nativescript/core/application-settings";
export default Vue.extend({
  data() {
    return {
      lbType: 'month',
      lbTypeNames: {
        month: 'mensile',
        allTime: 'di tutti i tempi'
      },
      lbData: {}
    };
  },
  mounted() {
    setInterval(() => {
      this.getLeaderboardData();
    }, 200)
  },
  methods: {
    changeLbType(to: string) {
      this.lbType = to;
    },
    async getLeaderboardData() {
      Http.request({
        url: "https://api.trashtracer.lol/lb",
        method: "GET",
        headers: {
          auth: AppSettings.getString("token"),
          type: this.lbType
        }
      }).then((res: HttpResponse) => {
        this.lbData = JSON.parse(res.content);
      })
    }
  }
});
</script>

<style scoped>
@import url('../../styles/pages/rankingPage.scss');
</style>
