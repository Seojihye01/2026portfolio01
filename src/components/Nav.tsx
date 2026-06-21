import { useState, useEffect } from 'react';
import './Nav.css';


interface NavProps {
    isMenuOpen?: boolean; // 헤더 메뉴가 열렸는지 여부를 props로 받음
}

const Nav = ({ isMenuOpen }: NavProps) => {
    const [isDarkSection, setIsDarkSection] = useState(true); // 기본값은 어두운 배경(흰색 아이콘)
    const [activeSection, setActiveSection] = useState('start');

    if (isMenuOpen) return null;
    const sections = [
        { id: 'start', label: '01 | START LINE' },
        { id: 'slogan', label: '02 | SLOGAN' },
        { id: 'profile', label: '03 | RACE INFO CENTRE' },
        { id: 'proj1', label: '04 | MAIN RACE' },
        { id: 'strategy', label: '05 | RACE STRATEGY' },
        { id: 'visual', label: '06 | VISUAL KIT' },
        { id: 'live', label: '07 | LIVE RUN' },
        { id: 'logic', label: '08 | EXPERIENCE FLOW' },
        { id: 'proj2', label: '09 | SUB RACE' },
        { id: 'finish', label: '10 | FINISH LINE' }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // 섹션의 data-theme 속성을 확인
                        const theme = entry.target.getAttribute('data-theme');
                        setIsDarkSection(theme === 'dark' || !theme); 

                        const id = entry.target.id;
                        if (id) setActiveSection(id);
                    }
                });
            },
            { threshold: 0.5 } // 섹션이 절반 이상 보일 때 변경
        );

        const sectionElements = document.querySelectorAll('[data-theme], #start, #slogan, #profile, #proj1, #strategy, #visual, #logic, #live, #proj2, #finish');
        sectionElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = element.offsetTop; 
            window.scrollTo({ top: offset, behavior: 'smooth' });
        }
    };

    return (
    <nav className={`elevator_nav ${isDarkSection ? 'theme_dark' : 'theme_light'}`}>
        {sections.map((sec) => {
            const isActive = activeSection === sec.id; // ★ 추가: 현재 루프 도는 섹션이 활성화되었는지 판단
            return (
                <button 
                    key={sec.id} 
                    onClick={() => scrollToSection(sec.id)}
                    className={`elevator_btn ${isActive ? 'active' : ''}`} // ★ 수정: 활성화 시 active 클래스 부여
                >
                    <span className="label">{sec.label}</span>
                    <span className="dot" />
                </button>
            );
        })}
    </nav>
);
};

export default Nav;