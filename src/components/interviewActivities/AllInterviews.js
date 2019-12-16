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

import { connect } from 'react-redux';

function AllInterviewsTable(props) {
  const { interviews } = props;
  return (
    <Grommet theme={grommet}>
      <Box
        style={{ borderBottom: '1px solid black' }}
        justify="center"
        align="center"
      >
        <Heading level={3}>Scheduled Interviews</Heading>
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
                <TableRow key={`Interview: ${index}`}>
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      ) : (
        <p style={{ textAlign: 'center' }}>
          <em>No Scheduled Interviews</em>
        </p>
      )}
    </Grommet>
  );
}

const mapStateToProps = state => {
  return {
    interviews: state.interviews.data
  };
};

export default connect(
  mapStateToProps,
  null
)(React.memo(AllInterviewsTable));
