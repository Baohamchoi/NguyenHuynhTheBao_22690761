import React from 'react';

function ModalIntroduce({ isOpen, setIsOpen }) {
  const closeModal = () => {
    setIsOpen(false); // Đảm bảo gọi setIsOpen để đóng modal
  };

  return (
    <div>
        {/* Kiểm tra nếu modal mở thì hiển thị */}
        <div className={`fixed inset-0 flex items-center justify-center z-50 ${isOpen ? 'block' : 'hidden'}`}>
            
            {/* Background của modal */}
            <div className="absolute inset-0 bg-gray-500 opacity-50" onClick={closeModal}></div>

            {/* Nội dung của modal */}
            <div className="bg-white rounded-lg overflow-hidden w-96 p-6 relative z-10">
            
            {/* Nút đóng (X) ở góc trên bên trái */}
            <button className="absolute top-2 right-5 text-3xl text-gray-500" onClick={closeModal}>&times;</button>

            {/* Hình ảnh trong modal */}
            <img src="https://via.placeholder.com/300" alt="Food" className="w-full h-48 object-cover rounded-lg" />
            
            {/* Tiêu đề modal */}
            <h2 className="text-pink-500 text-xl font-bold mt-4 text-center">Discover Cheffify</h2>
            
            {/* Nội dung mô tả */}
            <p className="text-center mt-2 text-gray-600">
                Easy and delicious cooking instructions right here. Start exploring now!
            </p>

            {/* Nút Next và Skip */}
            <div className="mt-4 flex justify-between">
                <button className="bg-pink-500 text-white px-4 py-2 rounded-md">Next</button>
                <button className="bg-transparent text-pink-500 px-4 py-2 rounded-md border border-pink-500" onClick={closeModal}>Skip</button>
            </div>
            </div>
        </div>
    </div>

  );
}

export default ModalIntroduce;
