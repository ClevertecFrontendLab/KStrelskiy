import { Breadcrumb } from 'antd';

import './Breadcrumb.css'

const BreadcrumbList = ({text}) => {
    return ( 
        <Breadcrumb className='breadcrumb'>
            <Breadcrumb.Item className='breadcrumbItem'>{text}</Breadcrumb.Item>
        </Breadcrumb>
     );
}
 
export default BreadcrumbList;