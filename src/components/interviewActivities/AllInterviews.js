import React, { useEffect } from 'react';
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

import { connect } from 'react-redux';
import request from '../../request';
import { getAllInterviews } from './interviews.action';

function AllInterviewsTable(props) {
  const { interviews, getAllInterviews } = props;

  // eslint-disable-next-line
  useEffect(() => {
    getAllInterviews(request);
  }, [getAllInterviews]);

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
    </Grommet>
  );
}

const mapStateToProps = state => {
  return {
    interviews: state.interviews.data
  };
};
const mapDispatchToProps = {
  getAllInterviews
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(AllInterviewsTable));
