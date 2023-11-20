<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>To-Do List App</title>
</head>
<body>
    <div class="container">
        <h1>My To-Do List</h1>
        <div id="checklist">
            <input checked="" value="1" name="r" type="checkbox" id="01">
            <label for="01">Task 1</label>
            <input value="2" name="r" type="checkbox" id="02">
            <label for "02">Task 2</label>
            <input value="3" name="r" type="checkbox" id="03">
            <label for="03">Task 3</label>
        </div>
        <div id="todo-form">
            <input type="text" id="task-input" placeholder="Add a new task">
            <button id="add-task">Add Task</button>
        </div>
        <ul id="task-list"></ul>
    </div>
    <script src="script.js"></script>
</body>
</html>
