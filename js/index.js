let total = '';
let prefait = 'Il n\'y a rien à calculer.'

function calculatrice(number) {
  let num = number;

  total = String(total);

  if (total === prefait) {
    total = '';
  } else if (total === 'Infinity') {
    total = '';
  }

  if (num == '+') {
    total = `${total} + `;
  } else if (num == '-') {
    total = `${total} - `;
  } else if (num == '/') {
    total = `${total} / `; 
  } else if (num == '*') {
    total = `${total} * `; 
  } else if (num == '.') {
    total = `${total}.`;
  } else if (num == '~') {
    total = `${total} Math.sqrt(`;
  } else if (num == 'par1') {
    total = `${total}(`;
  } else if (num == 'par2') {
    total = `${total})`;
  } else if (num == 'bp') {
    total = '';
  } else if (num == 'entrer') {
    if (total) {
      total = eval(total);
      total = (Math.round(total * 1000)) / 1000;
    } else {
      total = prefait;
    }
  } else {
    total += num;
  }

  console.log(total);
  document.querySelector('.reponse').innerHTML = total;
}

window.addEventListener("keydown", (event) => {
  total = String(total);

  if (total === prefait) {
    total = '';
  } else if (total === 'Infinity') {
    total = '';
  }

  if (event.key == '+') {
    total = `${total} + `;
  } else if (event.key == '-') {
    total = `${total} - `
  } else if (event.key == '/') {
    total = `${total} / `; 
  } else if (event.key == '*') {
    total = `${total} * `; 
  } else if (event.key == '.') {
    total = `${total}.`;
  }  else if (event.key == '(') {
    total = `${total}(`;
  } else if (event.key == ')') {
    total = `${total})`;
  } else if (event.key <= 9 && event.key >= 0) {
    total += event.key;
  } else if (event.key == 'Enter') {
    if (total) {
      total = eval(total);
      total = (Math.round(total * 1000)) / 1000;
    } else {
      total = prefait;
    }
  } else if (event.key = 'Backspace') {
    total = '';
  }
  
  console.log(total);
  document.querySelector('.reponse').innerHTML = total;
})