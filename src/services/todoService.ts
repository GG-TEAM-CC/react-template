import { Todo } from '@/domain/todo';

// Mock data
let todos: Todo[] = [
  { id: '1', text: 'Learn Clean Architecture', completed: false },
  { id: '2', text: 'Build a React App', completed: true },
];

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const todoService = {
  getTodos: async (): Promise<Todo[]> => {
    await delay(500);
    return [...todos];
  },
  addTodo: async (text: string): Promise<Todo> => {
    await delay(300);
    const newTodo: Todo = {
      id: String(Date.now()), // Simple ID generation for example
      text,
      completed: false,
    };
    todos = [...todos, newTodo];
    return newTodo;
  },
  toggleTodo: async (id: string): Promise<Todo | undefined> => {
    await delay(200);
    const todoIndex = todos.findIndex(todo => todo.id === id);
    if (todoIndex > -1) {
      todos[todoIndex] = { ...todos[todoIndex], completed: !todos[todoIndex].completed };
      return todos[todoIndex];
    }
    return undefined;
  },
  removeTodo: async (id: string): Promise<boolean> => {
    await delay(200);
    const initialLength = todos.length;
    todos = todos.filter(todo => todo.id !== id);
    return todos.length < initialLength;
  }
};
