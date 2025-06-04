import unittest
from unittest.mock import MagicMock
from src.application.use_cases.add_task_use_case import AddTaskUseCase
from src.domain.entities.task import Task
from src.domain.repositories.task_repository import TaskRepository

class TestAddTaskUseCase(unittest.TestCase):
    def test_add_task_executes_correctly(self):
        mock_repo = MagicMock(spec=TaskRepository)
        add_task_uc = AddTaskUseCase(task_repository=mock_repo)

        title = "New Test Task"
        created_task = add_task_uc.execute(title)

        self.assertIsNotNone(created_task)
        self.assertEqual(created_task.title, title)
        self.assertFalse(created_task.completed)
        mock_repo.add_task.assert_called_once_with(created_task)

if __name__ == '__main__':
    unittest.main()
