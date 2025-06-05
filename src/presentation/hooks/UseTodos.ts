import { useEffect, useState } from 'react';
import { TodoRepository } from '../../domain/services/TodoRepository';
import { FetchTodosUseCase } from '../../domain/services/FetchTodos.ts';
import type { Todo } from '../../domain/models/Todo.ts';

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const repo = new TodoRepository();
    const useCase = new FetchTodosUseCase(repo);
    useCase.execute().then((data) => {
      setTodos(data);
      setLoading(false);
    });
  }, []);

  return { todos, loading };
}

