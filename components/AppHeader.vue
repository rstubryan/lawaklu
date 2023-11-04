<script setup>
const items = [
  [
    {
      label: "Profile",
      avatar: {
        src: "https://avatars.githubusercontent.com/u/96672455?v=4",
      },
    },
  ],
  [
    {
      label: "Logout",
      icon: "i-heroicons-arrow-left-20-solid",
    },
  ],
];
</script>

<template>
  <section id="navbar" class="flex justify-normal">
    <div class="container mx-auto mt-6">
      <div
        class="w-full h-16 bg-green-950 rounded-full justify-between items-center inline-flex"
      >
        <div class="flex ml-6" id="judul-kiri">
          <div
            class="text-white text-3xl justify-start font-semibold items-center inline-flex"
          >
            <NuxtLink to="/login" target="_blank">Lawaklu</NuxtLink>
            <div
              class="border-r-8 border-lime-400 h-16 ml-12"
              id="border"
            ></div>
          </div>
        </div>
        <div class="flex" id="menu-tengah">
          <div class="w-96 h-5 justify-start items-start gap-10 inline-flex">
            <div class="ml-4 mr-4 text-lime-400 hover:underline">
              <NuxtLink to="/login" target="_blank">Home</NuxtLink>
            </div>
            <div class="mr-4 hover:underline">
              <NuxtLink to="/register" target="_blank">Category</NuxtLink>
            </div>
            <div class="mr-4 hover:underline">
              <NuxtLink to="/register" target="_blank">Category 2</NuxtLink>
            </div>
          </div>
        </div>
        <div class="flex mr-6" id="button-kanan">
          <div class="w-64 h-11 justify-end items-center gap-3.5 inline-flex">
            <NuxtLink to="/profile">
              <UDropdown
                color="primary"
                variant="solid"
                :items="items"
                :popper="{ placement: 'bottom-start' }"
              >
                <UButton
                  label="Profile"
                  color="primary"
                  variant="ghost"
                  trailing-icon="i-heroicons-chevron-down-20-solid"
                />
              </UDropdown>
            </NuxtLink>
            <NuxtLink to="/profile">
              <UDropdown
                color="primary"
                variant="solid"
                :items="items"
                :popper="{ placement: 'bottom-start' }"
              >
                <UButton
                  label="Profile"
                  color="primary"
                  variant="ghost"
                  trailing-icon="i-heroicons-chevron-down-20-solid"
                />
              </UDropdown>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
