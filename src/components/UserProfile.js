import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserBusinessList } from "../utils/api";
import { setUserBusinessList } from "../redux/features/businessSlice";
import { Card, CardContent, CardMedia, Typography, Container, Grid } from '@mui/material';
import "../styles/userProfile.css";

const UserProfile = () => {
  const user = useSelector(state=>state.user)
  const userBusinessList = useSelector(state=>state.business_list.user_business_list)
  const dispatch = useDispatch()

  useEffect(() => {
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
    <Container maxWidth="sm" className="user-profile">
      <Card>
        <CardMedia
          component="img"
          height="140"
          image={user.profileImage || "/images/default-profile.jpg"} // Use dynamic image path or default placeholder          alt="Profile Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {user.username}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Email: {user.email}
          </Typography>
        </CardContent>
      </Card>
      <Typography variant="h6" component="div" style={{ marginTop: '20px' }}>
        Your Businesses
      </Typography>
      <Grid container spacing={2}>
        {userBusinessList.map(business => (
          <Grid item xs={12} sm={6} key={business.id}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  {business.business_name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {business.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default UserProfile;

    // <div>
    //   <h1>{user.username}</h1>
    //   <p>{user.email}</p>
    //   {userBusinessList.map(business => (
    //     <div>
    //       <h3>{business.business_name}</h3>
          
    //     </div>
    //   ))}
    // </div>
