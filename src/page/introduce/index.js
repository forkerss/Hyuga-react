import React from 'react';
import { Divider, Typography } from 'antd';
import HBreadcrumb from "../../components/Breadcrumb/Breadcrumb"
import Logo from "../../components/Logo/Logo";

const { Title, Paragraph, Text } = Typography;

function Introduction() {
    const Emoji = props => (
        <span
            className="emoji"
            role="img"
        >
            {props.symbol}
        </span>
    )
    return (
        <Typography>
            <Logo a={false} />
            <Paragraph>
                <p align="center">
                    <a href="https://github.com/Buzz2d0/Hyuga">
                        <img src="https://img.shields.io/badge/Hyuga-1.0.0-yellow" alt="Hyuga" /></a>
                    <span>  </span>
                    <a href="https://github.com/Buzz2d0/Hyuga/blob/master/Pipfile">
                        <img alt="Python" src="https://img.shields.io/badge/python-3.7-blue" />
                    </a>
                    <span>  </span>
                    <a href="https://github.com/Buzz2d0/Hyuga/blob/master/LICENSE">
                        <img alt="License" src="https://img.shields.io/github/license/Buzz2d0/Hyuga" />
                    </a>
                    <span>  </span>
                    <a href="https://github.com/Buzz2d0/Hyuga/stargazers">
                        <img alt="stars" src="https://img.shields.io/github/stars/Buzz2d0/Hyuga" />
                    </a>
                </p>
                <Emoji symbol="⚡️" /><a href="/">Hyuga</a> 是一个用来检测带外(Out-of-Band)流量(DNS查询和HTTP请求)的监控工具。
            </Paragraph>

            <Divider />

            <Paragraph>
                <Title level={3}><Emoji symbol="🎉" /> 项目简介</Title>
                <Text>DEMO 主页：<a href="http://hyuga.co/">http://hyuga.co/</a></Text>
                <br />
                <Text>项目地址：<a href="https://github.com/Buzz2d0/Hyuga">https://github.com/Buzz2d0/Hyuga</a></Text>
                <br />
                <Text>Hyuga 与 ceye 相似，只因兴趣使然决定写出这款工具将其开源。</Text>
                <br />
                <Text>Hyuga 的名字来自《火影忍者》中的日向一族的名称，日向一族是火影忍者中的火之国木叶忍者村的一个氏族，此氏族拥有血继限界白眼。</Text>
            </Paragraph>

            <Paragraph>
                <Title level={3}><Emoji symbol="🚀" /> 上手指南</Title>
                <Text>在 <a href="http://hyuga.co/">DEMO</a> 上简单注册账号后就可以使用了。</Text>
                <br />
                <Text><Text code><Emoji symbol="📌" />tips</Text>：目前没有使用邮箱或者手机号进行账号注册导致 Forgot password 功能没有实现。</Text>
                <br />
                <Text strong><Emoji symbol="🐋" /> Docker 安装：</Text>
                <br />
                <Text >先阅读此文档：<a href="https://github.com/Buzz2d0/Hyuga/blob/master/docs/deploy.md">deploy.md</a>。进行简单设置后，就可以使用 docker 运行。</Text>
                <br />
                <Text strong><Emoji symbol="🏝" /> Others</Text>
                <br />
                <ul>
                    <li>
                        API: <a href="http://hyuga.co/api">http://hyuga.co/api</a>
                    </li>
                    <li>
                        API 接口查询文档：<a href="https://github.com/Buzz2d0/Hyuga/blob/master/docs/apis/records.md">records.md</a>
                    </li>
                </ul>
            </Paragraph>

            <Paragraph>
                <Title level={3}><Emoji symbol="👏" /> 主要框架</Title>
                <ul>
                    <li>
                        <a href="https://github.com/falconry/falcon">Falcon</a> 用于构建快速 WEB API 和应用程序后端的极简 WSGI 库。
                    </li>
                    <li>
                        <a href="https://github.com/pyeve/cerberus">cerberus</a> 轻量级、可扩展的数据验证库。
                    </li>
                    <li>
                        <a href="https://github.com/chen2aaron/redisco">redisco</a> 简单好用的 Redis ORM。
                    </li>
                    <li>
                        <a href="https://pypi.org/project/dnslib/">dnslib</a> 用于对 DNS 数据包进行编码/解码。
                    </li>
                    <li>
                        <a href="https://github.com/pallets/click">click</a> 组合命令行界面工具包。
                    </li>
                    <li>
                        <a href="https://github.com/facebook/react">React</a> 用于构建用户界面的 JavaScript 库。
                    </li>
                </ul>
            </Paragraph>

            <Paragraph>
                <Title level={3}><Emoji symbol="⌛" /> 后续计划</Title>
                <Text strong ><Emoji symbol="👉" /></Text >
                关注 <a href="https://github.com/Buzz2d0/Hyuga">Buzz2d0/Hyuga</a>
            </Paragraph>

            <Paragraph>
                <Title level={3}><Emoji symbol="🙏" /> 参考</Title>
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
        </Typography >
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