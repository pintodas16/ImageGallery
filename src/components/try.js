// let items = [
//   { id: 1, name: "Item 1" },
//   { id: 2, name: "Item 2" },
//   { id: 3, name: "Item 3" },
//   { id: 4, name: "Item 4" },
//   // Add more items here
// ];

let allimages = [
  { id: 1, src: "imgOne}`", checked: false },
  { id: 2, src: "imgTwo}`", checked: false },
  { id: 3, src: "imgThree", checked: false },
  { id: 4, src: "imgFour`", checked: false },
  { id: 5, src: "imgFive", checked: false },
  { id: 6, src: "imgSix}", checked: false },
  { id: 7, src: "imgSeven", checked: false },
  { id: 8, src: "imgEight", checked: false },
  { id: 9, src: "imgNine", checked: false },
  { id: 10, src: "", checked: false },
  { id: 11, src: "", checked: false },
];

let sourceIndex = null;
let targetIndex = null;

const handleDragStart = (e, index) => {
  sourceIndex = index;
};

const handleDragEnter = (e, index) => {
  //   e.preventDefault();
  targetIndex = index;
};

const handleDrop = () => {
  if (sourceIndex !== null && targetIndex !== null) {
    const updatedItems = [...allimages];

    // Remove the dragged item
    const [draggedItem] = updatedItems.splice(sourceIndex, 1);

    // Insert it at the new position
    updatedItems.splice(targetIndex, 0, draggedItem);

    // Update the source and target indices
    sourceIndex = null;
    targetIndex = null;

    // Update the state with the reordered array
    allimages = updatedItems;
  }
};

// Example usage
console.log("Original array:", allimages);

handleDragStart(null, 11); // Simulate onDragStart for the item at index 2
handleDragEnter(null, 5); // Simulate onDragEnter to move the item to index 0
handleDrop(); // Simulate the drop event

console.log("Updated array:", allimages);
