// window.addEventListener('load', () => {
//     const form = document.querySelector("task-form");
//     const input = document.querySelector("input-task");
//     const list = document.querySelector("tasks");

//     form.addEventListener("submit", (e) => {
//         e.preventDefault();

//         const task = input.value;
//         if (!task) {
//             alert("please fill out the task");
//             return;
//         }

//         const task_el = document.createElement("div");
//         task_el.classList.add("task");

//         const task_content_el = document.createElement("div");
//         task_content_el.classList.add("content");
//         // task_content_el.innerText = task;

//         task_el.appendChild(task_content_el);

//         const task_input_el = document.createElement("input");
//         task_input_el.classList.add("text");
//         task_input_el.type = "text";
//         task_input_el.value = task;
//         task_input_el.setAttribute("readonly", "readonly");

//         task_content_el.appendChild(task_input_el);

//         const task_actions_el = document.createElement("div");
//         task_actions_el.classList.add("actions");

//         const edit = document.createElement("div");
//         task_edit_el.classList.add("edit");

//         const task_delete_el = document.createElement("div");
//         task_delete_el.classList.add("delete");
//         task_delete_el.innerHTML = "Delete";

//         task_el.appendChild(task_actions_el);

//         list.appendChild(task_el);

//         input.value = "";

//         task_edit_el.addEventListener('click', () => {
//             if (task_edit_el.innerText.toLowerCase() == "edit") {
//                 task_input_el.removeAttribute("readonly");
//                 task_input_el.focus();
//                 task_edit_el.innerText = "Save";
//             } else {
//                 // console.log("Save");
//                 task_input_el.setAttribute("readonly", "readonly");
//                 task_edit_el.innerText = "Edit";
//             }
//         });
//     });
// });

window.addEventListener('load', () => {
    const form = document.querySelector(".task-form");
    const input = document.getElementById("input-task");
    const list = document.querySelector(".task-list");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const task = input.value;
        if (!task.trim()) {
            alert("Please fill out the task");
            return;
        }

        const taskEl = document.createElement("div");
        taskEl.classList.add("task");

        const contentEl = document.createElement("div");
        contentEl.classList.add("content");

        const taskInputEl = document.createElement("input");
        taskInputEl.classList.add("text");
        taskInputEl.type = "text";
        taskInputEl.value = task;
        taskInputEl.setAttribute("readonly", "readonly");

        const actionsEl = document.createElement("div");
        actionsEl.classList.add("actions");

        const editBtn = document.createElement("button");
        editBtn.classList.add("edit");
        editBtn.innerText = "Edit";

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete");
        deleteBtn.innerText = "Delete";

        contentEl.appendChild(taskInputEl);
        actionsEl.appendChild(editBtn);
        actionsEl.appendChild(deleteBtn);

        taskEl.appendChild(contentEl);
        taskEl.appendChild(actionsEl);

        list.appendChild(taskEl);

        input.value = "";

        editBtn.addEventListener('click', () => {
            if (editBtn.innerText.toLowerCase() === "edit") {
                taskInputEl.removeAttribute("readonly");
                taskInputEl.focus();
                editBtn.innerText = "Save";
            } else {
                taskInputEl.setAttribute("readonly", "readonly");
                editBtn.innerText = "Edit";
            }
        });

        deleteBtn.addEventListener('click', () => {
            taskEl.remove();
        });
    });
});


