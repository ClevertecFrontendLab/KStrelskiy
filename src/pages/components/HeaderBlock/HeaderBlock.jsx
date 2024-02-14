import { Typography, Col, Row, Grid } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import Button from '../Button/Button'

import './HeaderBlock.css'
import classNames from 'classnames';

const { Title } = Typography;
const { useBreakpoint } = Grid;

const {lg} = useBreakpoint


const HeaderBlock = () => {
    return ( 
        <Row className='header-row' justify={'space-between'}>
            <Col>
                <Title className='header-title' >
                    Приветствуем тебя в CleverFit — <span>приложении,</span> которое поможет тебе
                    добиться своей мечты!
                </Title>
            </Col>
            <Col>
                <Button className='settingstBtn' type='text' text='Настройки' icon={<SettingOutlined/>} />
            </Col>
        </Row>
     );
}
 
export default HeaderBlock;