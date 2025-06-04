import React from 'react';
import { useTodos } from '@/hooks/useTodos';
import { TodoItem } from './TodoItem';

// Basic styling
const listStyle: React.CSSProperties = {
  listStyleType: 'none',
  padding: 0,
};

export const TodoList: React.FC = () => {
  const { todos, loading, error } = useTodos();

  if (loading) {
    return <p>Loading todos...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  if (todos.length === 0) {
    return <p>No todos yet! Add one above.</p>;
  }

  return (
    <ul style={listStyle}>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
