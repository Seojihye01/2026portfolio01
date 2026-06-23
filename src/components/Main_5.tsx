import React, { useState } from 'react';
import './Main_5.css';


interface StrategyItem {
  id: string;
  title: string;
  content: string;
}


interface StrategyData {
  PROBLEM: StrategyItem;
  RESEARCH: StrategyItem;
  HYPOTHESIS: StrategyItem;
  SOLUTION: StrategyItem;
  KEY_INSIGHT: StrategyItem;
}


const Main_5: React.FC = () => {
  const [lang, setLang] = useState<'KOR' | 'ENG'>('ENG');
  const [activeTab, setActiveTab] = useState<keyof StrategyData>('PROBLEM');

  const koMission = "목표 : OTT 콘텐츠 과부하로 인한 선택 피로도 해소";
  const enMission = "Mission : Curing choice fatigue from OTT content overload";
  const currentMission = lang === 'KOR' ? koMission : enMission;

  const koData: StrategyData = {
    PROBLEM: { id: '01', title: '문제점', content: '기존 OTT 플랫폼의 무한 스크롤과 자극적인 썸네일 나열식 배치로 인한 콘텐츠 선택 장애 유발 및 이용자의 시각적 피로도 심화' },
    RESEARCH: { id: '02', title: '연구', content: '콘텐츠 탐색 피로도로 인해 실제 시청보다 탐색에 더 많은 시간을 허비하는 ‘넷플릭스 증후군’ 현상 <br /><span class="main5_research_source">글로벌 소비자의 60%가 OTT 검색 과정에서 좌절을 느끼며, 44%는 매번 6분 이상을 허비 <br/>[ Accenture, "Streaming’s Next Act" ]</span>' },
    HYPOTHESIS: { id: '03', title: '가설', content: '영화의 본질적인 감성과 기획 의도를 매거진 형태의 UI로 정제하여 전달한다면 이용자의 탐색 피로도를 낮추고 플랫폼 몰입도를 증대시킬 것이다' },
    SOLUTION: { id: '04', title: '해결책', content: '이용자가 제안된 콘텐츠를 주도적으로 발견하는 즐거움을 느낄 수 있도록 단계별 상호작용 흐름을 설계하고 능동적 참여를 통해 결과물에 대한 소유감 부여' },
    KEY_INSIGHT: { id: '05', title: '핵심 발견', content: '행동경제학의 ‘선택의 역설’과 ‘이케아 효과’에 주목하여 초기 콘텐츠 노출을 의도적으로 제한함. 무형의 디지털 공간 속에서 실물을 조작하는 듯한 물리적 감각과 개인화된 큐레이션을 제공함으로써, 이용자에게 결과물에 대한 소유감을 부여하는 UX가 플랫폼 몰입도를 극대화함을 학습' }
  };

  const enData: StrategyData = {
    PROBLEM: { id: '01', title: 'PROBLEM', content: 'The paradox of choice and visual fatigue aggravated by endless scrolling and hyper-stimulating thumbnail-driven layouts on conventional OTT platforms' },
    RESEARCH: { id: '02', title: 'RESEARCH', content: 'Netflix Syndrome : A modern decision-fatigue phenomenon where viewers spend more time browsing than actually enjoying content <br/> <span class="main5_research_source">60% of global consumers consider navigating between OTT services frustrating, with 44% spending over 6 minutes just to find content <br/>[ Accenture, "Streaming’s Next Act" ]</span>' },
    HYPOTHESIS: { id: '03', title: 'HYPOTHESIS', content: 'If we filter out digital noise and present the core aesthetic of cinema through a text-driven, minimal editorial UI, It will minimise visual fatigue and deepen user engagement' },
    SOLUTION: { id: '04', title: 'SOLUTION', content: 'Designing a step-by-step interactive flow that empowers users to proactively discover recommended content, fostering a sense of ownership over the results through active engagement' },
    KEY_INSIGHT: { id: '05', title: 'KEY INSIGHT', content: 'Focusing on behavioral economics—specifically the "Paradox of Choice" and the "IKEA Effect"—I intentionally limited the initial content display to reduce decision fatigue. By providing a physical sensation of touching a real object within a digital space alongside personalized curation, I learned that a UX giving users a true sense of ownership over their results maximizes platform engagement.' }
  };

  const currentData = lang === 'KOR' ? koData : enData;
  const currentItem = currentData[activeTab];


  return (
    <section className="main5_strategy_section"  data-theme="dark">
      <div className="main5_strategy_container"> 
        
        <div className="main5_editorial_header">
          
          <div className="main5_header_top_bar">
            <p className="main5_header_identity">
              {currentMission} 
            </p>
          </div>

          <div className="main5_header_main_grid">
            
            <nav className="main5_vertical_nav">
              {Object.keys(currentData).map((key) => {
                const tabKey = key as keyof StrategyData;
                const isSelected = activeTab === tabKey;
                return (
                  <button
                    key={tabKey}
                    type="button"
                    className={`main5_nav_row_btn ${isSelected ? 'is_active' : ''}`}
                    onClick={() => setActiveTab(tabKey)}
                  >
                    <span className="main5_nav_id">{currentData[tabKey].id}</span>
                    <span className="main5_nav_title">{currentData[tabKey].title}</span>
                  </button>
                );
              })}
            </nav>

            <div className="main5_title_zone">
              <h2 className="main5_strategy_title">MAIN RACE STRATEGY</h2>
            </div>
          </div>

          <div className="main5_header_footer">
            <div className="main5_lang_toggle">
              <button
                type="button"
                className={`main5_lang_btn ${lang === 'ENG' ? 'is_active' : ''}`}
                onClick={() => setLang('ENG')}
              >
                ENG
              </button>
              <span className="main5_lang_divider">/</span>
              <button
                type="button"
                className={`main5_lang_btn ${lang === 'KOR' ? 'is_active' : ''}`}
                onClick={() => setLang('KOR')}
              >
                KOR
              </button>
            </div>
          </div>

        </div>

        <div className="main5_split_layout">
          <div className="main5_content_side">
            <div className="main5_detail_body">
              <p dangerouslySetInnerHTML={{ __html: currentItem.content }} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Main_5;