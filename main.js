let form = document.querySelector('.submit-btn');
let itemTr = document.querySelector('.table');

form.addEventListener('click', newItem);
itemTr.addEventListener('click', deleteRow);

function newItem(e) {
  let tr = document.createElement('tr');
  tr.className = 'row';
  itemTr.appendChild(tr);

  let tdPlaceText = document.querySelector('.place').value;
  tdPlace = document.createElement('td');
  tdPlace.appendChild(document.createTextNode(tdPlaceText));
  tr.appendChild(tdPlace);

  let tdDateText = document.querySelector('.date').value;
  let tdDate = document.createElement('td');
  tdDate.appendChild(document.createTextNode(tdDateText));
  tr.appendChild(tdDate);

  let tdAmountText = document.querySelector('.amount').value + ' RON';
  let tdAmount = document.createElement('td');
  tdAmount.appendChild(document.createTextNode(tdAmountText));
  tr.appendChild(tdAmount);

  let dltBtnTd = document.createElement('td');
  tr.appendChild(dltBtnTd);

  let dltBtn = document.createElement('button');
  dltBtn.className = 'dlt-button';
  dltBtn.appendChild(document.createTextNode('X'));
  dltBtnTd.appendChild(dltBtn);

  if (tdPlaceText === '' || tdDateText === '' || tdAmountText === '') {
    tr.style.display = 'none';
  }

  document.querySelector('.place').value = '';
  document.querySelector('.date').value = '';
  document.querySelector('.amount').value = '';
}

function deleteRow(e) {
  if (e.target.classList.contains('dlt-button')) {
    let td = e.target.parentElement.parentElement;
    td.style.display = 'none';
  }
}
