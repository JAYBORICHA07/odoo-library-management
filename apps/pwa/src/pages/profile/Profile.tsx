import { useUserInfo } from "@/store/userStore";
import { Avatar, Button, Row, Typography, Col, Divider, Input} from "antd";
import { Content } from "antd/es/layout/layout";
import { NavLink } from "react-router-dom";


export function Profile() {
    return (
        <>
            <Content style={{ overflow: 'initial' }}>
                <Row>
                    <Col span={18}>  {/* This will take 60% width (14/24 = ~58.33%) */}
                        <SearchBooks />
                    </Col>
                    <Col span={6}>  {/* This will take 40% width (10/24 = ~41.67%) */}
                        <ProfileCard />
                    </Col>
                </Row>
            </Content>
        </>
    )
}

function ProfileCard() {
    const { name, email } = useUserInfo();
    return (
        <div style={{ padding: 10, textAlign: 'center', height: '100%' }}>
            <Typography.Title>Profile</Typography.Title>
            <Divider />
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
                <Avatar size={100} src="https://avatars.githubusercontent.com/u/0?v=4" style={{ marginRight: '24px' }} />
                <div style={{ textAlign: 'left' }}>
                    <Typography.Title level={2} style={{ margin: 0 }}>{name}</Typography.Title>
                </div>
            </div>
            <div style={{ textAlign: 'left' }}>
                <Typography.Title style={{ margin: '0' }} level={4}>Email:</Typography.Title>
                <Typography.Paragraph style={{ fontSize: '1rem' }} >{email}</Typography.Paragraph>

                <Typography.Title style={{ margin: '0' }} level={4}>Phone:</Typography.Title>
                <Typography.Paragraph style={{ fontSize: '1rem' }}> +91 9875046179</Typography.Paragraph>

                <Typography.Title style={{ margin: '0' }} level={4}>Address:</Typography.Title>
                <Typography.Paragraph style={{ fontSize: '1rem' }}>ongc circle, Vishwakarma government college, chandkhed, Ahmedabad 360370</Typography.Paragraph>
                <NavLink to={"/profile"}><Button type="primary" style={{ marginTop: '16px' }}>Edit Profile</Button></NavLink>
            </div>
        </div>
    );
}

function SearchBooks() {
    return (
        <div style={{ padding: 10, height: '100%' }}>
            <Typography.Title >Search Book</Typography.Title>
            <Divider />
            <Input.Search 
            placeholder="input search text"
            allowClear
            enterButton
            size="large">
            </Input.Search>
        </div>
    );
}
