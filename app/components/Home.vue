<template>
  <Page actionBarHidden="true" class="navPage">
    <MDBottomNavigation selectedIndex="0" swipeEnabled="true">
      <!-- The bottom tab UI is created via TabStrip (the containier) and TabStripItem (for each tab)-->
      <MDTabStrip>
        <MDTabStripItem>
          <Label class="fas" text.decode="&#xf015;" />
        </MDTabStripItem>
        <MDTabStripItem>
          <Label text.decode="&#xf1b8;" class="fas"></Label>
        </MDTabStripItem>
        <MDTabStripItem>
          <Label text.decode="&#xe561;" class="fas"></Label>
        </MDTabStripItem>
        <MDTabStripItem>
          <Label text.decode="&#xf007;" class="fas"></Label>
        </MDTabStripItem>
      </MDTabStrip>

      <!-- The number of TabContentItem components should corespond to the number of TabStripItem components -->
      <MDTabContentItem>
        <homePage/>
      </MDTabContentItem>
      <MDTabContentItem>
        <recyclePage />
      </MDTabContentItem>
      <MDTabContentItem>
        <rankingPage/>
      </MDTabContentItem>
      <MDTabContentItem>
        <accountPage :userid="userData.id" v-if="userData != ''"/>
      </MDTabContentItem>
    </MDBottomNavigation>
  </Page>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';
import BottomNavigation from '@nativescript-community/ui-material-bottom-navigation/vue';

import * as AppSettings from '@nativescript/core/application-settings';

/* import account pages */
import accountPage from './pages/accountPage.vue';
import recyclePage from './pages/recyclePage.vue';
import homePage from './pages/homePage.vue';
import rankingPage from './pages/rankingPage.vue';
export default Vue.extend({
  data() {
    return {
      userData: '',
    };
  },
  mounted() {
    this.userData = JSON.parse(AppSettings.getString('userdata'));
  },
  components: {
    accountPage,
    recyclePage,
    homePage,
    rankingPage
  }
});

Vue.use(BottomNavigation);
</script>