import React, { useEffect, useState } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import {
  Accordion,
  AccordionPanel,
  Box,
  Grommet,
  Text,
  Button,
  Heading
} from 'grommet';
import request from '../../request';
import { connect, useSelector } from 'react-redux';
import { grommet } from 'grommet/themes';
import getAllInactive from './activateHirer.action';

const ActivateHirer = props => {
  const { hirer } = useSelector(({ inactiveHirer }) => inactiveHirer);
  // eslint-disable-next-line
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    props.inactiveHirer(request);
  }, [props]);

  const { animate, multiple, inactiveHirer, ...rest } = props;
  async function handleClick(event, item) {
    event.persist();
    setLoading(!loading);
    let res = await request.put('/hirer/activatehirer', {
      ...item
    });
    setMessage(res);
    setLoading(false);

    await props.inactiveHirer(request);
  }
  return (
    <Grommet theme={grommet}>
      <Box border="small" justify="center" align="center">
        <Heading size={3}>Unactivated Potential Hiring Partners</Heading>
      </Box>
      {hirer ? (
        hirer.map(item => (
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
                    <Text>Joined: {item.createdAt}</Text>
                    <Text>
                      Verified: {item.verified === true ? 'Yes' : 'No'}
                    </Text>
                    <span>
                      <Box pad="small">
                        <Button
                          style={{
                            margin: ' 0 auto'
                          }}
                          primary
                          color="#111111"
                          label={
                            loading ? (
                              <BeatLoader size={5} color="#fff" />
                            ) : (
                              'Activate'
                            )
                          }
                          onClick={event => handleClick(event, item)}
                          {...props}
                        />
                      </Box>
                    </span>
                  </Box>
                </Box>
              </AccordionPanel>
            </Accordion>
          </Box>
        ))
      ) : (
        <p style={{ textAlign: 'center' }}>
          <em>No unactivated Hirer</em>
        </p>
      )}
    </Grommet>
  );
};

const mapDispatchToProps = {
  inactiveHirer: getAllInactive
};

export default connect(
  null,
  mapDispatchToProps
)(React.memo(ActivateHirer));
