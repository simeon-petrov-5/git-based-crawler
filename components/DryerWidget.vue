<script setup lang="ts">
import { ConfigEntry } from "~/types/config";
import jsonData from "~/data/index.json";
import Chart from "./Chart.vue";

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
  const chartColors = ["#845ec2", "#0081cf", "#ff9671"];
  const datasets = [];
  const modelData = jsonData[props.config.model];
  Object.keys(modelData).forEach((websiteKey, idx) => {
    datasets.push({
      label: websiteKey,
      data: modelData[websiteKey].map((data) => data.price),
      fill: false,
      borderColor: chartColors[idx],
    });
  });
  return datasets;
};

const chartData = {
  labels: generateChartLabels(),
  datasets: generateChartDatasets(),
};
</script>

<template>
  <section>
    <h2 class="text-dark-600 text-lg mb-2 text-center">
      {{ props.config.model }}
    </h2>
    <Chart :chartData="chartData" />
  </section>
</template>