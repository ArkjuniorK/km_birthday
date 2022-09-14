<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Main from "./components/Main.vue";
</script>

<template>
  <!-- section for audio loop -->
  <section class="absolute">
    <audio autoplay controls preload="metadata" loop>
      <source src="./assets/audio.mp3" type="audio/mpeg" />
    </audio>
  </section>

  <!-- main view -->
  <main
    class="relative h-screen w-full overflow-hidden"
    style="background-color: #3a71b6"
  >
    <div class="absolute top-0 block w-full">
      <Header />
    </div>
    <img
      class="absolute w-full p-14 -translate-y-40 h-full animate-ballons"
      src="./assets/Balloons.svg"
      alt="ballons"
    />
    <img
      class="absolute w-full h-full animate-clouds"
      src="./assets/Clouds.svg"
      alt="clouds"
    />
    <img
      class="absolute w-full h-full p-10 animate-decorator"
      src="./assets/Decorators.svg"
      alt="decorations"
    />
    <img
      class="absolute w-full h-full p-24 animate-pulse"
      src="./assets/Stars.svg"
      alt="stars"
    />
    <div class="flex z-50 h-full items-center justify-center">
      <Main class="mb-48" />
    </div>
    <div class="absolute bottom-0 block w-full">
      <Footer />
    </div>
  </main>
</template>

