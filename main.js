// var nav_up = document.getElementById("nav-up");
// var nav_down = document.getElementById("nav-down");
// var nav_del = document.getElementById("nav-del");
// nav_up.addEventListener("click", upper);
// nav_down.addEventListener("click", downer);
// nav_del.addEventListener("click", deleter);

// <script>
//         const blocks = document.querySelectorAll('.block');

//         blocks.forEach(block => {
//             const upButton = block.querySelector('.up');
//             const downButton = block.querySelector('.down');

//             upButton.addEventListener('click', () => {
//                 if (block.previousElementSibling) {
//                     block.parentNode.insertBefore(block, block.previousElementSibling);
//                 }
//             });

//             downButton.addEventListener('click', () => {
//                 if (block.nextElementSibling) {
//                     block.parentNode.insertBefore(block.nextElementSibling, block);
//                 }
//             });
//         });
// </script>

const new_el = document.getElementById('new-elm');
new_el.addEventListener('click', new_element);
const save = document.getElementById('save');
save.addEventListener('click', save_table);

var del = document.getElementById('nav-del');
del.addEventListener('click', deleter);

var nav_up = document.getElementById('nav-up');
nav_up.addEventListener('click', upper);
var nav_down = document.getElementById('nav-down');
nav_down.addEventListener('click', downer);

function new_element() {
  const rootDiv = document.getElementsByClassName("inner");
  const new_input_group = document.createElement("div");
  new_input_group.classList.add('input-group');
  rootDiv[0].appendChild(new_input_group);

  const input_pair = document.createElement("div");
  input_pair.classList.add('input-pair');
  new_input_group.appendChild(input_pair);

  var new_input = document.createElement("input");
  new_input.setAttribute('name', 'text');
  new_input.setAttribute('id', 'titler');
  new_input.setAttribute('type', 'text');
  input_pair.appendChild(new_input);

  var new_input = document.createElement("input");
  new_input.setAttribute('name', 'number');
  new_input.setAttribute('id', 'setting');
  new_input.setAttribute('type', 'number');
  input_pair.appendChild(new_input);

  var new_btn = document.createElement("button");
  new_btn.setAttribute('class', 'nav');
  new_btn.setAttribute('id', 'nav-up');
  new_btn.innerHTML = '&#8593';
  new_btn.addEventListener('click', upper);
  new_input_group.appendChild(new_btn);

  var new_btn = document.createElement("button");
  new_btn.setAttribute('class', 'nav');
  new_btn.setAttribute('id', 'nav-down');
  new_btn.innerHTML = '&#8595';
  new_btn.addEventListener('click', downer);
  new_input_group.appendChild(new_btn);

  var new_btn = document.createElement("button");
  new_btn.setAttribute('class', 'nav');
  new_btn.setAttribute('id', 'nav-del');
  new_btn.innerHTML = 'x';
  new_input_group.appendChild(new_btn);
  new_btn.addEventListener('click', deleter);
}

function save_table() {
    const pairs = [];
    const inputPairs = document.querySelectorAll('.input-pair');

    inputPairs.forEach(pair => {
        const nameInput = pair.querySelector('#titler').value;
        const valueInput = pair.querySelector('#setting').value;

        if (nameInput && valueInput) {
            pairs.push({ name: nameInput, value: valueInput });
        }
    });

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; // Очистить предыдущий вывод

    const result = pairs.map(pair => `"${pair.name}": "${pair.value}"`).join(', ');
    outputDiv.textContent = result;

    if (outputDiv.innerHTML.trim() !== '') {
      outputDiv.textContent = "{" + result + "}";
    }
}

function deleter () {
  //this.parentNode.remove();
  this.parentNode.parentNode.removeChild(this.parentNode);
}

function downer () {
  const temp = this.parentNode.nextElementSibling;
  if(temp) {
    this.parentNode.parentNode.insertBefore(temp, this.parentNode);
  }
}

function upper () {
  const temp = this.parentNode.previousElementSibling;
  if(temp) {
    this.parentNode.parentNode.insertBefore(this.parentNode, temp);
  }
}