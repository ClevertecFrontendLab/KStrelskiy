import 'antd/dist/antd.css';
import { Button } from 'antd';
import Icon, {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';

import './ButtonSlideBar.css'

const ButtonSlideBar = ({...props}) => {
    return (
        <Button
        className={props.className}
        data-test-id={props.data}
        type={props.type}
        onClick={() => props.setCollapsed(!props.collapsed)}
        icon={
            props.collapsed ? (
                <MenuUnfoldOutlined className='sidebarBtnItem' />
            ) : (
                <MenuFoldOutlined className='sidebarBtnItem' />
            )
        }
        >
        </Button>
     );
}
 
export default ButtonSlideBar;