import { Card, Col, Row } from 'antd';
import Button from '../Button/Button'
import {
    CalendarOutlined,
    HeartFilled,
    IdcardOutlined,
} from '@ant-design/icons';

import './ContentCards.css'


const ContentCards = () => {
    return ( 
        <div className='site-card-wrapper'>
        <Row gutter={16}>
            <Col span={8}>
                <Card
                    className='main-card'
                    title='Расписать тренировки'
                    bordered={false}
                >
                    <Button className='cardsBtn' type='text' text='Тренировки' icon={<HeartFilled/>}/>
                </Card>
            </Col>
            <Col span={8}>
                <Card
                    className='main-card'
                    title='Назначить календарь'
                    bordered={false}
                >
                    <Button className='cardsBtn' type='text' text='Календарь' icon={<CalendarOutlined/>}/>
                </Card>
            </Col>
            <Col span={8}>
                <Card
                    className='main-card'
                    title='Заполнить профиль'
                    bordered={false}
                >
                    <Button className='cardsBtn' type='text' text='Профиль' icon={<IdcardOutlined/>}/>
                </Card>
            </Col>
        </Row>
    </div>
    );
}
 
export default ContentCards;