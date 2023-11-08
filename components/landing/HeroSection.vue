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
        <div class="relative">
          <div class="z-10">
            <NuxtImg
              src="/ketawa.png"
              class="rounded-full w-96 h-96 bg-lime-400"
            />
          </div>
        </div>div
          <div
            class="absolute top-0 left-0 w-96 h-96 rounded-full bg-gradient-to-l from-lime-400 opacity-60 flex flex-row ml-20 hover:opacity-0 transition duration-500 ease-in-out"
          ></div>
        </div>
      </div>
      <div class="flex flex-row mx-auto">
        <NuxtImg src="/kebawah.png" class="w-96 h-96" />
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
