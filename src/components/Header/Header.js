import React from 'react';
import { Layout, Select, Icon, message } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "antd/dist/antd.css";

const { Header } = Layout;
const { Option } = Select;

class HHeader extends React.Component {
  logout() {
    let url = "/v1/users/self/logout"
    axios.post(`${global.API}${url}`,
      null,
      {
        headers: {
          'JWToken': global.COOKIES.get("jwtoken")
        },
      }
    ).then(res => {
      if (global.DEBUG) {
        console.log('res=>', res);
      }
      if (res.data.meta.code === 200) {
        this.setState({ data: res.data.data })
      }
      global.COOKIES.remove("username");
      global.COOKIES.remove("jwtoken");
      message.success("Bye👋", 2);
    }).catch(errorRes => {
      if (global.DEBUG) {
        console.log('errorRes=>', errorRes.response.data);
      }
      // error
      let err_msg = errorRes.response.data.meta.message;
      if ("description" in errorRes.response.data.meta) {
        err_msg += ": " + errorRes.response.data.meta.description;
      }
      message.error(err_msg, 3);
    });
  }

  renderOptions = ({ key, icon, content }) => {
    return (
      <Option value={key}>
        <Link to={key}
          onClick={key === "/logout" ? () => this.logout() : () => { }}>
          {icon && <Icon type={icon} style={{ paddingRight: 10 }} />}
          {content}
        </Link>
      </Option>
    )
  }

  render() {
    return (
      <Header style={{ background: '#fff', padding: 0 }} >
        <Select
          value={global.COOKIES.get("username")}
          style={{ width: 120, float: 'right', paddingRight: 15, paddingTop: 15 }}>
          {
            global.selects.map(item => {
              return this.renderOptions(item)
            })
          }
        </Select>
      </Header>
    );
  }
}

export default HHeader;
