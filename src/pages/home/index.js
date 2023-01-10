import { useLocation } from "react-router-dom";
import { UserOutlined, SettingFilled, SmileOutlined } from '@ant-design/icons';
import { Avatar, Input } from 'antd';
import FriendCard from '../../components/friendCard'
import './style.min.css'

const Home = () => {
  const friendList = [{ name: '夕阳的刻痕',currentMsg:'你要好好上课啊。' }, { name: '路明非',currentMsg:'喂，帮我字学签到一下，谢谢哈' }]
  const state = useLocation().state;
  const onSearch = (value) => console.log(value);
  const send = (e) => {
    e.stopPropagation();
    console.log(e)
  };


  const { Search } = Input;
  return (
    <>
      <div className="left fl">
        <div className="left_header clearfix">
          <Avatar className="fl avatar" size={64} icon={<UserOutlined />} />
          <h5>{state.name}</h5>
          <div className="personalSignature">我只爱你,You are my only one</div>
        </div>
        <Search
          className="search"
          placeholder="input search text"
          allowClear
          enterButton="搜索"
          size="mini"
          onSearch={onSearch}
        />
        <div className="friends_list">
          {

          friendList.map(item => {
            return <FriendCard name={item.name} currentMsg={item.currentMsg} key={item.name}/>
          })}
        </div>

      </div>

      <div className="right">
        <div className="chat_box">
          <div className="friend_info">
            <div className="">
              <Avatar className="fl avatar" size={64} icon={<UserOutlined />} />
              <h5>夕阳的刻痕</h5>
              <div className="personalSignature">路明泽不会发现我是他表哥吧。</div>
            </div>
            <SettingFilled className=" icon" />
          </div>
          <div className="chat_info">2</div>
          <div className="tool_list">
            <SmileOutlined className="icon" />
            <div className="fr send">发送</div>
          </div>
          <div className="editor">
            <Input className="editor_input" value={'夕阳你不能这么对我!'} rows={4} onPressEnter={send} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
