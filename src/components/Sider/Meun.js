import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import "antd/dist/antd.css";

class HMenu extends React.Component {
    state = {
        theme: this.props.theme,
        mode: "inline"
    };

    renderSubMenu = ({ key, icon, title, subs }) => {
        return (
            <Menu.SubMenu key={key} title={<span>{icon && <Icon type={icon} theme="filled" />}<span>{title}</span></span>}>
                {
                    subs && subs.map(item => {
                        return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
                    })
                }
            </Menu.SubMenu>
        )
    }

    renderMenuItem = ({ key, icon, title }) => {
        return (
            <Menu.Item key={key}>
                <Link to={key}>
                    {icon && <Icon type={icon} theme="filled" />}
                    <span>{title}</span>
                </Link>
            </Menu.Item>
        )
    }

    render() {
        return (
            <Menu
                defaultSelectedKeys={global.menusDefalutOptions.defaultSelectedKeys}
                defaultOpenKeys={global.menusDefalutOptions.defaultOpenKeys}
                theme={this.state.theme}
                mode={this.state.mode}>

                {
                    global.menus.map(item => {
                        return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
                    })
                }
            </Menu>
        );
    }
}


export default HMenu;