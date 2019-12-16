import React, { useEffect } from "react";

import {
  Accordion,
  AccordionPanel,
  Box,
  Grommet,
  Text,
  Heading
} from "grommet";
import request from "../../request";
import { connect, useSelector } from "react-redux";
import { grommet } from "grommet/themes";
import getAllActiveHirers from "./getAllActiveHirers.action";

import { toNormalDate } from "../../helpers/utils";

const DisplayActiveHirers = props => {
  const { activeHirers } = useSelector(({ hirer }) => hirer);

  useEffect(() => {
    props.activeHirers(request);
  }, [props]);

  const { animate, multiple, inactiveHirer, ...rest } = props;

  return (
    <Grommet theme={grommet} style={{ overflow: "auto" }}>
      <Box
        style={{ borderBottom: "1px solid black", overflow: "auto" }}
        justify="center"
        align="center"
      >
        <Heading level={2}>Hiring Partners</Heading>
      </Box>
      {activeHirers ? (
        activeHirers.map(item => (
          <Box {...rest} key={item._id}>
            <Accordion animate={animate} multiple={multiple}>
              <AccordionPanel label={item.nameOfOrg}>
                <Box background="light-2" height="medium">
                  <Box height="large" flex={false} pad="small">
                    <Text>Contact Peron: {item.name}</Text>
                    <Text>Email: {item.email}</Text>
                    <Text>phone: {item.phone}</Text>
                    <Text>Organisation: {item.nameOfOrg}</Text>
                    <Text>Designation: {item.designation}</Text>
                    <Text>
                      Number of Talents: {item.numberOfTalentsRequired}
                    </Text>
                    <Text>Timeframe: {item.deadline}</Text>
                    <Text>Joined: {toNormalDate(item.createdAt)}</Text>
                    <Text>
                      Verified: {item.verified === true ? "Yes" : "No"}
                    </Text>
                  </Box>
                </Box>
              </AccordionPanel>
            </Accordion>
          </Box>
        ))
      ) : (
        <p style={{ textAlign: "center" }}>
          <em>No active Hirer</em>
        </p>
      )}
    </Grommet>
  );
};

const mapDispatchToProps = {
  activeHirers: getAllActiveHirers
};

export default connect(
  null,
  mapDispatchToProps
)(React.memo(DisplayActiveHirers));
