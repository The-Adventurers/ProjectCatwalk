import React, { useState} from 'react';
import QAsection from './QA/QAsection.jsx';
import { OverviewApp } from './overview/OverviewApp.jsx';

const App = function () {
  /** USE for generate randon product_id to test component */
  const [id, setID] = useState(63609);
  const generateRandomProduct = () => {
    let RandomProduct_id = Math.floor(Math.random() * 6) + 63609;
    setID(RandomProduct_id);
  }

  return (
    <div id="main">
      <div>
        {/* <OverviewApp product_id={ 63616}/> */}
      </div>
      <div className="QA-section">
        <button style={{marginTop:'10%'}} onClick={generateRandomProduct}>Random product ({id})</button>
        <QAsection product_id={id} />
      </div>
    </div>
  )
}


export default App;
