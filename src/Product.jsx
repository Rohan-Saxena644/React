import "./Product.css";

function Product({title , price , features}){
    let isDiscount = price>30000;
    let styles = {backgroundColor: isDiscount ? "yellow" : ""};

    return (
        <div className="Product" style={styles}>
            <h3>{title}</h3>
            <h5>Price : {price}</h5>
            <ul>{features.map((feature,index) => <li key={index}>{feature}</li>)}</ul>
            {isDiscount && <p>Discount of 5%</p>}
            {/* <ul>{features}</ul> */}
            {/* <p>{features2?.a}</p>  */}
        </div>
    );
} 

export default Product;