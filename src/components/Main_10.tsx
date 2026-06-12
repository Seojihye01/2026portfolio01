import React from 'react';
import './Main_10.css';

const Main_10: React.FC = () => {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('jihyeseo0801@gmail.com');
  };

  return (
    <section className="main10_container" data-theme="light">
      <div className='main10_inner'>
        
        <div className="main10_top_left">
          <span className="main10_date">JUNE 07, 2026</span>
          <span className="main10_sub_title">PROJ NO. 01</span>
        </div>

        <div className="main10_top_right">
          <h2 className="main10_thank_text">THANK YOU <br />FOR WATCHING</h2>
        </div>

        <div className="main10_centre">
          <h1 className="main10_brand_name">SEO JIHYE</h1>
        </div>

        <div className="main10_bottom_left">
          
          <div className="main10_contact_box" onClick={handleCopyEmail} title="Click to Copy Email">
            <span className="main10_frame_corner top_left">┌</span>
            <span className="main10_frame_corner top_right">┐</span>
            <span className="main10_frame_corner bottom_left">└</span>
            <span className="main10_frame_corner bottom_right">┘</span>
            <div className="main10_contact_inner_content">
              <span className="main10_contact_label">EMAIL</span>
              <p className="main10_contact_value">jihyeseo0801@gmail.com</p>
            </div>
          </div>

          <a href="https://github.com/mmmmm/portfolio2026" target="_blank" rel="noopener noreferrer" className="main10_contact_box link_box">
            <span className="main10_frame_corner top_left">┌</span>
            <span className="main10_frame_corner top_right">┐</span>
            <span className="main10_frame_corner bottom_left">└</span>
            <span className="main10_frame_corner bottom_right">┘</span>
            <div className="main10_contact_inner_content">
              <span className="main10_contact_label">GIT HUB</span>
              <p className="main10_contact_value github_url">github.com/mmmmm/portfolio2026</p>
            </div>
          </a>
        </div>

        <div className="main10_bottom_right">
          <p className="main10_credit_text">PORTFOLIO DESIGN <br />BY SEO JIHYE</p>
        </div>

      </div>
    </section>
  );
};

export default Main_10;