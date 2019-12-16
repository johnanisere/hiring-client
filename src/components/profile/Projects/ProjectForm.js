import React from 'react';
import { Form } from 'grommet/components/Form';
import { TextInput } from 'grommet/components/TextInput';

import FormError from '../../formError';

function ProjectForm(props) {
  const { values, handleChange, error } = props;

  const { title, languages, link } = values;

  return (
    <Form>
      <FormError error={error} />
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
          PROJECT TITLE
        </label>

        <TextInput
          style={{ flex: '1 1 80%' }}
          size="small"
          name="title"
          placeholder="type here"
          value={title}
          onChange={handleChange}
          required
        />
      </div>
      <div style={{ margin: '10px' }}>
        <label
          htmlFor="languages"
          style={{
            flex: '1 1 20%',
            paddingBottom: '5px',
            fontSize: '12px',
            fontWeight: 'lighter'
          }}
        >
          LANGUAGES USED
        </label>

        <TextInput
          style={{ flex: '1 1 80%' }}
          size="small"
          name="languages"
          placeholder="type here"
          value={languages}
          onChange={handleChange}
          required
        />
      </div>
      <div style={{ margin: '10px' }}>
        <label
          htmlFor="link"
          style={{
            flex: '1 1 20%',
            paddingBottom: '5px',
            fontSize: '12px',
            fontWeight: 'lighter'
          }}
        >
          PROJECT LINK
        </label>

        <TextInput
          style={{ flex: '1 1 80%'}}
          size="small"
          name="link"
          placeholder="type here"
          value={link}
          onChange={handleChange}
          required
        />
      </div>
    </Form>
  );
}

export default React.memo(ProjectForm);
