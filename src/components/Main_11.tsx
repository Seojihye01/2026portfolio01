import React, { useState } from 'react';
import './Main_11.css';

const Main_11: React.FC = () => {
  const [emailStatus, setEmailStatus] = useState<'EMAIL' | 'COPY ✔'>('EMAIL');
  const [githubStatus, setGithubStatus] = useState<'GIT HUB' | 'VISIT ✔'>('GIT HUB');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('jihyeseo0801@gmail.com');
    setEmailStatus('COPY ✔');

    setTimeout(() => {
      setEmailStatus('EMAIL');
    }, 2000);
  };

  const handleGithubClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // 즉시 이동하는 기본 동작 차단
    
    if (githubStatus === 'VISIT ✔') return; // 이미 클릭했다면 중복 방지

    setGithubStatus('VISIT ✔');

    // 1초 후 새 탭으로 이동 및 텍스트 복구
    setTimeout(() => {
      window.open("https://github.com/Seojihye01/", "_blank", "noopener,noreferrer");
      setGithubStatus('GIT HUB');
    }, 1000);
  };

  return (
    <section className="main11_container" data-theme="light">
      <div className='main11_inner'>
        
        <div className="main11_top_left">
          <span className="main11_date">JUNE 07, 2026</span>
          <span className="main11_sub_title">PROJ NO. 01</span>
        </div>

        <div className="main11_top_right">
          <h2 className="main11_thank_text">THANK YOU <br />FOR WATCHING</h2>
        </div>

        <div className="main11_centre">
          <h1 className="main11_brand_name">SEO JIHYE</h1>
        </div>

        <div className="main11_bottom_left">
          
          <div className="main11_contact_box" onClick={handleCopyEmail} title="Click to Copy Email">
            <span className="main11_frame_corner top_left">┌</span>
            <span className="main11_frame_corner top_right">┐</span>
            <span className="main11_frame_corner bottom_left">└</span>
            <span className="main11_frame_corner bottom_right">┘</span>
            <div className="main11_contact_inner_content">
              <span className={`main11_contact_label ${emailStatus === 'COPY ✔' ? 'active_status' : ''}`}>
                {emailStatus}
              </span>
              <p className="main11_contact_value">jihyeseo0801@gmail.com</p>
            </div>
          </div>

          <a href="https://github.com/Seojihye01/2026portfolio01" onClick={handleGithubClick} className="main11_contact_box link_box">
            <span className="main11_frame_corner top_left">┌</span>
            <span className="main11_frame_corner top_right">┐</span>
            <span className="main11_frame_corner bottom_left">└</span>
            <span className="main11_frame_corner bottom_right">┘</span>
            <div className="main11_contact_inner_content">
              <span className={`main11_contact_label ${githubStatus === 'VISIT ✔' ? 'active_status' : ''}`}>
                {githubStatus}
              </span>
              <p className="main11_contact_value github_url">github.com/Seojihye01/</p>
            </div>
          </a>
        </div>

        <div className="main11_bottom_right">
          <p className="main11_credit_text">PORTFOLIO DESIGN <br />BY SEO JIHYE</p>
        </div>

      </div>
    </section>
  );
};

export default Main_11;