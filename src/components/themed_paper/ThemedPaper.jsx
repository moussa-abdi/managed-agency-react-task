import React from "react";
import Paper from "@mui/material/Paper";

const ThemedPaper = ({ children, additionalStyles }) => {
  return (
    <Paper elevation={0}>
      <div
        style={{
          padding: 10,
          backgroundColor: "#F9F9F9",
          minHeight: 100,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          ...additionalStyles,
        }}
      >
        {children}
      </div>
    </Paper>
  );
};

export default ThemedPaper;
