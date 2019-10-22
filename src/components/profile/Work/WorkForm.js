import React from 'react';
import { Form } from 'grommet/components/Form';
import { TextInput } from 'grommet/components/TextInput';
import { TextArea } from 'grommet/components/TextArea';

import FormError from '../../formError';

function WorkForm(props) {
  const { values, handleChange, error } = props;

  const { location, title, to, from, achievements } = values;

  return (
    <Form>
      <FormError error={error} />
      <div style={{ margin: '10px' }}>
        <label
          htmlFor="location"
          style={{
            flex: '1 1 20%',
            paddingBottom: '5px',
            fontSize: '12px',
            fontWeight: 'lighter'
          }}
        >
          COMPANY NAME
        </label>

        <TextInput
          style={{ flex: '1 1 80%' }}
          size="small"
          name="location"
          placeholder="type here"
          value={location}
          onChange={handleChange}
        />
      </div>
      <div style={{ margin: '10px' }}>
        <label
          htmlFor="title"
          style={{
            flex: '1 1 20%',
            paddingBottom: '5px',
            fontSize: '12px',
            fontWeight: 'lighter'
          }}
        >
          JOB TITLE
        </label>

        <TextInput
          style={{ flex: '1 1 80%' }}
          size="small"
          name="title"
          placeholder="type here"
          value={title}
          onChange={handleChange}
        />
      </div>
      <div style={{ margin: '10px' }}>
        <label
          htmlFor="achievements"
          style={{
            flex: '1 1 20%',
            paddingBottom: '5px',
            fontSize: '12px',
            fontWeight: 'lighter'
          }}
        >
          ACHIEVEMENTS
        </label>

        <TextArea
          style={{ flex: '1 1 100%' }}
          size="small"
          name="achievements"
          placeholder="type here"
          value={achievements}
          onChange={handleChange}
        />
      </div>
      <div style={{ margin: '10px', display: 'flex' }}>
        <div style={{ marginRight: '5px' }}>
          <label
            htmlFor="from"
            style={{
              flex: '1 1 20%',
              paddingBottom: '5px',
              fontSize: '12px',
              fontWeight: 'lighter'
            }}
          >
            FROM
          </label>
          <div>
            <input
              type="month"
              name="from"
              onChange={handleChange}
              value={from}
            />
          </div>
        </div>
        <div style={{ marginRight: '5px' }}>
          <label
            htmlFor="to"
            style={{
              flex: '1 1 20%',
              paddingBottom: '5px',
              fontSize: '12px',
              fontWeight: 'lighter'
            }}
          >
            TO
          </label>
          <div>
            <input type="month" name="to" onChange={handleChange} value={to} />
          </div>
        </div>
      </div>
    </Form>
  );
}

export default React.memo(WorkForm);
