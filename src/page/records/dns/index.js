import React from 'react';
import { Table } from 'antd';
import axios from 'axios';
import HBreadcrumb from "../../../components/Breadcrumb/Breadcrumb"
import Records from "../../../components/Records/Records"

const { Column } = Table;

class RecordsDns extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
        this.getDnsRecordsData();
    }

    getDnsRecordsData() {
        let baseUrl = "/v1/users/self/records?type=dns";
        axios.get(`${global.API}${baseUrl}`,
            {
                headers: {
                    'JWToken': global.COOKIES.get("jwtoken")
                },
            }
        ).then((res) => {
            console.log('res=>', res);
            if (res.data.meta.code === 200) {
                this.setState({ data: res.data.data })
            }
        });
    }

    clearData(recordsType) {
        let baseUrl = "/v1/users/self/records";
        axios.delete(`${global.API}${baseUrl}`,
            {
                data: JSON.stringify({ "type": recordsType }),
                headers: {
                    'Content-Type': 'application/json',
                    'JWToken': global.COOKIES.get("jwtoken")
                },
            },
        ).then(res => {
            if (res.data.meta.code === 200) {
                this.setState({ data: [] })
            }
        });
    }


    renderRecords() {
        return (
            <Records recordsType="dns"
                onClick={() => this.getDnsRecordsData()}
                clearData={() => this.clearData("dns")} />
        );
    }

    renderList(data) {
        return (
            <Table dataSource={data} style={{ marginTop: 24 }}>
                <Column title="ID" dataIndex="id" key="id" />
                <Column title="Name" dataIndex="name" key="name" />
                <Column title="Remote Addr" dataIndex="remote_addr" key="remote_addr" />
                <Column title="Created At (UTC+0)" dataIndex="created" key="created" />
            </Table>
        );
    }

    render() {
        return (
            <div>
                <HBreadcrumb paths={["Records", "DNS"]} />
                <div
                    style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                    {this.renderRecords()}
                    {this.renderList(this.state.data)}
                </div>
            </div>
        );
    }
}


export default RecordsDns;