import type { Todo } from '../models/Todo.ts';

export class TodoRepository {
  async getTodos(): Promise<Todo[]> {
    // Simulate fetching todos from an API or data source
    return [
      { id: 1, title: 'Learn Clean Architecture', completed: false },
      { id: 2, title: 'Build a React App', completed: true },
    ];
  }
}

