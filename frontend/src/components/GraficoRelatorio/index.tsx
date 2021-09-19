import React, { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'

import { useStyles } from './styles'

export function GraficoRelatorio(): React.ReactElement {
  useEffect(() => {
    const fetchGraphData = async () => {
      axios
        .get('http://localhost:8000/api/graficos/graficosRelatorio/')
        .then((response) => {
          const {data} = response.data
          console.log(data)
        })
        // eslint-disable-next-line no-console
        .catch(console.log)
    }
    fetchGraphData()
  }, [])

  return <div> Gráfico </div>
}
