import React from 'react';
import { Typography } from 'antd';
import ReactMarkdown from 'react-markdown/with-html';

import Logo from "../../components/Logo/Logo";
import HBreadcrumb from "../../components/Breadcrumb/Breadcrumb"

import CodeBlock from './codeBlock';
import ReadmeRaw from "../../assets/README.md";


class Introduction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: '',
        }
    }
    componentWillMount() {
        fetch(ReadmeRaw)
            .then(res => res.text())
            .then(text => this.setState({ markdown: text }));
    }
    render() {
        const { markdown } = this.state;
        return (
            <Typography>
                <Logo a={false} />
                <ReactMarkdown
                    className="markdown-body"
                    source={markdown}
                    escapeHtml={false}
                    renderers={{
                        code: CodeBlock,
                    }}
                />
            </Typography>
        )
    }

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