import { useEffect, useRef } from 'react';
import { QUADRANTS, QUADRANT_ORDER } from '../utils/constants';
import './ContextMenu.css';

export default function ContextMenu({ taskId, currentQuadrant, position, onMove, onEdit, onClose }) {
  const menuRef = useRef(null);

  useEffect(() => {
    function handleMouseDown(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    }
    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  // Clamp position to stay within popup bounds
  const menuWidth = 180;
  const menuHeight = 160;
  const x = Math.min(position.x, 400 - menuWidth - 4);
  const y = Math.min(position.y, 520 - menuHeight - 4);

  const targets = QUADRANT_ORDER.filter((key) => key !== currentQuadrant);

  return (
    <div
      ref={menuRef}
      className="context-menu"
      style={{ left: x, top: y }}
    >
      <button
        className="context-menu__item"
        onClick={() => {
          onEdit(taskId);
          onClose();
        }}
      >
        <span className="context-menu__icon">✏️</span>
        Edit
      </button>
      <div className="context-menu__separator" />
      <div className="context-menu__label">Move to</div>
      {targets.map((key) => (
        <button
          key={key}
          className="context-menu__item"
          onClick={() => {
            onMove(taskId, key);
            onClose();
          }}
        >
          <span className="context-menu__icon">{QUADRANTS[key].icon}</span>
          {QUADRANTS[key].label}
        </button>
      ))}
    </div>
  );
}
