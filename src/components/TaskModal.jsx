import { useState, useEffect } from 'react';
import { QUADRANTS } from '../utils/constants';
import './TaskModal.css';

export default function TaskModal({ task, mode, targetQuadrant, onSave, onClose }) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description || '');
  const [startDate, setStartDate] = useState(task.startDate || '');
  const [endDate, setEndDate] = useState(task.endDate || '');

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  function handleSubmit(e) {
    e.preventDefault();
    if (mode === 'edit') {
      onSave(task.id, {
        title: title.trim(),
        description: description.trim(),
        startDate: startDate || null,
        endDate: endDate || null,
      });
    } else {
      // move mode
      onSave(task.id, targetQuadrant, startDate || null, endDate || null);
    }
    onClose();
  }

  const isMove = mode === 'move';
  const heading = isMove
    ? `Move to ${QUADRANTS[targetQuadrant].icon} ${QUADRANTS[targetQuadrant].label}`
    : 'Edit Task';

  return (
    <div className="task-modal-overlay" onMouseDown={onClose}>
      <form
        className="task-modal"
        onMouseDown={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
      >
        <div className="tm-header">{heading}</div>

        {!isMove && (
          <>
            <input
              className="tm-input"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              autoFocus
            />
            <input
              className="tm-input tm-input--desc"
              type="text"
              placeholder="Description (optional)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </>
        )}

        <div className="tm-dates">
          <label className="tm-date-field">
            <span className="tm-date-label">Start</span>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              autoFocus={isMove}
            />
          </label>
          <label className="tm-date-field">
            <span className="tm-date-label">End</span>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </label>
        </div>

        <div className="tm-actions">
          <button type="button" className="tm-btn tm-btn--cancel" onClick={onClose}>
            Cancel
          </button>
          <button
            type="submit"
            className="tm-btn tm-btn--save"
            disabled={!isMove && !title.trim()}
          >
            {isMove ? 'Move' : 'Save'}
          </button>
        </div>
      </form>
    </div>
  );
}
