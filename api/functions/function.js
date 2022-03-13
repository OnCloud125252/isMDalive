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

export async function home() {
    let start_time = new Date().getTime();
    let output = await fetch("http://www.mingdao.edu.tw/homeX/Web/")
        .then(response => {
            if (response.status === 200) {
                let responsetime = new Date().getTime() - start_time;
                return {
                    url: "http://www.mingdao.edu.tw/homeX/Web/",
                    time: TWtime().full,
                    ms: responsetime.toString(),
                    prettyms: prettyMS(responsetime, { secondsDecimalDigits: 2 })
                }
            }
            else {
                return {
                    url: "http://www.mingdao.edu.tw/homeX/Web/",
                    error: "Error during connection"
                }
            }
        })
        .catch(error => {
            console.log(error);
        });
    return output;
}

export async function login() {
    let start_time = new Date().getTime();
    let output = await fetch("http://crm.mingdao.edu.tw/crm/")
        .then(response => {
            if (response.status === 200) {
                let responsetime = new Date().getTime() - start_time;
                return {
                    url: "http://crm.mingdao.edu.tw/crm/",
                    time: TWtime().full,
                    ms: responsetime.toString(),
                    prettyms: prettyMS(responsetime, { secondsDecimalDigits: 2 })
                }
            }
            else {
                return {
                    url: "http://crm.mingdao.edu.tw/crm/",
                    error: "Error during connection"
                }
            }
        })
        .catch(error => {
            console.log(error);
        });
    return output;
}
