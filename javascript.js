let i = 0;

function minus() {
    i--;
    document.getElementById('value').innerHTML = i;
    if (i < 0) {
        document.getElementById('value').style.color = 'red';
    }
    if (i == 0) {
        document.getElementById('value').style.color = 'black';
    }
}

function add() {
    i++;
    document.getElementById('value').innerHTML = i;
    if (i > 0) {
        document.getElementById('value').style.color = 'green';
    }
    if (i == 0) {
        document.getElementById('value').style.color = 'black';
    }
}

function reset() {
    i = 0;
    document.getElementById('value').innerHTML = i;
    if (i == 0) {
        document.getElementById('value').style.color = 'black';
    }
}