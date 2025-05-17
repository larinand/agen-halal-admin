import { Component } from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface PieChartTSProps {
  // Add props if needed in the future
}

// type tooltipDirection =
//   | "left"
//   | "right"
//   | "top"
//   | "bottom"
//   | string
//   | undefined;

// interface PieChartTSState {
//   options: {
//     chart: {
//       id: string;
//     };
//     labels: string[];
//     plotOptions: {
//       pie: {
//         startAngle: number;
//         endAngle: number;
//         expandOnClick: boolean;
//         dataLabels: {
//           offset: number;
//           minAngleToShowLabel: number;
//         };
//         donut: {
//           size: string;
//           labels: {
//             show: boolean;
//             name: {
//               show: boolean;
//               fontSize: string;
//               fontFamily: string;
//               fontWeight: number;
//               color: string;
//               offsetY: number;
//               formatter: (val: string) => string;
//             };
//             value: {
//               show: boolean;
//               fontSize: string;
//               fontFamily: string;
//               fontWeight: number;
//               color: string;
//               offsetY: number;
//               formatter: (val: string) => string;
//             };
//             total: {
//               show: boolean;
//               showAlways: boolean;
//               label: string;
//               fontSize: string;
//               fontFamily: string;
//               fontWeight: number;
//               color: string;
//               // formatter: (w: any) => number;
//             };
//           };
//         };
//       };
//     };
//     legend: {
//       position: string;
//       horizontalAlign: string;
//     };
//   };
//   series: number[];
// }

interface PieChartTSState {
  options: ApexOptions;
  series: number[];
}

class PieChartTS extends Component<PieChartTSProps, PieChartTSState> {
  constructor(props: PieChartTSProps) {
    super(props);
    this.state = {
      options: {
        chart: {
          // type: "donut",
          id: "apexchart-donut",
        },
        labels: ["Initial Visit", "Offer Sent", "Payment", "Certified"],
        plotOptions: {
          pie: {
            startAngle: 0,
            endAngle: 360,
            expandOnClick: true,
            dataLabels: {
              offset: 0,
              minAngleToShowLabel: 10,
            },
            donut: {
              size: "45%",
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: "18px",
                  fontFamily: "Helvetica, Arial, sans-serif",
                  fontWeight: 600,
                  color: "#373d3f",
                  offsetY: 0,
                  formatter: function (val: string): string {
                    return val;
                  },
                },
                value: {
                  show: true,
                  fontSize: "12px",
                  fontFamily: "Helvetica, Arial, sans-serif",
                  fontWeight: 400,
                  color: "#373d3f",
                  offsetY: 0,
                  formatter: function (val: string): string {
                    return val;
                  },
                },
                total: {
                  show: true,
                  showAlways: false,
                  label: "Total",
                  fontSize: "12px",
                  fontFamily: "Helvetica, Arial, sans-serif",
                  fontWeight: 600,
                  color: "#373d3f",
                  // formatter: function (w: any): number {
                  //   // return w.globals.seriesTotals.reduce(
                  //   //   (a: number, b: number) => {
                  //   //     return a + b;
                  //   //   },
                  //   //   0
                  //   // );
                  //   const total = w.globals.seriesTotals.reduce(
                  //     (a: number, b: number) => {
                  //       return a + b;
                  //     },
                  //     0
                  //   );
                  //   return total.toString();
                  // },
                },
              },
            },
          },
        },
        legend: {
          position: "bottom",
          horizontalAlign: "center",
        },
      },
      series: [25, 40, 20, 15],
    };
  }

  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="donut"
      />
    );
  }
}

export default PieChartTS;
