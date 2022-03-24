import * as func from './function.js';

export async function data(choose) {
    switch (choose) {
        case 'home':
            var home = func.pingWithoutLogin("http://www.mingdao.edu.tw/homeX/Web/").then(data => {
                return data;
            });
            return home;

        case 'login':
            var login = func.pingWithoutLogin("http://crm.mingdao.edu.tw/crm/").then(data => {
                return data;
            });
            return login;

        case 'junior':
            var junior = func.pingWithoutLogin("https://www2.mingdao.edu.tw/junior/").then(data => {
                return data;
            });
            return junior;

        case 'senior':
            var senior = func.pingWithoutLogin("https://www2.mingdao.edu.tw/senior/").then(data => {
                return data;
            });
            return senior;

        case 'compre':
            var compre = func.pingWithoutLogin("https://www2.mingdao.edu.tw/compre/").then(data => {
                return data;
            });
            return compre;

        case 'international':
            var international = func.pingWithoutLogin("https://www.mdid.info/").then(data => {
                return data;
            });
            return international;

        case 'order':
            var order = func.pingWithoutLogin("http://s2.mingdao.edu.tw/ORDER/?ifPg=login_student.php").then(data => {
                return data;
            });
            return order;

        case 'library':
            var library = func.pingWithoutLogin("http://www.mingdao.edu.tw/library/new/ibook.php").then(data => {
                return data;
            });
            return library;

        case 'courses':
            var courses = func.pingWithoutLogin("http://libauto.mingdao.edu.tw/AACourses/Web/wLogin.php").then(data => {
                return data;
            });
            return courses;

        default:
            return {
                error: "Please insert the correct name!",
            }
    }
}