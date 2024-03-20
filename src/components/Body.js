import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
//import Shimmer from "./Shimmer";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState([
    {
      info: {
        id: "375866",
        name: "Mei's Kitchen",
        cloudinaryImageId: "vrcuqtps4poxp6qnx6dn",
        locality: "Laban",
        areaName: "Laban",
        costForTwo: "₹300 for two",
        cuisines: [
          "Indian",
          "Chinese",
          "Snacks",
          "Thai",
          "Pan-Asian",
          "Beverages",
        ],
        avgRating: 4,
        parentId: "135083",
        avgRatingString: "4.0",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 20,
          lastMileTravel: 0.9,
          serviceability: "SERVICEABLE",
          slaString: "15-20 mins",
          lastMileTravelString: "0.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-03-17 23:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹75 OFF",
          subHeader: "ABOVE ₹249",
          discountTag: "FLAT DEAL",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
    },
  ]);
  const [filteredRestaurant, setFilteredRestaurant] =
    useState(listOfRestaurants);

  const [searchText, setSearchText] = useState("");

  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // Optional Chaining
    setListOfRestraunt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    // setFilteredRestaurant(listOfRestaurants);
    console.log(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
              // setListOfRestraunt(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurant(filteredList);
            // setListOfRestraunt(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {" "}
        {listOfRestaurants.length > 0
          ? console.log(listOfRestaurants[0].info.id)
          : console.log(0)}
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
