import * as React from "react";
import * as ReactDOM from "react-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import "typeface-roboto/index.css";
import { ThemeProvider } from "@material-ui/core/styles";

import { Box, Container, Typography } from "@material-ui/core";
import { Playlist } from "../features/playlist/Playlist";

import { theme } from "./theme";

function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          App
        </Typography>
        <Playlist />
      </Box>
    </Container>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);