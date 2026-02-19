import { QUADRANTS } from '../utils/constants';
import './QuadrantHeader.css';

export default function QuadrantHeader({ quadrantKey, onBack }) {
  const q = QUADRANTS[quadrantKey];

  return (
    <div className="quadrant-header" style={{ '--q-color': q.color }}>
      <button className="qh-back" onClick={onBack}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Back
      </button>
      <div className="qh-title">
        <span className="qh-icon">{q.icon}</span>
        <span className="qh-label">{q.label}</span>
      </div>
      <div className="qh-bar" />
    </div>
  );
}
