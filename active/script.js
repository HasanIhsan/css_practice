const cards = document.querySelectorAll('.t1, .t2, .t3');

cards.forEach(card => {
    card.addEventListener('click', (e) =>  {
        e.stopPropagation();

        cards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
    })
})

document.addEventListener('click', () => {
    cards.forEach(c => c.classList.remove('active'));
})