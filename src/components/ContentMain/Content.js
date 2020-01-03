import React from 'react';
import { Layout } from 'antd';
import { Route, Switch, Redirect } from 'react-router-dom'

const { Content } = Layout;

class ContentMain extends React.Component {
    render() {
        return (
            <Content style={{ margin: '0 16px' }}>
                <Switch>
                    <Route exact path='/profile' component={global.Profile} />
                    <Route exact path='/introduce' component={global.Introduce} />
                    <Route exact path='/api' component={global.APIPage} />
                    <Route exact path='/records/http' component={global.RecordsHttp} />
                    <Route exact path='/records/dns' component={global.RecordsDns} />
                    {/* 默认路由 */}
                    <Redirect path="/" to={{ pathname: '/introduce' }} />
                </Switch>
            </Content>
        );
    }
}

export default ContentMain;
