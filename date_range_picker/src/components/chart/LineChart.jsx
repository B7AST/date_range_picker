import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import * as echarts from "echarts";

// this component is designed to render a dynamic line chart using the ECharts library based on the provided data prop, 
// and it includes functionality to handle window resizing for responsive chart rendering.
function LineChart({ data }) {
  const [windowSize, setWindowSize] = useState(window.innerWidth); //window size state
  const chartRef = useRef(null);

  const DateTimeValue = data.map((dt) => dt.DateTime);
  const ENTSOE_DE_DAM_Price = data.map((dt) => dt.ENTSOE_DE_DAM_Price);
  const ENTSOE_FR_DAM_Price = data.map((dt) => dt.ENTSOE_FR_DAM_Price);
  const ENTSOE_GR_DAM_Price = data.map((dt) => dt.ENTSOE_GR_DAM_Price);

  const createChartInstance = () => {
    const chartInstance = echarts.init(chartRef.current); // initial chart instance

    const option = {
      position: function (pt) {
        return [pt[0], "10%"];
      },

      tooltip: {
        trigger: "axis",
        formatter: (params) => {
          const tooltipItems = params.map((param) => {
            const seriesName = param.seriesName || "";
            const dataValue = param.data;

            return `<strong>${seriesName}</strong>: ${dataValue}`;
          });

          return tooltipItems.join("<br>");
        },
      },

      xAxis: {
        type: "category",
        data: DateTimeValue,
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "Gr Price",
          data: ENTSOE_GR_DAM_Price,
          type: "line",
          lineStyle: {
            color: "blue",
          },
        },
        {
          name: "Fr Price",
          data: ENTSOE_FR_DAM_Price,
          type: "line",
          lineStyle: {
            color: "green",
          },
        },
        {
          name: "De Price",
          data: ENTSOE_DE_DAM_Price,
          type: "line",
          lineStyle: {
            color: "orange",
          },
        },
      ],
    };

    chartInstance.setOption(option);

    return chartInstance;
  };
  const handleResize = () => setWindowSize(window.innerWidth);

  window.addEventListener("resize", handleResize);
  useEffect(() => {
    createChartInstance();
  }, [createChartInstance]);

  useEffect(() => {
    const existingChart = echarts.getInstanceByDom(chartRef.current);
    if (existingChart) {
      existingChart.resize();
    }
  }, [windowSize]);

  return <div className="w-full h-screen overflow-auto" ref={chartRef} />;
}

LineChart.defaultProps = {
  data: [],
};

LineChart.propTypes = {
  data: PropTypes.array,
};

export default LineChart;
