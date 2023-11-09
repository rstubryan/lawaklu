<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";

const state = reactive({
  email: undefined,
  password: undefined,
});

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.email) errors.push({ path: "email", message: "Required" });
  if (!state.password) errors.push({ path: "password", message: "Required" });
  return errors;
};

async function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data);
}
</script>

<template>
  <div class="flex items-center justify-center h-screen font-raleway">
    <div class="mx-auto w-96 mt-8">
      <h1 class="text-black font-semibold text-center text-2xl mb-4">Register</h1>
      <UForm :validate="validate" :state="state" @submit="onSubmit">
        <UFormGroup
          label="Email"
          name="email"
          :ui="{ label: { base: 'text-black font-semibold text-base' } }"
        >
          <UInput v-model="state.email" />
        </UFormGroup>
        <div class="mt-2">
          <UFormGroup
            label="Password"
            name="password"
            :ui="{ label: { base: 'text-black font-semibold text-base' } }"
          >
            <UInput v-model="state.password" type="password" />
          </UFormGroup>
        </div>
        <div class="py-4">
          <UButton type="submit" color="white" variant="solid">
            Submit
          </UButton>
        </div>
      </UForm>
    </div>
  </div>
</template>

<style>
.font-raleway {
  font-family: "Raleway", sans-serif;
}
</style>
