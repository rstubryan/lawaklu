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
        class="mx-auto md:w-full w-80 md:h-16 h-10 bg-green-950 rounded-full md:flex md:justify-between md:items-center"
      >
        <div class="flex md:ml-6" id="judul-kiri">
          <div
            class="text-white md:text-3xl text-2xl md:justify-start font-semibold items-center md:flex"
          >
            <NuxtLink to="/login" target="_blank" class="md:block hidden"
              >Lawaklu</NuxtLink
            >
            <div
              class="md:border-r-8 md:border-lime-400 md:h-16 md:ml-12 md:block hidden"
              id="border"
            ></div>
          </div>
        </div>
        <div class="flex" id="menu-tengah">
          <div
            class="md:w-full md:h-5 md:justify-start md:items-start md:flex md:gap-10 md:block hidden"
          >
            <ul class="md:flex gap-12">
              <li
                class="font-semibold ml-4 md:ml-0 md:mr-4 text-lime-400 hover:underline"
              >
                <NuxtLink to="/login" target="_blank">Home</NuxtLink>
              </li>
              <li class="font-semibold md:mr-4 text-white hover:underline">
                <NuxtLink to="/register" target="_blank">Category</NuxtLink>
              </li>
              <li class="font-semibold md:mr-4 text-white hover:underline">
                <NuxtLink to="/register" target="_blank">Category 2</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex mr-6" id="button-kanan">
          <div
            class="md:w-full md:h-11 md:justify-end md:items-center md:flex md:gap-3.5"
          >
            <NuxtLink to="/addmemes" class="hidden md:block">
              <UButton
                icon="i-heroicons-plus"
                size="sm"
                color="white"
                square
                variant="solid"
              />
            </NuxtLink>
            <div class="">
              <UDropdown
                :items="items"
                :popper="{ placement: 'bottom-start' }"
                :ui="{ background: 'bg-green-950 text-lime-400' }"
              >
                <UButton
                  label="Profile"
                  color="white"
                  variant="ghost"
                  trailing-icon="i-heroicons-chevron-down-20-solid"
                />
              </UDropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
