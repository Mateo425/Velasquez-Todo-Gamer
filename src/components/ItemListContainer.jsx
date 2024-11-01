import { Button } from "react-bootstrap"

const ItemListContainer = ({greeting, texto}) => {
    // const {greeting, texto} = props
    return(
        <div>
            <h1 className="text-center">{greeting}</h1>
        </div>
    )
}
export default ItemListContainer