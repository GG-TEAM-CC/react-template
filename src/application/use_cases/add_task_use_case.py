from src.domain.entities.task import Task
from src.domain.repositories.task_repository import TaskRepository

class AddTaskUseCase:
    def __init__(self, task_repository: TaskRepository):
        self.task_repository = task_repository

    def execute(self, title: str) -> Task:
        task = Task(title=title)
        self.task_repository.add_task(task)
        return task
