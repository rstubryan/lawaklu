<template>
  <div class>
    <div class="container mx-auto flex">
      <div class="flex flex-col w-80 h-full border-r-2 border-gray-400">
        <h2 class="text-2xl">Categories</h2>
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
      <div class="flex w-full h-full">
        <div class="ml-9 mr-9 mx-auto container">
          <h2 class="text-2xl">Meme's Section</h2>
          <div class="flex flex-col py-4 items-center">
            <div class="bg-gray-400 h-96 w-full rounded-xl"></div>
            <div class="flex gap-5">
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
</template>
