
const England = {players:{
  'Jason Roy': {runs:27 , wickets: 0, position:1},'Jos Buttler': {runs:18 , wickets: 0, position:2},
  'Dawid Malan': {runs:77 , wickets: 0, position:3},'Philip Salt': {runs:8 , wickets: 0, position:4},
  'Liam Livingstone': {runs:42 , wickets: 0, position:5},'Moeen Ali': {runs:0 , wickets: 1, position:6},
  'Harry Brook': {runs:19 , wickets: 0, position:7},'Chris Jordan': {runs:11 , wickets: 2, position:8},
  'David Willey': {runs:0 , wickets: 2, position:9},'Reece Topley': {runs:0 , wickets: 3, position:10},
  'Richard Gleeson': {runs:0 , wickets: 1, position:11}},
  totalRuns: 0,
  totalWickets: 0}
const india = [{name: 'Rohit Sharma', score: 11},{name: 'Rishabh Pant ', score: 12},{name: 'Virat Kohli', score: 11},
    {name: 'Suryakumar Yadav', score: 117},{name: 'Shreyas Iyer', score: 28},{name: 'Dinesh Karthik', score: 6},
    {name: 'Ravindra Jadeja', score: 7},{name: 'Harshal Patel', score: 5},{name: 'Avesh Khan', score: 1},
    {name: 'Ravi Bishnoi', score: 2},{name: 'Umran Malik', score: 0}]
const playerList = {
  playersEngland: ['Moeen Ali', 'James Anderson', 'Jofra Archer', 'Jonny Bairstow', 'Dom Bess',
  'Stuart Broad', 'Rory Burns', 'Jos Buttler', 'Zak Crawley', 'Sam Curran', 'Tom Curran', 'Chris Jordan',
  'Jack Leach', 'Saqib Mahmood', 'Dawid Malan', 'Eoin Morgan', 'Craig Overton', 'Ollie Pope',
  'Adil Rashid', 'Joe Root', 'Jason Roy', 'Dom Sibley', 'Ben Stokes', 'Olly Stone', 'Chris Woakes', 'Mark Wood'],
  firstTeamIndia: [{name: 'Rohit Sharma', score: 11},{name: 'Rishabh Pant ', score: 12},{name: 'Virat Kohli', score: 11},
  {name: 'Suryakumar Yadav', score: 117},{name: 'Shreyas Iyer', score: 28},{name: 'Dinesh Karthik', score: 6},
  {name: 'Ravindra Jadeja', score: 7},{name: 'Harshal Patel', score: 5},{name: 'Avesh Khan', score: 1},
  {name: 'Ravi Bishnoi', score: 2},{name: 'Umran Malik', score: 0}],
  // displayColumn(page, parentDiv, list){
  //     playerList[list].push({name:'Total runs',score:funcTotalRuns(list)})
  //     for (let nameIndex = 0; nameIndex < playerList[list].length; nameIndex++){
  //     let newRow = page.createElement("tr");
  //     let newCell = page.createElement("td");
  //     newCell.textContent = playerList[list][nameIndex].name;
  //     let newCell2 = page.createElement("td");
  //     newCell2.textContent = playerList[list][nameIndex].score;
  //     newCell2.style = "text-align:right";
  //     newRow.append(newCell, newCell2)
  //     parentDiv.appendChild(newRow)
  //   }
  // }  
}
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
function funcTotalRuns(list) {
  let totalRuns = 0
  for (player in playerList[list]){
    totalRuns += playerList[list][player].score}
  console.log(totalRuns)
  return totalRuns
}
function funcInputLists(page, parentDiv, list){
    let datalist = funcDatalistHelper("datalist1", document, list)
    parentDiv.appendChild(datalist)

    for(let inputIndex = 1; inputIndex < 12; inputIndex++) {
        let span1 = page.createElement("span");
            span1.style="white-space:nowrap";
        let label1 = page.createElement("label");
            label1.style="white-space:nowrap";
        let spacing
            if (inputIndex < 10){
              spacing = '\u00A0\u00A0\u00A0\u00A0'}
            else{
              spacing = '\u00A0\u00A0'}
            label1.textContent = `${inputIndex}${spacing}`;
            label1.htmlFor = "input" + inputIndex;
            span1.appendChild(label1);
        let input1 = page.createElement("input");
            input1.setAttribute('list','datalist1');
            input1.name = "input" + inputIndex;
            input1.className = "playerInput"
            span1.appendChild(input1)
            parentDiv.appendChild(span1)
            parentDiv.appendChild(page.createElement("br"))
            
        }
    }
function clearInputs(document){
document.getElementById('inputLists').reset()
  }
function funcDatalistHelper(newId, page,list){
    let datalist = page.createElement("datalist");
    datalist.id = newId;
    for (let listIndex = 0; listIndex<list.length; listIndex++){
        let listItem = list[listIndex];
        let option1 = page.createElement("option")
        option1.value = listItem;
        datalist.appendChild(option1)
    }
    return datalist
}
