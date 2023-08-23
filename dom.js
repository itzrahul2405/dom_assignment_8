var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
// var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event






//Add item
function addItem(e){
    e.preventDefault();

    // Get input value
    var newItem = document.getElementById('item').value;
    // vreate new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));


    // Create delete button element
    var deleteBtn = document.createElement('button');

    // Add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append text Node
    deleteBtn.appendChild(document.createTextNode('X'));

    //  Append button to li
    li.appendChild(deleteBtn);





    //  create edit button (don't have functionality to edit , it is just a button) -> assignment task
     // Create edit button element
    var editBtn = document.createElement('button');
     // Add classes to edit button
    editBtn.className = 'btn btn-success btn-sm mr-2 float-right edit';
    // Append text Node
    editBtn.appendChild(document.createTextNode('EDIT'));
    //  Append button to li
    li.appendChild(editBtn)



    //  Append li to list
    itemList.appendChild(li);
}







// Remove item
function removeItem(e){
    
    if (e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}








