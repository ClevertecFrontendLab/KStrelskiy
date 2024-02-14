import { Typography, List } from 'antd';
const { Text } = Typography;

import './Advatange.css'

const data = [
    {
        title: 'планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;',
    },
    {
        title: 'отслеживать свои достижения в разделе статистики, сравнивая свои результаты с нормами и рекордами; ',
    },
    {
        title: 'создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы о тренировках; ',
    },
    {
        title: 'выполнять расписанные тренировки для разных частей тела, следуя подробным инструкциям и советам профессиональных тренеров.',
    },
];

const Advatange = () => {
    return ( 
        <Typography className='advantage'>
            <Text className='advantage-title'>С CleverFit ты сможешь:</Text>
            <List
                itemLayout='horizontal'
                dataSource={data}
                renderItem={(item) => (
                <List.Item className='advantage-item'>
                    <Typography.Text className='advantage-text'>
                        — {item.title}
                    </Typography.Text>
                </List.Item>
            )}
            />
        </Typography>
     );
}
 
export default Advatange;