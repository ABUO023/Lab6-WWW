/* ===========================
   Gestionnaire de Tâches JS
   CSI 3540 - Laboratoire 6
   =========================== */

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');
    const actionMode = document.getElementById('actionMode');
    const increaseFont = document.getElementById('increaseFont');
    const decreaseFont = document.getElementById('decreaseFont');
    const fontSizeDisplay = document.getElementById('fontSizeDisplay');
    const printButton = document.getElementById('printButton');
    const taskCount = document.getElementById('taskCount');

    // State
    let currentFontSize = 100;
    let selectedAction = 'none';

    // Initialize
    updateTaskCount();
    lucide.createIcons();

    // =====================
    // Event Listeners
    // =====================

    /**
     * Add task when button is clicked or Enter is pressed
     */
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    /**
     * Font size controls
     */
    increaseFont.addEventListener('click', function() {
        currentFontSize += 10;
        if (currentFontSize > 200) currentFontSize = 200;
        applyFontSize();
    });

    decreaseFont.addEventListener('click', function() {
        currentFontSize -= 10;
        if (currentFontSize < 50) currentFontSize = 50;
        applyFontSize();
    });

    /**
     * Action mode selector
     */
    actionMode.addEventListener('change', function() {
        selectedAction = this.value;
    });

    /**
     * Print button
     */
    printButton.addEventListener('click', function() {
        window.print();
    });

    // =====================
    // Functions
    // =====================

    /**
     * Add a new task to the list
     */
    function addTask() {
        const taskText = taskInput.value.trim();

        // Validation
        if (taskText === '') {
            alert('Veuillez entrer une tâche!');
            taskInput.focus();
            return;
        }

        // Remove empty message if it exists
        const emptyMsg = taskList.querySelector('.empty-message');
        if (emptyMsg) {
            taskList.removeChild(emptyMsg);
        }

        // Create list item
        const li = document.createElement('li');
        li.className = 'task-item px-4 py-3 text-gray-900 hover:bg-gray-50 cursor-pointer transition-colors';
        li.textContent = taskText;

        // Add click handler for action selection
        li.addEventListener('click', function(event) {
            event.stopPropagation();
            handleTaskAction(li);
        });

        // Add to list
        taskList.appendChild(li);

        // Clear input
        taskInput.value = '';
        taskInput.focus();

        // Update count
        updateTaskCount();
        lucide.createIcons();
    }

    /**
     * Handle task actions (Delete, Up, Down)
     */
    function handleTaskAction(taskElement) {
        if (selectedAction === 'none') {
            alert('Veuillez sélectionner une action!');
            return;
        }

        const tasks = Array.from(taskList.children).filter(item => !item.classList.contains('empty-message'));
        const actualIndex = tasks.indexOf(taskElement);

        if (selectedAction === 'delete') {
            taskList.removeChild(taskElement);
            updateTaskCount();
            alert('Tâche supprimée');
        } else if (selectedAction === 'up') {
            if (actualIndex > 0) {
                const previousTask = tasks[actualIndex - 1];
                taskList.insertBefore(taskElement, previousTask);
            } else {
                alert('Cette tâche est déjà au début de la liste');
            }
        } else if (selectedAction === 'down') {
            if (actualIndex < tasks.length - 1) {
                const nextTask = tasks[actualIndex + 1];
                taskList.insertBefore(nextTask, taskElement);
            } else {
                alert('Cette tâche est déjà à la fin de la liste');
            }
        }

        // Reset action
        actionMode.value = 'none';
        selectedAction = 'none';
    }

    /**
     * Apply font size to the container
     */
    function applyFontSize() {
        document.documentElement.style.fontSize = (currentFontSize / 100) * 16 + 'px';
        fontSizeDisplay.textContent = currentFontSize + '%';
    }

    /**
     * Update task count display
     */
    function updateTaskCount() {
        const tasks = Array.from(taskList.children).filter(item => !item.classList.contains('empty-message'));
        const count = tasks.length;
        
        if (count === 0) {
            taskCount.textContent = 'Aucune tâche';
            // Show empty message if not already present
            if (!taskList.querySelector('.empty-message')) {
                const emptyMsg = document.createElement('li');
                emptyMsg.className = 'empty-message py-8 text-center text-gray-400 text-sm';
                emptyMsg.textContent = 'Aucune tâche pour le moment';
                taskList.appendChild(emptyMsg);
            }
        } else {
            // Remove empty message if exists
            const emptyMsg = taskList.querySelector('.empty-message');
            if (emptyMsg) {
                taskList.removeChild(emptyMsg);
            }
            taskCount.textContent = count + (count === 1 ? ' tâche' : ' tâches');
        }
    }
});
