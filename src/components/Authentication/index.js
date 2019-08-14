import React from 'react';

import { Box, Grommet } from 'grommet';
import { grommet } from 'grommet/themes';
import Routes from './routes';
import { Route,BrowserRouter,Switch } from 'react-router-dom';
import Login from './Login';
import ChangePassword from '../passwordPage/changePass'

export default function(props) {
  const { match: { path }}=props;
  return (
    <Grommet full theme={grommet}>
      <Box fill align="center" justify="center">
        <Box
          style={{
            borderRadius: '10px',
            boxShadow: '0px 0px 20px 5px rgba(0, 0, 0, 0.1)'
          }}
          width="medium"
          pad="medium"
        >
          <BrowserRouter>
          <Switch>
          <Route exact to={`${path}/login`} component={Login} /> 
          <Route   to={`${path}/change-password`} component={ChangePassword} />
          </Switch>
          </BrowserRouter>
            
          {/* <Routes {...props} /> */}
        </Box>
      </Box>
    </Grommet>
  );
}
