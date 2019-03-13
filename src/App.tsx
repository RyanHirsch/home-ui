import React from "react";
import Reload from "./components/Reload";
import { Grommet, Box, Heading, Grid } from "grommet";

import Door from "./components/Door";
import Time from "./components/Time";

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "24px",
      height: "26px",
    },
  },
};

function App() {
  return (
    <Grommet theme={theme}>
      <Box
        tag="header"
        background="brand"
        pad="small"
        elevation="small"
        justify="between"
        direction="row"
        align="center"
        flex={false}
      >
        <Heading level={"3"} margin="none">
          <Time />
        </Heading>
        <Reload />
      </Box>
      <Grid gap="large" margin="medium" columns={["flex", "flex"]}>
        <Door />
        <Door />
      </Grid>
    </Grommet>
  );
}

export default App;
