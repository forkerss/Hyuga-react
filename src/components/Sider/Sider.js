import React from 'react';
import { Layout } from 'antd';
import "antd/dist/antd.css";
import Logo from "../../components/Logo/Logo";
import HMenu from "./Meun"

const { Sider } = Layout;

class HSider extends React.Component {
    state = {
        collapsed: false,
        theme: "light",
    };

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    render() {
        return (
            <Sider collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
                theme={this.state.theme}>
                {/* logo */}
                <Logo a={true}/>
                {/* meun */}
                <HMenu theme={this.state.theme}/>
            </Sider>
        );
    }
}

export default HSider;