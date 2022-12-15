var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);
//delete event
itemList.addEventListener('click',removeItem);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  //create a delete button
  var deleteBtn =document.createElement('button');

  //add classes to del button
  deleteBtn.className='btn btn-danger btn-sm float-right delete';

  //append text node
  deleteBtn.appendChild(document.createTextNode('x'));

  //append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
 }
}