import React from 'react'
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const PieChart = ({serverData}) => {
    let uniquePestle = [];
    let colors = [];
    serverData.forEach((i) => {
        if (!uniquePestle.includes(i.pestle) && i.pestle !== "") {
            uniquePestle.push(i.pestle);
            colors.push('#'+Math.floor(Math.random()*16777215).toString(16));
        }
    })

    const pestleCount = uniquePestle.map((item) => {
        return {
            pestle: item,
            count: serverData.filter((i) => i.pestle === item).length
        }
    })
    
  return (
    <div style={{ height:'50vh', width:'45vw'}}>
            <Pie
                data={{
                    labels: uniquePestle,
                    datasets: [
                        {
                            label: "Projects ",
                            data: pestleCount.map(i=>i.count),
                            borderWidth: 1,
                            hoverOffset: 5,
                            backgroundColor: colors,
                        },
                    ]
                }}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            type: 'linear',
                            beginAtZero: true
                        },
                    }
                }}
                height={300}
            />
        </div>
  )
}

export default PieChart