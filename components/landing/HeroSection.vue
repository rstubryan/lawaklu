<template>
  <div>
    <section id="hero" class="container mx-auto">
      <div class="relative md:flex md:flex-row md:py-20">
        <div class="w-full md:w-1/2 p-8 md:p-0 md:h-0 h-[650px]">
          <div
            class="text-green-950 md:text-6xl text-4xl font-extrabold font-raleway container md:text-start text-center"
          >
            <h2>
              <span class="bg-primary">Lawaklu</span> hadir dengan
              <span class="bg-primary">Inovasi</span> baru
            </h2>
            <div
              class="py-8 md:w-[600px] text-green-950 md:text-lg text-base font-medium font-raleway md:text-justify"
            >
              <p class="md:leading-10 leading-loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                a necessitatibus officia fuga repellat laudantium eius
                voluptatibus dicta aliquid similique fugiat reprehenderit atque
                veritatis accusamus et illum rem vel accusantium!
              </p>
              <div class="flex py-8 gap-5 mx-auto justify-center">
                <div>
                  <NuxtLink to="/addmemes" class="">
                    <UButton
                      icon="i-heroicons-arrow-right-20-solid"
                      size="xl"
                      color="primary"
                      variant="solid"
                      label="lorem"
                      :trailing="false"
                    />
                  </NuxtLink>
                </div>
                <div class="">
                  <NuxtLink to="/addmemes" class="">
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
              <div id="stack">
                <p class="font-semibold">Powered by :</p>
                <div class="flex gap-5 py-8">
                  <div>
                    <NuxtImg
                      src="https://raw.githubusercontent.com/rstubryan/assets/master/gambar/lawaklu/tailwind.svg"
                      class="w-20 h-20"
                    />
                  </div>
                  <div>
                    <NuxtImg
                      src="https://raw.githubusercontent.com/rstubryan/assets/master/gambar/lawaklu/typescript.svg"
                      class="w-20 h-20"
                    />
                  </div>
                  <div>
                    <NuxtImg
                      src="https://raw.githubusercontent.com/rstubryan/assets/master/gambar/lawaklu/nuxt.svg"
                      class="w-20 h-20"
                    />
                  </div>
                  <div>
                    <NuxtImg
                      src="https://raw.githubusercontent.com/rstubryan/assets/master/gambar/lawaklu/firebase.svg"
                      class="w-20 h-20"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="md:flex md:w-1/2 w-full">
          <NuxtImg
            src="https://raw.githubusercontent.com/rstubryan/assets/master/gambar/lawaklu/hero.svg"
            class="md:w-full md:h-[600px] w-72 mx-auto"
          />
        </div>
      </div>
    </section>
  </div>
</template>
