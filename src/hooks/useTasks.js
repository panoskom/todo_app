import { useCallback, useMemo } from 'react';
import { useChromeStorage } from './useChromeStorage';
import { generateId } from '../utils/helpers';

export function useTasks() {
  const [tasks, setTasks, loaded] = useChromeStorage('eisenhower_tasks', []);

  const addTask = useCallback((title, description, quadrant, startDate, endDate) => {
    const newTask = {
      id: generateId(),
      title: title.trim(),
      description: description?.trim() || '',
      quadrant,
      startDate: startDate || null,
      endDate: endDate || null,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTasks((prev) => [newTask, ...prev]);
  }, [setTasks]);

  const toggleTask = useCallback((id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }, [setTasks]);

  const deleteTask = useCallback((id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }, [setTasks]);

  const moveTask = useCallback((id, newQuadrant, startDate, endDate) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, quadrant: newQuadrant, startDate: startDate || null, endDate: endDate || null } : t))
    );
  }, [setTasks]);

  const editTask = useCallback((id, updates) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...updates } : t))
    );
  }, [setTasks]);

  const getTasksByQuadrant = useCallback((quadrant, statusFilter) => {
    return tasks.filter((t) => {
      if (t.quadrant !== quadrant) return false;
      if (statusFilter === 'active' && t.completed) return false;
      if (statusFilter === 'completed' && !t.completed) return false;
      return true;
    });
  }, [tasks]);

  const getQuadrantCounts = useCallback(() => {
    const counts = { do: 0, schedule: 0, delegate: 0, eliminate: 0 };
    tasks.forEach((t) => {
      if (t.completed) return;
      counts[t.quadrant]++;
    });
    return counts;
  }, [tasks]);

  return {
    tasks,
    loaded,
    addTask,
    toggleTask,
    deleteTask,
    moveTask,
    editTask,
    getTasksByQuadrant,
    getQuadrantCounts,
  };
}
