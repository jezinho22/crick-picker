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
function startUp(document) {
  console.log("Working");
  let players = Object.keys(englandVsIndia.indiaPlayers);
  populateTable(
    document.getElementById("playerTable2").getElementsByTagName("tr"),
    players,
    "runs"
  );
  datalistHelper(document, englandVsIndia.englandPlayers);
}
//display players and scores to chosen column
function populateTable(rowList, playerList, runsOrAdjustedRuns) {
  console.log(playerList);
  let cells = [];
  //get keys for object values
  //let players = Object.keys(dataObject);
  //go through rows and find cells, change values
  for (i = 0; i < rowList.length; i++) {
    let cells = rowList[i].getElementsByTagName("td");
    cells[0].textContent = dataObject[playerList[i]].name;
    cells[1].textContent = dataObject[playerList[i]][runsOrAdjustedRuns];
  }
}
//add England players to input list
function datalistHelper(page, dataObject) {
  //find where the options need to be added
  let datalist = page.getElementById("input1");
  //get keys for required values
  let keys = Object.keys(dataObject);
  //make options and add values
  for (let keysIndex = 0; keysIndex < keys.length; keysIndex++) {
    let listItem = dataObject[keys[keysIndex]].name;
    let option1 = page.createElement("option");
    option1.value = listItem;
    //add options to datalist
    datalist.appendChild(option1);
  }
  return datalist;
}
//set up reset button to reset whole form
function clearInputs(document) {
  document.getElementById("inputLists").reset();
}
//set up submit actions
function submitButton(document) {
  //calls helper functions
  //get user selection
  let selectedPlayerList = getInputs(document);
  //add selection position to database
  addSelectedPosition(selectedPlayerList);
  for (i = 0; i < selectedPlayerList.length; i++) {
    let playerName = selectedPlayerList[i];
    //set posQ and add to data
    positionQuotient(playerName);
    // adjust england runs
    englandVsIndia.englandPlayers[playerName].adjustedRuns = adjustRuns(
      englandVsIndia.englandPlayers[playerName].runs,
      englandVsIndia.englandPlayers[playerName].posQ
    );
    // adjust england wickets
    englandVsIndia.englandPlayers[playerName].adjustedWickets = adjustWickets(
      englandVsIndia.englandPlayers[playerName].wickets,
      englandVsIndia.englandPlayers[playerName].posQ
    );
    // display selection and runs
    populateTable(
      document.getElementById("playerTable1").getElementsByTagName("tr"),
      englandVsIndia.englandPlayers,
      "adjustedRuns"
    );
  }
  const englandTotalRuns = totalRuns("englandPlayers", "adjustedRuns");
  // adjust india's runs for each player and display instead of original runs
  const englandTotalWickets = totalRuns("englandPlayers", "adjustedWickets");
  console.log(englandTotalWickets);
  for (player in englandVsIndia.indiaPlayers) {
    englandVsIndia.indiaPlayers[player].adjustedRuns = amendIndianRuns(
      englandVsIndia.indiaPlayers[player].runs,
      englandTotalWickets
    );
  }
  populateTable(
    document.getElementById("playerTable2").getElementsByTagName("tr"),
    englandVsIndia.indiaPlayers,
    "adjustedRuns"
  );
  console.log(englandVsIndia.indiaPlayers["Suryakumar Yadav"].adjustedRuns);
}

//pull down the selected team from the input boxes
function getInputs(document) {
  let inputs = document.getElementsByClassName("playerInput");
  let selectionList = Object.entries(inputs).map(([key, value]) => value.value);
  return selectionList;
}
// adds selected position to englandVsIndia.englandPlayers object
function addSelectedPosition(selectionList) {
  for (i = 0; i < selectionList.length; i++) {
    let playerName = selectionList[i];
    englandVsIndia.englandPlayers[playerName].selectedPosition = i + 1;
  }
}
function positionQuotient(playerName) {
  let difference = Math.abs(
    englandVsIndia.englandPlayers[playerName].position -
      englandVsIndia.englandPlayers[playerName].selectedPosition
  );
  difference = Math.min(difference, 9); //min ensures range 0 to 9
  englandVsIndia.englandPlayers[playerName].posQ = 1 - 0.1 * difference; //produce a fraction <1
}
function adjustRuns(runs, posQ) {
  //calculate each player's runs based on closeness to optimum position
  return Math.round(runs * posQ);
}
function adjustWickets(wickets, posQ) {
  // calculate number of wickets taken by England based on closeness to optimum posiion
  return Math.round(posQ * wickets);
}
// calculate each indian player's runs based on number of wickets taken by England; needs to be done last
function amendIndianRuns(indiaRuns, englandWickets) {
  //0.025 means eg 0 wickets gives an extra 25% of runs (9 * 2.5% = 22.5%) to India
  let factor = 1 + (9 - wickets) * 0.025;
  return indianRuns * factor;
}
// totals runs or wickets from the data object
function totalRuns(whichPlayers, runsOrWickets) {
  console.log(runsOrWickets);
  let f = 0;
  for (player in englandVsIndia[whichPlayers]) {
    let g = englandVsIndia[whichPlayers][player][runsOrWickets];
    f = f + g;
  }
}
// put selected order into second column with adjusted runs
// colour-code second column cells to show which are in right place
// adjust india runs and update column 3 cells with runs - in same function or helper function
