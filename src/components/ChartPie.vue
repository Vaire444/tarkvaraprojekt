<template>
  <div class="pie-shart">
    <b-card title="Pie">
      <b-card img-bottom>
        <ChartPieBase :chart-data="chartData" />
      </b-card>
    </b-card>
  </div>
</template>

<script>
import ChartPieBase from "@/components/ChartPieBase";

export default {
  components: {
    ChartPieBase,
  },
  data() {
    return {
      chartData: null,
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.chartData = {
        labels: ["Foo", "Bar", "Baz"],
        datasets: [
          {
            backgroundColor: ["#f36e60", "#ffdb3b", "#185190"],
            hoverBackgroundColor: ["#fbd2cd", "#fef5c9", "#d1e3f7"],
            data: [10, 20, 40],
          },
        ],
      };
    },
  },
};
</script>
