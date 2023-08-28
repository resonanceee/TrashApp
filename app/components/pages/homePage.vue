<template>
  <StackLayout>
    <Label class="homeTitle">Benvenuto, {{ userdata.name }}</Label>
    <StackLayout class="homeChart">
      <Label class="chartTitle">CO2 risparmiata questa settimana</Label>
      <Label class="chartUnit">Unitá di misura: Kg</Label>
      <RadCartesianChart>
        <CategoricalAxis v-tkCartesianHorizontalAxis />
        <LinearAxis v-tkCartesianVerticalAxis label="test"/>
        <LineSeries v-tkCartesianSeries :items="chartDataCO2" categoryProperty="Day" valueProperty="Amount" />
      </RadCartesianChart>
    </StackLayout>
    <StackLayout class="homeChart">
      <Label class="chartTitle">Massa risparmiata questa settimana</Label>
      <Label class="chartUnit">Unitá di misura: Kg</Label>
      <RadCartesianChart>
        <CategoricalAxis v-tkCartesianHorizontalAxis />
        <LinearAxis v-tkCartesianVerticalAxis label="test"/>
        <LineSeries v-tkCartesianSeries :items="chartDataMASS" categoryProperty="Day" valueProperty="Amount" />
      </RadCartesianChart>
    </StackLayout>
  </StackLayout>
</template>

<script lang="ts">
import Vue from 'vue';
import * as AppSettings from '@nativescript/core/application-settings';
import { Http, HttpResponse } from '@nativescript/core';

import loaderPage from '../auth/loader.vue';
export default Vue.extend({
  data() {
    return {
      userdata: '',
      chartDataCO2: [
        { Day: 'Lun', Amount: 29 },
        { Day: 'Mar', Amount: 32 },
        { Day: 'Mer', Amount: 33 },
        { Day: 'Gio', Amount: 12 },
        { Day: 'Ven', Amount: 34 },
        { Day: 'Sab', Amount: 22 },
        { Day: 'Dom', Amount: 22 }
      ],
      chartDataMASS: [
        { Day: 'Lun', Amount: 46 },
        { Day: 'Mar', Amount: 32 },
        { Day: 'Mer', Amount: 34 },
        { Day: 'Gio', Amount: 12 },
        { Day: 'Ven', Amount: 65 },
        { Day: 'Sab', Amount: 32 },
        { Day: 'Dom', Amount: 20 }
      ]
    };
  },
  mounted() {
    this.userdata = JSON.parse(AppSettings.getString('userdata'));
  },
  methods: {
    logOut() {
      console.log('logout');
      AppSettings.setString('token', '');
      this.$navigateTo(loaderPage, {
        clearHistory: true
      });
    }
  }
});
</script>

<style scoped>
@import url('../../styles/pages/homePage.scss');
</style>
