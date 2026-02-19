import { useState } from 'react';
import './TaskForm.css';

export default function TaskForm({ quadrantKey, onAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title, description, quadrantKey, startDate || null, endDate || null);
    setTitle('');
    setDescription('');
    setStartDate('');
    setEndDate('');
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="tf-row">
        <input
          className="tf-title"
          type="text"
          placeholder="Task title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        <button className="tf-add" type="submit">+</button>
      </div>
      <input
        className="tf-desc"
        type="text"
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="tf-dates">
        <label className="tf-date-field">
          <span className="tf-date-label">Start</span>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <label className="tf-date-field">
          <span className="tf-date-label">End</span>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
      </div>
    </form>
  );
}
