let title = document.title = "DOM Tutorial";

// let headerElement = document.getElementById('header');
// // headerElement.textContent = 'To-To Apps';
//
// let itemsUL = document.getElementById('items');
// let items = itemsUL.getElementsByClassName('item');
//
// for ( let i = 0; i<items.length; i++){
//     items[i].style.color = 'red';
// }

let lastItems = document.querySelectorAll('.item:nth-child(4)');

for ( let element of lastItems){
    element.style.backgroundColor = 'red';
    element.style.color = '#fff';
}
