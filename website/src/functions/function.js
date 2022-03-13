import prettyMS from 'pretty-ms';
import fetch from 'node-fetch';

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

export function api() {
    fetch("http://localhost:3000/api", {
        "headers": null,
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": {
            "name": "alex",
            "age": 15
        },
        "method": "GET"
    })
}
