import React, { useState } from "react";
import "./card.css";
import { useEffect } from "react";
import axios from "axios";

const Card = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const usersData = async () => {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUserData(data.data);
    };
    usersData();
  },[]);
  return (
    <div className="cardContainer">
      {userData.map((item, index) => (
        <div className="userCard" key={index}>
          <h2 className="titleName">{item.name}</h2>
          <p>
            <strong>Username:</strong> {item.username}
          </p>
          <p>
            <strong>Email:</strong> {item.email}
          </p>
          <p>
            <strong>Phone:</strong> {item.phone}
          </p>
          <p>
            <strong>Website:</strong> {item.website}
          </p>
          <div className="address">
            <h3>Address</h3>
            <p>
              <strong>Street:</strong> {item.address.street}
            </p>
            <p>
              <strong>Suite:</strong> {item.address.suite}
            </p>
            <p>
              <strong>City:</strong> {item.address.city}
            </p>
            <p>
              <strong>Zipcode:</strong> {item.address.zipcode}
            </p>
            <div className="geo">
              <h3>Geo</h3>
              <p><strong>Latitude:</strong> {item.address.geo.lat}</p>
              <p><strong>Longitude:</strong> {item.address.geo.lng}</p>
            </div>
          </div>
          <div className="company">
            <h3>Company</h3>
            <p><strong>BS:</strong> {item.company.bs}</p>
            <p><strong>Catch Phrase:</strong> {item.company.catchPhrase}</p>
            <p><strong>Company Name:</strong> {item.company.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
  }

export default Card;
