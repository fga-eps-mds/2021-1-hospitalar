import React, { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import Chart, { ChartDataset } from 'chart.js'

import { useStyles } from './styles'

export function GraficoRelatorio(): React.ReactElement {
  useEffect(() => {
    const fetchGraphData = async () => {
      await axios
        .get('http://localhost:8000/api/grafico/get')
        .then((response:AxiosResponse<{}>) => {
          console.log(response)
        })
        // eslint-disable-next-line no-console
        .catch(console.log)
    }
    fetchGraphData()
  }, [])

  const [chartData, setChartData] = useState({})

  return <div> Gráfico </div>
}
