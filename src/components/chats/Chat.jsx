import React from "react";
import styled from "@emotion/styled";
import {
  Avatar,
  Badge,
  Box,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
  Typography,
  Switch,
} from "@mui/material";
import { timestampFormatter } from "../utils/chatUtils/time";
import { FiPhoneCall, FiSend, FiVideo } from "react-icons/fi";
import { FaEllipsisV } from "react-icons/fa";
import { ChatReducer } from "../reducers/ChatReducer";
import ACTIONS from "../reducers/actions";
import { ChatState } from "../reducers/states/initState";

const Chat = ({ selectedUser, loadedChats }) => {
  const messagesEndRef = React.useRef(null);
  const [state, dispatch] = React.useReducer(ChatReducer, ChatState);

  React.useEffect(() => {
    if (selectedUser && loadedChats.length > 0) {
      dispatch({
        type: ACTIONS.SET_CHAT_USER,
        payload: { user: selectedUser, messages: loadedChats, isReady: true },
      });
    }
  }, [selectedUser, loadedChats]);

  React.useEffect(() => {
    scrollToBottom();
  }, [state.messages]);

  const handleMessageChange = (event) => {
    dispatch({
      type: ACTIONS.SET_NEW_MESSAGE,
      payload: event.target.value,
    });
  };

  const generateMessageId = () => {
    return "m" + Math.random().toString(36).substr(2, 9);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = () => {
    if (state.newMessage.trim() !== "") {
      const messageId = generateMessageId();
      const timestamp = new Date().toISOString();
      const message = {
        id: messageId,
        text: state.newMessage,
        createdAt: timestamp,
        user: {
          id: "u2",
          name: "Lukas",
        },
      };
      dispatch({ type: ACTIONS.SET_APPEND_MESSAGE, payload: message });
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        border: "1px solid currentColor",
        content: '""',
      },
    },
  }));

  const MessageBox = styled(Box)(({ theme }) => ({
    position: "relative",
    padding: "8px",
    borderRadius: "5px",
    maxWidth: "400px",
    width: "100%",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      width: "10px",
      height: "10px",
    },
  }));

  return (
    <Box>
      {selectedUser ? (
        <>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar
                  src="/images/avatars/profile-avatar.png"
                  sx={{ width: "30px", height: "30px" }}
                />
              </StyledBadge>

              <Box>
                <Typography>{selectedUser.name}</Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Tooltip title="Call">
                <IconButton sx={{ fontSize: "17px", color: "text.primary" }}>
                  <FiPhoneCall />
                </IconButton>
              </Tooltip>
              <Tooltip title="Video">
                <IconButton sx={{ fontSize: "17px", color: "text.primary" }}>
                  <FiVideo />
                </IconButton>
              </Tooltip>
              <Tooltip title="More">
                <IconButton sx={{ fontSize: "17px", color: "text.primary" }}>
                  <FaEllipsisV />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography gutterBottom variant="subtitle2" sx={{ opacity: 0.8 }}>
              Switch to Support Agent
            </Typography>
            <Switch />
          </Box>

          <Divider />

          <Box
            sx={{
              height: "50vh",
              overflow: "auto",
              p: 1,
            }}
          >
            {state.messages.length > 0 ? (
              state.messages.map(({ id, text, user, createdAt }) => (
                <Box key={id}>
                  <Box
                    sx={{
                      display: "flex",
                      mt: 2,
                      justifyContent:
                        user.id === "u1" ? "flex-start" : "flex-end",
                      gap: 2,
                    }}
                  >
                    <Avatar
                      src={`${
                        user.id === "u1"
                          ? "/images/avatars/profile-avatar.png"
                          : "/images/avatars/avatar3.png"
                      }`}
                      sx={{
                        width: "30px",
                        height: "30px",
                        order: user.id === "u2" && 2,
                      }}
                    />

                    <Box>
                      <MessageBox
                        sx={{
                          backgroundColor:
                            user.id === "u1" ? "#027edd" : "chatBox",
                          color: user.id === "u1" && "#fff",
                          "&::before": {
                            backgroundColor:
                              user.id === "u1" ? "#027edd" : "chatBox",
                            transform: `rotate(45deg) ${
                              user.id === "u1"
                                ? "translateX(-7px)"
                                : "translateX(7px)"
                            } `,
                            left: user.id === "u1" && 0,
                            right: user.id === "u2" && 0,
                            top: user.id === "u1" && "10px !important",
                          },
                        }}
                      >
                        {text}
                      </MessageBox>
                      <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
                        {timestampFormatter(createdAt)}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))
            ) : (
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 1,
                }}
              >
                <Typography>
                  No chats to display. Start a conversation!
                </Typography>
              </Box>
            )}
            <div ref={messagesEndRef} />
          </Box>

          <Box sx={{ mt: 1 }}>
            <TextField
              id="input-with-icon-textfield"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Avatar sx={{ width: "20px", height: "20px" }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <Tooltip title="Send">
                      <IconButton
                        sx={{ fontSize: "17px", color: "text.primary" }}
                        onClick={handleSendMessage}
                      >
                        <FiSend />
                      </IconButton>
                    </Tooltip>
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              fullWidth
              size="small"
              value={state.newMessage}
              placeholder="Enter a message"
              onChange={handleMessageChange}
              onKeyPress={handleKeyPress}
            />
          </Box>
        </>
      ) : (
        <Box
          sx={{
            height: "50vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">Select a user to start chatting!</Typography>
        </Box>
      )}
    </Box>
  );
};

export default Chat;
