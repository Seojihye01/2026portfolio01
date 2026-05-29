import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import "./App.css";

// 기존 컴포넌트들
import Main from './components/Main';
import TopButton from "./components/TopBtn";
import Navigation from "./components/Nav"; 

function App() {
  const location = useLocation(); // 현재 경로 파악을 위해 추가
  const [scrollWidth, setScrollWidth] = useState(0);


  // 1. 스크롤 진행 바 로직 (기존 유지)
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollWidth(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 3. 메인 페이지 여부 확인
  const isMainPage = location.pathname === '/';

  return (
    <>
      {/* 진행 상태 바 (기존 유지) */}
      <div className="progress_container">
        <div style={{
          position: 'fixed', top: 0, left: 0, width: `${scrollWidth}%`, height: '4px',
          backgroundColor: '#f9f9f9', zIndex: 10000, transition: 'width 0.1s ease-out'
        }} className="progress_bar" />
      </div>
      
      {isMainPage && <Navigation />}
      
      <TopButton />
      
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>

    </>
  );
}

export default App;