import uuid
from typing import List, Optional, Dict

from src.domain.entities.task import Task
from src.domain.repositories.task_repository import TaskRepository

class InMemoryTaskRepository(TaskRepository):
    def __init__(self):
        self._tasks: Dict[uuid.UUID, Task] = {}

    def add_task(self, task: Task) -> None:
        self._tasks[task.id] = task

    def get_task_by_id(self, task_id: uuid.UUID) -> Optional[Task]:
        return self._tasks.get(task_id)

    def get_all_tasks(self) -> List[Task]:
        return list(self._tasks.values())

    def update_task(self, task: Task) -> None:
        if task.id in self._tasks:
            self._tasks[task.id] = task
        else:
            # Or raise an exception, depending on desired behavior
            print(f"Warning: Task with id {task.id} not found for update.")

    def delete_task(self, task_id: uuid.UUID) -> None:
        if task_id in self._tasks:
            del self._tasks[task_id]
        else:
            # Or raise an exception
            print(f"Warning: Task with id {task_id} not found for deletion.")
