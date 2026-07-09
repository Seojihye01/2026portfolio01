import React, { useRef, useEffect } from 'react';
import './Main_10.css';

const Main_10: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
      if (videoRef.current) {
        videoRef.current.play().catch((error) => {
          console.log("Muted autoplay initiated:", error);
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play();
          }
        });
      }
    }, []);
  
  return (
    <article className="main10_container" data-theme="light">
      <div className='main10_inner'>
      <header className="main10_sub_header">
        <div className="main10_sub_left">
          <span className="main10_sub_label">Distance : Half Course</span>
          <div className='main10_sub_set'>
            <p className="main10_sub_tag bold">Personal Project</p>
          </div>
        </div>
        <div className="main10_title_section">
          <h1 className="main10_main_title">GENTLE MONSTER</h1>
        </div>
      </header>
      <p className="main10_sub_tag">UX UI Design / Branding</p>

      <div className="main10_sub_right">
        <span className="main10_sub_meta">Duration : 1D (25.07)</span>
        <span className="main10_sub_meta text_bold">BIB NO. P-03</span>
      </div>

      <div className="main10_hero_visual_bar">
        <div className="main10_img_container">
          <img src='/media/mini_proj2.png' />
        </div>
      </div>

      <hr className="main10_section_divider" />

      <div className="main10_spec_sheet">
        
        <div className="main10_spec_row">
          <div className="main10_spec_label">System Core</div>
          <div className="main10_spec_value">
            <p className="main10_value_line text_right">Figma / Chat GPT</p>
          </div>
        </div>

        <div className="main10_spec_row m_top_large">
          <div className="main10_spec_label">Identity</div>
          <div className="main10_spec_value">
            <p className="main10_value_line text_right text_medium">Conceptual Summer Collection Campaign</p>
            <p className="main10_value_line text_right spacing_wide color_muted">Wild / High-contrast Minimalism / Structural Grid</p>
          </div>
        </div>

        <div className="main10_spec_row m_top_large">
          <div className="main10_spec_label">Mission</div>
          <div className="main10_spec_value">
            <p className="main10_value_line text_right text_medium">Creating a summer campaign with Gentle Monster's identity</p>
          </div>
        </div>

        <div className="main10_spec_row m_top_large">
          <div className="main10_spec_label">Visual kit spec</div>
          <div className="main10_spec_value pack_gap_control">
            
            <div className='main10_value_set'>
              <span className="main10_pack_title">[ FONT ]</span>
              <p className="main10_pack_text text_medium">Marines Bold, Paperlogy</p>
            </div>

          </div>
        </div>

      </div>
      </div>
    </article>
  );
};

export default Main_10;