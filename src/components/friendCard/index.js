import './style.min.css'
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';



const FriendCard = (props) => {
    return (
        <div className="friendCard">
            <div className='card_left'>
                <Avatar className="fl avatar" size={48} icon={<UserOutlined />} />
                <h5>{props.name}</h5>
                <div className="msg nowrap">{props.currentMsg}</div>
            </div>
            <div>
            <div className='circle fr'></div>
            <div className='fr'>12:39</div>
            </div>
        </div>
    )
}
export default FriendCard