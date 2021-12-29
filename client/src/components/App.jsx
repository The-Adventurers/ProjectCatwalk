import React from 'react';
import QAsection from './QA/QAsection.jsx';
import { OverviewApp } from './overview/OverviewApp.jsx';


const App = function () {

  return (
    <div>
      <div>
        <OverviewApp product_id={ 63616 }/>
      </div>
      <div className="QA-section" style={{marginTop: '85vh'}}>
        <QAsection product_id={63609} />
      </div>
    </div>
  )
}


export default App;
