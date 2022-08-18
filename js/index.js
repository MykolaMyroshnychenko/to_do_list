const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');
const total = document.querySelector('#total');
let i = 0;

// добавляем обработчик событий

btn.addEventListener('click', (e) => {
  if(input.value === '') return //если input.value = пустоте то мы ничего не делаем, а если что-то написано то добавляется
  createDeleteElements(input.value);
  input.value = '';


document.getElementById("input") //При нажатии на Enter
.addEventListener("keyup", function(e) {
  if(input.value === '') return
    if (e.code === 'Enter') {
      createDeleteElements(input.value);
      input.value = ''
    }
  });
})
//строим функцию дом дерево

function createDeleteElements(value){
  i++;
  const box = document.createElement('input');
  box.setAttribute("type", "checkbox");
  const li = document.createElement('li');
  const btn = document.createElement('button');


  li.className = 'li';
  li.textContent = value;

  box.className = 'input';
  li.prepend(box);

  btn.className = 'btn';
  li.appendChild(btn);

  btn.addEventListener('click', (e) => {
    i--;
    total.textContent = i;
    result.removeChild(li); //у result удалить дочерний узел. Удаляем нашу задачу

    if(box.checked==true || btn.clicked == true){ //Когда checkbox стот галочка и мы его удаляем
      i++;
      total.textContent = i;
    }
  })

  box.addEventListener('click', (e) => {
    li.classList.toggle('li-active'); // при нажатии на checkbox зачеркивать его li-active

    if(box.checked!=true){
      i++;
      total.textContent = i;
    }

    if(box.checked==true){
      i--;
      total.textContent = i;
    }
  })

  total.textContent = i; //перезаписывать каждый раз
  result.appendChild(li);
}

function myFunction2() {
  document.getElementById("result").innerHTML = ""; // очистить все
  i = 0;
  total.textContent = i;
}
