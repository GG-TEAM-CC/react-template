import React from 'react';
import { TodoProvider } from '@/contexts/TodoContext';
import { AddTodoForm } from '@/components/features/AddTodoForm';
import { TodoList } from '@/components/features/TodoList';

// Basic styling for the page container
const pageStyle: React.CSSProperties = {
  maxWidth: '600px',
  margin: '20px auto',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  borderRadius: '8px'
};

const headingStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#333'
};

export const HomePage: React.FC = () => {
  return (
    <TodoProvider>
      <div style={pageStyle}>
        <header>
          <h1 style={headingStyle}>My Todos</h1>
        </header>
        <main>
          <AddTodoForm />
          <TodoList />
        </main>
      </div>
    </TodoProvider>
  );
};
