import { STATUS_FILTERS } from '../utils/constants';
import './StatusFilter.css';

export default function StatusFilter({ value, onChange }) {
  return (
    <div className="status-filter">
      {Object.entries(STATUS_FILTERS).map(([key, label]) => (
        <button
          key={key}
          className={`sf-pill${value === key ? ' sf-pill--active' : ''}`}
          onClick={() => onChange(key)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
