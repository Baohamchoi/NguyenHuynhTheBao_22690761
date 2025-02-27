const Student = (state, action) => {
    switch (action.type) {
        case 'Thêm':
            return [...state, action.payload];

        case 'Sửa':
            return state.map(student => 
                student.id === action.payload.id
                    ? { ...student, ...action.payload.updatedData }
                    : student
            );

        case 'Xóa':
            return state.filter(student => student.id !== action.payload);

        case 'SET':  // Để xử lý việc tải danh sách từ localStorage
            return action.payload;

        default:
            return state;
    }
};

export default Student;
