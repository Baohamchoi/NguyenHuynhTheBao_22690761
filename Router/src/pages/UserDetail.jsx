import { useParams } from "react-router-dom";
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.webp"
import img3 from "../assets/img3.jpg"

const users = [
{ id: 1, name: "Nguyễn Văn A", age: 25, email: "sfasdsa@example.com", img: img1},
{ id: 2, name: "Trần Anh B", age: 30, email: "abcd@example.com", img: img2},
{ id: 3, name: "Lê Văn C", age: 28, email: "edfgd@example.com", img: img3}
];


function UserDetail() {
    const { id } = useParams();
    const user = users.find((u) => u.id === parseInt(id));
    if (!user) {
        return <h2>Người dùng không tồn tại</h2>;
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 border rounded shadow p-4 bg-light">
                    <h1 className="text-center text-success bg-dark p-2 text-white">{user.name}</h1>
                    <div className="text-center mb-3">
                        <img
                            className="img-fluid rounded-circle border border-3"
                            src={user.img}
                            alt={user.name}
                            style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                        />
                    </div>
                    <p className="fs-4"><strong>Tuổi:</strong> {user.age}</p>
                    <p className="fs-4"><strong>Email:</strong> {user.email}</p>
                    <div className="text-center">
                        <button
                            onClick={() => window.history.back()}
                            className="btn btn-outline-primary mt-3"
                        >
                            Quay lại
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
    
}
export default UserDetail;