<script setup>
import { RouterView } from 'vue-router'
import HeaderVue from './components/Header.vue';
import FooterVue from './components/Footer.vue';
</script>

<template>
  <HeaderVue />
  <RouterView />
  <FooterVue />
</template>

<style>
.boxShadow {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, .5);
}
</style>
