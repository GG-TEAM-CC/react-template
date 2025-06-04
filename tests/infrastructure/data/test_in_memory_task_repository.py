import unittest
import uuid
from src.domain.entities.task import Task
from src.infrastructure.data.in_memory_task_repository import InMemoryTaskRepository

class TestInMemoryTaskRepository(unittest.TestCase):
    def setUp(self):
        self.repo = InMemoryTaskRepository()
        self.task1 = Task(title="Task 1")
        self.task2 = Task(title="Task 2", completed=True)

    def test_add_and_get_task_by_id(self):
        self.repo.add_task(self.task1)
        retrieved_task = self.repo.get_task_by_id(self.task1.id)
        self.assertEqual(retrieved_task, self.task1)

    def test_get_task_by_id_not_found(self):
        non_existent_id = uuid.uuid4()
        retrieved_task = self.repo.get_task_by_id(non_existent_id)
        self.assertIsNone(retrieved_task)

    def test_get_all_tasks_empty(self):
        tasks = self.repo.get_all_tasks()
        self.assertEqual(len(tasks), 0)

    def test_get_all_tasks(self):
        self.repo.add_task(self.task1)
        self.repo.add_task(self.task2)
        tasks = self.repo.get_all_tasks()
        self.assertEqual(len(tasks), 2)
        self.assertIn(self.task1, tasks)
        self.assertIn(self.task2, tasks)

    def test_update_task(self):
        self.repo.add_task(self.task1)
        self.task1.title = "Updated Task 1"
        self.task1.completed = True
        self.repo.update_task(self.task1)
        updated_task = self.repo.get_task_by_id(self.task1.id)
        self.assertEqual(updated_task.title, "Updated Task 1")
        self.assertTrue(updated_task.completed)

    def test_update_task_not_found(self):
        # Test that update_task doesn't add a new task if ID not found
        # (and doesn't crash, prints warning as per current implementation)
        non_existent_task = Task(title="Non Existent")
        self.repo.update_task(non_existent_task)
        self.assertIsNone(self.repo.get_task_by_id(non_existent_task.id))


    def test_delete_task(self):
        self.repo.add_task(self.task1)
        self.repo.delete_task(self.task1.id)
        self.assertIsNone(self.repo.get_task_by_id(self.task1.id))
        self.assertEqual(len(self.repo.get_all_tasks()), 0)

    def test_delete_task_not_found(self):
        # Test that delete_task doesn't crash if ID not found
        # (and prints warning as per current implementation)
        non_existent_id = uuid.uuid4()
        self.repo.delete_task(non_existent_id)


if __name__ == '__main__':
    unittest.main()
