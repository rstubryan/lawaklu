<script setup>
const items = [
  {
    label: "Getting Started",
    icon: "i-heroicons-information-circle",
    defaultOpen: true,
    color: "black",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
  },
  {
    label: "Installation",
    icon: "i-heroicons-arrow-down-tray",
    disabled: false,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
  },
];
</script>

<template>
  <div class="mx-auto container w-[800px]"> 
    <UAccordion :items="items" :ui="{ wrapper: 'bg-gray-300 text-black' }"/>
  </div>
</template>
