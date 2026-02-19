import { QUADRANT_ORDER } from '../utils/constants';
import QuadrantCard from './QuadrantCard';
import './MatrixGrid.css';

export default function MatrixGrid({ counts, onSelectQuadrant }) {
  return (
    <div className="matrix-grid">
      {QUADRANT_ORDER.map((key) => (
        <QuadrantCard
          key={key}
          quadrantKey={key}
          count={counts[key] || 0}
          onClick={() => onSelectQuadrant(key)}
        />
      ))}
    </div>
  );
}
