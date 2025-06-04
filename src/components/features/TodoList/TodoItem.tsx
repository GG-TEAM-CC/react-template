import React from 'react';
import { Todo } from '@/domain/todo';
import { useTodos } from '@/hooks/useTodos';
// Basic styling, consider CSS Modules or a CSS-in-JS solution for larger apps
const itemStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  padding: '8px',
  borderBottom: '1px solid #eee',
};

const textStyleCompleted: React.CSSProperties = {
  marginLeft: '8px',
  textDecoration: 'line-through',
  color: '#aaa',
  flexGrow: 1,
};

const textStylePending: React.CSSProperties = {
  marginLeft: '8px',
  flexGrow: 1,
};


interface TodoItemProps {
  todo: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { toggleTodoItem, removeTodoItem } = useTodos();

  return (
    <li style={itemStyle}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodoItem(todo.id)}
      />
      <span style={todo.completed ? textStyleCompleted : textStylePending}>
        {todo.text}
      </span>
      <button onClick={() => removeTodoItem(todo.id)} style={{ marginLeft: 'auto' }}>X</button>
    </li>
  );
};
