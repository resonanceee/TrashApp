<template>
  <StackLayout>
    <Label class="homeTitle">Benvenuto, {{ userdata.name }}</Label>
    <StackLayout class="homeChart">
      <Label class="chartTitle">CO2 risparmiata questa settimana</Label>
      <Label class="chartUnit">Unitá di misura: Kg</Label>
      <RadCartesianChart>
        <CategoricalAxis v-tkCartesianHorizontalAxis />
        <LinearAxis v-tkCartesianVerticalAxis label="test"/>
        <LineSeries v-tkCartesianSeries :items="chartDataCO2" categoryProperty="Country" valueProperty="Amount" />
      </RadCartesianChart>
    </StackLayout>
    <StackLayout class="homeChart">
      <Label class="chartTitle">Massa risparmiata questa settimana</Label>
      <Label class="chartUnit">Unitá di misura: Kg</Label>
      <RadCartesianChart>
        <CategoricalAxis v-tkCartesianHorizontalAxis />
        <LinearAxis v-tkCartesianVerticalAxis label="test"/>
        <LineSeries v-tkCartesianSeries :items="chartDataMASS" categoryProperty="Country" valueProperty="Amount" />
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
        { Country: 'Lun', Amount: 29 },
        { Country: 'Mar', Amount: 32 },
        { Country: 'Mer', Amount: 33 },
        { Country: 'Gio', Amount: 12 },
        { Country: 'Ven', Amount: 34 },
        { Country: 'Sab', Amount: 22 },
        { Country: 'Dom', Amount: 22 }
      ],
      chartDataMASS: [
        { Country: 'Lun', Amount: 46 },
        { Country: 'Mar', Amount: 32 },
        { Country: 'Mer', Amount: 34 },
        { Country: 'Gio', Amount: 12 },
        { Country: 'Ven', Amount: 65 },
        { Country: 'Sab', Amount: 32 },
        { Country: 'Dom', Amount: 20 }
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
