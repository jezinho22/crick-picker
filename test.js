const obj = {
    'a':{pos:1, newpos:3, name:'alpha'},
    'b':{pos:2, newpos:2, name:'beta'},
    'c':{pos:3, newpos:1, name:'kappa'},
    'd':{pos:4, newpos:4, name:'delta'},
}

const list = ['b','a','d','c']
let tablerows = document.getElementsByTagName('tr');

for (i=0;i<list.length;i++){
    let item = list[i];
    // or use the selectedPosition instead of i but do you really need to?
    let cells = tablerows[i].getElementsByTagName('td');
    console.log(cells)
    if (obj[item].pos === obj[item].newpos) {
        cells[0].style.backgroundColor ='green';
    }
    cells[0].textContent = obj[item].name
    
    cells[1].textContent = obj[item].pos
}