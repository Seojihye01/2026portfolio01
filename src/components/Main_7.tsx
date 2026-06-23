import React, { useState, useRef } from 'react';
import './Main_7.css';

interface DirectoryRunButtonProps {
  url: string;
}

const Main_7: React.FC<DirectoryRunButtonProps> = ({ url }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [runtime, setRuntime] = useState('00:00:00');
  const timerRef = useRef<number | null>(null);

  const handleRun = () => {
    if (isRunning) return;

    setIsRunning(true);
    const startTime = Date.now();

    timerRef.current = window.setInterval(() => {
      const now = Date.now();
      const diff = now - startTime;
      
      const ms = Math.floor((diff % 1000) / 10).toString().padStart(2, '0');
      const sec = Math.floor((diff / 1000) % 60).toString().padStart(2, '0');
      const min = Math.floor((diff / (1000 * 60)) % 60).toString().padStart(2, '0');
      
      setRuntime(`${min}:${sec}:${ms}`);
    }, 10);

    // 2.8초 후 새창 이동 및 리셋
    setTimeout(() => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
      }
      window.open(url, '_blank', 'noopener,noreferrer');
      setIsRunning(false);
      setRuntime('00:00:00');
    }, 3000);
  };

  return (
    <div className="main7_section" data-theme="light">
      <div className="main7_track_container" onClick={handleRun}>
        
        <div className="main7_row_1">
          <h1 className={`main7_title ${isRunning ? 'is_blinking' : ''}`}>
            PROJECT {isRunning ? 'RUNNING ···' : ':: RUN'}
          </h1>
        </div>

        <div className="main7_row_2">
          <div className="main7_meta_block runtime_block">
            <p className="main7_meta_label">RUNTIME<span className="main7_meta_value timer_font">{runtime}</span></p>
          </div>
          <h1 className="main7_project_name">DIRECTORY.M</h1>
        </div>

        <div className="main7_row_3">
          <div className="main7_meta_block distance_block">
            <span className="main7_meta_label">DISTANCE : FULL COURSE</span>
            <span className="main7_meta_value">BIB NO. P-01</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Main_7;