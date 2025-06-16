const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach( function (button){
    console.log(button);
    button.addEventListener('click', function (e){
        if(e.target.id === 'Red'){
            body.style.backgroundColor = 'red';
        }
        if(e.target.id === 'Green'){
            body.style.backgroundColor = 'green';
        }
        if(e.target.id === 'Blue'){
            body.style.backgroundColor = 'blue';
        }
        if(e.target.id === 'Yellow'){
            body.style.backgroundColor = 'yellow';
        }
    });

})