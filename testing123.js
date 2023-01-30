const englandVsIndia = {
  englandPlayers: {
    "Jason Roy": { name: "Jason Roy", runs: 27, wickets: 0, position: 1 },
    "Jos Buttler": { name: "Jos Buttler", runs: 18, wickets: 0, position: 2 },
    "Dawid Malan": { name: "Dawid Malan", runs: 77, wickets: 0, position: 3 },
    "Philip Salt": { name: "Philip Salt", runs: 8, wickets: 0, position: 4 },
    "Liam Livingstone": {
      name: "Liam Livingstone",
      runs: 42,
      wickets: 0,
      position: 5,
    },
    "Moeen Ali": { name: "Moeen Ali", runs: 0, wickets: 1, position: 6 },
    "Harry Brook": { name: "Harry Brook", runs: 19, wickets: 0, position: 7 },
    "Chris Jordan": { name: "Chris Jordan", runs: 11, wickets: 2, position: 8 },
    "David Willey": { name: "David Willey", runs: 0, wickets: 2, position: 9 },
    "Reece Topley": { name: "Reece Topley", runs: 0, wickets: 3, position: 10 },
    "Richard Gleeson": {
      name: "Richard Gleeson",
      runs: 0,
      wickets: 1,
      position: 11,
    },
    "Sam Curran": { name: "Sam Curran", runs: 0, wickets: 0, position: 12 },
    "Tymal Mills": { name: "Tymal Mills", runs: 0, wickets: 0, position: 13 },
    "Matt Parkinson": {
      name: "Matt Parkinson",
      runs: 0,
      wickets: 0,
      position: 14,
    },
  },
  indiaPlayers: {
    "Rohit Sharma": { name: "Rohit Sharma", runs: 11 },
    "Rishabh Pant": { name: "Rishabh Pant", runs: 12 },
    "Virat Kohli": { name: "Virat Kohli", runs: 11 },
    "Suryakumar Yadav": { name: "Suryakumar Yadav", runs: 117 },
    "Shreyas Iyer": { name: "Shreyas Iyer", runs: 28 },
    "Dinesh Karthik": { name: "Dinesh Karthik", runs: 6 },
    "Ravindra Jadeja": { name: "Ravindra Jadeja", runs: 7 },
    "Harshal Patel": { name: "Harshal Patel", runs: 5 },
    "Avesh Khan": { name: "Avesh Khan", runs: 1 },
    "Ravi Bishnoi": { name: "Ravi Bishnoi", runs: 2 },
    "Umran Malik": { name: "Umran Malik", runs: 0 },
  },
};

function objectTest() {
  //England.players['Jason Roy'].modifier = 0.8
  //England.players['Jason Roy'].newRuns = Math.round(England.players['Jason Roy'].modifier * England.players['Jason Roy'].runs,1)
  //console.log(England.players['Jason Roy'])
  console.log(Object.keys(England.players));
}
// pull down the selected team from the input boxes
function getInputs(document) {
  let inputs = document.getElementsByClassName("playerInput");
  let selectionList = Object.entries(inputs).map(([key, value]) => value.value);
  console.log(selectionList);
  return selectionList;
}
// adds selected position to england.players object
function addSelectedPosition(selectionList) {
  for (i = 0; i < selectionList.length; i++) {
    let playerName = selectionList[i];
    England.players[playerName].selectedPosition = i + 1;
  }
}
function positionQuotient(playerName) {
  console.log(playerName);
  let difference = Math.abs(
    England.players[playerName].position -
      England.players[playerName].selectedPosition
  );
  difference = Math.min(difference, 9); //min ensures range 0 to 9
  England.players[playerName].posQ = 1 - 0.1 * difference; //produce a fraction <1
}
function submitButton(document) {
  //calls helper functions
  //pull selection
  let selectedPlayerList = getInputs(document);
  //add selection position to database
  addSelectedPosition(selectedPlayerList);
  //console.log(selectedPlayerList[5])
  //calculate quotient
  for (p = 0; p < selectedPlayerList.length; p++) {
    console.log(selectedPlayerList[p]);
    let playerName = selectedPlayerList[p];
    //set posQ and add to data
    positionQuotient(playerName);
    //adjust England runs
    England.players[playerName].adjustedRuns = adjustRuns(
      England.players[playerName].runs,
      England.players[playerName].posQ
    );
    England.players[playerName].adjustedWickets = adjustWickets(
      England.players[playerName].wickets,
      England.players[playerName].posQ
    );
  }
  console.log(England.players["Jason Roy"]);
}

function adjustRuns(runs, posQ) {
  //calculate each player's runs based on closeness to optimum position
  return Math.round(runs * posQ);
}
function adjustWickets(wickets, posQ) {
  //calculate number of wickets taken by England based on closeness to optimum posiion
  return posDiff * engWickets;
}
function amendIndianRuns(indianRuns, wickets) {
  //calculate each indian player's runs based on number of wickets taken by England
  //needs to be done last
  //0.025 means eg 0 wickets gives an extra 25% of runs (9 * 2.5% = 22.5%) to India
  let factor = 1 + (9 - wickets) * 0.025;
  return indianRuns * factor;
}

function populateTryList(rowList) {
  let cells = [];
  for (rowIndex = 0; rowIndex < rowList.length; rowIndex++) {
    let cells = rowList[rowIndex].getElementsByTagName("td");
    cells[0].textContent = document.getElementById("select1").value;
    cells[1].textContent = 20;
  }
}
function inputText(page) {
  let inputs = page.getElementsByClassName("playerInput");
  let list = Object.keys(England.players);
  list.sort();
  for (let i = 0; i < list.length; i++) {
    let listItem = list[i];
    inputs[i].value = listItem;
  }
}
