import React from 'react';
import { Avatar, Typography, Divider, Icon } from 'antd';
import axios from 'axios';
import HBreadcrumb from "../../components/Breadcrumb/Breadcrumb"

const { Title, Paragraph, Text } = Typography;

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
        this.getUserInfo();
    }

    getUserInfo() {
        let baseUrl = "/v1/users/self";
        axios.get(`${global.API}${baseUrl}`,
            {
                headers: {
                    'JWToken': global.COOKIES.get("jwtoken")
                },
            }
        ).then((res) => {
            if (global.DEBUG) {
                console.log('res=>', res);
            }
            if (res.data.meta.code === 200) {
                this.setState({ data: res.data.data })
            }
        });
    }

    renderUserInfo() {
        return (
            <Typography>
                <Avatar size="large" >{this.state.data.nickname}</Avatar>
                <Title>Profile</Title>
                <Divider />

                <Paragraph>
                    <Icon type="user" /> <Text strong>UserName</Text>:  {this.state.data.username}
                </Paragraph>
                <Paragraph>
                    <Icon type="heart" /> <Text strong>NickName</Text>:  {this.state.data.nickname}
                </Paragraph>
                <Paragraph>
                    <Icon type="pushpin" /> <Text strong>Identify</Text>: <Text
                        copyable={{ text: `${this.state.data.identify}.${global.HOST}` }}>
                        {`${this.state.data.identify}.${global.HOST}`}
                    </Text>
                </Paragraph>
                <Paragraph>
                    <Icon type="key" /> <Text strong>API Token</Text>: <Text
                        copyable={{ text: this.state.data.token }}>
                        {this.state.data.token}
                    </Text>
                </Paragraph>
            </Typography>

        );
    }


    render() {
        return (
            <div>
                <HBreadcrumb paths={["Profile"]} />
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                    {this.renderUserInfo()}
                </div>
            </div>
        );
    }
}

export default Profile;