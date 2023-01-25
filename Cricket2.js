const englandVsIndia = {
    englandPlayers:{
'Jason Roy': {name: 'Jason Roy', runs:27 , wickets: 0,  position:1},'Jos Buttler': {name: 'Jos Buttler', runs:18 , wickets: 0,  position:2},
'Dawid Malan': {name: 'Dawid Malan', runs:77 , wickets: 0,  position:3},'Philip Salt': {name: 'Philip Salt', runs:8 , wickets: 0,  position:4},
'Liam Livingstone': {name: 'Liam Livingstone', runs:42 , wickets: 0,  position:5},'Moeen Ali': {name: 'Moeen Ali', runs:0 , wickets: 1,  position:6},
'Harry Brook': {name: 'Harry Brook', runs:19 , wickets: 0,  position:7},'Chris Jordan': {name: 'Chris Jordan', runs:11 , wickets: 2,  position:8},
'David Willey': {name: 'David Willey', runs:0 , wickets: 2,  position:9},'Reece Topley': {name: 'Reece Topley', runs:0 , wickets: 3,  position:10},
'Richard Gleeson': {name: 'Richard Gleeson', runs:0 , wickets: 1,  position:11},'Sam Curran': {name: 'Sam Curran', runs:0 , wickets: 0,  position:12},
'Tymal Mills': {name: 'Tymal Mills', runs:0 , wickets: 0,  position:13},'Matt Parkinson': {name: 'Matt Parkinson', runs:0 , wickets: 0,  position:14}
                    },
    indiaPlayers:{
'Rohit Sharma': {name: 'Rohit Sharma', runs:11},'Rishabh Pant': {name: 'Rishabh Pant', runs:12},
'Virat Kohli': {name: 'Virat Kohli', runs:11}, 'Suryakumar Yadav': {name: 'Suryakumar Yadav', runs:117},
'Shreyas Iyer': {name: 'Shreyas Iyer', runs:28}, 'Dinesh Karthik': {name: 'Dinesh Karthik', runs:6},
'Ravindra Jadeja': {name: 'Ravindra Jadeja', runs:7}, 'Harshal Patel': {name: 'Harshal Patel', runs:5},
'Avesh Khan': {name: 'Avesh Khan', runs:1},'Ravi Bishnoi': {name: 'Ravi Bishnoi', runs:2},
'Umran Malik': {name: 'Umran Malik', runs:0}
                }
                        }
function startUp(document){
    populateTable(document.getElementById('playerTable2').getElementsByTagName('tr'), englandVsIndia.indiaPlayers);
    datalistHelper(document, englandVsIndia.englandPlayers) 
}
//add Indian players to column 3
function populateTable(rowList, dataObject){
    let cells=[]
    //get keys for object values
    let players = Object.keys(dataObject)
    //go through rows and find cells, change values
    for (rowIndex = 0; rowIndex< rowList.length; rowIndex++){
        let cells = rowList[rowIndex].getElementsByTagName('td');
        cells[0].textContent = dataObject[players[rowIndex]].name;
        cells[1].textContent = dataObject[players[rowIndex]].runs;
    }
}
//add England players to input list
function datalistHelper(page, dataObject){
    //find where the options need to be added
    let datalist = page.getElementById("input1");
    //get keys for required values
    let keys = Object.keys(dataObject)
    //make options and add values
    for (let keysIndex = 0; keysIndex<keys.length; keysIndex++){
        let listItem = dataObject[keys[keysIndex]].name;
        let option1 = page.createElement("option")
        option1.value = listItem;
        //add options to datalist
        datalist.appendChild(option1)
    }
    return datalist
}
//set up reset button to reset whole form
function clearInputs(document){
    document.getElementById('inputLists').reset()
      }
//set up submit actions

