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
    PROBLEM: { id: '01', title: '문제점', content: '기존 OTT 플랫폼의 무한 스크롤과 자극적인 썸네일 나열식 배치로 인한 콘텐츠 선택의 역설 유발 및 이용자의 시각적 피로도 심화 <br /><span class="main5_research_source">선택의 역설 : 선택지가 많아질수록 결정 장애와 불만족을 겪게 되는 현상 <br/>[ Barry Schwartz ]</span>' },
    RESEARCH: { id: '02', title: '연구', content: '콘텐츠 탐색 피로도로 인해 실제 시청보다 탐색에 더 많은 시간을 허비하는 ‘넷플릭스 증후군’ 현상 <br /><span class="main5_research_source">글로벌 소비자의 60%가 OTT 검색 과정에서 좌절을 느끼며, 44%는 매번 6분 이상을 허비 <br/>[ Accenture, "Streaming’s Next Act" ]</span>' },
    HYPOTHESIS: { id: '03', title: '가설', content: '정제된 매거진 형태와 단계별 탐색 인터랙션을 제공한다면, 이용자의 정보 탐색 피로도는 낮아지고 플랫폼 몰입도가 증대될 것이다' },
    SOLUTION: { id: '04', title: '해결책', content: '<strong>에디토리얼 레이아웃</strong> : 무분별한 콘텐츠 노출 지양 & 영화의 기획 의도와 비주얼 톤을 전달하는 매거진 스타일 뷰 구축<br /><strong>단계별 인터랙션 흐름</strong> : 스크롤 등 동작에 따라 정보가 순차적으로 열리는 탐색 동선 설계' },
    KEY_INSIGHT: { id: '05', title: '핵심 발견', content: '<strong> 의도적 제한</strong> : 선택의 역설을 해소하기 위해 초기 콘텐츠 노출 최소화<br /><strong> 이케아 효과의 적용</strong> : 무형의 디지털 공간 속에서 실물을 조작하는 듯한 물리적 인터랙션을 제공하여, 유저가 스스로 발견한 콘텐츠에 더 큰 애정과 소유감을 갖도록 유도<br /><br />→ 행동경제학 이론을 바탕으로 이용자에게 능동적 탐색 경험을 제공할 때 플랫폼 몰입도와 애착이 극대화 됨을 학습 <br /><span class="main5_research_source">이케아 효과 : 소비자가 자신이 직접 만든 제품에 대해 완제품보다 더 높은 가치를 부여하는 심리적 현상 <br/>[ Daniel Mochon, Michael I. Norton, Dan Ariely ]</span>' }
  };

  const enData: StrategyData = {
    PROBLEM: { id: '01', title: 'PROBLEM', content: 'The paradox of choice and visual fatigue aggravated by endless scrolling and hyper-stimulating thumbnail-driven layouts on conventional OTT platforms <br /><span class="main5_research_source">The Paradox of Choice : The psychological phenomenon where having too many options leads to decision paralysis and increased dissatisfaction <br/>[ Barry Schwartz ]</span>' },
    RESEARCH: { id: '02', title: 'RESEARCH', content: 'Netflix Syndrome : A modern decision-fatigue phenomenon where viewers spend more time browsing than actually enjoying content <br/> <span class="main5_research_source">60% of global consumers consider navigating between OTT services frustrating, with 44% spending over 6 minutes just to find content <br/>[ Accenture, "Streaming’s Next Act" ]</span>' },
    HYPOTHESIS: { id: '03', title: 'HYPOTHESIS', content: 'By providing a refined magazine layout and step-by-step interactive navigation, we can reduce cognitive search fatigue and boost platform engagement' },
    SOLUTION: { id: '04', title: 'SOLUTION', content: '<strong>Editorial Layout</strong> : Moving away from indiscriminate content exposure to build a magazine-style view that conveys the film’s narrative intent and visual tone<br /><strong>Step-by-Step Interaction Flow</strong> : Designing an exploratory journey where information unfolds sequentially based on user actions such as scrolling' },
    KEY_INSIGHT: { id: '05', title: 'KEY INSIGHT', content: '<strong>Intentional Constraint</strong> : Minimising initial content exposure to resolve the "Paradox of Choice"<br /><strong>Applying the IKEA Effect</strong> : Providing physical-like digital interactions that mimic handling real objects, encouraging users to feel greater affection and ownership toward the content they discover on their own<br /><br />→ Learned that providing an "active exploration experience" based on behavioural economics principles maximises platform engagement and attachment<br /><span class="main5_research_source">The IKEA Effect : a cognitive bias in which consumers place a disproportionately high value on products they partially created or assembled themselves <br/>[ Daniel Mochon, Michael I. Norton, Dan Ariely ]</span>' }
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