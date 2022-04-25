import React from 'react';

const stickers = [];
let ukey = 0;

function addSticker() {
    const first = document.getElementById('titleName').value;

    stickers.push(first);
}

function OneSticker(name){
    <div className={"Sticker"}>
        <h1 className={"name"}>{name}</h1>
    </div>
}

const Sticker = ({ sticker }) => {
    console.log("EE")
    return(
        <div>{stickers.map(OneSticker)}</div>
    );
}

const stickers2 = () => {

    return (
        <div>
            <input id="titleName" placeholder="Enter title"></input>
            <button id='addButton' onClick={addSticker}>Click Me!</button>
            <Sticker sticker={stickers} />
        </div>
    );
};

export default stickers2;
