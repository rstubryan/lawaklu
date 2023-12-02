<template>
  <div>
    <section id="sidebar">
      <div class="py-10">
        <div class="container mx-auto md:flex">
          <div id="sidebar-kiri">
            <div class="flex flex-col w-[274px] h-full ml-9">
              <h2 class="text-2xl font-bold">Categories</h2>
              <div class="flex py-2">
                <ul class="flex flex-col text-lg text-gray-600">
                  <li>
                    <NuxtLink to="/about">Best</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/about">Fresh</NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id="konten-meme" class="container">
            <div class="flex w-full h-full md:py-0 py-8">
              <div class="ml-9 mr-9 mx-auto container">
                <h2 class="text-2xl font-bold">Memes</h2>
                <div class="flex flex-col py-4 items-center">
                  <div class="bg-gray-400 h-96 w-full rounded-xl"></div>
                  <div class="flex gap-5">
                    <div class="py-4 flex">
                      <UAvatar
                        size="lg"
                        src="https://avatars.githubusercontent.com/u/739984?v=4"
                        alt="Avatar"
                      />
                      <p class="p-2 text-lg">username</p>
                    </div>
                    <div class="py-4">
                      <UButton
                        icon="i-heroicons-hand-thumb-up"
                        size="xl"
                        color="primary"
                        variant="solid"
                        :trailing="false"
                      />
                    </div>
                    <div class="py-4">
                      <UButton
                        icon="i-heroicons-hand-thumb-down"
                        size="xl"
                        color="primary"
                        variant="solid"
                        :trailing="false"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
