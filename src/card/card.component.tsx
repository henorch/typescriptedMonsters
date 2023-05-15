import { Monsters } from "../App"
import { CardStyled } from "./card_list.style"

type CardItemProps = {
    monster: Monsters
}


const CardItem = ({monster}: CardItemProps) => {
    const { id, name, email} = monster;
    return(
        <CardStyled>
        <img alt={`monster ${name}`} 
        src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
        <h2>{name}</h2>
        <p>{email}</p>
        </CardStyled>
        )
    }

export default CardItem;