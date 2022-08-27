import { Doughnut } from "react-chartjs-2"
import {Chart, ArcElement } from 'chart.js'
import { getPercentage } from "../../../../utils/getPercentage"
import './DoughnutChart.scss'

Chart.register(ArcElement)

export function DoughnutChart({values}) {
  const data = {
      labels: [],
      datasets: [
        {
          data: [values[1].currentValue, values[1].fullValue-values[1].currentValue],
          backgroundColor: ["#a9a9a9", "#e9e9e9"],
          weight: 10,
          label: values[1].title,
          borderWidth: 0
        },
        {
          data: [100],
          backgroundColor: ["#fff"],
          weight: 20,
          borderWidth: 0,
          datalabels: {
            display: false
          }
        },
        {
          data: [values[0].currentValue, values[0].fullValue-values[0].currentValue],
          weight: 50,
          backgroundColor: ["#fc791e", "#e9e9e9"],
          label: values[0].title,
          borderWidth: 0
        },
      ],
  };

  const options = {
    rotation: 180,
    circumference: 270,
  }
  
  return (
    <div className="doughnut-chart__container">
      <Doughnut data={data} options={options} width={50} height={50}/>
      <div className="doughnut-chart__inner">
          <div className="doughnut-chart__value">
            {getPercentage(values[0].currentValue, values[0].fullValue)}
          </div>
          <div className="doughnut-chart__value">
            {getPercentage(values[1].currentValue, values[1].fullValue)}
          </div>
      </div>
    </div>
  )
}
  