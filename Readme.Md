# **JavaScript DOM Manipulation & Node.js Learnings**

This repository contains code and examples that highlight various concepts in JavaScript, particularly around DOM manipulation and working with JavaScript in Node.js.

## **Topics Covered**

1. **DOM Manipulation**:
   - Learn how to use `document.getElementById`, `document.getElementsByTagName`, and `document.querySelectorAll` to interact with and modify HTML elements.
   - Example:
     ```javascript
     const heading = document.getElementsByTagName("h1")[0];
     heading.innerHTML = "Updated Heading";
     ```

2. **Node.js and JavaScript**:
   - Understand why Node.js doesn't support DOM manipulation and how to handle JavaScript code appropriately between browser and Node.js environments.
   - Example Error: `ReferenceError: document is not defined`

3. **Working with Developer Tools**:
   - Use `$0` in browser developer tools to access the most recently inspected element for quick modifications.

## **Usage**

To run the DOM-related code:
- Ensure you are running it within a browser environment.
- Open the `index.html` file in your browser to see the JavaScript in action.

For Node.js-related code:
- Install Node.js from [here](https://nodejs.org/).
- Run the Node.js scripts using:
  ```bash
  node <filename>.js
  ```

## **Key Learnings**

- DOM manipulation techniques in the browser.
- Differences between using `innerHTML` and `textContent`.
- How to handle JavaScript code across browser and Node.js environments.

## **Contributions**

Feel free to fork the repository, raise issues, or submit pull requests to contribute!

