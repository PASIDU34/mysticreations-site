// FILTER FUNCTION
const filterButtons = document.querySelectorAll('.filter-menu span');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.filter-menu .active').classList.remove('active');
    button.classList.add('active');

    const category = button.dataset.filter;

    portfolioItems.forEach(item => {
      if (category === 'all') {
        item.style.display = 'block';
      } else {
        if (item.classList.contains(category)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      }
    });
  });
});

// LOAD MORE FUNCTION
const loadBtn = document.getElementById('loadBtn');
loadBtn.addEventListener('click', () => {
  document.querySelectorAll('.portfolio-item.hidden').forEach(item => {
    item.classList.remove('hidden');
    item.style.display = 'block';
  });
  loadBtn.style.display = 'none';
});
