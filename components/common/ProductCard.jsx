import Link from "next/link"

const ProductCard = () =>{
    return(
        <div className="product_itm card">
        <div className="card-body">
            <img className="img-fluid" src="assests/dummy_images/product_itm.png" alt="" srcset="" />
            <div className="product_itm_">
              <h5 className="product_itm_title">Vauxhall Corsa</h5>
              <span className="product_itm_desc">£498.00</span>
            </div>
            <Link href = "/car-details" className="btn w-100 btn-outline-danger">View Deals</Link>
        </div>
    </div>
    )
}

export default ProductCard