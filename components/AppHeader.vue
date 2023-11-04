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
  <section id="navbar" class="flex justify-normal sticky top-0">
    <div class="container mx-auto mt-6">
      <div
        class="mx-auto md:w-full w-80 md:h-16 h-10 bg-green-950 rounded-full md:justify-between md:items-center md:inline-flex"
      >
        <div class="flex md:ml-6" id="judul-kiri">
          <div
            class="text-white md:text-3xl text-2xl md:justify-start font-semibold items-center md:inline-flex mx-auto"
          >
            <NuxtLink to="/login" target="_blank">Lawaklu</NuxtLink>
            <div
              class="md:border-r-8 md:border-lime-400 md:h-16 md:ml-12 md:block hidden"
              id="border"
            ></div>
          </div>
        </div>
        <div class="flex" id="menu-tengah">
          <div
            class="md:w-96 md:h-5 md:justify-start md:items-start md:gap-10 md:inline-flex hidden"
          >
            <div class="font-semibold ml-4 mr-4 text-lime-400 hover:underline">
              <NuxtLink to="/login" target="_blank">Home</NuxtLink>
            </div>
            <div class="font-semibold mr-4 hover:underline">
              <NuxtLink to="/register" target="_blank">Category</NuxtLink>
            </div>
            <div class="font-semibold mr-4 hover:underline">
              <NuxtLink to="/register" target="_blank">Category 2</NuxtLink>
            </div>
          </div>
        </div>
        <div class="flex mr-6" id="button-kanan">
          <div
            class="md:w-64 md:h-11 md:justify-end md:items-center md:gap-3.5 md:inline-flex hidden"
          >
            <NuxtLink to="/addmemes">
              <UButton
                icon="i-heroicons-plus"
                size="sm"
                color="primary"
                square
                variant="solid"
              />
            </NuxtLink>
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
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
