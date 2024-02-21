import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersesAction } from "../../redux/action";
import UserInfo from "../../components/UserInfo";


function AboutPage() {

    const users = useSelector(state => state.userReducer.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsersesAction())
    }, [])

    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", gap: "20px 5px" }}>
            {users[0] && users[0].map((user, idx) =>
                <UserInfo key={idx} cardInfo={user} />)}
        </div>

    )
}

export default AboutPage