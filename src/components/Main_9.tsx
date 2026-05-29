import React from 'react';
import './Main_9.css';

const Main_9: React.FC = () => {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mmmmm1@gmail.com');
  };

  return (
    <section className="main9_container" data-theme="light">
      <div className='main9_inner'>
        
        <div className="main9_top_left">
          <span className="main9_date">MAY 28, 2026</span>
          <span className="main9_sub_title">PROJ NO. 01</span>
        </div>

        <div className="main9_top_right">
          <h2 className="main9_thank_text">THANK YOU <br />FOR WATCHING</h2>
        </div>

        <div className="main9_centre">
          <h1 className="main9_brand_name">SEO JIHYE</h1>
        </div>

        <div className="main9_bottom_left">
          
          <div className="main9_contact_box" onClick={handleCopyEmail} title="Click to Copy Email">
            <span className="main9_frame_corner top_left">┌</span>
            <span className="main9_frame_corner top_right">┐</span>
            <span className="main9_frame_corner bottom_left">└</span>
            <span className="main9_frame_corner bottom_right">┘</span>
            <div className="main9_contact_inner_content">
              <span className="main9_contact_label">EMAIL</span>
              <p className="main9_contact_value">mmmmm1@gmail.com</p>
            </div>
          </div>

          <a href="https://github.com/mmmmm/portfolio2026" target="_blank" rel="noopener noreferrer" className="main9_contact_box link_box">
            <span className="main9_frame_corner top_left">┌</span>
            <span className="main9_frame_corner top_right">┐</span>
            <span className="main9_frame_corner bottom_left">└</span>
            <span className="main9_frame_corner bottom_right">┘</span>
            <div className="main9_contact_inner_content">
              <span className="main9_contact_label">GIT HUB</span>
              <p className="main9_contact_value github_url">github.com/mmmmm/portfolio2026</p>
            </div>
          </a>
        </div>

        <div className="main9_bottom_right">
          <p className="main9_credit_text">PORTFOLIO DESIGN <br />BY SEO JIHYE</p>
        </div>

      </div>
    </section>
  );
};

export default Main_9;