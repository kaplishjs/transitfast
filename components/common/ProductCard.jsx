import Image from "next/image";
import Link from "next/link"

const ProductCard = ({ item }) =>{
    return(
        <div className="product_itm card">
        <div className="card-body">
            <Image className="" src={item?.vehicle_image?.length > 0 ? 'https://www.transitfastautos.com/api/' + item?.vehicle_image[0] : "assests/dummy_images/product_itm.png"} alt="" width={267} height={185} srcset="" />
            <div className="product_itm_">
              <h5 className="product_itm_title">{item?.title}</h5>
              <span className="product_itm_desc">£{item?.price}</span>
            </div>
            <Link href = {`/car-details/${item?._id}`} className="btn w-100 btn-outline-danger">View Deals</Link>
        </div>
    </div>
    )
}
export default ProductCard;