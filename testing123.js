const india = [{name: 'Rohit Sharma', score: 11},{name: 'Rishabh Pant ', score: 12},{name: 'Virat Kohli', score: 11},
    {name: 'Suryakumar Yadav', score: 117},{name: 'Shreyas Iyer', score: 28},{name: 'Dinesh Karthik', score: 6},
    {name: 'Ravindra Jadeja', score: 7},{name: 'Harshal Patel', score: 5},{name: 'Avesh Khan', score: 1},
    {name: 'Ravi Bishnoi', score: 2},{name: 'Umran Malik', score: 0}]
const England = {players:{
    'Jason Roy': {runs:27 , wickets: 0, position:1},'Jos Buttler': {runs:18 , wickets: 0, position:2},
    'Dawid Malan': {runs:77 , wickets: 0, position:3},'Philip Salt': {runs:8 , wickets: 0, position:4},
    'Liam Livingstone': {runs:42 , wickets: 0, position:5},'Moeen Ali': {runs:0 , wickets: 1, position:6},
    'Harry Brook': {runs:19 , wickets: 0, position:7},'Chris Jordan': {runs:11 , wickets: 2, position:8},
    'David Willey': {runs:0 , wickets: 2, position:9},'Reece Topley': {runs:0 , wickets: 3, position:10},
    'Richard Gleeson': {runs:0 , wickets: 1, position:11}}}

function objectTest(){
    //England.players['Jason Roy'].modifier = 0.8
    //England.players['Jason Roy'].newRuns = Math.round(England.players['Jason Roy'].modifier * England.players['Jason Roy'].runs,1)
    //console.log(England.players['Jason Roy'])
    console.log(Object.keys(England.players))
    }   
function getInputs(document){
    //pull down the selected team from the input boxes
    let inputs = document.getElementsByClassName('playerInput')
    let selectionList = Object.entries(inputs).map(([key,value])=> value.value)
    console.log(selectionList)
        return selectionList
}
function addSelectedPosition(selectionList){
    //adds selected position to england.players object
    for (i = 0;i<selectionList.length; i++){
        let playerName = selectionList[i];
        England.players[playerName].selectedPosition = i + 1;
}
}
function positionQuotient(playerName){
    console.log(playerName)
    let difference = Math.abs(England.players[playerName].position - England.players[playerName].selectedPosition)
    difference = Math.min(difference, 9) //min ensures range 0 to 9
    England.players[playerName].posQ = 1 - (0.1 * difference) //produce a fraction <1
}
function submitButton(document){
    //calls helper functions
    //pull selection
    let selectedPlayerList = getInputs(document);
    //add selection position to database
    addSelectedPosition(selectedPlayerList);
    //console.log(selectedPlayerList[5])
    //calculate quotient
    for (p = 0; p < selectedPlayerList.length; p++){
        console.log(selectedPlayerList[p]);
        let playerName = selectedPlayerList[p];
        //set posQ and add to data
        positionQuotient(playerName);
        //adjust England runs
        England.players[playerName].adjustedRuns = adjustRuns(England.players[playerName].runs, England.players[playerName].posQ);
        England.players[playerName].adjustedWickets = adjustWickets(England.players[playerName].wickets, England.players[playerName].posQ);
        }
        console.log(England.players['Jason Roy'])
}

function adjustRuns(runs, posQ){
    //calculate each player's runs based on closeness to optimum position
    return Math.round(runs*posQ)
    }
function adjustWickets(wickets, posQ){
    //calculate number of wickets taken by England based on closeness to optimum posiion
    return posDiff * engWickets  
    }
function amendIndianRuns(indianRuns, wickets){ 
    //calculate each indian player's runs based on number of wickets taken by England
    //needs to be done last
    //0.025 means eg 0 wickets gives an extra 25% of runs (9 * 2.5% = 22.5%) to India
    let factor = 1 + ((9 - wickets) * 0.025)
    return indianRuns*factor
    }

function populateTryList(rowList){
    let cells=[]
    for (rowIndex = 0; rowIndex< rowList.length; rowIndex++){
        let cells = rowList[rowIndex].getElementsByTagName('td');
        cells[0].textContent = document.getElementById("select1").value;
        cells[1].textContent = 20;
    }

}
function inputText(page){
    let inputs = page.getElementsByClassName('playerInput');
    let list = Object.keys(England.players);
    list.sort();
    for (let listIndex = 0; listIndex<list.length; listIndex++){
        let listItem = list[listIndex];
        inputs[listIndex].value = listItem;
    }
}