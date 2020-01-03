import React from 'react';
import { Input, Button, Alert, Icon } from 'antd';

const { Search } = Input;

class Records extends React.Component {

    render() {
        return (
            <div>
                <Alert
                    message="The record is only saved for 6 hours and only the last 100 items are displayed."
                    type="info"
                    showIcon
                    style={{ marginBottom: 24, fontSize: 12 }}>
                </Alert>
                <Search
                    placeholder="input search url name"
                    onSearch={value => console.log(value)}
                    style={{ width: 200, marginRight: 24, fontSize: 12 }}
                />
                <Button type="primary"
                    style={{ marginLeft: 10, fontSize: 12 }}
                    onClick={() => this.props.onClick()}>
                    <Icon type="redo" />
                    Reload
                </Button>
                <Button type="danger"
                    style={{ marginLeft: 10, fontSize: 12 }}
                    onClick={() => this.props.clearData()}>
                    <Icon type="close-circle" />
                    Clear
                </Button>
            </div>
        );
    }
}


export default Records;