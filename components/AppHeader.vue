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
  <section id="navbar" class="flex justify-normal sticky top-0 z-50">
    <div class="container mx-auto py-6">
      <div
        class="mx-auto md:w-full w-80 md:h-16 h-10 bg-green-950 rounded-full md:flex md:justify-between md:items-center"
      >
        <div class="flex md:px-6" id="judul-kiri">
          <div
            class="text-white md:text-3xl text-2xl md:justify-start font-black items-center md:flex"
          >
            <NuxtImg
              src="https://raw.githubusercontent.com/rstubryan/assets/master/gambar/lawaklu/logo.png"
              class="md:w-16 md:h-16 w-10 h-10"
            />
            <NuxtLink
              to="/"
              target="_blank"
              class="md:block hidden font-raleway"
              >Lawaklu</NuxtLink
            >
            <div
              class="md:border-r-8 md:border-lime-400 md:h-16 md:ml-12 md:block hidden"
              id="border"
            ></div>
          </div>
        </div>
        <div class="flex font-raleway" id="menu-tengah">
          <div
            class="md:w-full md:h-5 md:justify-start md:items-start md:flex md:gap-10 hidden"
          >
            <ul class="md:flex gap-12">
              <li
                :class="{
                  'font-semibold ml-4 md:ml-0 md:mr-4 text-lime-400 border-b border-lime-400':
                    $route.path === '/',
                  'font-semibold md:mr-4 text-white ': $route.path !== '/',
                }"
              >
                <NuxtLink to="/" target="">Home</NuxtLink>
              </li>
              <li
                :class="{
                  'font-semibold md:mr-4 text-lime-400  border-b border-lime-400':
                    $route.path === '/livestreaming',
                  'font-semibold md:mr-4 text-white ':
                    $route.path !== '/livestreaming',
                }"
              >
                <NuxtLink to="/livestreaming" target=""
                  >Live Streaming</NuxtLink
                >
              </li>
              <li
                :class="{
                  'font-semibold md:mr-4 text-lime-400 border-b border-lime-400':
                    $route.path === '/forum',
                  'font-semibold md:mr-4 text-white': $route.path !== '/forum',
                }"
              >
                <NuxtLink to="/forum" target="">Forum</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex mr-6 font-raleway" id="button-kanan">
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

<style>
.font-raleway {
  font-family: "Raleway", sans-serif;
}
</style>
