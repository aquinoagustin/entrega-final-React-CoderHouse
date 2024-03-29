import { Link } from "react-router-dom"


const Item = ({ title, images, price, id,stock }) => {
    return (

            <div className="item">
                 <Link to={"/item/" + id} className="text-light">
            <img src={images} alt={title} className="card-img-top card-img-r" />
                <div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                        <h5 className="card-title">{title}</h5>
                        </li>
                        <li className="list-group-item">
                        <h2>US${price}</h2>
                        
                        </li>
                        <li className="list-group-item">
                            <h5>Cantidad:{stock}</h5>
                        </li>
                    </ul>
                </div>
                </Link>
                <div className="card-body">
                

                </div>
            </div>        
        
    )
}
export default Item