// Import jQuery and Lodash
import $ from 'jquery';
import debounce from 'lodash/debounce';

// Function to update the counter and display the count
let count = 0;
const updateCounter = () => {
  count++;
  $('#count').text(`${count} clicks on the button`);
};

// Bind the debounce function to the click event of the button
const buttonClickHandler = debounce(updateCounter, 300);

// Add elements to the DOM
$(document).ready(() => {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button id="clickButton">Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  // Add event listener to the button
  $('#clickButton').on('click', buttonClickHandler);
});

