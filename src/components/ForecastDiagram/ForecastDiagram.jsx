import './ForecastDiagram.scss'
import React, { useEffect, useState } from 'react'
import { DoughnutChart } from './components/DoughnutChart/DoughnutChart'
import { Description } from './components/Description/Description'
import { mockApi } from '../../mock/MockApi'
import Spinner from 'react-spinner-material'

export function ForecastDiagram() {
  const [data, setData] = useState(null);

  useEffect(() => {
    mockApi.getForecast().then(setData);
  }, []);

  if (!data) {
    return (
      <div className='loading'>
         <Spinner size={300} spinnercolor={"#333"} spinnerwidth={2} visible={true} />
      </div>
    )
  }

  return (
    <div className="forecast-diagram">
      <div className="forecast-diagram__chart">
        <DoughnutChart values={data}/>
        <Description values={data} />
      </div>
    </div>
  );
}