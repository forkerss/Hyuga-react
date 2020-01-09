import React from 'react';
import { Divider, Typography } from 'antd';
import HBreadcrumb from "../../components/Breadcrumb/Breadcrumb"
import Logo from "../../components/Logo/Logo";

const { Title, Paragraph, Text } = Typography;

function Introduction() {
    return (
        <Typography>
            <Logo a={false} />
            <Title level={2}>Introduction</Title>
            <Paragraph>
                <Text strong><a href="/">Hyug🌀</a>是一个用来检测带外(Out-of-Band)流量(DNS查询和HTTP请求)的监控平台。</Text>
            </Paragraph>
            <Paragraph>
                名字来源：日向一族是火影忍者中的火之国木叶忍者村的一个氏族，日向一族拥有血继限界白眼。 与 <a href="http://ceye.io">ceye.io</a> 相似，只因兴趣使然决定写出这款工具将其开源。
            </Paragraph>

            <Divider />

            <Paragraph>
                <Title level={3}>参考</Title>
                <ul>
                    <li>
                        <a href="https://github.com/BugScanTeam/DNSLog">DNSLog</a>
                    </li>
                    <li>
                        <a href="http://ceye.io">ceye.io</a>
                    </li>
                </ul>
            </Paragraph>

            <Divider />
        </Typography>
    );
}

function Introduce() {
    return (
        <div>
            <HBreadcrumb paths={["Introduce"]} />
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                <Introduction />
            </div>

        </div>
    );
}

export default Introduce;