import { useState } from 'react';
import { useTasks } from './hooks/useTasks';
import Header from './components/Header';
import MatrixGrid from './components/MatrixGrid';
import QuadrantDetail from './components/QuadrantDetail';
import './App.css';

export default function App() {
  const { loaded, addTask, toggleTask, deleteTask, getTasksByQuadrant, getQuadrantCounts } = useTasks();
  const [activeView, setActiveView] = useState('matrix');
  const [statusFilter, setStatusFilter] = useState('all');

  if (!loaded) return null;

  const isMatrix = activeView === 'matrix';

  return (
    <div className="app">
      {isMatrix ? (
        <>
          <Header />
          <MatrixGrid
            counts={getQuadrantCounts()}
            onSelectQuadrant={(key) => {
              setActiveView(key);
              setStatusFilter('all');
            }}
          />
        </>
      ) : (
        <QuadrantDetail
          quadrantKey={activeView}
          tasks={getTasksByQuadrant(activeView, statusFilter)}
          statusFilter={statusFilter}
          onStatusFilterChange={setStatusFilter}
          onBack={() => setActiveView('matrix')}
          onAdd={addTask}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      )}
    </div>
  );
}
