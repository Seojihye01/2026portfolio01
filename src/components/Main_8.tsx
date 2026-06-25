import React, { useState } from 'react';
import './Main_8.css';

interface LocaleContent {
  subTitle: string;
  logics: string[];
}

interface TrackContent {
  id: string;
  trackNum: string;
  menuTitle: string;
  ko: LocaleContent;
  en: LocaleContent;
  videoSrc: string; 
}

const TRACK_DATA: TrackContent[] = [
  {
    id: 'track01',
    trackNum: 'TRACK 01',
    menuTitle: 'MAIN',
    videoSrc: '/media/pf_1.mp4', 
    ko: {
      subTitle: 'Curation Introduction',
      logics: [
        '퍼즐 요소를 통한 사용자 참여 유도',
        '촉각적 조각 맞춤을 통한 상호작용형 CTA 설계',
        '선택적 매칭을 통한 개인 맞춤형 콘텐츠 탐색 과정'
      ]
    },
    en: {
      subTitle: 'Curation Introduction',
      logics: [
        'Puzzle-driven User Engagement',
        'Interactive CTA via Tactile Piece Matching',
        'Personalised Discovery Through Selective Matching'
      ]
    }
  },
  {
    id: 'track02',
    trackNum: 'TRACK 02',
    menuTitle: 'CURATION',
    videoSrc: '/media/pf_2.mp4',
    ko: {
      subTitle: 'Emblem',
      logics: [
        '영화적 상징물을 보관하는 상호작용형 금고',
        '클릭으로 구동되는 서랍형 구조 설계',
        '숨겨진 오브제를 통한 호기심 자극형 능동적 탐색 경험 유도'
      ]
    },
    en: {
      subTitle: 'Emblem',
      logics: [
        'Interactive Vault for Cinematic Symbols',
        'Click-to-Open Drawer Mechanism',
        'Curiosity-Driven Exploration Through Hidden Objects'
      ]
    }
  },
  {
    id: 'track03',
    trackNum: 'TRACK 03',
    menuTitle: 'EXPLORE',
    videoSrc: '/media/pf_3.mp4',
    ko: {
      subTitle: 'Exhibition',
      logics: [
        '월별 테마 중심의 컨셉 탐해 구조',
        '시각적 압도감을 극대화하는 전체 화면 전시 레이아웃',
        '서사적 몰입을 위한 컨셉형 프레임워크 설계'
      ]
    },
    en: {
      subTitle: 'Exhibition',
      logics: [
        'Monthly Themed Concept Exploration',
        'Full-Screen Exhibition Layout',
        'Concept-First Framing for Narrative Immersion'
      ]
    }
  },
  {
    id: 'track04',
    trackNum: 'TRACK 04',
    menuTitle: 'FUNDING',
    videoSrc: '/media/pf_4.mp4',
    ko: {
      subTitle: '#TAKE01',
      logics: [
        '클래퍼보드 컨셉의 스크롤 잠금 트랩 구현',
        '커스텀 커서 카운트다운 및 액션 트리거 설계',
        '영화적 상호작용을 통한 관객 참여형 UI 유도'
      ]
    },
    en: {
      subTitle: '#TAKE01',
      logics: [
        'Clapper Board Concept / Scroll-Lock Trap',
        'Custom Cursor Countdown & Action Trigger',
        'Audience Participation Through Cinematic Interaction'
      ]
    }
  }
];

const Main_8: React.FC = () => {
  const [lang, setLang] = useState<'KOR' | 'ENG'>('ENG');
  const [activeTab, setActiveTab] = useState<number>(0);

  const currentTrack = TRACK_DATA[activeTab];
  const currentLocale = lang === 'KOR' ? currentTrack.ko : currentTrack.en;

  return (
    <section className="main8_container" data-theme="light">
      
      {/* 트랙 인디케이터 배너 */}
      <div className="main8_top">
        <div className="main8_flow_set">
          <span className="main8_title">EXPERIENCE FLOW</span>
          
          {/* num 배치를 빼고 상단 우측으로 들어온 다국어 스위치 */}
          <div className="main8_top_lang_toggle">
            <button
              type="button"
              className={`main8_top_lang_btn ${lang === 'ENG' ? 'is_active' : ''}`}
              onClick={() => setLang('ENG')}
            >
              ENG
            </button>
            <span className="main8_top_lang_divider">/</span>
            <button
              type="button"
              className={`main8_top_lang_btn ${lang === 'KOR' ? 'is_active' : ''}`}
              onClick={() => setLang('KOR')}
            >
              KOR
            </button>
          </div>
        </div>
      </div>

      {/* [하단] 메인 레이아웃 */}
      <div className="main8_main_layout">
        
        <div className="main8_side">
          <div className="main8_menu_list">
            {TRACK_DATA.map((track, index) => {
              const isActive = index === activeTab;
              return (
                <button
                  key={track.id}
                  type="button"
                  className={`main8_menu_btn ${isActive ? 'is_active' : 'is_inactive'}`}
                  onClick={() => setActiveTab(index)}
                >
                  <span className="main8_btn_title">{track.menuTitle}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="main8_content_zone">
          
          <div className="main8_video_viewport">
            <div className="main8_mockup_body">
              <span className="main8_sub">{currentLocale.subTitle}</span>
              <video
                key={`${currentTrack.id}_${lang}`} 
                src={currentTrack.videoSrc}
                className="main8_screen_video"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>

          <div className="main8_logic_area">
            <div className="main8_logic_list">
              {currentLocale.logics.map((text, idx) => (
                <p 
                  key={`${idx}_${lang}`} 
                  className="main8_logic_item" 
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  {text}
                </p>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Main_8;