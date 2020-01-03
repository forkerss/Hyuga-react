// Loadable插件需使用Loading
import Loadable from 'react-loadable'
import Loading from '../components/Loading/index';

// Login
global.Login = Loadable({
    loader: () => import('../page/login/index'),
    loading: Loading,
});
// Register
global.Register = Loadable({
    loader: () => import('../page/register/index'),
    loading: Loading,
});


//Introduce
global.Introduce = Loadable({
    loader: () => import('../page/introduce/index'),
    loading: Loading,
});
// API
global.APIPage = Loadable({
    loader: () => import('../page/api/index'),
    loading: Loading,
});
// RecordsHttp
global.RecordsHttp = Loadable({
    loader: () => import('../page/records/http/index'),
    loading: Loading,
});
// RecordsDns
global.RecordsDns = Loadable({
    loader: () => import('../page/records/dns/index'),
    loading: Loading,
});
// Profile
global.Profile = Loadable({
    loader: () => import('../page/profile/index'),
    loading: Loading,
});