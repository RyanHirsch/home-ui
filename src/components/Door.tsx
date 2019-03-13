import React, { useState } from "react";
import { Button, Box, Grid } from "grommet";
import { LinkTop, LinkBottom } from "grommet-icons";

function Door() {
  const [isDoorOpen, setDoorOpen] = useState(false);

  return (
    <Box direction="row" align="center" justify="between" margin={{ vertical: "small" }}>
      Garage is {isDoorOpen ? "open" : "closed"}&nbsp;
      {isDoorOpen ? (
        <Button
          label={"Close"}
          icon={<LinkBottom size="medium" />}
          onClick={() => setDoorOpen(false)}
        />
      ) : (
        <Button label={"Open"} icon={<LinkTop size="medium" />} onClick={() => setDoorOpen(true)} />
      )}
    </Box>
  );
}

export default Door;
