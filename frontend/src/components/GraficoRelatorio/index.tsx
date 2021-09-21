import React, { useEffect, useRef, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import {BarElement, Chart, ChartData, ChartDataset, ChartOptions, ChartType, ChartTypeRegistry } from 'chart.js'

import { useStyles } from './styles'

/**Interface baseada nos dados do Backend*/
export interface GraficoProps {
  labels:string[],
  chartLabel:string,
  chartData:number[]
}

/** Função recebe os dados e renderiza o gráfico no canvas */
export function CanvasRelatorio(chartData:GraficoProps): React.ReactElement {
  /** formata dados de acordo com o Tipo Gráfico do Chartsjs */
  const formatData = (data: GraficoProps): Chart.ChartData => ({
    labels: data.labels,
    datasets: [{data: data.chartData}]
  });

  /** ref armazena o estado do gráfico, já que pode ser mutável */
  const chartRef = useRef<Chart | null>(null);

  /** callback que cria o gráfico no canvas */
  const canvasCallback = (canvas: HTMLCanvasElement | null) => {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      /** Criação do Gráfico */
      chartRef.current = new Chart(ctx, {
        type: "bar",
        data: formatData(chartData),
        options: { responsive: true }
      });
    }
  };

  /** Atualiza o gráfico caso chartData mude */
  useEffect(() => {
    // Verificando se o gráfico existe
    if (chartRef.current) {
      chartRef.current.data = formatData(chartData);
      chartRef.current.update();
    }

  }, [chartData]);

  return (
    <div className="self-center w-1/2">
      <div className="overflow-hidden">
        <canvas ref={canvasCallback}></canvas>
      </div>
    </div>
  );

}

export default function GraficoRelatorio() {
  const [items, setItems] = useState<GraficoProps>({labels: [], chartLabel: '', chartData: []})
  useEffect(() => {
      axios
        .get('http://localhost:8000/api/grafico/get')
        .then((response:AxiosResponse<GraficoProps>) => {
          console.log(response)

          const data = response.data

          setItems({
            labels: data.labels,
            chartData: data.chartData,
            chartLabel: data.chartLabel
          })
        })
        // eslint-disable-next-line no-console
        .catch(console.log)

  }, [])

  return <CanvasRelatorio {...items} />
}