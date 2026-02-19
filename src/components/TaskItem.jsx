import { formatDate, formatRelativeDate } from '../utils/helpers';
import './TaskItem.css';

export default function TaskItem({ task, onToggle, onDelete }) {
  function renderDates() {
    const start = formatDate(task.startDate);
    const end = formatDate(task.endDate);

    if (start && end) return `${start} → ${end}`;
    if (start) return `From ${start}`;
    if (end) return `Due ${end}`;
    return null;
  }

  const dateText = renderDates();

  return (
    <div className={`task-item${task.completed ? ' task-item--done' : ''}`}>
      <button className="ti-check" onClick={() => onToggle(task.id)}>
        {task.completed ? (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="1" y="1" width="14" height="14" rx="3" fill="#10b981" stroke="#10b981" strokeWidth="1.5"/>
            <path d="M4.5 8L7 10.5L11.5 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="1" y="1" width="14" height="14" rx="3" stroke="#d1d5db" strokeWidth="1.5"/>
          </svg>
        )}
      </button>
      <div className="ti-content">
        <div className="ti-title">{task.title}</div>
        {task.description && <div className="ti-desc">{task.description}</div>}
      </div>
      <div className="ti-meta">
        {dateText && <span className="ti-dates">{dateText}</span>}
        <span className="ti-date">{formatRelativeDate(task.createdAt)}</span>
      </div>
      <button className="ti-delete" onClick={() => onDelete(task.id)}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M3 3.5L7 7.5M7 7.5L11 11.5M7 7.5L11 3.5M7 7.5L3 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>
    </div>
  );
}
