import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  Grommet,
  Box
} from 'grommet';

import { grommet } from 'grommet/themes';
import { useSelector } from 'react-redux';
import ViewDeclineReason from './ViewDeclineReason';

function DeclinedInterviewsTable() {
  const [open, setOpen] = React.useState();
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(undefined);
  const { data } = useSelector(({ interviews }) => interviews);
  const interviews = data.filter(interview => {
    return interview.accepted === false && interview.pending === false;
  });

  return (
    <Grommet theme={grommet}>
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
                <TableRow onClick={onOpen}>
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
                      ? 'Declined'
                      : 'Pending'}
                  </TableCell>
                  <ViewDeclineReason
                    declineReason={interview.declineReason}
                    open={open}
                    onClose={onClose}
                    decaDev={interview.decaDev}
                  />
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Grommet>
  );
}

export default React.memo(DeclinedInterviewsTable);
