import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
    "@global body": {
      background: theme.palette.background,
      color: theme.palette.text,
      fontFamily: "sans-serif",
    },
  }));
  

  export default useStyles