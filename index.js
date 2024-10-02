
function addingEventListener() {
  const input = document.getElementById('button');
  
  if (input) {
      input.addEventListener('click', function() {
          alert('I was clicked!');
      });
  } else {
      console.error("Button with id 'button' not found.");
  }
}

addingEventListener();
