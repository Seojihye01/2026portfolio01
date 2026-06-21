import React, { useRef, useEffect } from 'react';
import './Main_4.css';

const Main_4: React.FC = () => {
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
    <article className="main4_container" data-theme="light">
      <header className="main4_sub_header">
        <div className="main4_sub_left">
          <span className="main4_sub_label">Distance : Full Course</span>
          <div className='main4_sub_set'>
            <p className="main4_sub_tag bold">Personal Project</p>
          </div>
        </div>
         <div className="main4_title_section">
          <h1 className="main4_main_title">DIRECTORY.M</h1>
        </div>
      </header>
      <p className="main4_sub_tag">Web Publishing / UX UI Design / Branding</p>

      <div className="main4_sub_right">
          <span className="main4_sub_meta">Duration : 6M (25.12 - 26.05)</span>
          <span className="main4_sub_meta text_bold">BIB NO. M-01</span>
      </div>

      <div className="main4_hero_visual_bar">
        <div className="main4_video_container">
          <video
            ref={videoRef}
            className="main4_background_video" src="/media/main_proj.mp4" autoPlay muted loop playsInline />
        </div>
      </div>

      <hr className="main4_section_divider" />

      <div className="main4_spec_sheet">
        
        <div className="main4_spec_row">
          <div className="main4_spec_label">System Core</div>
          <div className="main4_spec_value">
            <p className="main4_value_line text_right">React / TypeScript / CSS / Framer Motion / VS Code / Figma / Photoshop / Illustrator / After Effects / Premiere Pro / Midjourney / Kling / Gemini / Chat GPT</p>
          </div>
        </div>

        <div className="main4_spec_row m_top_large">
          <div className="main4_spec_label">Identity</div>
          <div className="main4_spec_value">
            <p className="main4_value_line text_right text_medium color_dark">Premium Cinematic Curation Platform</p>
            <p className="main4_value_line text_right spacing_wide color_muted">Cinematic / Editorial / Archive / Minimal / Muted</p>
          </div>
        </div>

        <div className="main4_spec_row m_top_large">
          <div className="main4_spec_label">Mission</div>
          <div className="main4_spec_value">
            <p className="main4_value_line text_right text_medium color_dark">Curing choice fatigue from OTT content overload</p>
          </div>
        </div>

      </div>
    </article>
  );
};

export default Main_4;