const API_URL = "http://localhost:8000/api/v1/task";

// FETCH ALL TASKS
async function fetchTasks() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    console.log("API Response:", data); // DEBUG

    // Handle both possible backend formats
    const tasks = Array.isArray(data.data)
      ? data.data
      : data.data?.tasks || [];

    renderTasks(tasks);

  } catch (err) {
    console.error("Error fetching tasks:", err);
  }
}

// RENDER TASKS
function renderTasks(tasks) {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  // Empty state
  if (!tasks || tasks.length === 0) {
    taskList.innerHTML = "<p>No tasks found</p>";
    return;
  }

  tasks.forEach(task => {
    const li = document.createElement("li");

    li.innerHTML = `
      <div class="task-left">
        <input 
          type="checkbox" 
          ${task.completed ? "checked" : ""} 
          onchange="toggleComplete('${task._id}', this.checked)" 
        />

        <span class="${task.completed ? "completed" : ""}">
          ${task.title}
        </span>
      </div>

      <button onclick="deleteTask('${task._id}')">❌</button>
    `;

    taskList.appendChild(li);
  });
}

// ADD TASK
async function addTask() {
  const input = document.getElementById("taskInput");
  const title = input.value;

  if (!title.trim()) {
    alert("Task cannot be empty");
    return;
  }

  try {
    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title })
    });

    input.value = "";
    fetchTasks();

  } catch (err) {
    console.error("Error adding task:", err);
  }
}

// TOGGLE COMPLETE
async function toggleComplete(id, completed) {
  try {
    await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ completed })
    });

    fetchTasks();

  } catch (err) {
    console.error("Error updating task:", err);
  }
}

// DELETE TASK
async function deleteTask(id) {
  try {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE"
    });

    fetchTasks();

  } catch (err) {
    console.error("Error deleting task:", err);
  }
}

// INITIAL LOAD
fetchTasks();