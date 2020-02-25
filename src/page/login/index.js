import React from 'react';
import { Form, Icon, Input, Button, message } from 'antd';
import Logo from "../../components/Logo/Logo";
import { Redirect } from 'react-router-dom'
import axios from 'axios';
import getAfterDaysDate from "../../utils/helpers"
import "./page.css"

class NormalLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.baseUrl = '/v1/users/self/login';
    this.getCookiesLoginFlag = () => {
      if (global.COOKIES.get("username")) {
        return true
      }
      return false
    };
    this.state = {
      loginFlag: this.getCookiesLoginFlag()
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (global.DEBUG) {
          console.log('Received values of form: ', values);
        }
        this.login(values);
      }
    });
  };

  login(data) {
    axios.post(`${global.API}${this.baseUrl}`,
      JSON.stringify(data),
      {
        headers: {
          'Content-Type': 'application/json'
        },
      }
    ).then(res => {
      if (global.DEBUG) {
        console.log('res=>', res);
      }
      if (res.data.meta.code === 200) {
        // 更新 cookie
        let options = { path: '/', expires: getAfterDaysDate(7) };
        global.COOKIES.set('username', res.data.data.username, options);
        global.COOKIES.set('jwtoken', res.data.data.jwtoken, options);
        this.setState({
          loginFlag: true
        });
      }
    }).catch(errorRes => {
      if (global.DEBUG) {
        console.log('errorRes=>', errorRes.response.data);
      }
      // error
      if (errorRes.response.data.meta.code === 99) {
        message.error("用户名或密码错误", 4);
      } else {
        message.error(errorRes.response.data.meta.message + ": " + errorRes.response.data.meta.description, 3);
      }
    });
  }


  render() {
    const { getFieldDecorator } = this.props.form;
    if ((this.state.loginFlag === true) || (this.getCookiesLoginFlag() === true)) {
      return <Redirect to="/" />
    }

    return (
      <div className="page-app">
        <header className="page-app-header">
          <Logo a={false} />
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your username(Length between 4 and 30)!',
                    min: 4,
                    max: 30
                  }
                ],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your Password(Length between 8 and 64)!',
                    min: 8,
                    max: 64
                  }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary"
                htmlType="submit" className="login-form-button">
                Log in
              </Button>

              <a className="login-form-forgot" href="/forgot/password">
                Forgot password
              </a>
              Or
              <a href="/register">register now!</a>
            </Form.Item>
          </Form>
        </header>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default WrappedNormalLoginForm;