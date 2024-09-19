import React from 'react';
import Navar from '../components/Navar';
import Helmet from 'react-helmet';
import '../index.css'
const Home = () => {
    
  return (
    <div className="home-page">
        <Helmet>
        <link rel="stylesheet" href="./App.css" />
        <title>Home</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </Helmet>
      <Navar />
      <main>
        <h1>Chào mừng đến trang chủ</h1>
        <p>Đây là nội dung của trang chủ.</p>
        <section>
          <h2>Các tính năng</h2>
          <ul>
            <li>Tính năng 1</li>
            <li>Tính năng 2</li>
            <li>Tính năng 3</li>
          </ul>
        </section>
        <button>Tìm hiểu thêm</button>
      </main>
      <footer>
        <p>&copy; 2023 Tên Công Ty. Mọi quyền được bảo lưu.</p>
      </footer>
    </div>
  );
}

export default Home;