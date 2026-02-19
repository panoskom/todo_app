import './EmptyState.css';

export default function EmptyState({ quadrantKey }) {
  const messages = {
    do: "No urgent tasks. Stay ahead!",
    schedule: "Plan something strategic.",
    delegate: "Nothing to delegate yet.",
    eliminate: "Good — keep it empty!",
  };

  return (
    <div className="empty-state">
      <div className="es-icon">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="4" y="6" width="24" height="20" rx="3" stroke="#d1d5db" strokeWidth="1.5"/>
          <path d="M4 12H28" stroke="#d1d5db" strokeWidth="1.5"/>
          <path d="M12 18H20" stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
      <div className="es-text">{messages[quadrantKey] || "No tasks yet."}</div>
    </div>
  );
}
