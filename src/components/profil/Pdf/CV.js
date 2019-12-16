import React from 'react';

function CV({ portfolio, education, skills, profilePhoto }) {
  //   return (
  //     <div>
  //       {/* <img src={profilePhoto} /> */}
  //       {portfolio ? (
  //         portfolio.map(item => {
  //           return <p style={{ color: '#dd0d0d' }}>{item.title}</p>;
  //         })
  //       ) : (
  //         <p>Empty</p>
  //       )}
  //       CV
  //     </div>
  //   );

  return (
    <div>
      <div
        style={{
          background: '#3863a0',
          width: '20%',
          height: '100vh',
          padding: '20px 10px',
          float: 'left',
        }}
      >
        hello
      </div>
      <div style={{ padding: '20px', float: 'left', width: '70%' }}>
        <h1 style={{ padding: '0', margin: '0' }}>Jane Mary</h1>
      </div>
    </div>
  );
}

export default React.memo(CV);
