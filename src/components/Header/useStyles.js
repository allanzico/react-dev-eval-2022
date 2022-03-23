import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
    "@global body": {
      background: theme.palette.background,
      color: theme.palette.text,
      fontFamily: "sans-serif",
    },
 
    Header: {
      "&  h1": {
        fontFamily: "sans-serif",
        fontSize: "3rem",
        textAlign:"center"
      },
      "& p":{
        textAlign:"center"
      },

      borderBottom: "1px solid #000"
    },

    SideNav: {
      flex:"0 0 15%",
      textAlign:"left",
      "& ul": {
        listStyle: "none",
        padding: "0.5em 0",
        margin: "0",

      },
      "& li": {
        padding: "0.5em 1em 0.5em 3em",
        fontSize:"0.95em",
        fontWeight: "regular",
      },
      
    }
  }));
  

  export default useStyles