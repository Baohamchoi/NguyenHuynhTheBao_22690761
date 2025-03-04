import {useNavigate} from "react-router-dom"

import UserList from "./UserList"

const Home = () => {
    return (
        <div className="d-flex flex-column">
            <h1 className="text-center text-danger display-4 fw-bold shadow-mb p-3 lg-body rounded" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.2)' }}>
            Danh sách người dùng
            </h1>
            <div className="d-flex align-item-center justify-content-center">
              <UserList />
            </div>
            
        </div>
    );
}

export default Home;