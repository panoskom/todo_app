import { QUADRANTS } from '../utils/constants';
import './QuadrantCard.css';

export default function QuadrantCard({ quadrantKey, count, onClick }) {
  const q = QUADRANTS[quadrantKey];

  return (
    <button
      className={`quadrant-card quadrant-card--${quadrantKey}`}
      onClick={onClick}
      style={{ '--q-color': q.color }}
    >
      <div className="qc-icon">{q.icon}</div>
      <div className="qc-label">{q.label}</div>
      <div className="qc-description">{q.description}</div>
      <div className="qc-count">
        {count} {count === 1 ? 'task' : 'tasks'}
      </div>
    </button>
  );
}
