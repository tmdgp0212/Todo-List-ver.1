{
  const $date = document.querySelector("header>.bar>.date");
  const $time = document.querySelector("header>.bar>.time");

  const getDate = () => {
    const date = new Date();

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    let hours;
    if (date.getHours() > 12) {
      hours = String(date.getHours() - 12).padStart(2, "0");
    } else {
      hours = String(date.getHours()).padStart(2, "0");
    }

    $date.innerHTML = `${year}.${month}.${day}`;
    $time.innerHTML = `${hours}:${minutes}`;
  };

  getDate();
  setInterval(getDate, 1000);
}

{
  const $addNew = document.querySelector("section>.add-new");
  const $form = document.querySelector("section>form");
  const $input = document.querySelector("section>form>input");
  const $toDoList = document.querySelector("section>ul");

  let toDos = [];

  const addNewPopUp = () => {
    if (toDos.length === 0) {
      $addNew.classList.remove("hide");
    } else {
      $addNew.classList.add("hide");
    }
  };

  const saveToDo = () => {
    localStorage.setItem("todos", JSON.stringify(toDos));
  };

  const deleteToDo = (e) => {
    const li = e.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    li.remove();
    saveToDo();
    addNewPopUp();
  };

  const checkTodo = (target, todoObj) => {
    const input = target.parentElement.children[1];
    const li = target.parentElement;

    if (todoObj.checked === true) {
      input.checked = true;
      li.classList.add("checked");
    } else {
      input.checked = false;
      li.classList.remove("checked");
    }

    toDos.map((todo) => (todo.id === todoObj.id ? (todo = todoObj) : todo));
    saveToDo();
  };

  const todoToggle = (todoObj, target) => {
    if (todoObj.checked === false) {
      todoObj.checked = true;
    } else {
      todoObj.checked = false;
    }

    checkTodo(target, todoObj);
    return todoObj.checked;
  };

  const print = (todoObj) => {
    const li = document.createElement("li");
    const p = document.createElement("p");
    const input = document.createElement("input");
    const button = document.createElement("button");

    li.id = todoObj.id;
    input.setAttribute("type", "checkbox");

    $toDoList.appendChild(li);
    li.appendChild(p);
    li.appendChild(input);
    li.appendChild(button);

    p.innerHTML = todoObj.text;
    button.innerHTML = "🗑️";

    checkTodo(input, todoObj);
    li.scrollIntoView();

    li.addEventListener("click", function (e) {
      todoObj.checked = todoToggle(todoObj, e.target);
    });
    button.addEventListener("click", deleteToDo);
  };

  const addNewTodo = (e) => {
    e.preventDefault();

    const todo = $input.value;

    if (todo === "") {
      return;
    }

    $input.value = "";

    const todoObj = {
      text: todo,
      id: Date.now(),
      checked: false,
    };

    toDos.push(todoObj);
    print(todoObj);
    saveToDo();
    addNewPopUp();

    $input.focus();
  };

  $form.addEventListener("submit", addNewTodo);

  $addNew.addEventListener("click", function () {
    $input.focus();
  });

  const savedToDos = localStorage.getItem("todos");

  if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach((item) => {
      print(item);
    });
    addNewPopUp();
  }
}
