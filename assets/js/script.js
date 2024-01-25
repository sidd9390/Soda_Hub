// Get the SVG element and the popup div
// Get the SVG element and the popup div
const svg = document.getElementById('map');
const svg_ind = document.getElementById('ind_map');
const world =document.getElementById('world');
const ind = document.getElementById('india');
const popup = document.getElementById('popup');
const popupText = document.getElementById('popup-text');

// Add marker points to the SVG based on image coordinates
const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
const cx = 1430; // X-coordinate of the circle's center
const cy = 400; // Y-coordinate of the circle's center
const radius = 20; // Radius of the circle

circle.setAttribute('cx', cx);
circle.setAttribute('cy', cy);
circle.setAttribute('r', radius);
circle.setAttribute('fill', 'red');

// Add a click event listener to the SVG
svg.addEventListener('click', function(event) {
  // Get the coordinates of the click event relative to the SVG
  const clickX = event.clientX - svg.getBoundingClientRect().left;
  const clickY = event.clientY - svg.getBoundingClientRect().top;

  // Check if the click is inside the circle
  
  if ((clickX >= 910 && clickX <=940) && (clickY >= 250 && clickY <=280)) {
    // Perform the operation when the click is inside the circle (e.g., hide the SVG element)
    ind.style.display = 'block';
     // Hide the entire SVG (change this to your desired operation)
  }
});

// Append the circle to the SVG
svg.appendChild(circle);
function addMarker(x, y, labelText, bgColor) {
  const marker = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  marker.setAttribute('cx', x);
  marker.setAttribute('cy', y);
  marker.setAttribute('r', 10);
  marker.setAttribute('fill', 'red');
  marker.setAttribute('class', 'marker');
  svg.appendChild(marker);

  const textBackground = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');


  const textWidth = labelText.length * 15; // Adjust the width based on the length of the text (approximation)
  const borderRadius = 5; 

  textBackground.setAttribute('x', x - textWidth / 2 - 2); // Adjusting for text width and padding
  textBackground.setAttribute('y', y - 42); // Adjusting for height and padding
  textBackground.setAttribute('width', textWidth); // Adjusting for text width and padding
  textBackground.setAttribute('height', 25); // Adjusted height for the background
  textBackground.setAttribute('fill', bgColor); // Background color
  textBackground.setAttribute('rx', borderRadius); // Horizontal border radius
  textBackground.setAttribute('ry', borderRadius); // Vertical border radius



  svg.appendChild(textBackground);
  text.setAttribute('x', x);
  text.setAttribute('y', y - 21); // Adjust the y position to place the text above the marker
  text.setAttribute('text-anchor', 'middle'); // Center the text horizontally
  text.setAttribute('fill', 'black');
  text.setAttribute('font-size', '22');
  text.setAttribute('background-color' , 'black');
  text.setAttribute('class', 'marker-label');
  const textNode = document.createTextNode(labelText);
  text.appendChild(textNode);
  svg.appendChild(text);
}


addMarker(1430, 400, 'India-334', 'orange');
addMarker(500, 270, 'US-1', 'orange');
addMarker(1700, 650, 'Australia-1','orange');
addMarker(1570, 480, 'Malaysia-1','orange');
addMarker(1450, 320, 'Nepal-1', 'orange');
addMarker(1300, 340, 'U.A.E -1', 'orange');
addMarker(1250, 630, 'Madagascar-1', 'orange');
addMarker(1160, 660, 'Maputo-1', 'orange');
addMarker(1150, 600, 'Zimbabwe-1', 'orange');
addMarker(1670, 420, 'Malamig-1','orange');
addMarker(1100, 540, 'Zambia-1', 'orange');
addMarker(1050, 500, 'Congo-1', 'orange');
addMarker(1200, 500, 'Kenya-2', 'orange');
addMarker(980, 450, 'Ghana-1', 'orange');
addMarker(980, 390, 'Burkina Faso-1', 'orange');
addMarker(900, 430, 'Guinea-1', 'orange');
addMarker(950, 470, 'Liberia-1', 'orange');
addMarker(900, 385, 'Senegal-1', 'orange');

// Add more markers as needed

// Add more markers as needed


