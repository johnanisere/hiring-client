import React from 'react';
import Summary from './Summary';
import Portfolio from './Portfolio';
import Employment from './Employment';
import Skills from './Skills';
import Action from './Action';
import axios from 'axios';
import { saveAs } from 'file-saver';

const App = props => {
  const body = {
    photo: props.dev.profilePhoto,
    name: props.dev.name,
    role: props.dev.currentRole,
    description: props.dev.description,
    employments: props.dev.employments,
    skills: props.dev.skills,
  };
  const printCvHandler = e => {
    e.preventDefault();
    axios
      .post('https://infinite-forest-36038.herokuapp.com/create-pdf', body)
      .then(() =>
        axios
          .get('https://infinite-forest-36038.herokuapp.com/fetch-pdf', {
            responseType: 'blob',
          })
          .then(res => {
            const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
            saveAs(pdfBlob, `${body.name}.pdf`);
          }),
      );
  };

  return (
    <>
      <Summary
        profilePhoto={props.dev.profilePhoto}
        name={props.dev.name}
        currentRole={props.dev.currentRole}
        description={props.dev.description}
        stack={props.dev.stack}
        bio={props.dev.bio}
        github={props.dev.github}
        linkedIn={props.dev.linkedIn}
        stackOverflow={props.dev.stackOverflow}
        website={props.dev.website}
      />
      <Action
        dev={props.dev}
        selected={props.selected}
        printCv={printCvHandler}
      />
      <Portfolio
        portfolio={props.dev.portfolio}
        skills={props.dev.skills}
        education={props.dev.education}
      />
      <Employment employments={props.dev.employments} />
      <Skills publications={props.dev.publications} />
    </>
  );
};

export default App;
