const taskList = document.getElementById('task-list');
const addTaskBtn = document.getElementById('add-task-btn');
const taskModal = document.getElementById('task-modal');
const saveTaskBtn = document.getElementById('save-task-btn'); // Corregido
const closeBtn = document.querySelector('.close-btn');
const taskTitleInput = document.getElementById('task-title');
const taskDescriptionInput = document.getElementById('task-description');

// Abrir el modal
addTaskBtn.addEventListener('click', () => {
    taskModal.style.display = 'block';
});

// Cerrar el modal
closeBtn.addEventListener('click', () => {
    taskModal.style.display = 'none';
});

// Guardar tarea
saveTaskBtn.addEventListener('click', () => {
    const title = taskTitleInput.value;
    const description = taskDescriptionInput.value;

    if (title) {
        addTaskToList(title, description);
        taskModal.style.display = 'none';
        taskTitleInput.value = ''; // Espacios eliminados
        taskDescriptionInput.value = '';
    }
});

// Función para añadir tarea a la lista
function addTaskToList(title, description) {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <span>${title}</span>
        <div>
            <button class="complete-btn">Completar</button> <!-- Corregido -->
        </div>
    `;
    taskList.appendChild(taskItem);

    // Añadir evento de clic al botón "Completar"
    const completeBtn = taskItem.querySelector('.complete-btn');
    completeBtn.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });
}
 