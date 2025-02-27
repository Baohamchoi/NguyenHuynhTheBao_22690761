import React, { useState, useRef, useReducer, useEffect, useMemo } from "react";
import Student from "./BT2/Student";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App_2 = () => {
    const [students, dispatch] = useReducer(Student, []);
    const [averageScore, setAverageScore] = useState(0);
    const [highestScore, setHighestScore] = useState(0); // Điểm cao nhất
    const nameRef = useRef();
    const scoreRef = useRef();
    const [editingStudent, setEditingStudent] = useState(null);

    // Load students từ localStorage khi ứng dụng khởi động
    useEffect(() => {
        const storedStudents = JSON.parse(localStorage.getItem('students'));
        if (storedStudents) {
            dispatch({ type: 'SET', payload: storedStudents });
        }
    }, []);

    // Lưu danh sách sinh viên vào localStorage mỗi khi danh sách thay đổi
    useEffect(() => {
        if (students.length > 0) {
            localStorage.setItem('students', JSON.stringify(students));
        }
    }, [students]);

    // Thêm sinh viên
    const handleAddStudent = () => {
        const name = nameRef.current.value;
        const score = parseFloat(scoreRef.current.value);

        // Kiểm tra nếu điểm không hợp lệ
        if (!name || !isNaN(name) || isNaN(score) || score < 0 || score > 10) {
            alert('Tên (không phải số), điểm không được để trống và điểm phải trong khoảng từ 0 đến 10!');
            return;
        }

        const newStudent = { id: Date.now(), name, score };
        dispatch({ type: 'Thêm', payload: newStudent });
        nameRef.current.value = '';
        scoreRef.current.value = '';
    };

    // Chỉnh sửa sinh viên
    const handleEditStudent = (student) => {
        setEditingStudent(student);
        nameRef.current.value = student.name;
        scoreRef.current.value = student.score;
    };

    // Lưu thông tin sửa đổi
    const handleSaveEdit = () => {
        const updatedName = nameRef.current.value;
        const updatedScore = parseFloat(scoreRef.current.value);

        // Kiểm tra nếu điểm không hợp lệ
        if (!updatedName || isNaN(updatedScore) || updatedScore < 0 || updatedScore > 10) {
            alert('Tên và điểm không được để trống và điểm phải trong khoảng từ 0 đến 10!');
            return;
        }

        dispatch({
            type: 'Sửa',
            payload: { id: editingStudent.id, updatedData: { name: updatedName, score: updatedScore } }
        });

        setEditingStudent(null);
        nameRef.current.value = '';
        scoreRef.current.value = '';
    };

    // Xóa sinh viên
    const handleDeleteStudent = (id) => {
        dispatch({ type: 'Xóa', payload: id });
    
        // Sau khi xóa, cập nhật lại localStorage
        const updatedStudents = students.filter(student => student.id !== id);
        localStorage.setItem('students', JSON.stringify(updatedStudents));
    };
    

    // Tính toán điểm trung bình và điểm cao nhất sử dụng useMemo
    const { average, highest } = useMemo(() => {
        if (students.length === 0) {
            return { average: 0, highest: 0 };
        }
        const totalScore = students.reduce((sum, student) => sum + student.score, 0);
        const highestScore = Math.max(...students.map(student => student.score));
        return {
            average: totalScore / students.length,
            highest: highestScore
        };
    }, [students]);

    // Cập nhật điểm trung bình và điểm cao nhất
    useEffect(() => {
        setAverageScore(average);
        setHighestScore(highest);
    }, [average, highest]);

    return (
        <div className="container d-flex flex-column text-center mt-5" style={{ width: '30%' }}>
            <h2>Quản lý Sinh Viên</h2>
            <div>
                <input 
                    ref={nameRef} 
                    type="text" 
                    placeholder="Tên sinh viên" 
                    className="form-control"
                />
                <input 
                    ref={scoreRef} 
                    type="number" 
                    placeholder="Điểm sinh viên (0-10)" 
                    className="form-control mt-2"
                />
                <button 
                    className="btn btn-success mt-2" 
                    onClick={editingStudent ? handleSaveEdit : handleAddStudent}
                >
                    {editingStudent ? 'Lưu sửa' : 'Thêm sinh viên'}
                </button>
            </div>

            {/* <h3 className="mt-4">Danh sách sinh viên</h3> */}
            <ul className="list-group">
                <li className="mt-4 list-unstyled fs-3 bg-secondary text-light">Danh sách sinh viên</li>
                {students.map(student => (
                    <li key={student.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <span>{student.name} - {student.score}</span>
                        <div>
                            <button 
                                className="btn btn-warning btn-sm mx-1" 
                                onClick={() => handleEditStudent(student)}
                            >
                                Sửa
                            </button>
                            <button 
                                className="btn btn-danger btn-sm mx-1" 
                                onClick={() => handleDeleteStudent(student.id)}
                            >
                                Xóa
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            <h4 className="mt-4">Điểm trung bình: {averageScore.toFixed(2)}</h4>
            <h4 className="mt-2">Điểm cao nhất: {highestScore}</h4>
        </div>
    );
};

export default App_2;
