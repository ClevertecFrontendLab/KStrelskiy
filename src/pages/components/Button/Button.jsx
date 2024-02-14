import { Button } from 'antd';
import './Button.css'

const ButtonSettigns= ({...props}) => {
    return ( 
        <Button className={props.className} type={props.type} icon={props.icon}>
       {props.text}
    </Button>
     );
}
 
export default ButtonSettigns;