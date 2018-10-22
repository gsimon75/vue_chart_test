<template>
    <div id="app" class="main-body">
        <el-button v-on:click="toggle_yaddaboo" plain>Mar: {{ monthly_values[2] }}</el-button>
        <monthly-chart :chartData="chartData" :options="{responsive: true, maintainAspectRatio: false}" width="100%" height="100%"></monthly-chart>
        <inspection-status-chart :inspected="num_inspected" :notinspected="num_not_inspected" width="100%" height="100%"></inspection-status-chart>
        <!--radial-gauge :value="monthly_values[2]" :options="gauge_options"></radial-gauge-->
    </div>
</template>

<script>
import Vue from "vue"
import {
    Button, Input,
    Row, Col,
    Table, TableColumn,
} from "element-ui"

Vue.use(Button)

import MonthlyChart from "./components/monthly-chart.vue"
import InspectionStatusChart from "./components/inspection-status-chart.vue"

export default {
    name: "TestApp",
    components: {
        Button, MonthlyChart, InspectionStatusChart
    },
    data: function () {
        return {
            num_inspected: 35,
            num_not_inspected: 100,
            monthly_values: [40, 39, 10,  40, 39, 80,  40, 15, 23,  50, 10, 41],
            gauge_options: {
                minValue: 0,
                maxValue: 200,
                width: 80,
                height: 80,
                highlights: [
                    { from: 0, to: 20, color: "#40ff40" },
                    { from: 20, to: 200, color: "#ff4040" },
                ],
                animation: false,
                majorTicks: [ "", "", "", "", "", "", "", "", "", "", "" ],
                minorTicks: 2,
                valueBox: false,
                needleShadow: false,
                borders: false,
                colorNeedle: "#808080",
                colorNeedleEnd: "#808080",
                colorNeedleCircleInner: "#000000",
                needleCircleOuter: false,

                strokeTicks: false,



            }
        };
    },
    methods: {
        toggle_yaddaboo: function () {
            // https://vuejs.org/v2/guide/list.html#Caveats
            //this.monthly_values[2] = this.monthly_values[2] + 5;
            this.monthly_values.splice(2, 1, this.monthly_values[2] + 5);
            this.num_not_inspected--;
            this.num_inspected++;
        }
    },
    computed: {
        chartData: function () {
            return {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [
                    {
                        label: "Data One",
                        backgroundColor: "#79f879",
                        data: this.monthly_values,
                    }
                ]
            };
        },
    },
}
</script>


<style lang="scss">
@charset "UTF-8";
@import "el-theme/common/var.scss";
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 10pt;
    color: $--color-text-regular;
}

.main-body .el-main {
    padding: 5px;
}

.main-body .el-table .cell {
    font-size: 8pt;
}

.main-body .el-button--warning span {
    font-size: 8pt;
}

.main-body .el-tabs__item span, .main-body .el-tabs__item {
    font-size: 8pt;
}

.main-body .el-tabs__item {
    height: 48pt;
}

.main-body .el-tabs__item div {
    text-align: center;
}

.main-body .el-tabs__item i {
    font-size: 16pt;
}

tr.el-table__row td {
    padding: 0px;
}

.el-tabs__item {
    padding: 0px;
}

h1 {
    text-align: center;
}

</style>

<!-- vim: set ts=4 sw=4 et: -->
