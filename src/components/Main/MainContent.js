import React, { useState } from "react";
import useStyles from "./useStyles";
import { useWebcamCapture } from "../../useWebcamCapture";
import slap from "../../assets/slap.png";
import punch from "../../assets/punch.png";
import hug from "../../assets/hug.png";
import { saveAs } from "file-saver";

const MainContent = (props) => {
  // css classes from JSS hook
  const classes = useStyles(props);
  // currently active sticker
  const [sticker, setSticker] = useState();
  // title for the picture that will be captured
  const [title, setTitle] = useState("SLAPPE!");

  // webcam behavior hook
  const [
    handleVideoRef, // callback function to set ref for invisible video element
    handleCanvasRef, // callback function to set ref for main canvas element
    handleCapture, // callback function to trigger taking the picture
    picture, // latest captured picture data object
  ] = useWebcamCapture(sticker?.img, title);

  const stickers = [slap, punch, hug].map((url) => {
    const img = document.createElement("img");
    img.src = url;
    return { img, url };
  });

  return (
    <>
      <main className={classes.Content}>
        <section className={classes.Gallery}>
          <h4>Step 1: Give it a name</h4>
          <input
            type="text"
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
          />
        </section>
        <section className={classes.Stickers}>
          <h4>Step 2: select your sticker...</h4>
          {stickers.map((st, i) => (
            <button key={i} onClick={() => setSticker(st)}>
              <img src={st.url} />
            </button>
          ))}
        </section>
        <section className={classes.Main}>
          <h4>Step 3: Slap your self!</h4>
          <video ref={handleVideoRef} />
          <canvas
            ref={handleCanvasRef}
            width={2}
            height={2}
            onClick={handleCapture}
          />
        </section>
        <section className={classes.Gallery}>
          <h4>Step 4: Cherish this moment forever</h4>
          {picture && (
            <>
              <div className={classes.Picture}>
                <img src={picture.dataUri} />
                <h3>{picture.title}</h3>
                <h3>
                  <button
                    onClick={() => saveAs(picture.dataUri, picture.title)}
                  >
                    DOWNLOAD
                  </button>
                </h3>
              </div>
            </>
          )}
        </section>
      </main>
    </>
  );
};

export default MainContent;
