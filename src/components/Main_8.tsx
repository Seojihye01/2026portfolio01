import React from 'react';
import './Main_8.css';

const Main_8: React.FC = () => {
  return (
    <article className="main8_container" data-theme="light">
      <header className="main8_sub_header">
        <div className="main8_sub_left">
          <span className="main8_sub_label">Distance : Half Course</span>
          <div className='main8_sub_set'>
            <p className="main8_sub_tag bold">Personal Project</p>
            <p className="main8_sub_tag">Web Development / UX UI Design / Branding</p>
          </div>
        </div>
        <div className="main8_title_section">
          <h1 className="main8_main_title">FRUIT CAMP</h1>
        </div>
      </header>

      <div className="main8_sub_right">
        <span className="main8_sub_meta">Duration : 1D (25.12)</span>
        <span className="main8_sub_meta text_bold">BIB NO. M-02</span>
      </div>

      <div className="main8_hero_visual_bar">
        <div className="main8_hero_placeholder_text">FRUIT CAMP : SECRET BASE</div>
      </div>

      <hr className="main8_section_divider" />

      <div className="main8_spec_sheet">
        
        <div className="main8_spec_row">
          <div className="main8_spec_label">System Core</div>
          <div className="main8_spec_value">
            <p className="main8_value_line text_right">HTML5 / JavaScript / CSS / Illustrator / Gemini / Chat GPT</p>
          </div>
        </div>

        <div className="main8_spec_row m_top_large">
          <div className="main8_spec_label">Identity</div>
          <div className="main8_spec_value">
            <p className="main8_value_line text_right text_medium">Conceptual Fruit Sales Platform</p>
            <p className="main8_value_line text_right spacing_wide color_muted">Colourful / Kitsch / Retro / Y2K / 80s Pop Art</p>
          </div>
        </div>

        <div className="main8_spec_row m_top_large">
          <div className="main8_spec_label">Mission</div>
          <div className="main8_spec_value">
            <p className="main8_value_line text_right text_medium">Targeting MZ generation with a kitsch military universe</p>
          </div>
        </div>

        <div className="main8_spec_row m_top_large">
          <div className="main8_spec_label">Visual kit spec</div>
          <div className="main8_spec_value pack_gap_control">
            
            <div className='main8_value_set'>
              <span className="main8_pack_title">[ FONT ]</span>
              <p className="main8_pack_text text_medium">POPPIN, MONTSERRAT</p>
            </div>
            
            <div className="main8_palette_wrapper">
              <span className="main8_pack_title">[ COLOUR PALETTE ]</span>
              <div className="main8_color_group">
                <span className="main8_color_badge bg_red text_light">#ED1C24</span>
                <span className="main8_color_badge bg_lime text_dark">#C9FF2F</span>
                <span className="main8_color_badge bg_orange text_dark">#FF985A</span>
                <span className="main8_color_badge bg_purple text_light">#8165FF</span>
                <span className="main8_color_badge bg_cream text_dark">#F3F3F3</span>
                <span className="main8_color_badge bg_black text_light">#1B1B1B</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </article>
  );
};

export default Main_8;