import React from 'react';
import { useState } from 'react';
import "./styling/Bookmarks.css";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { paperClasses } from '@mui/material';


function addLinkDisplay(e){
  var xPos = e.target.offsetLeft;
  var yPos = e.target.offsetTop;
  var form = document.getElementById("linkAdder");

  form.style.visibility = "visible";
  form.style.left = xPos-60+"px";
  form.style.top = yPos+80+"px";
}
// This contains how the bookmark holder is going to look and what it consists of
const BookmarkHolderStruc = ({ bgc, fgc, id }) => {

  // TODO FIXME button id="addButton" is illegal because the id can't be repeated that way
  return(
  <div className="bookmarkHolder" id={`bookmarkHolder${id}`}>
    <input id="bookmarkHolderName${id}"
      className="bookmarkHolderName"
      placeholder="untitled"
      key={`bookmarkHolder${id}`}
      maxLength={20} />

    <div className="bookmarkHolderLinks"
      id={`bookmarkHolderLinks${id}`}
      key={`bookmarkHolderLinks${id}`}></div>

    <button id={`addLinkButton${id}`}
      class={"addLinkButton"}
      className="addLinkButton"
      src="../images/addbutton.png"
      key={`addLinkButton${id}`}
      onClick={(e) => addLinkDisplay(e)}
      ></button>
      
  </div>
  );
}




const Bookmarks = () => {


  const [bookmarkCategories, setBookmarkCategories] = useState([]);
  var currentId = null;


  function createBookmarkHolder() {
    // bookmarkCategories.push(<BookmarkHolderStruc bgc="black" fgc="white" id={bookmarkCategories.length} />);
    setBookmarkCategories((prevState) => [...prevState, <BookmarkHolderStruc bgc="black" fgc="white" id={bookmarkCategories.length} />])
  }



  function handleKeys(e) {

    let linkName = document.getElementById("linkName").value,
      linkUrl = document.getElementById("linkInput").value;

    if ((e.keyCode === 13) && (linkName.length > 0) && (linkUrl.length > 0)) {
      for (let index = 0; index < bookmarkCategories.length; ++index) {
        if (bookmarkCategories[index].id === currentId) {
          bookmarkCategories[index].addLink(linkName, linkUrl);
        }
      }
    }
  }



  return (
    <div id="bookmarkWrapper">

      <div id="linkAdder">
        <input id="linkName" placeholder="Enter Name" onKeyDown={handleKeys}></input>
        <input id="linkInput" placeholder="Enter Link" onKeyDown={handleKeys}></input>
      </div>
      <AddCircleOutlineIcon color="primary" id="addStickerButton" onClick={() => createBookmarkHolder()}></AddCircleOutlineIcon>
      {
        bookmarkCategories.map((item => { return <React.Fragment key={item}>{item}</React.Fragment> }))
      }
    </div>
  );
}

export default Bookmarks;