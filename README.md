# Project Title

This project follows a clean architecture pattern.

## Directory Structure

- `src/`: Contains the source code, divided into layers:
    - `domain/`: Core business logic and entities.
    - `application/`: Use cases and application-specific logic.
    - `infrastructure/`: Frameworks, databases, external services.
    - `presentation/`: UI layer (e.g., API endpoints, web pages).
- `tests/`: Unit and integration tests, mirroring the `src/` structure.
- `config/`: Configuration files.
- `docs/`: Project documentation.
