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

export async function pingWithoutLogin(url) {
    let start_time = new Date().getTime();
    let output = await fetch(url)
        .then(response => {
            if (response.status === 200) {
                let responsetime = new Date().getTime() - start_time;
                return {
                    url: url,
                    time: TWtime().full,
                    ms: responsetime.toString(),
                    prettyms: prettyMS(responsetime, { secondsDecimalDigits: 2 })
                }
            }
            else {
                return {
                    error: "Error during connection",
                    url: url
                }
            }
        })
        .catch(error => {
            console.log(error);
        });
    return output;
}