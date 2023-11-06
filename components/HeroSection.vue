<template>
  <div class="container mx-auto">
    <div class="relative flex flex-row">
      <div
        class="justify-start w-[600px] text-green-950 text-6xl font-extrabold font-raleway"
      >
        <h2>
          <span class="bg-lime-400">Lawaklu</span> hadir dengan
          <span class="bg-lime-400">Inovasi</span> baru
        </h2>
        <div
          class="mt-9 w-[550px] text-green-950 text-lg font-medium font-raleway leading-loose"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, a
          necessitatibus officia fuga repellat laudantium eius voluptatibus
          dicta aliquid similique fugiat reprehenderit atque veritatis accusamus
          et illum rem vel accusantium!
        </div>
        <div class="flex flex-row">
          <NuxtLink to="/addmemes" class="hidden md:block">
            <UButton
              icon="i-heroicons-arrow-right-20-solid"
              size="xl"
              color="white"
              variant="solid"
              label="lorem"
              :trailing="true"
            />
          </NuxtLink>
          <NuxtLink to="/addmemes" class="hidden md:block ml-4">
            <UButton
              icon="i-heroicons-arrow-left-20-solid"
              size="xl"
              color="black"
              variant="solid"
              label="lorem"
              :trailing="true"
            />
          </NuxtLink>
        </div>
      </div>
      <div class="flex flex-row">
        <div class="bg-lime-400 w-96 h-96 rounded-full">
          <div
            class="ml-16 bg-lime-400 w-96 h-96 rounded-full opacity-50"
          ></div>
        </div>
        <div class="">
          <NuxtImg src="/ketawa.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.font-lato {
  font-family: "Lato", sans-serif;
}
.font-raleway {
  font-family: "Raleway", sans-serif;
}
</style>
