// ADDING ITEMS TO START AND END OF LIST
// Get the <ul> element
var groceryList = document.getElementById("groceries");
// ADD NEW ITEM TO END OF LIST
// Create element
const newListItem = document.createElement("li");
// Create text node
const listItemContent = document.createTextNode("apples");
// Add text node to element
newListItem.appendChild(listItemContent);
// Add element end of list
groceryList.appendChild(newListItem)

// ADD NEW ITEM START OF LIST
// Create element
const newListItem2 = document.createElement("li");
// Create text node
const listItemContent2 = document.createTextNode("potatoes");
// Add text node to element
newListItem2.appendChild(listItemContent2);
// Add element to list
if (groceryList.firstChild) {
    groceryList.insertBefore(newListItem2, groceryList.firstChild);
}else {
    groceryList.appendChild(newListItem2);
}



// All <li> elements

// ADD A CLASS OF COOL TO ALL LIST ITEMS
// Counter variable
// Loop through elements
// Change class to cool


// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
// h2 element
// h2 text
// No. of <li> elements
// Content
// Update h2 using innerHTML (not textContent) because it contains markup