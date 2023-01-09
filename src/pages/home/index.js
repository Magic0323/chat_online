import { useLocation } from "react-router-dom";
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Input } from 'antd';
import './style.min.css'

const Home = () => {
  const state = useLocation().state;
  const onSearch = (value) => console.log(value);
  const { Search } = Input;
  console.log(state.name);
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
        <div className="friends_list"></div>

      </div>

      <div className="right">
        <div className="chat_box"></div>
      </div>
    </>
  );
};
export default Home;
