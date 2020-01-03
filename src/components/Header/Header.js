import React from 'react';
import { Layout, Select, Icon } from 'antd';
import { Link } from 'react-router-dom';
import "antd/dist/antd.css";

const { Header } = Layout;
const { Option } = Select;

class HHeader extends React.Component {
    logout() {
        global.COOKIES.remove("username");
        global.COOKIES.remove("jwtoken");
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
