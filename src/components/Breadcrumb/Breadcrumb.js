import React from 'react';
import { Breadcrumb } from 'antd';

function renderPaths(name) {
    return (
        <span>/ <strong>{name}</strong></span>
    );
}

function HBreadcrumb(props) {
    return (
        <Breadcrumb style={{ margin: '12px 0' }}>
            <Breadcrumb.Item>
                {
                    props.paths.map(item => {
                        return renderPaths(item)
                    })
                }
            </Breadcrumb.Item>
        </Breadcrumb>
    );
}

export default HBreadcrumb;