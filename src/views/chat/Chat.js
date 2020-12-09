import React, { useState, useEffect } from "react";
import {
  Chat,
  Channel,
  Thread,
  Window,
  ChannelList,
  ChannelHeader,
  ChannelListMessenger,
  MessageList,
  MessageSimple,
  MessageInput,
  withChannelContext,
} from "stream-chat-react";
import { StreamChat } from "stream-chat";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
import "stream-chat-react/dist/css/index.css";

import { Loading } from "../../../src/components/navbar";

import "./index.css"
import TextField from "@material-ui/core/TextField";
import ArrowForwardRounded from "@material-ui/icons/ArrowForwardRounded";
import SearchIcon from "@material-ui/icons/Search";
import { IconButton, InputAdornment } from "@material-ui/core";
const chatClient = new StreamChat("xvx52xsrdb9c");

function ChatView() {
  const [channel, setChannel] = useState(null);
  const [newChat, setNewChat] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useAuth0();
  const username = user.email.replace(/([^a-z0-9_-]+)/gi, "_");

  useEffect(() => {
    async function getToken() {
      setLoading(true);
      let token;
      try {
        const response = await axios.post(process.env.REACT_APP_CHAT_URL, {
          username,
        });
        token = response.data.token;
      } catch (err) {
        console.log(err);
        return;
      }

      chatClient.setUser(
        {
          id: username,
          name: user.nickname,
        },
        token
      );

      const channel = chatClient.channel("team", "group-messaging-2");

      try {
        await channel.watch();
      } catch (err) {
        console.log(err);
        return;
      }

      setChannel(channel);
      setLoading(false);
    }

    getToken();
  }, [setLoading, user.email, user.name, user.nickname, username]);

  if (loading || !user) {
    return <Loading />;
  }


  async function handleSubmit(evt) {
    evt.preventDefault();

    const conversation = chatClient.channel("messaging", "channel-name", {
      name: "Founder Chat",
      image: "http://bit.ly/2O35mws",
      members: [newChat],
    });

    await conversation.create();
  }


  if (channel) {
    const CustomChannelHeader = withChannelContext(
      class CustomChannelHeader extends React.PureComponent {
        render() {
          return (
            <Card>
              <p className="str-chat__header-livestream-left--title">
                {this.props.channel.data.name}
              </p>
              <p className="str-chat__header-livestream-left--members">
                {Object.keys(this.props.members).length} members,{" "}
                {this.props.watcher_count} online
              </p>
            </Card>
          );
        }
      }
    );

    return (
      <Card style={{ paddingTop: "50px" }}>
       
        <Row>
          <Chat client={chatClient} theme="team light">
            <Col xs={3}>
            <form onSubmit={handleSubmit} style={{ align: "right" }}>
          <TextField
            id="search-bar"
            placeholder="Start a new conversation"
            variant="outlined"
            onChange={(e) => setNewChat(e.target.value)}
            required
            fullWidth
            style = {{paddingLeft: "11px", width: "76%"}}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon
                    fontSize="large"
                  />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    type="submit"
                    aria-label="search button"
                    edge="end"
                  >
                    <ArrowForwardRounded
                      fontSize="large"
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </form>
              <ChannelList
                options={{
                  subscribe: true,
                  state: true,
                }}
                List={ChannelListMessenger}
                style= {{width: "100%"}}
              />
            </Col>
            <Col xs={9}>
              <Channel>
                <Window>
                  <ChannelHeader />
                  <MessageList Message={MessageSimple} />

                  <MessageInput />
                </Window>
                <Thread Message={MessageSimple} />
              </Channel>
            </Col>
          </Chat>
        </Row>
      </Card>
    );
  }

  return null;
}

export default ChatView;