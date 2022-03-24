import fetch from 'node-fetch';
import prettyMS from 'pretty-ms';

export function TWtime() {
    let date = new Date();
    let TimeString = date.toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' });
    return {
        full: TimeString + ' (GMT+8)',
        time: TimeString,
        year: date.getFullYear().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
        month: date.getMonth().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }) + 1,
        date: date.getDate().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
        hours: date.getHours().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
        minutes: date.getMinutes().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
        seconds: date.getSeconds().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
        gmt: '(GMT+8)',
        timeZone: 'Asia/Taipei'
    }
}

export async function api(path) {
    return await fetch(`http://localhost:8000/api/${path}`).then(response => { return response.json(); })
}

export function chart(par) {
    new Chart(par.ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: par.data
            }]
        },

        // Configuration options go here
        options: {
            title: {
                display: true,
                text: 'Demo Line Chart'
            },
            legend: {
                labels: {
                    fontColor: 'rgb(0, 0, 0)',
                    usePointStyle: true
                }
            },
            scales: {
                // 各軸標題設定
                // https://www.chartjs.org/docs/latest/axes/labelling.html
                // 各軸格線設定
                // https://www.chartjs.org/docs/latest/axes/styling.html
                // x 軸設置
                xAxes: [{
                    // x 軸標題
                    scaleLabel: {
                        display: true,
                        labelString: "Mouth",
                        fontSize: 16
                    },
                    // x 軸格線
                    gridLines: {
                        display: true
                    }
                }],
                // y 軸設置
                yAxes: [{
                    // y 軸標題
                    scaleLabel: {
                        display: true,
                        labelString: "Amount",
                        fontSize: 16
                    },
                    // y 軸格線
                    gridLines: {
                        display: false
                    },
                    // y 軸間距
                    ticks: {
                        min: 0,
                        max: 120,
                        stepSize: 30
                    }
                }]
            }
        }
    });
}