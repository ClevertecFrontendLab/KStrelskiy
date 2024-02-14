import {
    CalendarOutlined,
    HeartFilled,
    TrophyFilled,
    IdcardOutlined,
} from '@ant-design/icons';

import { Menu } from 'antd';

import './MenuSideBar.css'


const MenuSideBar = ({...props}) => {
    return ( 
        <Menu
        className={props.className}
        theme={props.theme}
        mode={props.mode}
        defaultSelectedKeys={['1']}
        items={[
            {
                key: '1',
                icon: <CalendarOutlined />,
                label: 'Календарь',
            },
            {
                key: '2',
                icon: <HeartFilled />,
                label: 'Тренировки',
            },
            {
                key: '3',
                icon: <TrophyFilled />,
                label: 'Достижения',
            },
            {
                key: '4',
                icon: <IdcardOutlined />,
                label: 'Профиль',
            },
        ]}
    />
     );
}
 
export default MenuSideBar;