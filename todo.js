const list = document.querySelector(".list");
const todoList = document.querySelector(".todo-items");
let date = document.querySelector(".date");
let checkboxes = [];

function todaysDate() {
  const allMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const allDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let today = new Date();
  let month = today.getMonth();
  let date = today.getDate();
  let day = today.getDay();
  let year = today.getFullYear();
  return `${allDays[day]}, ${allMonths[month]} ${date}, ${year}`
}

function createCheckbox(userText, position) {
  let newDiv = document.createElement("div");
  let newCheckbox = document.createElement("input");
  let newCheckboxLabel = document.createElement("label");
  let clearBtn = document.createElement("button");
  // newDiv.setAttribute("class", position);
  newCheckbox.setAttribute("type", "checkbox");
  // newCheckbox.setAttribute("id", position);
  newCheckbox.setAttribute("name", position);
  newCheckboxLabel.setAttribute("for", position);
  newCheckboxLabel.textContent = userText;
  clearBtn.setAttribute("class", "clear");
  clearBtn.setAttribute("id", position);
  clearBtn.textContent = "Clear";
  newDiv.append(newCheckbox);
  newDiv.append(newCheckboxLabel);
  newDiv.append(clearBtn);
  return newDiv;
}

date.textContent = todaysDate();

list.addEventListener("click", (event) => {
  // let todoList = document.querySelector(".todo-items");
  let addBtn = document.querySelector(".btn-submit");
  if (event.target == addBtn) {
    event.preventDefault();
    let inputField = document.querySelector(".field");
    let inputContent = inputField.value;
    let newCheckboxPosition = checkboxes.length;
    let newCheckboxDiv = createCheckbox(inputContent, newCheckboxPosition);
    inputField.value = "";
    todoList.append(newCheckboxDiv);
    checkboxes.push(newCheckboxPosition);
  }
  // if (event.target.className == "clear") {
  //   // event.preventDefault();
  //   console.log(event.target.className);
  //   let clearBtnId = event.target.id;
  //   let clearBtn = document.getElementById(clearBtnId);
  //   let divToClear = clearBtn.parentElement;
  //   divToClear.remove();
  // }
});

todoList.addEventListener("click", (event) => {
  if (event.target.className == "clear") {
    event.preventDefault();
    console.log(event.target.className);
    let clearBtnId = event.target.id;
    let clearBtn = document.getElementById(clearBtnId);
    let divToClear = clearBtn.parentElement;
    divToClear.remove();
  }
});


//  this was my first attempt!!!
// let newCheckboxPosition = checkboxes.length + 1;




// TO DO
// - Add event listener to clear button (DONE)
//   - faded on add (DONE - CSS)
//   - appears on hover (DONE - CSS)
//   - removes item on click (DONE)
// - Fix bug where hitting enter when there are multiple buttons on page makes entire div disappear (DONE)
// - Fix but where long strings wrap under the checkbox and push the clear button down (DONE - CSS)
// - Make the checked boxes prettier by rereading this when your brain is less mush: https://stackoverflow.com/questions/4148499/how-to-style-a-checkbox-using-css 
