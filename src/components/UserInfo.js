import React from "react";
import "./userInfo.css"

function UserInfo({ cardInfo }) {
    return (
        <div className="blockCard">
            <div className="blockCardTop">
                <div className="blockCardCercle">
                    <h1 className="numderUser">{cardInfo.id}</h1>
                </div>
            </div>

            <div className="blockCardBottom">
                <h1>{cardInfo.first_name} {cardInfo.last_name}</h1>
                <img alt="user, avatar" src={cardInfo.avatar} />
                <p>{cardInfo.email}</p>

                <button className="blockCardBotton">FOLLOW</button>
            </div>

        </div>


    )
}

export default UserInfo