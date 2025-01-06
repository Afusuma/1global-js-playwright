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

---

### Cookie Validation Method

A dedicated method was implemented to handle cookies for every test, ensuring proper acceptance or management of cookie modals. This approach improves test reliability and reusability across different scenarios.

---

### Improvements

To enhance the project's maintainability and readability, the following improvements are suggested:

 - Use data-testid Attributes:
Avoid relying on XPath or complex CSS selectors for locating elements. Add data-testid attributes to the HTML for critical elements. This ensures:
1. Cleaner and more maintainable test scripts.
2. Reduced risk of test failures due to UI changes.

- Refactor Locators:
1. Replace long XPath expressions with simpler, attribute-based selectors.

By adopting these improvements, the project will achieve a more maintainable codebase with improved reliability in automation.










