import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./MainPage";
import Workshop from "./Workshop";
import Classes from "./Classes";
import CopyrightNotice from "react-copyright-notice-component";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import InstagramIcon from "@material-ui/icons/Instagram";
import TelegramIcon from "@material-ui/icons/Telegram";
import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles(() => ({
  telecon: {
    backgroundColor: "#9381FF",
    color: "white",
    "&:hover": {
      backgroundColor: "#9381FF",
    },
  },
  instacon: {
    backgroundColor: "#9381FF",
    color: "white",
    "&:hover": {
      backgroundColor: "#9381FF",
    },
  },
  emailcon: {
    backgroundColor: "#9381FF",
    color: "white",
    "&:hover": {
      backgroundColor: "#9381FF",
    },
  },
  actionArea: {
    borderRadius: 16,
    transition: "0.2s",
    height: "200px",
    width: "150px",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
}));

function App() {
  const styles = useStyles();
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={MainPage} exact />
          <Route path="/classes" component={Workshop} />
          <Route path="/workshop" component={Classes} />
          {/* <Route component={Error} /> */}
        </Switch>
        <div style={{ marginLeft: "42%", marginTop: "15px" }}>
          <div
            style={{
              display: "inline-block",
              marginLeft: "10px",
            }}
          >
            <Fab className={styles.telecon} size="medium" aria-label="add">
              <TelegramIcon />
            </Fab>
          </div>
          <div
            style={{
              display: "inline-block",
              marginLeft: "10px",
            }}
          >
            <Fab
              className={styles.instacon}
              size="medium"
              color="secondary"
              aria-label="add"
            >
              <InstagramIcon />
            </Fab>
          </div>
          <div
            style={{
              display: "inline-block",
              marginLeft: "10px",
            }}
          >
            <Fab
              className={styles.emailcon}
              size="medium"
              backgroundColor="red"
              aria-label="add"
            >
              <EmailIcon />
            </Fab>
          </div>
        </div>
        <div
          style={{
            fontSize: "13px",
            fontWeight: "bold",
            marginLeft: "45%",
            marginTop: "7px",
          }}
        >
          <CopyrightNotice copyrightHolder="CRYSTAL"></CopyrightNotice>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;