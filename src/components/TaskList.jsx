import TaskItem from './TaskItem';
import EmptyState from './EmptyState';
import './TaskList.css';

export default function TaskList({ tasks, quadrantKey, onToggle, onDelete, onMove, onEdit }) {
  if (tasks.length === 0) {
    return <EmptyState quadrantKey={quadrantKey} />;
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          quadrantKey={quadrantKey}
          onToggle={onToggle}
          onDelete={onDelete}
          onMove={onMove}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
