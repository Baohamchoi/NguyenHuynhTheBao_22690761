import {Link} from "react-router-dom"

const users = [
    {id: 1, name: "Nguyễn Văn A"},
    {id: 2, name: "Trần Anh B"},
    {id: 3, name: "Lê Văn C"}
]

function UserList() {
    return (
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <ul className="list-group">
                {users.map((user) => (
                  <li className="list-group-item d-flex justify-content-between align-items-center shadow-sm mb-2" key={user.id}>
                    <Link 
                      className="text-decoration-none text-success fs-4"
                      to={`/user/${user.id}`}
                    >
                      {user.name}
                    </Link>
                    <Link 
                      className="btn btn-outline-primary btn-sm"
                      to={`/user/${user.id}`}
                    >
                      Xem chi tiết
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );      
    }

    export default UserList