import React from "react";
import { Avatar, List, Typography, Skeleton, Button, Space, Divider, Card } from "antd";
import { EnvironmentFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

export default function BrowseProviders({ providers }) {
    const totalProviders = providers.length;

    return (
        <>
            <Title level={3}>
                Browse Providers
            </Title>
            <Text type="secondary">Mental Wellness</Text><br />
            <Button shape="round"><EnvironmentFilled /> ON</Button><br />
            <Divider />
            <Text type="secondary"><strong>{totalProviders}</strong>{` providers in Ontario`}</Text><br />
            <List
                className="providers-list"
                itemLayout="horizontal"
                dataSource={providers}
                renderItem={(provider) => (
                    <>
                        <List.Item>
                            <Link to={`/provider/${provider.id}`} key={provider.id} style={{
                                width: '100%',
                            }}>
                                <Card>
                                    <List.Item.Meta
                                        avatar={<Avatar size="large" src={provider.avatarUrl} />}
                                        title={provider.name + ", " + provider.title}
                                        description={provider.bio.substring(0, 150) + "..."}
                                    />
                                    <Button shape="round" ic type="primary">{`Available ` + provider.availabilty}</Button>
                                </Card>
                            </Link>
                        </List.Item >
                    </>
                )
                }
            />
        </>
    );
}