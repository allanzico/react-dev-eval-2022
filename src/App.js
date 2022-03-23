
import { createUseStyles } from "react-jss";


import { Link, Switch, Route } from "react-router-dom";
import MainContent from "./components/Main/MainContent";
import Header from "./components/Header/Header";
import ReadMe from "./components/ReadMe/ReadMe";
import { BrowserRouter } from "react-router-dom";
import SideNav from "./components/Header/SideNav";

const useStyles = createUseStyles((theme) => ({
  App: {
    padding: "20px",
    background: theme.palette.primary,
    // maxWidth: "75%",
    minHeight: "100vh",
    margin: "0 auto",
    "& a": {
      color: theme.palette.text,
    },
    display: "flex",
    flexDirection:"column",
    maxWidth:"80%"
  },
  Container: {
    display: "flex",
    flexDirection:"row",
    flex:"1 0 auto"
  }
}));

function App() {
  // css classes from JSS hook
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <div className={classes.Container}>
          <SideNav />
        <Switch>
          <Route exact path="/" component={MainContent} />
          <Route exact path="/readme" component={ReadMe} />
        </Switch>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
