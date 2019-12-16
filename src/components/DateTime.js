import React, { Component, useState } from 'react';

import {
  Box,
  Button,
  Grommet,
  Keyboard,
  Text,
  Calendar,
  MaskedInput,
  DropButton
} from 'grommet';
import { grommet } from 'grommet/themes';
import { Schedule } from 'grommet-icons';

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
                options: [
                  '1',
                  '2',
                  '3',
                  '4',
                  '5',
                  '6',
                  '7',
                  '8',
                  '9',
                  '10',
                  '11',
                  '12'
                ],
                regexp: /^1[1-2]$|^[0-9]$/,
                placeholder: 'hh'
              },
              { fixed: ':' },
              {
                length: 2,
                options: ['00', '15', '30', '45'],
                regexp: /^[0-5][0-9]$|^[0-9]$/,
                placeholder: 'mm'
              },
              { fixed: ' ' },
              {
                length: 2,
                options: ['am', 'pm'],
                regexp: /^[ap]m$|^[AP]M$|^[aApP]$/,
                placeholder: 'ap'
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
              <Text color={date ? undefined : 'dark-5'}>
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
