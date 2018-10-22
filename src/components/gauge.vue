<script>
import { Pie, Doughnut, mixins } from "vue-chartjs"
const { reactiveData } = mixins
 
export default {
    name: "Gauge",
    extends: Doughnut,
    mixins: [ reactiveData ],
    props: [ "value" ],
    data: function () {
        return {
            chartData: {
                labels: ["Low", "Normal", "High"],
                datasets: [
                    {
                        label: "ScaleOut",
                        backgroundColor: [ "#00ff00", "#c0c0c0", "#ff0000" ],
                        borderColor: [ "#00ff00", "#c0c0c0", "#ff0000" ],
                        data: [ 10, 80, 10 ],
                    },
                    {
                        label: "Pointer",
                        backgroundColor: [ "#ffff40", "#c0c0c0", "#ff0000" ],
                        borderColor: [ "#ffff40", "#c0c0c0", "#ff0000" ],
                        data: [ 65, 25, 10 ],
                    },
                    {
                        label: "ScaleIn",
                        backgroundColor: [ "#00ff00", "#c0c0c0", "#ff0000" ],
                        borderColor: [ "#00ff00", "#c0c0c0", "#ff0000" ],
                        data: [ 10, 80, 10 ],
                    },
                ]
            },
            options: {
                responsive: false,
                maintainAspectRatio: true,
                rotation: -3.927,
                circumference: 4.7124,
                cutoutPercentage: 85,
                events: [],
                legend: {
                    display: false,
                },
                title: {
                    display: true,
                    text: "Speed",
                },
            },
        };
    },
    mounted: function () {
        this.renderChart(this.chartData, this.options)
    },
}

</script>
<!-- vim: set ts=4 sw=4 et: -->
