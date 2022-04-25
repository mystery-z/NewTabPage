import React from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import "./styling/Stickers.css";

var stickers = [];
var currentId = null;
class Topic {
  constructor(height, width, bgc, color, titleSize, fontSize, id) {
    this.height = height;
    this.width = width;
    this.bgc = bgc;
    this.color = color;
    this.titleSize = titleSize;
    this.fontSize = fontSize;
    this.urls = [];
    this.names = [];
    this.id = id//use to set ids ending in different numbers for js to diffrenciate
  };
  create() {
    //Sticker = element(box and text) + fulladder(input box + submit button)
    this.sticker = document.createElement("div");
    this.sticker.setAttribute('id', 'sticker' + this.id);
    this.sticker.setAttribute('class', 'sticker');
    //heading is the topic name
    this.heading = document.createElement("input");
    this.heading.setAttribute('id', 'stickerTitle' + this.id);
    this.heading.setAttribute('class', 'stickerTitle');
    this.heading.setAttribute('placeholder', 'untitled');
    this.heading.setAttribute('maxLength', '20');
    this.heading.setAttribute('textAlign', 'center');

    //add link button
    this.plusButton = document.createElement("button");
    this.plusButton.setAttribute('class', 'addButton');
    this.plusButton.setAttribute('id', 'addButton' + this.id);
    this.plusButton.src = '../images/addbutton.png';
    this.plusButton.addEventListener('click',this.addLinkDisplay);

    //Appending them to the correct divs
    document.body.appendChild(this.sticker);
    document.getElementById("sticker" + this.id).appendChild(this.heading);
    document.getElementById("sticker" + this.id).appendChild(this.plusButton);

    // document.getElementsByClassName("addButton" + this.id).addEventListener('onclick',this.addLinkDisplay());
    //onclick = () => this.addLink();
    currentId = this.id;

    this.heading.style.marginTop = "5%";

  }
  addLinkDisplay() {
    document.getElementById("linkAdder").style.visibility = "visible";
    currentId = this.id;
  }
  addLink(name, url) {
    this.names.push(name);
    this.urls.push(url);
    let newLink = document.createElement("a");
    newLink.innerHTML = name;
    newLink.setAttribute("href", url);
    document.getElementById("sticker" + currentId).appendChild(newLink);
    document.getElementById("linkAdder").style.visibility = "hidden";
    document.getElementById("hyperLink").style.color = "lightblue";
  }
}
function createTopic() {
  let newTopic = new Topic("300px", "200px", "white", "black", "30px", "15px", stickers.length);
  newTopic.create();
  stickers.push(newTopic);
}

function handleKeys(e) {
  console.log("function called")
  let linkName = document.getElementById("linkName").value;
  let linkUrl = document.getElementById("linkInput").value;
  if (e.keyCode === 13 && linkName.length > 0 && linkUrl.length > 0) {
    for (let index = 0; index < stickers.length; index++) {
      if (stickers[index].id === parseInt(currentId.substring(9))){
         stickers[index].addLink(linkName, linkUrl);
        }
    }
  }
}
const Stickers = () => {
  return (
    <div id="stickersWrapper">
      <div id="linkAdder">
        <input id="linkName" placeholder="Enter Name" onKeyDown={(e) => handleKeys(e)}></input>
        <input id="linkInput" placeholder="Enter Link" onKeyDown={(e) => handleKeys(e)}></input>
      </div>
      <AddCircleOutlineIcon color="primary" id="addStickerButton" onClick={() => createTopic()}></AddCircleOutlineIcon>
    </div>
  );
};
export default Stickers;
