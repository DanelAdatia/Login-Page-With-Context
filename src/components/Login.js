import React, { useContext, useState } from "react";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./ContextFile";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Login() {
  const [, setName] = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);
  const [yusername, setUsername] = useState("");
  const [ypassword, setPassword] = useState("");
  let navigation = useNavigate();

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setName(yusername);
    console.log("Username", yusername);
    console.log("password", ypassword);
    navigation("/uponlogin");
  };
  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Login
      </Button>
      <Modal
        open={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <CancelIcon
              onClick={() => {
                setShowModal(false);
              }}
              style={{
                float: "right",
                cursor: "pointer",
                color: "red",
              }}
            />
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <label>
                <b>UserName:</b>
                <input type="text" name="username" onChange={handleUsername} />
              </label>
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <label>
                <b> Password:</b>
                <input
                  type="password"
                  name="password"
                  onChange={handlePassword}
                />
              </label>
            </Typography>
            <input type="submit" value="Submit" />
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default Login;
