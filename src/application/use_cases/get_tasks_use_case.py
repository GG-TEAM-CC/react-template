from typing import List
from src.domain.entities.task import Task
from src.domain.repositories.task_repository import TaskRepository

class GetTasksUseCase:
    def __init__(self, task_repository: TaskRepository):
        self.task_repository = task_repository

    def execute(self) -> List[Task]:
        return self.task_repository.get_all_tasks()
