const flipper = document.querySelector('.flipper');
const span = document.querySelector('.span')

// colors = ['#ff0000', '#ffbf00', '#40ff00', '#8000ff']
colors = ['Red', 'Blue', 'Green', 'Yellow' ,'Purple','Aqua','Black','Blue','Fuchsia','Gray','Lime','Maroon','Navy','Olive','Silver','Teal']

 

flipper.addEventListener('click', (e) => {
    e.preventDefault();
    const flipperAction = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = `${flipperAction}`;
    span.textContent = `${flipperAction}`;
})
