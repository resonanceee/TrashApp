<template>
  <ScrollView class="scrollView">
    <StackLayout class="content">
      <Label class="recycleTitle">Riciclo</Label>
      <Label class="recycleSection">Carta</Label>
      <FlexBoxLayout class="item paper">
        <Label text.decode="&#xf1d8;" class="fas"></Label>
        <FlexboxLayout class="itemDescr">
          <Label>Foglio • 5g</Label>
        </FlexboxLayout>
      </FlexBoxLayout>
      <FlexBoxLayout class="item paper">
        <Label text.decode="&#xf518;" class="fas"></Label>
        <FlexboxLayout class="itemDescr">
          <Label>Volantino • 15g</Label>
        </FlexboxLayout>
      </FlexBoxLayout>
      <Label class="recycleSection">Plastica</Label>
      <FlexBoxLayout class="item plastic">
        <Label text.decode="&#xf290;" class="fas"></Label>
        <FlexboxLayout class="itemDescr">
          <Label>Busta • 7g</Label>
        </FlexboxLayout>
      </FlexBoxLayout>
      <FlexBoxLayout class="item plastic">
        <Label text.decode="&#xf72f;" class="fas"></Label>
        <FlexboxLayout class="itemDescr">
          <Label>Bottiglia • 17g</Label>
        </FlexboxLayout>
      </FlexBoxLayout>
      <FlexBoxLayout class="item plastic">
        <Label text.decode="&#xf2e7;" class="fas"></Label>
        <FlexboxLayout class="itemDescr">
          <Label>Posate usa e getta • 25g</Label>
        </FlexboxLayout>
      </FlexBoxLayout>
      <Label class="recycleSection">Cartone</Label>
      <FlexBoxLayout class="item cardboard">
        <Label text.decode="&#xf466;" class="fas"></Label>
        <FlexboxLayout class="itemDescr">
          <Label>Scatola • 30g</Label>
        </FlexboxLayout>
      </FlexBoxLayout>
      <FlexBoxLayout class="item cardboard">
        <Label text.decode="&#xf818;" class="fas"></Label>
        <FlexboxLayout class="itemDescr">
          <Label>Scatola della pizza • 65g</Label>
        </FlexboxLayout>
      </FlexBoxLayout>
      <Label class="recycleSection">Altro</Label>
      <FlexBoxLayout class="item other">
        <Label text.decode="&#xf059;" class="fas"></Label>
        <FlexboxLayout class="itemDescr">
          <Label>Altro</Label>
        </FlexboxLayout>
      </FlexBoxLayout>
    </StackLayout>
  </ScrollView>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

<style scoped>
@import url('../../styles/pages/recyclePage.scss');
</style>
