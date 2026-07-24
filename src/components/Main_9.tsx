import React, { useRef, useEffect } from 'react';
import './Main_9.css';

const Main_9: React.FC = () => {
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
    <article className="main9_container" data-theme="light">
      <div className='main9_inner'>
      <header className="main9_sub_header">
        <div className="main9_sub_left">
          <span className="main9_sub_label">Distance : Half Course</span>
          <div className='main9_sub_set'>
            <p className="main9_sub_tag bold">Personal Project, 100%</p>
          </div>
        </div>
        <div className="main9_title_section">
          <h1 className="main9_main_title">FRUIT CAMP</h1>
        </div>
      </header>
      <p className="main9_sub_tag">Web Publishing / UX UI Design / Branding</p>
      <span className="main9_sub_meta">Duration : 1D (25.12)</span>

      <div className="main9_sub_right">
        <span className="main9_sub_meta text_bold">BIB NO. P-02</span>
      </div>

      <div className="main9_hero_visual_bar">
        <div className="main9_video_container">
          <video
            ref={videoRef}
            className="main9_background_video" src="/media/mini_proj.mp4" autoPlay muted loop playsInline />
        </div>
      </div>

      <hr className="main9_section_divider" />

      <div className="main9_spec_sheet">
        
        <div className="main9_spec_row">
          <div className="main9_spec_label">System Core</div>
          <div className="main9_spec_value">
            <p className="main9_value_line text_right">HTML5 / JavaScript / CSS / Illustrator / Gemini / Chat GPT</p>
          </div>
        </div>

        <div className="main9_spec_row m_top_large">
          <div className="main9_spec_label">Identity</div>
          <div className="main9_spec_value">
            <p className="main9_value_line text_right text_medium">Conceptual Fruit Sales Platform</p>
            <p className="main9_value_line text_right spacing_wide color_muted">Colourful / Kitsch / Retro / Y2K / 80s Pop Art</p>
          </div>
        </div>

        <div className="main9_spec_row m_top_large">
          <div className="main9_spec_label">Mission</div>
          <div className="main9_spec_value">
            <p className="main9_value_line text_right text_medium">Targeting Z generation with a kitsch military universe</p>
          </div>
        </div>

        <div className="main9_spec_row m_top_large">
          <div className="main9_spec_label">Visual kit spec</div>
          <div className="main9_spec_value pack_gap_control">
            
            <div className='main9_value_set'>
              <span className="main9_pack_title">[ FONT ]</span>
              <p className="main9_pack_text text_medium">POPPIN, MONTSERRAT</p>
            </div>
            
            <div className="main9_palette_wrapper">
              <span className="main9_pack_title">[ COLOUR PALETTE ]</span>
              <div className="main9_color_group">
                <span className="main9_color_badge bg_red text_light">#ED1C24</span>
                <span className="main9_color_badge bg_lime text_dark">#C9FF2F</span>
                <span className="main9_color_badge bg_orange text_dark">#FF985A</span>
                <span className="main9_color_badge bg_purple text_light">#8165FF</span>
                <span className="main9_color_badge bg_cream text_dark">#F3F3F3</span>
                <span className="main9_color_badge bg_black text_light">#1B1B1B</span>
              </div>
            </div>

          </div>
        </div>

      </div>
      </div>
    </article>
  );
};

export default Main_9;