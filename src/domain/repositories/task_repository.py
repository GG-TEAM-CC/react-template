from abc import ABC, abstractmethod
from typing import List, Optional
import uuid

from src.domain.entities.task import Task

class TaskRepository(ABC):
    @abstractmethod
    def add_task(self, task: Task) -> None:
        pass

    @abstractmethod
    def get_task_by_id(self, task_id: uuid.UUID) -> Optional[Task]:
        pass

    @abstractmethod
    def get_all_tasks(self) -> List[Task]:
        pass

    @abstractmethod
    def update_task(self, task: Task) -> None:
        pass

    @abstractmethod
    def delete_task(self, task_id: uuid.UUID) -> None:
        pass
