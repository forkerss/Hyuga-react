import React from 'react';
import { Typography } from 'antd';
import HBreadcrumb from "../../components/Breadcrumb/Breadcrumb"
const { Title, Paragraph, Text } = Typography;

function APIPage() {
    return (
        <div>
            <HBreadcrumb paths={["API"]} />
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                <Typography>
                    <Title>Hyuga API</Title>
                    <Paragraph>
                        <Paragraph>
                            <Text code copyable={{ text: `${global.API}/v1/records?token={token}&type={dns|http}&filter={filter}` }}>
                                {global.API}/v1/records?token=
                                <Text mark>{'{'}token{'}'}</Text>&type=<Text mark>{'{'}dns | http{'}'}</Text>&filter=<Text mark>{'{'}filter{'}'}</Text>
                            </Text>
                        </Paragraph>
                        <Paragraph>
                            <ul>
                                <li><Text code>token</Text>: your hyuga api token.</li>
                                <li><Text code>type</Text>: type of query, 'dns' or 'http'.</li>
                                <li><Text code>filter</Text>: match url name rule, the filter max length is 20.</li>
                            </ul>                            
                        </Paragraph>
                    </Paragraph>
                </Typography>
            </div>
        </div>
    );
}

export default APIPage;