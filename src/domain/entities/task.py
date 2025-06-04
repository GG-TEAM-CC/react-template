import uuid

class Task:
    def __init__(self, title: str, completed: bool = False, id: uuid.UUID = None):
        self.id = id if id else uuid.uuid4()
        self.title = title
        self.completed = completed

    def __repr__(self):
        return f"<Task(id={self.id}, title='{self.title}', completed={self.completed})>"
