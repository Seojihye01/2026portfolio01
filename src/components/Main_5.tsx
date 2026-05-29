import React from 'react';
import './Main_5.css';

const Main_5: React.FC = () => {
  const colors = [
    { code: '#121212', char: 'Cinematic Contrast', name: 'GRAPHITE', className: 'main5_bg_graphite' },
    { code: '#F9F9F9', char: 'Cinematic Contrast', name: 'CLOUD WHITE', className: 'main5_bg_white' },
    { code: '#999999', char: 'Neutral Balance', name: 'PLATINUM GREY', className: 'main5_bg_grey' },
    { code: '#1090BF', char: 'Visual Anchor', name: 'OCEAN BLUE', className: 'main5_bg_blue' },
  ];

  const weights = ['light', 'regular', 'medium', 'semibold', 'bold', 'extrabold', 'black'];

  return (
    <section className="main5_container" data-theme="light">
      <div className="main5_inner">
        
        <div className="main5_left_zone">
          <div className="main5_lane_wrapper">
            {colors.map((color, idx) => (
              <div key={idx} className="main5_label_card">
                <div className="main5_chip_box">
                  <div className={`main5_color_square ${color.className}`} />
                  <span className="main5_color_code">{color.code}</span>
                </div>
              
                <div className="main5_vertical_text_zone">
                  <span className="main5_color_char">{color.char}</span>
                  <h3 className={`main5_color_name ${color.className === 'main5_bg_blue' ? 'color_blue' : ''}`}>
                    {color.name}
                  </h3>
                </div>

                <div className="main5_zigzag_zone">
                  <svg className="main5_zigzag_svg" viewBox="0 0 40 24">
                    <path d="M0,5 L6,11 L12,5 L18,11 L24,5 L30,11 L36,5 L42,11" fill="none" stroke="currentColor" strokeWidth="1" />
                    <path d="M0,9 L6,15 L12,9 L18,15 L24,9 L30,15 L36,9 L42,15" fill="none" stroke="currentColor" strokeWidth="1" />
                    <path d="M0,13 L6,19 L12,13 L18,19 L24,13 L30,19 L36,13 L42,19" fill="none" stroke="currentColor" strokeWidth="1" />
                    <path d="M0,17 L6,23 L12,17 L18,23 L24,17 L30,23 L36,17 L42,23" fill="none" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="main5_right_zone">
          
          <header className="main5_header">
            <h2 className="main5_main_title">VISUAL KIT SPEC</h2>
            <span className="main5_sub_title">[ TYPOGRAPHY / CHROMATIC CODE OF DIRECTORY.M ]</span>
          </header>

          <div className="main5_typo_wrapper">
            {/* Card 1: MONTSERRAT */}
            <div className="main5_typo_card font_montserrat">
              <div className="main5_card_body">
                <span className="main5_font_family_vertical">ENG / SAN SERIF</span>
                <h2 className="main5_font_main_print">MONTSERRAT</h2>
                <p className="main5_font_reason">Geometric Impact / Editorial Scale / Visual Weight</p>
              </div>
              <div className="main5_weight_stack">
                {weights.map((w, idx) => (
                  <span key={idx} className={`main5_stack_line w_${w}`}>MONTSERRAT</span>
                ))}
              </div>
            </div>

            {/* Card 2: PRETENDARD */}
            <div className="main5_typo_card font_pretendard">
              <div className="main5_card_body">
                <span className="main5_font_family_vertical">KOR / SAN SERIF</span>
                <h2 className="main5_font_main_print">PRETENDARD</h2>
                <p className="main5_font_reason">High Legibility / UI Optimization / Seamless Harmony</p>
              </div>
              <div className="main5_weight_stack">
                {weights.map((w, idx) => (
                  <span key={idx} className={`main5_stack_line w_${w}`}>PRETENDARD</span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Main_5;