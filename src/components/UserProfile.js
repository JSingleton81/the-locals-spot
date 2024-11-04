import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserBusinessList } from "../utils/api";
import { setUserBusinessList } from "../redux/features/businessSlice";

const UserProfile = () => {
  const user = useSelector(state=>state.user)
  const userBusinessList = useSelector(state=>state.business_list.user_business_list)
  const dispatch = useDispatch()

  useEffect(()=>{
    if (user) {
      const list = async()=>{
        const response = await getUserBusinessList()
        console.log(response)
        dispatch(setUserBusinessList(response))
      }
      list()
      console.log( 'these are the results btw')
    }
  },[user])

  useEffect(()=>{
    console.log(userBusinessList, 'this is the user list')
  },[userBusinessList])

  if (!user) return "loading..."
  return (
    <div>
      <h1>{user.username}</h1>
      <p>{user.email}</p>
      {userBusinessList.map(business => (
        <div>
          <h3>{business.business_name}</h3>
          
        </div>
      ))}
    </div>
  );
};

export default UserProfile;