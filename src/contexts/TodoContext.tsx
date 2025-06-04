import React, { createContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { Todo } from '@/domain/todo';
import { todoService } from '@/services/todoService';

interface TodoContextType {
  todos: Todo[];
  loading: boolean;
  error: string | null;
  addTodoItem: (text: string) => Promise<void>;
  toggleTodoItem: (id: string) => Promise<void>;
  removeTodoItem: (id: string) => Promise<void>;
}

export const TodoContext = createContext<TodoContextType | undefined>(undefined);

interface TodoProviderProps {
  children: ReactNode;
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedTodos = await todoService.getTodos();
        setTodos(fetchedTodos);
      } catch (e) {
        setError('Failed to fetch todos');
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchTodos();
  }, []);

  const addTodoItem = useCallback(async (text: string) => {
    try {
      const newTodo = await todoService.addTodo(text);
      setTodos(prevTodos => [...prevTodos, newTodo]);
    } catch (e) {
      setError('Failed to add todo');
      console.error(e);
    }
  }, []);

  const toggleTodoItem = useCallback(async (id: string) => {
    try {
      const updatedTodo = await todoService.toggleTodo(id);
      if (updatedTodo) {
        setTodos(prevTodos =>
          prevTodos.map(todo => (todo.id === id ? updatedTodo : todo))
        );
      }
    } catch (e) {
      setError('Failed to toggle todo');
      console.error(e);
    }
  }, []);

  const removeTodoItem = useCallback(async (id: string) => {
    try {
      const success = await todoService.removeTodo(id);
      if (success) {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
      }
    } catch (e) {
      setError('Failed to remove todo');
      console.error(e);
    }
  }, []);

  return (
    <TodoContext.Provider value={{ todos, loading, error, addTodoItem, toggleTodoItem, removeTodoItem }}>
      {children}
    </TodoContext.Provider>
  );
};
