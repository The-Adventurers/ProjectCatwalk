import React from 'react';
import QAsection from './QA/QAsection.jsx';

const App = function () {
  // console.log(QAsection);
  return (
    <>
      {/* <div>Hello World!</div> */}
      {/* <QAsection product_id={63609} /> */}
      <div name="QA-section">
        <QAsection product_id={63609} />
      </div>
    </>
  );
};

export default App;
