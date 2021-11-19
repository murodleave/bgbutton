function myFunc(e) {
    if (e.target.id === 'orange') {
        document.body.style.backgroundColor = 'orange';
        document.body.style.transition = '3s';
        document.getElementById('orange').style.color = 'white';
        document.getElementById('orange').style.borderBottom = '2px solid white';
        document.getElementById('orange').style.borderLeft = '2px solid white';
        document.getElementById('reset1').style.borderBottom = '2px solid white';
    }
    else if (e.target.id === 'blue') {
        document.body.style.backgroundColor = 'blue';
        document.body.style.transition = '3s';
        document.getElementById('blue').style.color = 'white';
        document.getElementById('blue').style.borderBottom = '2px solid white';
        document.getElementById('reset1').style.borderBottom = '2px solid white';
    }
    else if (e.target.id === 'red') {
        document.body.style.backgroundColor = 'red';
        document.body.style.transition = '3s';
        document.getElementById('red').style.color = 'white';
        document.getElementById('red').style.borderBottom = '2px solid white';
        document.getElementById('reset1').style.borderBottom = '2px solid white';
    }
    else if (e.target.id === 'green') {
        document.body.style.backgroundColor = 'green';
        document.body.style.transition = '3s';
        document.getElementById('green').style.color = 'white';
        document.getElementById('green').style.borderBottom = '2px solid white';
        document.getElementById('reset1').style.borderBottom = '2px solid white';
    }
    else if (e.target.id === 'purple') {
        document.body.style.backgroundColor = 'purple';
        document.body.style.transition = '3s';
        document.getElementById('purple').style.color = 'white';
        document.getElementById('purple').style.borderBottom = '2px solid white';
        document.getElementById('reset1').style.borderBottom = '2px solid white';
    }
    else if (e.target.id === 'black') {
        document.body.style.backgroundColor = 'black';
        document.body.style.transition = '3s';
        document.getElementById('black').style.color = 'white';
        document.getElementById('black').style.borderBottom = '5px solid white';
        document.getElementById('black').style.borderRight = '5px solid white';
        document.getElementById('reset1').style.borderBottom = '2px solid white';
    }
    else {
        document.body.style.backgroundColor = 'white';
        document.body.style.transition = '3s';
        document.getElementById('reset1').style.color = 'black';
        document.getElementById('reset1').style.borderBottom = '2px solid #4546';
    }    
}