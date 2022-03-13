import * as func from './function.js';

export async function data(choose) {
    switch (choose) {
        case 'home':
            var home = func.home().then(data => {
                return data;
            });
            return home;
        case 'login':
            var login = func.login().then(data => {
                return data;
            });
            return login;
        default:
            return {
                error: "Please insert the correct name!",
            }
    }
}