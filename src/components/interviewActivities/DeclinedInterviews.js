import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  Grommet,
  Box,
  Heading
} from 'grommet';

import { grommet } from 'grommet/themes';
import { useSelector } from 'react-redux';
import ViewDeclineReason from './ViewDeclineReason';

function DeclinedInterviewsTable() {
  const [open, setOpen] = React.useState({ isOpen: false, itemvalue: null });
  const onOpen = index => setOpen({ isOpen: true, itemvalue: index });
  const onClose = () => setOpen({ isOpen: false, itemvalue: null });
  const { data } = useSelector(({ interviews }) => interviews);
  const interviews = data.filter(interview => {
    return interview.accepted === false && interview.pending === false;
  });

  return (
    <Grommet theme={grommet}>
      <Box
        style={{ borderBottom: '1px solid black' }}
        justify="center"
        align="center"
      >
        <Heading level={3}>Rescheduled Interviews</Heading>
      </Box>

      {interviews.length !== 0 ? (
        <Box pad="medium">
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell scope="col" border="bottom">
                  Hirer
                </TableCell>
                <TableCell scope="col" border="bottom">
                  Decadev
                </TableCell>
                <TableCell scope="col" border="bottom">
                  Date
                </TableCell>
                <TableCell scope="col" border="bottom">
                  Time
                </TableCell>
                <TableCell scope="col" border="bottom">
                  Status
                </TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {interviews.map((interview, index) => (
                <React.Fragment key={`Interview: ${index}`}>
                  <TableRow onClick={() => onOpen(index)}>
                    <TableCell scope="row">
                      <strong>{interview.nameOfOrg}</strong>
                    </TableCell>
                    <TableCell>{interview.decaDev}</TableCell>
                    <TableCell scope="row">
                      <strong>{interview.startDate}</strong>
                    </TableCell>
                    <TableCell>{`${interview.startTime} - ${interview.endTime}`}</TableCell>
                    <TableCell
                      style={{
                        color: interview.accepted
                          ? 'green'
                          : interview.declined
                          ? 'red'
                          : '#c59017'
                      }}
                    >
                      {interview.accepted
                        ? 'Accepted'
                        : interview.declined
                        ? 'Rescheduled'
                        : 'Pending'}
                    </TableCell>
                  </TableRow>
                  {open.isOpen && index === open.itemvalue && (
                    <ViewDeclineReason
                      declineReason={interview.declineReason}
                      onClose={onClose}
                      decaDev={interview.decaDev}
                    />
                  )}
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </Box>
      ) : (
        <p style={{ textAlign: 'center' }}>
          <em>No Declined Interviews</em>
        </p>
      )}
    </Grommet>
  );
}

export default React.memo(DeclinedInterviewsTable);
