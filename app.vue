<script setup lang="ts">
import crawlerConfig from "./crawler/config";
import { Config } from "./types/config";

const configuration = crawlerConfig as unknown as Config;
</script>

<template>
  <section class="max-w-screen-sm mx-auto mt-6 mb-12 text-center p-6">
    <h1 class="font-bold text-xl uppercase mb-6">Price tracker</h1>
    <p>
      This page is created to track the prices of couple of stuff I think of
      buying and decided to track how the prices are changing over time,
      especcially before Black Friday.
    </p>
  </section>
  <section class="grid gap-4 p-6 md:grid-cols-2">
    <DryerWidget
      v-for="config in configuration"
      :key="config.model"
      :config="config"
    />
  </section>
</template>
