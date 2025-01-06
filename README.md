# 1global-js-playwright

Playwright + JavaScript

Site [Better Roaming](https://www.betterroaming.com/) 

---

### Run test
headless:
```bash
npx playwright test tests/betterroaming.spec.js 
```

debug:
```bash
npx playwright test tests/betterroaming.spec.js --debug
```

---

### Maintain Code Standards (ESLint)
This project uses ESLint to ensure code quality and consistency. It is mandatory to run Lint and fix any problems before committing or git pushing.

Fix:
```bash
npx eslint . --fix
```
---

### CI/CD

This project has continuous integration configured via GitHub Actions. The pipeline is configured to:

Automatically run automated tests:
Whenever a merge is performed to the master branch.
Save artifacts generated during testing, such as screenshots, for later analysis.

---

### Task Management with Kanban

In addition to the CI/CD pipeline, a Kanban board was created to organize and manage project tasks. This board allows:

- View the progress of each task.
- Manage priorities.
- Keep the workflow organized.
Kanban is available directly in the repository, in the Projects tab.










