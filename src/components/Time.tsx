import React from "react";
import { format } from "date-fns";
import { useObservable } from "rxjs-hooks";
import { interval } from "rxjs";
import { map } from "rxjs/operators";

function Time() {
  const val = useObservable(() =>
    interval(100).pipe(map(() => format(new Date(), "dddd, MMMM Do - h:mm:ss A")))
  );
  return <div>{val}</div>;
}

export default Time;
