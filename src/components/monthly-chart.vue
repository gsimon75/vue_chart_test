<script>
import { Line, mixins } from "vue-chartjs"
const { reactiveProp } = mixins
 
export default {
    name: "MonthlyChart",
    extends: Line,
    mixins: [ reactiveProp ],
    props: [ "chartData", "options" ],
    mounted: function () {
        this.renderChart(this.chartData, this.options)
    },
}

</script>
<!-- vim: set ts=4 sw=4 et: -->
