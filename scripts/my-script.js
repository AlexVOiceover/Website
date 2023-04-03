//Store all the h2.collapsible in an object
const titles = document.querySelectorAll("h2.collapsible");

  // Loop through the h2 elements (tabs) and add a click event listener to each
  titles.forEach(tab => {
    tab.addEventListener('click', () => {

      // This gets the next sibling element after the title element (which is the containers that we want to collapse) and stores it in a variable called container.
      // To keep this functionality we need to keep always the same structure: h2 followed with what we want to collapse.
      const container = tab.nextElementSibling;

      // Toggle the collapsed class on the container element
      container.classList.toggle('collapsed');

    });
  });

