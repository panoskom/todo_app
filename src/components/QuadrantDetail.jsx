import QuadrantHeader from './QuadrantHeader';
import TaskForm from './TaskForm';
import StatusFilter from './StatusFilter';
import TaskList from './TaskList';
import './QuadrantDetail.css';

export default function QuadrantDetail({
  quadrantKey,
  tasks,
  statusFilter,
  onStatusFilterChange,
  onBack,
  onAdd,
  onToggle,
  onDelete,
  onMove,
  onEdit,
}) {
  return (
    <div className="quadrant-detail">
      <QuadrantHeader quadrantKey={quadrantKey} onBack={onBack} />
      <TaskForm quadrantKey={quadrantKey} onAdd={onAdd} />
      <StatusFilter value={statusFilter} onChange={onStatusFilterChange} />
      <TaskList
        tasks={tasks}
        quadrantKey={quadrantKey}
        onToggle={onToggle}
        onDelete={onDelete}
        onMove={onMove}
        onEdit={onEdit}
      />
    </div>
  );
}
