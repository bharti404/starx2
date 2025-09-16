const chartData = (totalUsedQr, totalUnusedQr) => ({
  height: 150,
  type: 'donut',
  options: {
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      pie: {
        donut: {
          size: '75%'
        }
      }
    },
    labels: ['Used', 'Unused'],
    legend: {
      show: false
    },
    tooltip: {
      theme: 'dark'
    },
    grid: {
      padding: {
        top: 20,
        right: 0,
        bottom: 0,
        left: 0
      }
    },
    colors: ['#ffffff99', '#2ed8b6'],
    fill: {
      opacity: [1, 1]
    },
    stroke: {
      width: 0
    }
  },
  series: [totalUsedQr, totalUnusedQr]
});
export default chartData;
