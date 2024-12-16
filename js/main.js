const tasks = [
    { title: "Apprendre mon cours de JavaScript", priority: 1 },
    { title: "Créer mon compte Github", priority: 2 },
    { title: "Répondre à mes emails", priority: 3 }
];


const taskList = document.getElementById("task-list");
const taskForm = document.getElementById("task-form");
const deleteTasksButton = document.getElementById("delete-tasks");


function renderTasks() {
    taskList.innerHTML = ""; 
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = `priority-${task.priority}`;
        li.innerHTML = `
            <label>
                <input type="checkbox" data-index="${index}">
                ${task.title}
            </label>
        `;
        taskList.appendChild(li);
    });
}


taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskTitle = document.getElementById("task-title").value.trim();
    const taskPriority = parseInt(document.getElementById("task-priority").value, 10);

    if (taskTitle) {
        tasks.push({ title: taskTitle, priority: taskPriority });
        renderTasks();
        taskForm.reset(); 
    }
});


deleteTasksButton.addEventListener("click", () => {
    const checkboxes = document.querySelectorAll("#task-list input[type='checkbox']");
    const selectedIndexes = Array.from(checkboxes).reduce((acc, checkbox, index) => {
        if (!checkbox.checked) acc.push(tasks[index]);
        return acc;
    }, []);

    tasks.length = 0;
    tasks.push(...selectedIndexes);
    renderTasks();
});


renderTasks();



