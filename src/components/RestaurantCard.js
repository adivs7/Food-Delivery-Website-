
const RestaurantCard = (props) => {
    const {resData} = props  ;
    return (
        <div className="res-card"  style={{backgroundColor:"#f0f0f0" }}>
            <img className="res-logo"
             alt="backImage" 
             src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.data.cloudinaryImageId}
             />
            <p>{resData.data.name}</p>
            <p>{resData.data.avgRating}</p>
            <p>{resData.data.cuisines.join(", ")}</p>
            <p>50 Mins</p>
        </div>
    )
}

export default RestaurantCard;