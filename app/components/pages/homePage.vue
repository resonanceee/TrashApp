<template>
  <StackLayout>
    <Label class="homeTitle">Benvenuto, {{ userdata.name }}</Label>
    <Button @tap="logOut">Log out</Button>
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
      userdata: ''
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
