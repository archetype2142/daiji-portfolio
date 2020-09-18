<template>
  <div id="app">
    <Navbar />
    <MainComponent />
    <Experience />
    <Skills />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import MainComponent from './components/MainComponent.vue'
import Experience from './components/Experience.vue'
import Skills from './components/Skills.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    MainComponent,
    Experience,
    Skills,
    Footer
  }
}
</script>

<style>
</style>
