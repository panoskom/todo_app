import TaskItem from './TaskItem';
import EmptyState from './EmptyState';
import './TaskList.css';

export default function TaskList({ tasks, quadrantKey, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return <EmptyState quadrantKey={quadrantKey} />;
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
