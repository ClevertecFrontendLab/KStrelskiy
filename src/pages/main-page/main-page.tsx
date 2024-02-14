import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Layout, Typography, Row, Col, Card } from 'antd';
import { AndroidFilled, AppleFilled } from '@ant-design/icons';
import Logo from '../components/Logo/Logo.jsx';
import ButtonSlideBar from '../components/ButtonSlideBar/ButtonSlideBar.jsx';
import MenuSideBar from '@pages/components/MenuSideBar/MenuSideBar.jsx';
import ButtonExit from '@pages/components/ButtonExit/ButtonExit.jsx';
import Button from '../components/Button/Button.jsx';

import './main-page.css';
import BreadcrumbList from '@pages/components/Breadcrumb/Breadcrumb.jsx';
import HeaderBlock from '@pages/components/HeaderBlock/HeaderBlock.jsx';
import Advatange from '@pages/components/Advatange/Advatange.jsx';
import ContentCards from '@pages/components/ContentCards/ContentCards.jsx';
import useWindowSize from '../../useWindowSize.js';

const { Header, Sider, Content, Footer } = Layout;
const { Title, Link } = Typography;

export const MainPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const windowSize = useWindowSize();

    return (
        <Layout className='container'>
            <Sider
                collapsedWidth={windowSize.width <= 440 ? 0 : 64}
                width={windowSize.width <= 440 ? 106 : 208}
                className='sidebar'
                trigger={null}
                collapsible
                collapsed={collapsed}
            >
                <Logo collapsed={collapsed} />
                <MenuSideBar className='sidebarMenu' theme='light' mode='inline' />
                <ButtonSlideBar
                    className='sidebarBtn'
                    data='sider-switch'
                    type='text'
                    collapsed={collapsed}
                    setCollapsed={setCollapsed}
                />
                <ButtonSlideBar
                    className='sidebarBtn mobile'
                    data='sider-switch-mobile'
                    type='text'
                    collapsed={collapsed}
                    setCollapsed={setCollapsed}
                />
                <ButtonExit className='exitBtn' type='text' collapsed={collapsed} />
            </Sider>

            <Layout className='site-layout'>
                <Header className='header site-layout-background'>
                    <BreadcrumbList text='Главная' />
                    <HeaderBlock />
                </Header>
                <Content className='content site-layout-background'>
                    <Advatange />
                    <Typography>
                        <Title level={4} className='sub-title'>
                            CleverFit — это не просто приложение, а твой личный помощник в мире
                            фитнеса. Не откладывай на завтра — <span>начни тренироваться уже</span>{' '}
                            сегодня!
                        </Title>
                    </Typography>
                    <ContentCards />
                </Content>
                <Footer className='footer'>
                    <Row justify={'space-between'}>
                        <Col className='footer-left'>
                            <Link href='#' target='_blank' className='feedback-link'>
                                Смотреть отзывы
                            </Link>
                        </Col>
                        <Col className='footer-right'>
                            <Card
                                className='footer-card'
                                title={
                                    <Link className='download-link' href='#' target='_blank'>
                                        Скачать на телефон
                                    </Link>
                                }
                                type='inner'
                                extra='Доступно в PRO-тарифе'
                            >
                                <Button
                                    className='social-link'
                                    type='text'
                                    text='Android OS'
                                    icon={<AndroidFilled />}
                                />
                                <Button
                                    className='social-link'
                                    type='text'
                                    text='Apple iOS'
                                    icon={<AppleFilled />}
                                />
                            </Card>
                        </Col>
                    </Row>
                </Footer>
            </Layout>
        </Layout>
    );
};
