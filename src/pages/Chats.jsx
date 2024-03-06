import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import Chat from "../components/chats/Chat";
import Users from "../components/chats/Users";
import { ChatReducer } from "../components/reducers/ChatReducer";
import { ChatState } from "../components/reducers/states/initState";
import ACTIONS from "../components/reducers/actions";
import { messages } from "../data/messages";

const Chats = () => {
  const [state, dispatch] = React.useReducer(ChatReducer, ChatState);
  const handleSelectUser = (user) => {
    dispatch({
      type: ACTIONS.SET_CHAT_USER,
      payload: { user: user, messages: messages, isReady: true },
    });
  };
  return (
    <Box sx={{ pt: "80px" }}>
      <Paper
        sx={{
          borderRadius: "12px",
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: "divider",
          p: "20px",
          display: "flex",
          overflow: "hidden",
        }}
      >
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sm={6}
            lg={4}
            sx={{ borderRight: "2px solid #d6d6d6" }}
          >
            <Users onSelectUser={handleSelectUser} />
          </Grid>

          <Grid item xs={12} sm={6} lg={8}>
            <Chat selectedUser={state.selectedUser} loadedChats={state.messages} />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Chats;
