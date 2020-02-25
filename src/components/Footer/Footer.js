import React from 'react';
import { Layout } from 'antd';
import "antd/dist/antd.css";

const { Footer } = Layout;

function HFooter() {
    return (
        <Footer style={{ textAlign: 'center' }}><a href="/">Hyuga</a> ©2019-2020 Created by Buzz2d0 <a href="https://github.com/Buzz2d0/Hyuga">Github</a></Footer>
    );
}

export default HFooter;