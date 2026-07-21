import React from 'react';
import './Main_1.css';

const Main_1: React.FC = () => {
  return (
    <section className="main1_container" data-theme="light">
      <div className='main1_inner'>
        {/* 1. LEFT GRAPHIC AREA */}
        <div className="main1_track_zone">
          <img src='/media/cover.svg' className="track_svg" />
        </div>

        {/* 2. RIGHT DATA AREA */}
        <div className="main1_data_zone">
          {/* 우측 상단 데이터 */}
          <div className="main1_data_top">
            <h2 className="main1_meta_job">WEB INTERACTION DESIGNER</h2>
            <p className="meta_detail_text">CORE ENGINE : REACT + TS + FRAMER MOTION</p>
            <p className="meta_detail_text">PIPELINE : HUMAN DIRECTED / AI ASSISTED</p>
          </div>

          {/* 우측 하단 데이터 */}
          <div className="main1_data_bottom">
            <div className='main1_meta_gps'>
              <p className="meta_geo_text">LAT / LONG : 37.5706° N, 126.9853° E</p>
              <h3 className="meta_location">BASED IN SEOUL</h3>
            </div>
            <p className="meta_date">JULY 22, 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main_1;