import "./dog.css";

export default function Dog ({dog}) {
    
    return(
        <div className="card_container">
            <div className="card_container_title">
                <span className="card_title">
                    {dog.name}
                </span>
            </div>

            <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>

            <div className="card_container1">
                {dog.image && <img className="card_img" src={dog.image} alt={dog.name}/>}      
            </div>

            <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>

            <div className="card_container_temperament">
                <span className="temperament">
                    {dog.weight_min} - {dog.weight_max} Kg
                </span>
            </div>

            <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
            
            <div className="card_container_temperament">
                <span className="temperament">
                    {dog.temperament}
                </span>
            </div>
        </div>
    )
}