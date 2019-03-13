import React from "react";
import { Button } from "grommet";
import { Refresh } from "grommet-icons";

function Reload() {
  return <Button onClick={() => location.reload(true)} icon={<Refresh size="medium" />} />;
}

export default Reload;
