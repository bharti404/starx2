// const chartData = {
//   height: 230,
//   type: 'line',
//   options: {
//     chart: {
//       toolbar: {
//         show: false
//       }
//     },
//     dataLabels: {
//       enabled: false
//     },
//     stroke: {
//       width: 2,
//       curve: 'smooth'
//     },
//     legend: {
//       position: 'top'
//     },
//     xaxis: {
//       type: 'datetime',
//       categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000'],
//       axisBorder: {
//         show: false
//       },
//       label: {
//         style: {
//           color: '#ccc'
//         }
//       }
//     },
//     yaxis: {
//       show: true,
//       min: 10,
//       max: 70,
//       labels: {
//         style: {
//           color: '#ccc'
//         }
//       }
//     },
//     colors: ['#73b4ff', '#59e0c5'],
//     fill: {
//       type: 'gradient',
//       gradient: {
//         shade: 'light',
//         gradientToColors: ['#4099ff', '#2ed8b6'],
//         shadeIntensity: 0.5,
//         type: 'horizontal',
//         opacityFrom: 1,
//         opacityTo: 1,
//         stops: [0, 100]
//       }
//     },
//     markers: {
//       size: 5,
//       colors: ['#4099ff', '#2ed8b6'],
//       opacity: 0.9,
//       strokeWidth: 2,
//       hover: {
//         size: 7
//       }
//     },
//     grid: {
//       borderColor: '#cccccc3b'
//     }
//   },
//   series: [
//     {
//       name: 'Total Product',
//       data: [20, 50, 30, 60, 30, 50]
//     },
//     {
//       name: 'Toatl QR',
//       data: [60, 30, 65, 45, 67, 35]
//     }
//   ]
// };
// export default chartData;


// chartData.js
// export default function buildChartData(qrData) {
//   // Group data by amount
//   const grouped = qrData.reduce((acc, item) => {
//     if (!acc[item.amount]) {
//       acc[item.amount] = { used: 0, unused: 0 };
//     }
//     acc[item.amount][item.status] += 1;
//     return acc;
//   }, {});

//   // Sorted amounts (10,20,30,...)
//   const amounts = Object.keys(grouped).sort((a, b) => Number(a) - Number(b));

//   return {
//     options: {
//       chart: { type: "bar", stacked: true },
//       plotOptions: {
//         bar: { horizontal: false, columnWidth: "50%" }
//       },
//       xaxis: {
//         categories: amounts,
//         title: { text: "QR Amount" }
//       },
//       yaxis: {
//         title: { text: "Count of QR Codes" }
//       },
//       colors: ["#00C49F", "#FF8042"], // Unused = green, Used = orange
//       legend: { position: "top" }
//     },
//     series: [
//       {
//         name: "Unused",
//         data: amounts.map((amt) => grouped[amt].unused)
//       },
//       {
//         name: "Used",
//         data: amounts.map((amt) => grouped[amt].used)
//       }
//     ],
//     type: "bar",
//     height: 350
//   };
// }




// chartData.js
// export default function buildChartData(qrData) {
//   // Group data by amount
//   const grouped = qrData.reduce((acc, item) => {
//     if (!acc[item.amount]) {
//       acc[item.amount] = { used: 0, unused: 0 };
//     }
//     acc[item.amount][item.status] += 1;
//     return acc;
//   }, {});

//   // Sorted amounts (10,20,30,...)
//   const amounts = Object.keys(grouped).sort((a, b) => Number(a) - Number(b));

//   // Total count of all QR codes
//   const totalCount = qrData.length;

//   return {
//     options: {
//       chart: { type: "bar", stacked: true },
//       plotOptions: {
//         bar: { horizontal: false, columnWidth: "50%" }
//       },
//       xaxis: {
//         categories: amounts,
//         title: { text: "QR Amount" }
//       },
//       yaxis: {
//         title: { text: "Count of QR Codes" }
//       },
//       colors: ["#00C49F", "#FF8042"], // Unused = green, Used = orange
//       legend: { position: "top" },
//       tooltip: {
//         y: {
//           formatter: (val) => `${val} QR`
//         }
//       },
//       title: {
//         text: `Total QR Codes: ${totalCount}`,
//         align: "center",
//         style: {
//           fontSize: "14px",
//           fontWeight: "bold"
//         }
//       }
//     },
//     series: [
//       {
//         name: "Unused",
//         data: amounts.map((amt) => grouped[amt].unused)
//       },
//       {
//         name: "Used",
//         data: amounts.map((amt) => grouped[amt].used)
//       }
//     ],
//     type: "bar",
//     height: 350
//   };
// }



// buildChartData.js
// buildChartData.js
// buildChartData.js



//  important
// const buildChartData = (qrData = []) => {
//   if (!qrData || qrData.length === 0) {
//     return {
//       height: 230,
//       type: "line",
//       options: { chart: { toolbar: { show: false } } },
//       series: []
//     };
//   }

//   // Group QR data by amount
//   const grouped = qrData.reduce((acc, qr) => {
//     const amt = qr.amount;
//     if (!acc[amt]) acc[amt] = { used: 0, unused: 0 };
//     if (qr.status === "used") acc[amt].used += 1;
//     else acc[amt].unused += 1;
//     return acc;
//   }, {});

//   const categories = Object.keys(grouped).sort((a, b) => a - b); // 10,20,30...
//   const usedSeries = categories.map((amt) => grouped[amt].used);
//   const unusedSeries = categories.map((amt) => grouped[amt].unused);

//   return {
//     height: 230,
//     type: "line",
//     options: {
//       chart: { toolbar: { show: false } },
//       dataLabels: { enabled: false },
//       stroke: { width: 2, curve: "smooth" },
//       legend: { position: "top" },
//       xaxis: { categories, labels: { style: { color: "#666" } } },
//       yaxis: { labels: { style: { color: "#666" } } },
//       colors: ["#1E88E5", "#43A047"], // blue=used, green=unused
//       markers: { size: 5, strokeWidth: 2, hover: { size: 7 } },
//       grid: { borderColor: "#cccccc3b" },
//       tooltip: {
//         shared: true,
//         intersect: false,
//         y: { formatter: (val) => `${val} QR` }
//       }
//     },
//     series: [
//       { name: "Used", data: usedSeries },
//       { name: "Unused", data: unusedSeries }
//     ]
//   };
// };

// export default buildChartData;




const buildChartData = (qrData = []) => {
  if (!qrData || qrData.length === 0) {
    return {
      height: 230,
      type: "line",
      options: { chart: { toolbar: { show: false } } },
      series: []
    };
  }

  // Group QR data by amount
  const grouped = qrData.reduce((acc, qr) => {
    const amt = qr.amount;
    if (!acc[amt]) acc[amt] = { used: 0, unused: 0 };
    if (qr.status === "used") acc[amt].used += 1;
    else acc[amt].unused += 1;
    return acc;
  }, {});

  const categories = Object.keys(grouped).sort((a, b) => a - b); // 10,20,30...
  const usedSeries = categories.map((amt) => grouped[amt].used);
  const unusedSeries = categories.map((amt) => grouped[amt].unused);

  return {
    height: 230,
    type: "line",
    options: {
      chart: {
        toolbar: { show: false },
        animations: { enabled: true, easing: "easeinout", speed: 400 },
        zoom: { enabled: false },
        redrawOnParentResize: true // <-- ensures chart resizes properly
      },
      dataLabels: { enabled: false },
      stroke: { width: 2, curve: "smooth" },
      legend: { position: "top" },
      xaxis: {
        categories,
        labels: { style: { color: "#666" } },
        title: { text: "QR Amount" }
      },
      yaxis: {
        labels: { style: { color: "#666" } },
        title: { text: "Count" }
      },
      colors: ["#1E88E5", "#43A047"], // used=blue, unused=green
      markers: { size: 5, strokeWidth: 2, hover: { size: 7 } },
      grid: { borderColor: "#cccccc3b" },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: (val) => `${val} QR`
        }
      }
    },
    series: [
      { name: "Used", data: usedSeries },
      { name: "Unused", data: unusedSeries }
    ]
  };
};

export default buildChartData;
