const toggles = document.querySelectorAll('.toggle');

toggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
              toggle.classList.toggle('active');
            });
});

