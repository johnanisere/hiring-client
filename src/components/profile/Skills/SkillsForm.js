import React from 'react';
import { Form } from 'grommet/components/Form';
import { TextInput } from 'grommet/components/TextInput';

import FormError from '../../formError';

function SkillsForm(props) {
  const { values, handleChange, error } = props;

  const { type, description } = values;

  return (
    <Form>
      <FormError error={error} />
      <div style={{ margin: '10px' }}>
        <label
          htmlFor="type"
          style={{
            flex: '1 1 20%',
            paddingBottom: '5px',
            fontSize: '12px',
            fontWeight: 'lighter'
          }}
        >
          TYPE
        </label>

        <TextInput
          style={{ flex: '1 1 80%' }}
          size="small"
          name="type"
          placeholder="type here"
          value={type}
          onChange={handleChange}
        />
      </div>
      <div style={{ margin: '10px' }}>
        <label
          htmlFor="description"
          style={{
            flex: '1 1 20%',
            paddingBottom: '5px',
            fontSize: '12px',
            fontWeight: 'lighter'
          }}
        >
          DESCRIPTION
        </label>

        <TextInput
          style={{ flex: '1 1 80%' }}
          size="small"
          name="description"
          placeholder="type here"
          value={description}
          onChange={handleChange}
        />
      </div>
    </Form>
  );
}

export default React.memo(SkillsForm);
