# Laboratoire 6 – CSI3540

Gestionnaire de Tâches - A DOM-based Task Management Application

This project implements a **task management application** using vanilla JavaScript and DOM manipulation, as required by CSI3540 Laboratoire 6.

## Live Demo

The application is hosted via GitHub Pages at:
[https://abuo023.github.io/Lab6-WWW/](https://abuo023.github.io/Lab6-WWW/)

## Demo Video

Watch the demonstration of all features:

![Lab 6 Demo](assets/lab6.mp4)

## Features Implemented

### Core Requirements (✓ All Completed)

1. **Static HTML/CSS Structure** ✓
   - Clean, semantic HTML5 markup
   - Responsive Tailwind CSS styling
   - White, minimalist design

2. **Font Size Controls** ✓
   - Increase (+) and Decrease (-) buttons
   - Displays current font size percentage (50% - 200%)
   - Real-time font scaling using JavaScript event handlers

3. **Add Tasks Functionality** ✓
   - Text input field for entering new tasks
   - "Add" button to submit tasks
   - Enter key support for quick task addition
   - Input validation (no empty tasks)
   - Auto-clear input after successful addition
   - Uses `<ol>` ordered list for task display

4. **Print Functionality** ✓
   - Print button that triggers browser print dialog
   - Print-optimized styles (hides controls, shows tasks only)

5. **Task Management Operations** ✓
   - **Delete**: Removes task from list
   - **Up**: Moves task up in the list order
   - **Down**: Moves task down in the list order
   - Action selector dropdown to choose operation
   - Click on task to execute selected action

### Additional Features

- Task counter showing total number of tasks
- Empty state message when no tasks exist
- Responsive design for all screen sizes
- Lucide icons for visual clarity
- Professional, clean user interface

## Technologies Used

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript** - DOM manipulation and event handling
- **Lucide Icons** - Minimal icon library

## How to Use

1. **Add a Task**
   - Type task description in the input field
   - Click "Ajouter" or press Enter

2. **Manage Tasks**
   - Select an action (Delete, Monter, Descendre) from the dropdown
   - Click on the task to execute the action

3. **Adjust Font Size**
   - Use the +/- buttons to increase or decrease text size
   - Range: 50% to 200% of normal size

4. **Print**
   - Click "Imprimer" to print the task list

## Project Structure

```
Lab6-WWW/
├── index.html          # Main HTML file
├── script.js           # JavaScript logic and event handlers
├── README.md           # This file
├── LICENSE
└── assets/
    └── lab6.mp4        # Demo video
```

## Code Highlights

### Event-Driven Architecture
- All functionality is handled through event listeners
- Follows the Puzzler application pattern
- Clean separation of concerns

### DOM Manipulation
- Dynamic task creation using `document.createElement()`
- Task ordering using `insertBefore()`
- Proper parent-child element management

### Responsive Design
- Mobile-first approach using Tailwind CSS
- Flexible layout that adapts to screen size
- Touch-friendly button sizes

## Lab Requirements Coverage

This project fully satisfies all requirements from CSI3540 Laboratoire 6:

- ✓ Static visual design with CSS
- ✓ Font size change option with event handlers
- ✓ Add items functionality (input + button)
- ✓ Print button functionality
- ✓ Delete, Up, Down operations on list items
- ✓ Click-based task actions
- ✓ Proper DOM manipulation
- ✓ Clean, professional implementation

## Browser Compatibility

Works on all modern browsers that support:
- ES6 JavaScript
- CSS Grid and Flexbox
- HTML5 semantic elements

## Author

Created for CSI3540 - Laboratoire 6
Université d'Ottawa

---

Built with clean code and attention to detail. 🚀
