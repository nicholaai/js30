const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const resetBtn = document.querySelector('#reset');
const checkAllBtns = document.querySelectorAll('.check-all');
let items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
  e.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text,
    done: false
  }
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

// using map creates a new list every time. may hinder performance
function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index="${i}" id="item${i}" ${plate.done ? 'checked' : ''}/>
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
  }).join('');
}

function toggleDone(e) {
  if (!e.target.matches('input')) return; //skip unless it's an input
  const index = e.target.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function resetList() {
  items = [];
  localStorage.removeItem('items');
  populateList(items, itemsList);
}

function checkAll(e) {
  const isDone = e.target.dataset.done === 'true' ? true : false;
  items.forEach(item => {
    item.done = isDone;
  });
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
resetBtn.addEventListener('click', resetList);
checkAllBtns.forEach(btn => btn.addEventListener('click', checkAll));
populateList(items, itemsList);
