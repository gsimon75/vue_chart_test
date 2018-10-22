<script>
import { HorizontalBar } from "vue-chartjs"

export default {
    name: "InspectionStatusChart",
    props: [ "inspected", "notinspected" ],
    extends: HorizontalBar,
    data: function () {
        return {
            chartData: {
                labels: [ "Inspected", "Not Insp." ],
                datasets: [
                    {
                        label: "Inspection Status",
                        backgroundColor: [ "#40ff40", "#ff4040" ],
                        borderColor: [ "#00c000", "#c00000" ],
                        data: [this.inspected, this.notinspected]
                    }
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                animation: false,
                legend: {
                    display: false,
                },
                scales: {
                    xAxes: [
                        {
                            display: true,
                            ticks: {
                                suggestedMin: 0,
                            }
                        }
                    ]
                }
            },
        };
    },
    mounted: function () {
        this.renderChart(this.chartData, this.options)
    },
    watch: {
        "inspected": function (now, prev) {
            this.chartData.datasets[0].data[0] = now;
            this.renderChart(this.chartData, this.options);
        },
        "notinspected": function (now, prev) {
            this.chartData.datasets[0].data[1] = now;
            this.renderChart(this.chartData, this.options);
        },
    },
}

</script>
<!-- vim: set ts=4 sw=4 et: -->
