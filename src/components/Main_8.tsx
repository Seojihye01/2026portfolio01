import React, { useRef, useEffect } from 'react';
import './Main_8.css';

const Main_8: React.FC = () => {
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
    <article className="main8_container" data-theme="light">
      <div className='main8_inner'>
      <header className="main8_sub_header">
        <div className="main8_sub_left">
          <span className="main8_sub_label">Distance : Half Course</span>
          <div className='main8_sub_set'>
            <p className="main8_sub_tag bold">Personal Project, 100%</p>
          </div>
        </div>
        <div className="main8_title_section">
          <h1 className="main8_main_title">GENTLE MONSTER</h1>
        </div>
      </header>
      <p className="main8_sub_tag">UX UI Design / Branding</p>
      <span className="main8_sub_meta">Duration : 1D (25.07)</span>

      <div className="main8_sub_right">
        <span className="main8_sub_meta text_bold">BIB NO. P-02</span>
        <a href="https://www.figma.com/design/K5qAE0v9x7kNSWCWSr1TBk/Gentle-Monster?node-id=2-51&t=cA9jBjLRNih6jzjQ-1" target="_blank">MORE INFO ↗&#xFE0E;</a>
      </div>
                
      <div className="main8_hero_visual_bar">
        <div className="main8_img_container">
          <img src='/media/mini_proj2.png' />
        </div>
      </div>

      <hr className="main8_section_divider" />

      <div className="main8_spec_sheet">
        
        <div className="main8_spec_row">
          <div className="main8_spec_label">System Core</div>
          <div className="main8_spec_value">
            <p className="main8_value_line text_right">Figma / Chat GPT</p>
          </div>
        </div>

        <div className="main8_spec_row m_top_large">
          <div className="main8_spec_label">Identity</div>
          <div className="main8_spec_value">
            <p className="main8_value_line text_right text_medium">Conceptual Summer Collection Campaign</p>
            <p className="main8_value_line text_right spacing_wide color_muted">Wild / High-contrast Minimalism / Structural Grid</p>
          </div>
        </div>

        <div className="main8_spec_row m_top_large">
          <div className="main8_spec_label">Mission</div>
          <div className="main8_spec_value">
            <p className="main8_value_line text_right text_medium">Creating a summer campaign with Gentle Monster's identity</p>
          </div>
        </div>

        <div className="main8_spec_row m_top_large">
          <div className="main8_spec_label">Visual kit spec</div>
          <div className="main8_spec_value pack_gap_control">
            
            <div className='main8_value_set'>
              <span className="main8_pack_title">[ FONT ]</span>
              <p className="main8_pack_text text_medium">Marines Bold, Paperlogy</p>
            </div>

          </div>
        </div>

      </div>
      </div>
    </article>
  );
};

export default Main_8;