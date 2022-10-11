<script setup lang="ts">
import { ConfigEntry } from "~/types/config";
import jsonData from "~/data/index.json";
import Chart from "./Chart.vue";
import { WEBSITE_COLORS } from "~/crawler/config.js";

const props = defineProps<{
  config: ConfigEntry;
}>();

const generateChartLabels = () => {
  const firstWebsite = Object.keys(jsonData[props.config.model])[0];
  return jsonData[props.config.model][firstWebsite].map((crawlData) => {
    const date = new Date(crawlData.date);
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
  });
};

const generateChartDatasets = () => {
  const datasets = [];
  const modelData = jsonData[props.config.model];
  Object.keys(modelData).forEach((websiteKey) => {
    datasets.push({
      label: websiteKey,
      data: modelData[websiteKey].map((data) => data.price),
      fill: false,
      borderColor: WEBSITE_COLORS[websiteKey],
      backgroundColor: WEBSITE_COLORS[websiteKey],
    });
  });
  return datasets;
};

const chartData = jsonData[props.config.model]
  ? {
      labels: generateChartLabels(),
      datasets: generateChartDatasets(),
    }
  : null;
</script>

<template>
  <section>
    <h2 class="text-dark-600 text-lg mb-2 text-center">
      {{ props.config.model }}
    </h2>

    <ul class="flex flex-wrap gap-4 mb-4">
      <li class="mr-2">Links:</li>
      <li v-for="website in props.config.websites" :key="website.url">
        <a
          :href="website.url"
          class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
          target="_blank"
          rel="noopener noreferrer"
          >{{ website.key }}</a
        >
      </li>
    </ul>
    <Chart v-if="chartData" :chartData="chartData" />
    <p v-else class="text-center italic text-gray-600">There's no saved data</p>
  </section>
</template>
