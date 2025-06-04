from src.application.use_cases.add_task_use_case import AddTaskUseCase
from src.application.use_cases.get_tasks_use_case import GetTasksUseCase
from src.infrastructure.data.in_memory_task_repository import InMemoryTaskRepository

def main():
    # Setup
    task_repository = InMemoryTaskRepository()
    add_task_use_case = AddTaskUseCase(task_repository)
    get_tasks_use_case = GetTasksUseCase(task_repository)

    while True:
        print("\nTo-Do App")
        print("1. Add Task")
        print("2. View Tasks")
        print("3. Exit")
        choice = input("Enter your choice: ")

        if choice == '1':
            title = input("Enter task title: ")
            if title:
                task = add_task_use_case.execute(title)
                print(f"Task '{task.title}' added with ID {task.id}")
            else:
                print("Task title cannot be empty.")
        elif choice == '2':
            tasks = get_tasks_use_case.execute()
            if tasks:
                print("\n--- Tasks ---")
                for task in tasks:
                    status = "Done" if task.completed else "Pending"
                    print(f"- {task.title} (ID: {task.id}, Status: {status})")
                print("-------------")
            else:
                print("No tasks yet.")
        elif choice == '3':
            print("Exiting To-Do App.")
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()
