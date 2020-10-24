import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these AMAZING places!</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <CardItem
              src="images/img-1.jpg"
              text="Quite possibly the most famous and well known hiking adventure in Zion National Park, Angels Landing is a an unforgettable experience."
              label="Angels Landing"
              path="/posts"
            />
            <CardItem
              src="images/img-2.jpg"
              text="The amazing blue-green colour of this lake is due to the light reflecting properties of the glacial flour that flows into the lake from the Peyto glacier."
              label="Peyto Lake"
              path="/posts"
            />
          </ul>
          <ul className="cards-items">
            <CardItem
              src="images/img-3.jpg"
              text="The High Tatras range is the smallest alpine mountain range in the world, although it is also considered a part of the larger Carpathian range. "
              label="High Tatras"
              path="/posts"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Bara Shigri glacier is the largest glacier of the Himachal Himalaya and is located in the Chandra River valley of Lahaul-Spiti district."
              label="Bara Shigri"
              path="/posts"
            />
            <CardItem
              src="images/img-5.jpg"
              text="The Mythen are two mountains, Grosser and Kleiner Mythen (big and small Mythen) in Canton Schwyz, in central Switzerland. "
              label="Kleiner Mythen"
              path="/posts"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
