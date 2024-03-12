import { useState } from "react";
import RestaurantCard from "./RestaurantCard.js"




const Body = () => {

    // Local state variable, super powerful inside useState ([])=> we give default values to our variable
    const [listOfRestaurants,setListOfRestaurants]= useState([  {
        type: 'restaurant',
        data: {
          id: '334475',
          name: 'KFC',
          cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
          cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
          costForTwo: 40000,
          deliveryTime: 36,
          avgRating: '3.8',
        },
      },
      {
        type: 'restaurant',
        data: {
          id: '334476',
          name: 'Dominos',
          cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
          cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
          costForTwo: 40000,
          deliveryTime: 36,
          avgRating: '4.8',
        },
      },
      {
        type: 'restaurant',
        data: {
          id: '334477',
          name: 'McDonals',
          cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
          cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
          costForTwo: 40000,
          deliveryTime: 36,
          avgRating: '4.2',
        },
      }]);

    // Normal JS variable
    // let listOfRestaurants;
    const listOfRestaurantsJS = [
        {
          type: 'restaurant',
          data: {
            id: '334475',
            name: 'KFC',
            cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
            cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
            costForTwo: 40000,
            deliveryTime: 36,
            avgRating: '3.8',
          },
        },
        {
          type: 'restaurant',
          data: {
            id: '334476',
            name: 'Dominos',
            cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
            cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
            costForTwo: 40000,
            deliveryTime: 36,
            avgRating: '4.8',
          },
        },
        {
          type: 'restaurant',
          data: {
            id: '334477',
            name: 'McDonals',
            cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
            cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
            costForTwo: 40000,
            deliveryTime: 36,
            avgRating: '4.2',
          },
        },
      ];

    return (
        <div className="body">
            <div className="filter"> 
                <button className="filter-btn" onClick={ () =>{
                    let filteredList= listOfRestaurants.filter(
                        (res) => res.data.avgRating>4
                    );
                    setListOfRestaurants(filteredList);
                    }}>
                    Top Rated
                </button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant)=>(
                 <RestaurantCard  key={restaurant.data.id} resData={restaurant}/>  
                ))}
                                        
            </div>

        </div>
    )
}

export default Body