import $ from 'jquery';

$(document).ready(function () {
  const paragraphs = [
    'Holberton Dashboard',
    'Dashboard data for the students',
    'Copyright - Holberton School',
  ];

  paragraphs.forEach((text) => {
    const paragraph = $('<p>').text(text);
    $('body').append(paragraph);
  });
});
