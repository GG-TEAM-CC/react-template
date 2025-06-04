import unittest
from unittest.mock import MagicMock
from src.application.use_cases.get_tasks_use_case import GetTasksUseCase
from src.domain.entities.task import Task
from src.domain.repositories.task_repository import TaskRepository

class TestGetTasksUseCase(unittest.TestCase):
    def test_get_tasks_executes_correctly(self):
        mock_repo = MagicMock(spec=TaskRepository)
        task1 = Task(title="Task 1")
        task2 = Task(title="Task 2")
        mock_repo.get_all_tasks.return_value = [task1, task2]

        get_tasks_uc = GetTasksUseCase(task_repository=mock_repo)
        retrieved_tasks = get_tasks_uc.execute()

        self.assertEqual(len(retrieved_tasks), 2)
        self.assertIn(task1, retrieved_tasks)
        self.assertIn(task2, retrieved_tasks)
        mock_repo.get_all_tasks.assert_called_once()

if __name__ == '__main__':
    unittest.main()
