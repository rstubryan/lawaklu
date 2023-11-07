<template>
  <div>
    <AppHeader />
    <div class="mt-32">
      <HeroSection />
    </div>
    <div class="mt-16">
      <LogoPadding />
    </div>
    <div class="mt-16">
      <SpacingBar />
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import HeroSection from "@/components/landing_page/HeroSection.vue";
import LogoPadding from "@/components/landing_page/LogoPadding.vue";
import SpacingBar from "@/components/landing_page/SpacingBar.vue";

export default {
  components: {
    AppHeader,
    HeroSection,
    LogoPadding,
    SpacingBar,
  },
};
</script>
