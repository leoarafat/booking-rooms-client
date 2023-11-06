import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const userContainerStyle = {
  maxWidth: "400px",
  margin: "auto",
  padding: "16px",
  borderRadius: "16px",
  boxShadow: "0 1px 1px ",
  // backgroundColor: "#09082E",
  color: "#fff",
  textAlign: "center",
};

const avatarStyle = {
  width: "150px",
  height: "150px",
  margin: "0 auto",
  borderRadius: "50%",
  objectFit: "cover",
};

const titleStyle = {
  fontSize: "24px",
  fontWeight: "bold",
};

const roleStyle = {
  fontSize: "18px",
  marginTop: "8px",
};

const welcomeStyle = {
  fontSize: "16px",
  marginTop: "16px",
};

const editButtonStyle = {
  marginTop: "16px",
};

const UserProfile = ({ user, avatar }: any) => {
  return (
    //@ts-ignore
    <div style={userContainerStyle}>
      <Avatar
        src={user?.avatar?.url || avatar}
        alt="Profile Picture"
        //@ts-ignore
        style={avatarStyle}
      />
      <Typography variant="h4" style={titleStyle}>
        {user?.name}
      </Typography>
      <Typography variant="h6" style={roleStyle}>
        Role: {user?.role}
      </Typography>
      <Typography variant="body1" style={welcomeStyle}>
        Hey dear {user?.name}! Welcome back.
      </Typography>
      <Button
        href={`/profile/update/${user?._id}`}
        variant="contained"
        style={editButtonStyle}
      >
        Edit Profile
      </Button>
    </div>
  );
};

export default UserProfile;
