import React, { useState } from 'react';
import { useTodos } from '@/hooks/useTodos';

// Basic styling
const formStyle: React.CSSProperties = {
  display: 'flex',
  marginBottom: '16px',
};

const inputStyle: React.CSSProperties = {
  flexGrow: 1,
  padding: '8px',
  marginRight: '8px',
};

export const AddTodoForm: React.FC = () => {
  const [text, setText] = useState('');
  const { addTodoItem } = useTodos();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodoItem(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="What needs to be done?"
        style={inputStyle}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};
