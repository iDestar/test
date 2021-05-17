let x = document.querySelectorAll('.list');

let zHolder = function (evt) {
  let t = evt.target;
  let li = t.parentNode.querySelectorAll('.list__item');

  li.forEach((el) => {
    el.classList.remove('hidden', 'active');
  });
  t.removeEventListener('click', zHolder);
};

for (let i = 0; i < x.length; i++) {
  if (x[i].children.length > 3) {
    let y = x[i].querySelectorAll('.list__item');

    for (let i = 0; i < y.length; i++) {
      if (i > 2) {
        y[2].classList.add('active');
        y[i].classList.add('hidden');
      }
    }

    let z = x[i].querySelector('.active');
    z.addEventListener('click', zHolder);
  }
}
