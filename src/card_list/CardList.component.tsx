import { Component } from "react";
import { Monsters } from "../App";
import CardItem from "../card/card.component";
import { CardListStyle } from "./card_list.style";

type CardListProps = {
    monsters: Monsters[]
}

const CardList = ({monsters}: CardListProps) => (
    <CardListStyle>
    {monsters.map((monster) => {
      return <CardItem key={monster.id} monster={monster}/>
    })}
    </CardListStyle>
);
    

export default CardList;