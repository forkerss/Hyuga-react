import React from 'react';
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Button,
  Result,
  message
} from 'antd';
import Logo from "../../components/Logo/Logo";
import axios from 'axios';
import "../login/page.css"

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      confirmDirty: false,
      autoCompleteResult: [],
      registerFlag: false
    }
  }
  baseUrl = '/v1/users';

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        if (global.DEBUG) {
          console.log('Received values of form: ', values);
        }
        let values1 = JSON.parse(JSON.stringify(values));
        delete values1.confirm
        this.register(values1);
      }
    });
  };

  renderRegisterSuccess() {
    return (
      <Result
        status="success"
        title="账号注册成功"
        subTitle="Welcome to Hyuga :)"
        extra={[
          <Button type="primary" key="goLogin">
            <a href="/login">Go Login</a>
          </Button>,
        ]}
      />
    )
  }

  register(data) {
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
      // 注册成功
      if (res.data.meta.code === 200) {
        this.setState({
          registerFlag: true
        });
      }
    }
    ).catch(errorRes => {
      if (global.DEBUG) {
        console.log('errorRes=>', errorRes.response.data);
      }
      // error
      message.error(errorRes.response.data.meta.message, 4);
    });
  }

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  };

  render() {
    if (this.state.registerFlag === true) {
      return this.renderRegisterSuccess()
    }
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    return (
      <div className="page-app">
        <header className="page-app-header">
          <Logo a={false} />
          <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item label="username">
              {getFieldDecorator('username', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your username(Length between 4 and 30)!',
                    min: 4,
                    max: 30
                  },
                ],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Password" hasFeedback>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your password(Length between 8 and 64)!',
                    min: 8,
                    max: 64
                  },
                  {
                    validator: this.validateToNextPassword,
                  },
                ],
              })(<Input.Password />)}
            </Form.Item>
            <Form.Item label="Confirm Password" hasFeedback>
              {getFieldDecorator('confirm', {
                rules: [
                  {
                    required: true,
                    message: 'Please confirm your password!'
                  },
                  {
                    validator: this.compareToFirstPassword,
                  },
                ],
              })(<Input.Password onBlur={this.handleConfirmBlur} />)}
            </Form.Item>
            <Form.Item
              label={
                <span>
                  Nickname&nbsp;
                <Tooltip title="What do you want others to call you?">
                    <Icon type="question-circle-o" />
                  </Tooltip>
                </span>
              }
            >
              {getFieldDecorator('nickname', {
                rules: [
                  { message: 'Please input your nickname!', whitespace: true }
                ],
                initialValue: "路人甲",
              })(<Input />)}
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Register
            </Button>
            </Form.Item>
          </Form>
        </header>
      </div>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);

export default WrappedRegistrationForm;