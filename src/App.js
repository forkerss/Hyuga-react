import React from 'react';
//全局文件
import './main';

import { Layout } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom'
import HSider from "./components/Sider/Sider"
import HHeader from "./components/Header/Header"
import HContent from "./components/ContentMain/Content"
import HFooter from "./components/Footer/Footer"
import "antd/dist/antd.css";

function requireAuth(Layout, props) {
  if (global.COOKIES.get("username")) {
    return <Layout {...props} />;
  } else {
    return <Redirect to="/login" />;
  }
}

function Backstage() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* sider */}
      <HSider />
      <Layout>
        {/* header */}
        <HHeader />
        {/* content */}
        <HContent />
        {/* footer */}
        <HFooter />
      </Layout>
    </Layout>
  );
}
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path='/login' component={global.Login} />
            <Route exact path='/register' component={global.Register} />
            <Route component={props => requireAuth(Backstage, props)} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;