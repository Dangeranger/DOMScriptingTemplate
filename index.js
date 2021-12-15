//DOM Scripting Goes here!
//Don't forget to add comments to help you further understand what we are doing here
//DOM scripting
let userName = document.getElementById('userName');
let tickets = document.getElementById('tickets');
let stub = document.getElementById('ticketOrder');

//event listener

tickets.addEventListener('click', (event) => {
  event.preventDefault();
  ticketTaker();
});

//globals

let count = 0;

function ticketTaker() {
  console.log('In ticket taker')
  count++;
  //creates an h2 element to dispolay the name
  let ticketStub = document.createElement('h2');
  //assigns the user and thier order to the h2
  console.log({ userName });
  ticketStub.textContent = userName.value ? `${userName.value}` : `${count}`;
  //printing the name and order in the display area
  stub.appendChild(ticketStub);

  if (count === 10) {
    //disables button after 25 entires
    tickets.disabled = true;
    alert('we are at capacity');
  }
}

//magic words
let presto = document.getElementById('presto');
let abra = document.getElementById('abra');

function sayMagicWord(event) {
  console.log({ event });
  if (event.target === presto) {
    alert('changeO!');
  } else if (event.tagret === abra) {
    alert('cadabra!');
  }
}

//event listeners.  they are methods on html elements.  they
//take an event and a callback function
presto.addEventListener('click', sayMagicWord);
abra.addEventListener('click', sayMagicWord);

abra.addEventListener('click', (evt) => {
  evt.tagret.style.background = 'purple';
});
