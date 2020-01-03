/*全局配置*/
//网络请求
//全局路由文件
import Cookies from 'universal-cookie';
export * from './router/config';

global.HOST = "hyuga.io:5000"
global.API = `http://api.${global.HOST}`;
global.COOKIES = new Cookies();

// menus
global.menus = [
    {
        title: 'Introduce',
        icon: 'idcard',
        key: '/introduce'
    }, {
        title: 'API',
        icon: 'api',
        key: '/api',
    },
    {
        title: 'Records',
        icon: 'database',
        key: '/records',
        subs: [
            { key: '/records/dns', title: 'DNS Query', icon: '' },
            { key: '/records/http', title: 'HTTP Request', icon: '' },
        ]
    },
]
global.menusDefalutOptions = {
    defaultSelectedKeys: [global.menus[0].key],
    defaultOpenKeys: [global.menus[2].key]
}

// selects
global.selects = [
    {
        key: '/profile',
        icon: 'user',
        content: 'profile'
    },
    {
        key: '/logout',
        icon: 'logout',
        content: 'logout'
    }
]