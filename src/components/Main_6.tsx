import React, { useState } from 'react';
import './Main_6.css';

interface TrackContent {
  id: string;
  trackNum: string;
  menuTitle: string;
  subTitle: string;
  videoSrc: string; // 이미지에서 고품질 시네마틱 비디오 경로로 변경
  logics: string[];
}

const TRACK_DATA: TrackContent[] = [
  {
    id: 'track01',
    trackNum: 'TRACK 01',
    menuTitle: 'MAIN_SECTION : CURATION INTRODUCTION',
    subTitle: 'Curation Introduction',
    videoSrc: '/media/dune.mp4', // mp4 포맷 매핑
    logics: [
      'Puzzle-driven User Engagement',
      'Interactive CTA via Tactile Piece Matching',
      'Personalised Discovery Through Selective Matching'
    ]
  },
  {
    id: 'track02',
    trackNum: 'TRACK 02',
    menuTitle: 'CURATION_SECTION : EMBLEM',
    subTitle: 'Emblem Archive',
    videoSrc: '/media/camera_set.mp4',
    logics: [
      'Interactive Vault for Cinematic Symbols',
      'Click-to-Open Drawer Mechanism',
      'Curiosity-Driven Exploration Through Hidden Objects'
    ]
  },
  {
    id: 'track03',
    trackNum: 'TRACK 03',
    menuTitle: 'EXPLORE_SECTION : EXHIBITION',
    subTitle: 'Theme Exhibition',
    videoSrc: '/media/director.mp4',
    logics: [
      'Monthly Themed Concept Exploration',
      'Full-Screen Exhibition Layout',
      'Concept-First Framing for Narrative Immersion'
    ]
  },
  {
    id: 'track04',
    trackNum: 'TRACK 04',
    menuTitle: 'FUNDING_SECTION : #TAKE01',
    subTitle: "Director's Slate",
    videoSrc: '/media/camera.mp4',
    logics: [
      'Clapper Board Concept / Scroll-Lock Trap',
      'Custom Cursor Countdown & Action Trigger',
      'Audience Participation Through Cinematic Interaction'
    ]
  }
];

const Main_6 = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const currentTrack = TRACK_DATA[activeTab];

  return (
    <section className="tr_container" data-theme="light">
      {/* 1. LEFT SIDEBAR : 기획 논리 & 대형 트랙 인디케이터 */}
      <div className="tr_sidebar">
        <div className="tr_logic_block">
          <span className="tr_mini_label">EXPERIENCE FLOW</span>
          <span className="tr_mini_label cp">DIRECTORY.M</span>
          <div className="tr_logic_list">
            {currentTrack.logics.map((text, idx) => (
              <p key={idx} className="tr_logic_item" style={{ animationDelay: `${idx * 0.15}s` }}>
                {text}
              </p>
            ))}
          </div>
        </div>

        {/* 데스크톱/태블릿 전용 가로 구분선 */}
        <div className="tr_center_line"></div>

        <div className="tr_big_number">
          <h1>{currentTrack.trackNum}</h1>
        </div>
      </div>

      {/* 2. CENTER FIELD : 3줄 육상 트랙 라인 구간 (모바일에서 위치 유동적 조정됨) */}
      <div className="tr_center_tracks">
        <div className="tr_lane"></div>
      </div>

      {/* 3. RIGHT CONTENT : 시네마틱 비디오 포맷 뷰포트 + 대시보드 */}
      <div className="tr_content_zone">
        <div className="tr_image_viewport">
          <div className="tr_view_header">
            <span className="tr_view_title">PREVIEW_MODE : {currentTrack.trackNum}</span>
          </div>
          <div className="tr_mockup_body">
            <video
              key={currentTrack.id} // 탭 전환 시 비디오 객체를 새로 마운트하여 자연스럽게 재생 유도
              src={currentTrack.videoSrc}
              className="tr_screen_video"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>

        {/* 하단 네비게이션 대시보드 */}
        <div className="tr_menu_dashboard">
          <div className="tr_menu_list">
            {TRACK_DATA.map((track, index) => {
              const isActive = index === activeTab;
              return (
                <button
                  key={track.id}
                  className={`tr_menu_btn ${isActive ? 'is_active' : 'is_inactive'}`}
                  onClick={() => setActiveTab(index)}
                >
                  <span className="tr_btn_title">{track.menuTitle}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main_6;