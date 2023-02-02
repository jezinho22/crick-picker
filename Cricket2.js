const englandVsIndia = {
  englandPlayers: {
    "Jason Roy": {
      name: "Jason Roy",
      runs: 27,
      wickets: 0,
      position: 1,
      posQ: 0,
      adjustedRuns: 0,
      adjustedWickets: 0,
    },
    "Jos Buttler": {
      name: "Jos Buttler",
      runs: 18,
      wickets: 0,
      position: 2,
      posQ: 0,
      adjustedRuns: 0,
      adjustedWickets: 0,
    },
    "Dawid Malan": {
      name: "Dawid Malan",
      runs: 77,
      wickets: 0,
      position: 3,
      posQ: 0,
      adjustedRuns: 0,
      adjustedWickets: 0,
    },
    "Philip Salt": {
      name: "Philip Salt",
      runs: 8,
      wickets: 0,
      position: 4,
      posQ: 0,
      adjustedRuns: 0,
      adjustedWickets: 0,
    },
    "Liam Livingstone": {
      name: "Liam Livingstone",
      runs: 42,
      wickets: 0,
      position: 5,
      posQ: 0,
      adjustedRuns: 0,
      adjustedWickets: 0,
    },
    "Moeen Ali": {
      name: "Moeen Ali",
      runs: 0,
      wickets: 1,
      position: 6,
      posQ: 0,
      adjustedRuns: 0,
      adjustedWickets: 0,
    },
    "Harry Brook": {
      name: "Harry Brook",
      runs: 19,
      wickets: 0,
      position: 7,
      posQ: 0,
      adjustedRuns: 0,
      adjustedWickets: 0,
    },
    "Chris Jordan": {
      name: "Chris Jordan",
      runs: 11,
      wickets: 2,
      position: 8,
      posQ: 0,
      adjustedRuns: 0,
      adjustedWickets: 0,
    },
    "David Willey": {
      name: "David Willey",
      runs: 0,
      wickets: 2,
      position: 9,
      posQ: 0,
      adjustedRuns: 0,
      adjustedWickets: 0,
    },
    "Reece Topley": {
      name: "Reece Topley",
      runs: 0,
      wickets: 3,
      position: 10,
      posQ: 0,
      adjustedRuns: 0,
      adjustedWickets: 0,
    },
    "Richard Gleeson": {
      name: "Richard Gleeson",
      runs: 0,
      wickets: 1,
      position: 11,
      posQ: 0,
      adjustedRuns: 0,
      adjustedWickets: 0,
    },
    "Sam Curran": {
      name: "Sam Curran",
      runs: 0,
      wickets: 0,
      position: 12,
      posQ: 0,
      adjustedRuns: 0,
      adjustedWickets: 0,
    },
    "Tymal Mills": {
      name: "Tymal Mills",
      runs: 0,
      wickets: 0,
      position: 13,
      posQ: 0,
      adjustedRuns: 0,
      adjustedWickets: 0,
    },
    "Matt Parkinson": {
      name: "Matt Parkinson",
      runs: 0,
      wickets: 0,
      position: 14,
      posQ: 0,
      adjustedRuns: 0,
      adjustedWickets: 0,
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

function instructions() {
  alert(
    "This is based on a match played in 2022.\
  \nPick an England team to beat India's score. Click Submit.\nBatters in the right places will score more. \
  Bowlers in the right places will keep India's score down. Players in the right places will be highlighted in green. \
  \nYour attempt will stay after you click the reset button, so you can improve your guesses."
  );
}
function about() {
  alert(
    "Use your knowledge of cricket players and batting orders, and maybe your memory of the match, to pick the winning team. \nA 2023 jezinho game"
  );
}
function startUp(document) {
  console.log("Start up is working");
  //let players = Object.keys(englandVsIndia.indiaPlayers);
  populateTable(
    document.getElementById("playerTable2").getElementsByTagName("tr"),
    englandVsIndia.indiaPlayers,
    "runs"
  );
  datalistHelper(document, englandVsIndia.englandPlayers);
}
//display players and scores to chosen column
function populateTable(rowList, dataObject, runsOrAdjustedRuns) {
  let cells = [];
  //get keys for object values
  let players = Object.keys(dataObject);
  //go through rows and find cells, change values
  for (i = 0; i < 11; i++) {
    let cells = rowList[i].getElementsByTagName("td");
    cells[0].textContent = dataObject[players[i]].name;
    cells[1].textContent = dataObject[players[i]][runsOrAdjustedRuns];
  }
}
function displayResult(selectedPlayerList, object) {
  let tableRows = document.getElementById("playerTable1").getElementsByTagName("tr");
  for (i = 0; i < selectedPlayerList.length; i++) {
    let item = selectedPlayerList[i];
    // or use the selectedPosition instead of i but do you really need to?
    let cells = tableRows[i].getElementsByTagName("td");
    console.log(cells);
    if (object[item].position === object[item].selectedPosition) {
      cells[0].style.backgroundColor = "green";
    }
    cells[0].textContent = object[item].name;
    cells[1].textContent = object[item].adjustedRuns;
  }
}
//add England players to input list
function datalistHelper(page, dataObject) {
  //find where the options need to be added
  let datalist = page.getElementById("input1");
  //get keys for required values
  let keys = Object.keys(dataObject).sort();
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
  let x = document.getElementById("inputLists");
  x.reset();
}

//get submit actions
function submitButton(document) {
  console.log("Submit button is working");
  //get user selection
  let selectedPlayerList = getInputs(document);

  //add selection position to database
  addSelectedPosition(selectedPlayerList);

  // loop through all players in selection list
  for (i = 0; i < selectedPlayerList.length; i++) {
    let playerName = selectedPlayerList[i];
    console.log("i = " + i);
    //set posQ and add to database
    positionQuotient(playerName);

    // adjust england runs in database
    englandVsIndia.englandPlayers[playerName].adjustedRuns = adjustRuns(
      englandVsIndia.englandPlayers[playerName].runs,
      englandVsIndia.englandPlayers[playerName].posQ
    );

    // adjust england wickets in database
    englandVsIndia.englandPlayers[playerName].adjustedWickets = adjustWickets(
      englandVsIndia.englandPlayers[playerName].wickets,
      englandVsIndia.englandPlayers[playerName].posQ
    );
  }

  // display selection and runs from database
  displayResult(selectedPlayerList, englandVsIndia.englandPlayers);

  // get total runs, add to display
  const englandTotalRuns = totalRuns("englandPlayers", "adjustedRuns");
  document.getElementById("homeTotal").textContent = englandTotalRuns;

  const englandTotalWickets = totalRuns("englandPlayers", "adjustedWickets");
  console.log("Total Eng wickets :" + englandTotalWickets);
  console.log("Total Eng runs :" + englandTotalRuns);

  // adjust india's runs for each player
  for (player in englandVsIndia.indiaPlayers) {
    englandVsIndia.indiaPlayers[player].adjustedRuns = amendIndianRuns(
      englandVsIndia.indiaPlayers[player].runs,
      englandTotalWickets
    );
  }

  // and display instead of original runs
  populateTable(
    document.getElementById("playerTable2").getElementsByTagName("tr"),
    englandVsIndia.indiaPlayers,
    "adjustedRuns"
  );
  const indiaTotalRuns = totalRuns("indiaPlayers", "adjustedRuns");
  document.getElementById("awayTotal").textContent = indiaTotalRuns;
}

//get the selected team from the input boxes
function getInputs(document) {
  let inputs = document.getElementsByClassName("playerInput");
  let selectionList = Object.entries(inputs).map(([key, value]) => value.value);
  return selectionList;
}

// add selected position to englandVsIndia.englandPlayers object
function addSelectedPosition(selectionList) {
  for (i = 0; i < selectionList.length; i++) {
    let playerName = selectionList[i];
    englandVsIndia.englandPlayers[playerName].selectedPosition = i + 1;
  }
}

// calculate difference between selected and actual position
function positionQuotient(playerName) {
  console.log("positionQuotient working" + playerName);
  let position = englandVsIndia.englandPlayers[playerName].position;
  let selectedPosition = englandVsIndia.englandPlayers[playerName].selectedPosition;
  // min ensures range 0 to 9, abs ensures positive int
  let difference = Math.min(Math.abs(position - selectedPosition), 9);
  englandVsIndia.englandPlayers[playerName].posQ = 1 - 0.1 * difference; //produce a fraction <1
  return 1 - 0.1 * Math.min(difference, 9);
}

// calculate adjusted runs
function adjustRuns(runs, posQ) {
  return Math.round(runs * posQ);
}
// calculate adjusted wickets
function adjustWickets(wickets, posQ) {
  return Math.round(posQ * wickets);
}

// calculate indian runs, based on adjusted england wickets
function amendIndianRuns(indianRuns, englandTotalWickets) {
  //0.025 means eg 0 wickets gives an extra 25% of runs (9 * 2.5% = 22.5%) to India
  let factor = 1 + (9 - englandTotalWickets) * 0.025;
  return Math.round(indianRuns * factor);
}
// totals runs or wickets from the data object
function totalRuns(whichPlayers, runsOrWickets) {
  console.log("called totalRuns :" + whichPlayers + runsOrWickets);
  let f = 0;
  for (player in englandVsIndia[whichPlayers]) {
    let g = englandVsIndia[whichPlayers][player][runsOrWickets];
    f = f + g;
  }
  return f;
}
// put selected order into second column with adjusted runs - not yet n selected order - done
// colour-code second column cells to show which are in right place - done

// colour code totals for how close they are to best possible
// randomise the order that players appear in the selction dropdown
// allow selections to be changed before submitting
// retain the previous selection as reference - maybe "fix" clrrect players?
// add india total on load
