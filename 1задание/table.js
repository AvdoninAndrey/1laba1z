const variables1 = ['x', 'y', 'f'];
const variables2 = ['x', 'y', 'z', 'f'];
const equivalence = (x, y) => !(x ^ y);
const implication = (x, y) => !x || y;
const antiimplication = (x, y) => !(!x || y);
const additionModulo = (x, y) => !!(x ^ y);
const antidisjunction = (x, y) => !(x || y);
const anticonjunction = (x, y) => !(x && y);
const disjunction = (x, y) => x || y;
const conjunction = (x, y) => x && y;
const denial = (x) => !x;

const f1 = function (x, y) {
  const result = disjunction(equivalence(x, denial(y)), antidisjunction(y, x));
  if (result === true) {
    return 1;
  }
  return 0;
};
const f2 = function (x, y, z) {
  const result = additionModulo(
    anticonjunction(implication(x, denial(y)), denial(z)),
    anticonjunction(x, y)
  );
  if (result === true) {
    return 1;
  }
  return 0;
};

function createTable(cols, rows, variables, countVariables) {
  let table = document.createElement('table'),
    tr,
    td;
  let set = [];

  for (i = 0; i < rows; i++) {
    tr = document.createElement('tr');
    for (j = 0; j < cols; j++) {
      td = document.createElement('td');
      if (i === 0) {
        td.innerHTML = variables[j];
        td.classList.add('oneStr');
      } else if (i !== 0 && j !== cols - 1) {
        if (countVariables === 2) {
          if (j === 0 && i < rows - rows / 2) {
            td.innerHTML = 0;
            set[0] = 0;
          } else if (j === 0 && i !== 0 && i >= 3) {
            td.innerHTML = 1;
            set[0] = 1;
          } else if (j === 1 && i % 2 !== 0) {
            td.innerHTML = 0;
            set[1] = 0;
          } else {
            td.innerHTML = 1;
            set[1] = 1;
          }
        }
        if (countVariables === 3) {
          if (j === 0 && i < rows - rows / 2 && i !== 0) {
            td.innerHTML = 0;
            set[0] = 0;
          } else if (j === 0 && i >= rows - rows / 2 && i !== 0) {
            td.innerHTML = 1;
            set[0] = 1;
          } else if (j === 1 && (i === 1 || i === 2 || i === 5 || i === 6)) {
            td.innerHTML = 0;
            set[1] = 0;
          } else if (j === 1 && (i !== 1 || i !== 2 || i !== 5 || i !== 6)) {
            td.innerHTML = 1;
            set[1] = 1;
          } else if (j === 2 && i % 2 !== 0) {
            td.innerHTML = 0;
            set[2] = 0;
          } else if (j === 2 && i % 2 === 0) {
            td.innerHTML = 1;
            set[2] = 1;
          }
        }
      } else if (i !== 0 && j === cols - 1) {
        if (countVariables === 2) {
          td.innerHTML = f1(set[0], set[1]);
        }
        if (countVariables === 3) {
          td.innerHTML = f2(set[0], set[1], set[2]);
        }
      }
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  table.classList.add('table');
  return table;
}

const btn1 = document.getElementById('1-btn');
const btn2 = document.getElementById('2-btn');
const form = document.querySelector('.form');
const content = document.getElementById('content');
const tableNameOne = document.querySelector('.tableOne');
const tableNameTwo = document.querySelector('.tableTwo');
const btnBack = document.querySelector('.btn-back');

function showButtonBack() {
  form.style.display = 'none';
  const buttonBack = document.querySelector('.btn-back');
  buttonBack.classList.remove('delete');
  buttonBack.classList.add('back-active');
}
btn1.addEventListener('click', (event) => {
  event.preventDefault();
  tableNameOne.classList.add('tableNameActive');
  showButtonBack();
  content.appendChild(createTable(3, 5, variables1, 2));
  btn1.disabled = true;
});

btn2.addEventListener('click', (event) => {
  event.preventDefault();
  tableNameTwo.classList.add('tableNameActive');
  showButtonBack();
  content.appendChild(createTable(4, 9, variables2, 3));
  btn2.disabled = true;
});
btnBack.addEventListener('click', (event) => {
  event.preventDefault();
  const table = document.querySelector('.table');
  table.remove();
  tableNameOne.classList.remove('tableNameActive');
  tableNameTwo.classList.remove('tableNameActive');
  btnBack.classList.add('delete');
  btn2.disabled = false;
  btn1.disabled = false;
  form.style.display = 'block';
});
