import React from 'react';
import { Form } from 'grommet/components/Form';
import { TextInput } from 'grommet/components/TextInput';

import FormError from '../../formError';

function EducationForm(props) {
  const { values, handleChange, error } = props;

  const { qualification, endDate, startDate, placeOfEducation } = values;

  return (
    <Form>
      <FormError error={error} />
      <div style={{ margin: '10px' }}>
        <label
          htmlFor="qualification"
          style={{
            flex: '1 1 20%',
            paddingBottom: '5px',
            fontSize: '12px',
            fontWeight: 'lighter'
          }}
        >
          QUALIFICATION
        </label>

        <TextInput
          style={{ flex: '1 1 80%' }}
          size="small"
          name="qualification"
          placeholder="type here"
          value={qualification}
          onChange={handleChange}
        />
      </div>


      <div style={{ margin: '10px', display: 'flex' }}>
        <div style={{ marginRight: '5px' }}>
          <label
            htmlFor="startDate"
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
              name="startDate"
              onChange={handleChange}
              value={startDate}
            />
          </div>
        </div>
        <div style={{ marginRight: '5px' }}>
          <label
            htmlFor="endDate"
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
            <input type="month" name="endDate" onChange={handleChange} value={endDate} />
          </div>
        </div>
      </div>



      {/* <div style={{ margin: '10px' }}>
        <label
          htmlFor="duration"
          style={{
            flex: '1 1 20%',
            paddingBottom: '5px',
            fontSize: '12px',
            fontWeight: 'lighter'
          }}
        >
          DURATION
        </label>

        <TextInput
          style={{ flex: '1 1 80%' }}
          size="small"
          name="duration"
          placeholder="type here"
          value={duration}
          onChange={handleChange}
        />
      </div> */}
      <div style={{ margin: '10px' }}>
        <label
          htmlFor="placeOfEducation"
          style={{
            flex: '1 1 20%',
            paddingBottom: '5px',
            fontSize: '12px',
            fontWeight: 'lighter'
          }}
        >
          PLACE OF EDUCATION
        </label>

        <TextInput
          style={{ flex: '1 1 80%' }}
          size="small"
          name="placeOfEducation"
          placeholder="type here"
          value={placeOfEducation}
          onChange={handleChange}
        />
      </div>
    </Form>
  );
}

export default React.memo(EducationForm);
