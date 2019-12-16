import React from 'react';
import { Form } from 'grommet/components/Form';
import { TextInput } from 'grommet/components/TextInput';


import FormError from '../../formError';

function PublicationForm(props) {
  const { values, handleChange, error } = props;

  const { title, link } = values;

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
          PUBLICATION TITLE
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
          htmlFor="link"
          style={{
            flex: '1 1 20%',
            paddingBottom: '5px',
            fontSize: '12px',
            fontWeight: 'lighter'
          }}
        >
          PUBLICATION LINK
        </label>

        <TextInput
          style={{ flex: '1 1 80%' }}
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

export default React.memo(PublicationForm);
