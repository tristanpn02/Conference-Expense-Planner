import './styles.css'

const ItemBlock = ({item}) => {

    return (
        <button className="item-block" style={{backgroundImage: `url(${item.img})`}}>
            <div className="details">
                <h2>{item.name}</h2>
                <p>Capacity: {item.capacity}</p>
                <p>Price: ${item.price}</p>
            </div>
        </button>
    )
}

export default ItemBlock