import { useTodos } from '../hooks/UseTodos';
import { TodoList } from '../components/TodoList';

export function HomePage() {
  const { todos, loading } = useTodos();

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Todo List (Clean Architecture Example)</h1>
      <TodoList todos={todos} />
    </div>
  );
}

