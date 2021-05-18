const expandList = function (event) {
  const target = event.target;

  target.parentElement.classList.add('expanded');
  target.classList.remove('expand');
  target.removeEventListener('click', expandList);
};

document.querySelectorAll('.list').forEach((list) => {
  if (list.children.length > 3) {
    const expander = list.querySelector('.list__item:nth-child(3)');
    expander.classList.add('expand');
    expander.addEventListener('click', expandList);
  }
});