import React, { Component, useState } from "react";

import {
  Box,
  Button,
  Grommet,
  Keyboard,
  Text,
  Calendar,
  MaskedInput,
  DropButton
} from "grommet";
import { grommet } from "grommet/themes";
import { Schedule } from "grommet-icons";

const DropContent = props => {
  const { date: initialDate, time: initialTime, onClose } = props;
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const close = () => onClose(date || initialDate, time || initialTime);
  return (
    <Box align="center">
      <Calendar
        animate={false}
        date={date || initialDate}
        onSelect={setDate}
        showAdjacentDays={false}
      />
      <Box flex={false} pad="medium" gap="medium">
        <Keyboard
          onEnter={event => {
            event.preventDefault(); // so drop doesn't re-open
            close();
          }}
        >
          <MaskedInput
            mask={[
              {
                length: [1, 2],
                options: Array.from({ length: 24 }, (_, i) => 0 + i * 1),
                regexp: /^[1-2][0-2,0-9]$|^0?[1-9]$|^0$/,
                placeholder: "HH"
              },
              { fixed: " : " },
              {
                length: [1, 2],
                options: ["0", ...Array.from({ length: 59 }, (v, k) => k + 1)],
                regexp: /^[0-5][0-9]$|^[0-9]$/,
                placeholder: "MM"
              }
            ]}
            value={time || initialTime}
            name="maskedInput"
            onChange={event => setTime(event.target.value)}
          />
        </Keyboard>
        <Box flex={false}>
          <Button label="Done" onClick={close} />
        </Box>
      </Box>
    </Box>
  );
};

class DateTimeDropButton extends Component {
  state = {};

  onClose = (date, time) => {
    this.setState({ open: false });
    this.props.setDateAndTime({
      [`${this.props.name}Date`]: date,
      [`${this.props.name}Time`]: time
    });
    setTimeout(() => this.setState({ open: undefined }), 1);
  };

  render() {
    const { open } = this.state;
    const { date, time } = this.props;
    return (
      <Grommet theme={grommet}>
        <Box>
          <DropButton
            open={open}
            onClose={() => this.setState({ open: false })}
            onOpen={() => this.setState({ open: true })}
            dropContent={
              <DropContent date={date} time={time} onClose={this.onClose} />
            }
          >
            <Box direction="row" gap="medium" align="center" pad="small">
              <Text color={date ? undefined : "dark-5"}>
                {date
                  ? `${new Date(date).toLocaleDateString()} ${time}`
                  : this.props.label}
              </Text>
              <Schedule />
            </Box>
          </DropButton>
        </Box>
      </Grommet>
    );
  }
}

export default DateTimeDropButton;
