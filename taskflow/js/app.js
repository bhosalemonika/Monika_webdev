// const storageKey = "taskflow.tasks";
// let tasks = readTasks();
// let editingId = null;
// const emptyState = document.querySelector("#empty-state");
// const dashboard = document.querySelector("#dashboard");
// const taskList = document.querySelector("#task-list");
// const modal = document.querySelector("#task-modal");
// const form = document.querySelector("#task-form");
// const titleInput = document.querySelector("#task-title");
// const descriptionInput = document.querySelector("#task-description");
// const dueDateInput = document.querySelector("#task-due-date");

// function readTasks() {
//   try {
//     return JSON.parse(localStorage.getItem(storageKey)) || [];
//   } catch {
//     return [];
//   }
// }
// function saveTasks() {
//   localStorage.setItem(storageKey, JSON.stringify(tasks));
// }
// function formatDueDate(value) {
//   if (!value) return "Jun 24, 2026";
//   return new Date(`${value}T00:00:00`).toLocaleDateString("en-US", {
//     month: "short",
//     day: "numeric",
//     year: "numeric",
//   });
// }
// function escapeHtml(value) {
//   return value.replace(
//     /[&<>'"]/g,
//     (character) =>
//       ({
//         "&": "&amp;",
//         "<": "&lt;",
//         ">": "&gt;",
//         "'": "&#039;",
//         '"': "&quot;",
//       })[character],
//   );
// }
// function render() {
//   const completed = tasks.filter((task) => task.completed).length;
//   emptyState.hidden = tasks.length > 0;
//   dashboard.hidden = tasks.length === 0;
//   document.querySelector("#header-add").hidden = tasks.length === 0;
//   document.querySelector("#total-count").textContent = String(
//     tasks.length,
//   ).padStart(2, "0");
//   document.querySelector("#pending-count").textContent = String(
//     tasks.length - completed,
//   ).padStart(2, "0");
//   document.querySelector("#completed-count").textContent = String(
//     completed,
//   ).padStart(2, "0");
//   taskList.innerHTML = tasks
//     .map(
//       (task) =>
//         `<article class="task-card ${task.completed ? "completed-task" : ""}"><div class="task-main"><input class="task-check" type="checkbox" data-action="toggle" data-id="${task.id}" ${task.completed ? "checked" : ""} aria-label="Mark ${escapeHtml(task.title)} as complete"><div class="task-content"><h3>${escapeHtml(task.title)}</h3><p>${escapeHtml(task.description || "No description added.")}</p><div class="task-meta"><span><img src="assets/calendar_.png" alt="">${formatDueDate(task.dueDate)}</span><span class="status ${task.completed ? "completed" : "pending"}">${task.completed ? "Completed" : "Pending"}</span></div></div></div><div class="task-actions"><button type="button" data-action="edit" data-id="${task.id}" aria-label="Edit ${escapeHtml(task.title)}"><img src="assets/edit.png" alt=""></button><button type="button" data-action="delete" data-id="${task.id}" aria-label="Delete ${escapeHtml(task.title)}"><img src="assets/delete.png" alt=""></button></div></article>`,
//     )
//     .join("");
// }
// function openModal(task) {
//   editingId = task?.id || null;
//   document.querySelector("#modal-title").textContent = task
//     ? "Edit task"
//     : "Create a task";
//   titleInput.value = task?.title || "";
//   descriptionInput.value = task?.description || "";
//   dueDateInput.value = task?.dueDate || "";
//   modal.hidden = false;
//   titleInput.focus();
// }
// function closeModal() {
//   modal.hidden = true;
//   form.reset();
//   editingId = null;
// }
// document
//   .querySelectorAll("#empty-add, #header-add")
//   .forEach((button) => button.addEventListener("click", () => openModal()));
// document.querySelector("#close-modal").addEventListener("click", closeModal);
// document.querySelector("#cancel-modal").addEventListener("click", closeModal);
// modal.addEventListener("click", (event) => {
//   if (event.target === modal) closeModal();
// });
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const values = {
//     title: titleInput.value.trim(),
//     description: descriptionInput.value.trim(),
//     dueDate: dueDateInput.value,
//   };
//   if (editingId)
//     tasks = tasks.map((task) =>
//       task.id === editingId ? { ...task, ...values } : task,
//     );
//   else tasks.unshift({ ...values, id: crypto.randomUUID(), completed: false });
//   saveTasks();
//   render();
//   closeModal();
// });
// taskList.addEventListener("click", (event) => {
//   const control = event.target.closest("[data-action]");
//   if (!control) return;
//   const id = control.dataset.id;
//   const task = tasks.find((item) => item.id === id);
//   if (control.dataset.action === "toggle") task.completed = control.checked;
//   if (control.dataset.action === "edit") {
//     openModal(task);
//     return;
//   }
//   if (control.dataset.action === "delete")
//     tasks = tasks.filter((item) => item.id !== id);
//   saveTasks();
//   render();
// });
// render();
