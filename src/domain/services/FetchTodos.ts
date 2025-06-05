import type { Todo } from '../models/Todo.ts';
import { TodoRepository } from './TodoRepository';

export class FetchTodosUseCase {
  private readonly todoRepository: TodoRepository;

  constructor(todoRepository: TodoRepository) {
    this.todoRepository = todoRepository;
  }

  async execute(): Promise<Todo[]> {
    return this.todoRepository.getTodos();
  }
}