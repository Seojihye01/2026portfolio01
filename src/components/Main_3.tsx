import React, { useState } from 'react';
import './Main_3.css';

type CheckpointStep = 0 | 1 | 2 | 3 | 4;

const Main_3: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<CheckpointStep>(0);

  return (
  <section className="main3_container" data-theme="light">
    <div className="main3_top_wrapper">
      <div className="main3_track_sidebar">
        <div className="main3_track_header">[ COURSE INFO ]</div>
        
        <div className="main3_timeline_wrapper">
          <svg className="timeline_line_svg" viewBox="0 0 100 40" preserveAspectRatio="none">
            <polyline points="10,35 45,5 65,35 90,5" fill="none" stroke="rgba(249, 249, 249, 0.15)" strokeWidth="0.8" />
            {currentStep >= 2 && <polyline className="fade_in_line" points="10,35 45,5" fill="none" stroke="rgba(249, 249, 249, 0.8)" strokeWidth="0.8" />}
            {currentStep >= 3 && <polyline className="fade_in_line" points="45,5 65,35" fill="none" stroke="rgba(249, 249, 249, 0.8)" strokeWidth="0.8" />}
            {currentStep >= 4 && <polyline className="fade_in_line" points="65,35 90,5" fill="none" stroke="rgba(249, 249, 249, 0.8)" strokeWidth="0.8" />}
          </svg>

          <div className={`main3_track_node start_node ${currentStep >= 1 ? 'active' : ''} ${currentStep === 0 ? 'cta_blink' : ''}`} onClick={() => setCurrentStep(1)}>
            <span className="node_dot"></span>
            <span className="node_label">START</span>
          </div>

          <div className={`main3_track_node cp1_node ${currentStep >= 2 ? 'active' : ''} ${currentStep === 1 ? 'cta_blink' : ''}`} onClick={() => setCurrentStep(2)}>
            <span className="node_dot"></span>
            <span className="node_label">CP 01</span>
          </div>

          <div className={`main3_track_node cp2_node ${currentStep >= 3 ? 'active' : ''} ${currentStep === 2 ? 'cta_blink' : ''}`} onClick={() => setCurrentStep(3)}>
            <span className="node_dot"></span>
            <span className="node_label">CP 02</span>
          </div>

          <div className={`main3_track_node finish_node ${currentStep >= 4 ? 'active' : ''} ${currentStep === 3 ? 'cta_blink' : ''}`} onClick={() => setCurrentStep(4)}>
            <span className="node_dot"></span>
            <span className="node_label">FINISH</span>
          </div>
        </div>
      </div>
    </div>

    <div className={`main3_bottom_wrapper ${currentStep === 0 ? 'initial_hidden' : ''}`}>
      <div className="race_content_sheet">
        
        <div className={`main3_sheet_header step_block ${currentStep >= 1 ? 'active' : ''}`}>
          <div className="main3_meta_item">
            <span className="main3_meta_title">RACE TITLE</span>
            <span className="main3_meta_value bold">WEB INTERACTION DESIGNER</span>
          </div>
          <div className="main3_text_right">
            <span className="main3_meta_value code_font">PROJ NO. 01 - 2026</span>
          </div>
        </div>

        <div className="main3_sheet_body">
          <div className={`step_block ${currentStep >= 2 ? 'active' : ''}`}>
            <h1 className="main3_giant_title">SEO JIHYE</h1>
            <h2 className="section_sub_title">RUNNER 01</h2>
          </div>

          <div className={`step_block ${currentStep >= 3 ? 'active' : ''}`}>
            <h3 className="main3_section_label">RUNNING GEAR</h3>
            <div className="main3_content_list">
              <p className="main3_content_item">HTML5 / CSS3 / REACT / TYPESCRIPT / JAVASCRIPT / FRAMER MOTION</p>
              <p className="main3_content_item">FIGMA / PHOTOSHOP / ILLUSTRATOR / AFTER EFFECTS / PREMIERE PRO</p>
              <p className="main3_content_item">VISUAL STORYTELLING / BRANDING / INFORMATION ARCHITECTURE</p>
            </div>
          </div>

          <div className={`step_block ${currentStep >= 4 ? 'active' : ''}`}>
            <h3 className="main3_section_label">TIME & RECORD</h3>
            <div className="main3_record_group">
              <div className="main3_record_row">
                <h4 className="main3_record_title">TECH UNIVERSITY OF KOREA / BACHELOR'S DEGREE</h4>
                <p className="main3_record_sub">MAR 2013 - FEB 2018 · BUSINESS ADMINISTRATION & INFORMATION TECHNOLOGY</p>
              </div>
              <div className="main3_record_row">
                <h4 className="main3_record_title">MBC COMPUTER ACADEMY</h4>
                <p className="main3_record_sub">JUL 2025 - MAR 2026</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  </section>
  );
};

export default Main_3;