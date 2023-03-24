import React from "react";
import ThemedPaper from "../../components/themed_paper";
import { Typography, Grid } from "@mui/material";
import Headline from "../../components/headline";

import background from "../../resources/background.png";
import video from "../../resources/video.png";
import icon1 from "../../resources/icon1.png";
import icon2 from "../../resources/icon2.png";
import icon3 from "../../resources/icon3.png";

const iconStyle = {
  margin: "0px 20px 0px 10px",
  width: "54px",
  height: "54px",
};

const contentContainerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  height: "100%",
  paddingTop: 30,
  backgroundImage: `url(${background})`,
};

const MainSection = () => {
  return (
    <div style={contentContainerStyle}>
      <Headline />
      <Grid container justifyContent="center" alignItems="center">
        <Grid item style={{ marginTop: 20 }}>
          <img src={video} width="300px" height="490px" alt="" />
        </Grid>
        <Grid item style={{ margin: 20 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 500,
            }}
          >
            <ThemedPaper
              additionalStyles={{
                width: 330,
              }}
            >
              <img src={icon1} style={iconStyle} alt="" />
              <div>
                <Typography variant="h6">
                  <b>Brief</b>
                </Typography>
                <Typography variant="body2">
                  Complete <b>brief writing or simple guidance</b> on what to
                  include, we've got you covered.
                </Typography>
              </div>
            </ThemedPaper>
            <ThemedPaper
              additionalStyles={{
                width: 360,
                marginTop: "2em",
              }}
            >
              <img src={icon2} style={iconStyle} alt="" />
              <div>
                <Typography variant="h6">
                  <b>Search</b>
                </Typography>
                <Typography variant="body2">
                  In-depth agency search covering; <b>criteria matching</b>,
                  door knocking and due-dilligence vetting.
                </Typography>
              </div>
            </ThemedPaper>
            <ThemedPaper
              additionalStyles={{
                width: 390,
                marginTop: "2em",
                borderStyle: "solid",
                borderColor: "#016EFD",
                borderWidth: 2,
                borderRadius: 5,
              }}
            >
              <img src={icon3} style={iconStyle} alt="" />
              <div>
                <Typography variant="h6">
                  <u style={{ color: "#016EFD" }}>Pitch</u>
                </Typography>
                <Typography variant="body2">
                  Comprehensive <b>pitch management</b>, including comms, diary
                  management and pitch hosting.
                </Typography>
              </div>
            </ThemedPaper>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default MainSection;
