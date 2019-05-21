import * as React from "react";
import { useState } from "react";

import { WithStyles, withStyles } from "@material-ui/core/styles";

import TodayIcon from "@material-ui/icons/Today";
import { IconButton, InputAdornment } from "@material-ui/core";

import { DateTimePicker } from "material-ui-pickers";

import { DateTime, Settings } from "luxon";

Settings.defaultZoneName = "Etc/UTC";

const styles = {
  root: {
    width: 200
  }
};

interface Props extends WithStyles<typeof styles> {}

function MaterialUIPickers(props: Props) {
  const [selectedDate, handleDateChange] = useState(
    DateTime.fromISO("2019-01-01T00:00:00Z")
  );

  const datetime = selectedDate;
  //const datetime = selectedDate.setZone("Asia/Yekaterinburg"); // +05:00

  return (
    <DateTimePicker
      className={props.classes.root}
      ampm={false}
      autoOk
      value={datetime}
      onChange={handleDateChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <TodayIcon />
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  );
}

export default withStyles(styles)(MaterialUIPickers);
