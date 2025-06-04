import unittest
import uuid
from src.domain.entities.task import Task

class TestTask(unittest.TestCase):
    def test_task_creation(self):
        task_id = uuid.uuid4()
        task = Task(id=task_id, title="Test Task", completed=False)
        self.assertEqual(task.id, task_id)
        self.assertEqual(task.title, "Test Task")
        self.assertFalse(task.completed)

    def test_task_creation_generates_id(self):
        task = Task(title="Another Task")
        self.assertIsNotNone(task.id)
        self.assertIsInstance(task.id, uuid.UUID)

    def test_task_repr(self):
        task_id = uuid.uuid4()
        task = Task(id=task_id, title="Test Task", completed=True)
        expected_repr = f"<Task(id={task_id}, title='Test Task', completed=True)>"
        self.assertEqual(repr(task), expected_repr)

if __name__ == '__main__':
    unittest.main()
