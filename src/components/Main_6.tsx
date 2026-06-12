import React from 'react';
import './Main_6.css';

const Main_6: React.FC = () => {
  const colors = [
    { code: '#121212', char: 'Cinematic Contrast', name: 'GRAPHITE', className: 'main6_bg_graphite' },
    { code: '#F9F9F9', char: 'Cinematic Contrast', name: 'CLOUD WHITE', className: 'main6_bg_white' },
    { code: '#999999', char: 'Neutral Balance', name: 'PLATINUM GREY', className: 'main6_bg_grey' },
    { code: '#1090BF', char: 'Visual Anchor', name: 'OCEAN BLUE', className: 'main6_bg_blue' },
  ];

  const weights = ['light', 'regular', 'medium', 'semibold', 'bold', 'extrabold', 'black'];

  return (
    <section className="main6_container" data-theme="light">
      <div className="main6_inner">
        
        <div className="main6_left_zone">
          <div className="main6_lane_wrapper">
            {colors.map((color, idx) => (
              <div key={idx} className="main6_label_card">
                <div className="main6_chip_box">
                  <div className={`main6_colour_square ${color.className}`} />
                  <span className="main6_colour_code">{color.code}</span>
                </div>
              
                <div className="main6_vertical_text_zone">
                  <span className="main6_colour_char">{color.char}</span>
                  <h3 className={`main6_colour_name ${color.className === 'main6_bg_blue' ? 'colour_blue' : ''}`}>
                    {color.name}
                  </h3>
                </div>

                <div className="main6_zigzag_zone">
                  <svg className="main6_zigzag_svg" viewBox="0 0 40 24">
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

        <div className="main6_right_zone">
          
          <header className="main6_header">
            <h2 className="main6_main_title">VISUAL KIT SPEC</h2>
            <span className="main6_sub_title">[ TYPOGRAPHY / CHROMATIC CODE OF DIRECTORY.M ]</span>
          </header>

          <div className="main6_typo_wrapper">
            {/* Card 1: MONTSERRAT */}
            <div className="main6_typo_card font_montserrat">
              <div className="main6_card_body">
                <span className="main6_font_family_vertical">ENG / SAN SERIF</span>
                <h2 className="main6_font_main_print">MONTSERRAT</h2>
                <p className="main6_font_reason">Geometric Impact / Editorial Scale / Visual Weight</p>
              </div>
              <div className="main6_weight_stack">
                {weights.map((w, idx) => (
                  <span key={idx} className={`main6_stack_line w_${w}`}>MONTSERRAT</span>
                ))}
              </div>
            </div>

            {/* Card 2: PRETENDARD */}
            <div className="main6_typo_card font_pretendard">
              <div className="main6_card_body">
                <span className="main6_font_family_vertical">KOR / SAN SERIF</span>
                <h2 className="main6_font_main_print">PRETENDARD</h2>
                <p className="main6_font_reason">High Legibility / UI Optimization / Seamless Harmony</p>
              </div>
              <div className="main6_weight_stack">
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

export default Main_6;