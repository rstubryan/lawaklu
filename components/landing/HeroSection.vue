<template>
  <div class="container mx-auto">
    <div class="relative flex flex-row py-20">
      <div
        class="justify-start w-[600px] text-green-950 text-6xl font-extrabold font-raleway"
      >
        <h2>
          <span class="bg-primary">Lawaklu</span> hadir dengan
          <span class="bg-primary">Inovasi</span> baru
        </h2>
        <div
          class="py-8 w-[550px] text-green-950 text-lg font-medium font-raleway leading-loose text-justify"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, a
            necessitatibus officia fuga repellat laudantium eius voluptatibus
            dicta aliquid similique fugiat reprehenderit atque veritatis
            accusamus et illum rem vel accusantium!
          </p>
          <div class="flex py-8">
            <NuxtLink to="/addmemes" class="hidden md:block">
              <UButton
                icon="i-heroicons-arrow-right-20-solid"
                size="xl"
                color="primary"
                variant="solid"
                label="lorem"
                :trailing="false"
              />
            </NuxtLink>
            <NuxtLink to="/addmemes" class="hidden md:block ml-4">
              <UButton
                icon="i-heroicons-arrow-left-20-solid"
                size="xl"
                color="white"
                variant="solid"
                label="lorem"
                :trailing="false"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="flex flex-row">
        <div class="relative">
          <div class="z-10">
            <NuxtImg
              src="https://raw.githubusercontent.com/rstubryan/assets/master/gambar/lawaklu/ketawa.png"
              class="rounded-full w-96 h-96 bg-primary"
            />
          </div>
          <div
            class="absolute top-0 left-0 w-96 h-96 rounded-full bg-gradient-to-l from-primary opacity-60 flex flex-row ml-20 hover:opacity-0 transition duration-500 ease-in-out"
          ></div>
        </div>
      </div>
      <div class="flex flex-row mx-auto">
        <NuxtImg
          src="https://raw.githubusercontent.com/rstubryan/assets/master/gambar/lawaklu/kebawah.png"
          class="w-96 h-96"
        />
      </div>
    </div>
  </div>
</template>

<style>
.font-raleway {
  font-family: "Raleway", sans-serif;
}
</style>
