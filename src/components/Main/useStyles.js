import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
    "@global body": {
      background: theme.palette.background,
      color: theme.palette.text,
      fontFamily: "sans-serif",
    },
    Main: {
      "& canvas": {
        width: "100%",
        height: "auto",
        border:"10px solid #DCDCDC"
      },
      "& video": {
        display: "none",
      },
    },
    Content: {
        display:"flex",
        flexDirection:"column"
    },
    Stickers: {
      "& img": {
        height: "4rem",
        cursor: "pointer",
      },
      marginBottom:"12px",
      
    },
    Gallery: {
      "& img": {
        height: "16rem",
      },
    },
    Picture: {
      background: "black",
      padding: 4,
      position: "relative",
      display: "inline-block",
      "& h3": {
        padding: 8,
        textAlign: "center",
        width: "100%",
        color: theme.palette.secondary
      },
    },
  }));
  

  export default useStyles