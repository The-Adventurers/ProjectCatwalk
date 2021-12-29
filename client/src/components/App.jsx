import React from 'react';
import RelatedProductList from './relatedProducts/RelatedProductList.jsx';
import QAsection from './QA/QAsection.jsx';
import { OverviewApp } from './overview/OverviewApp.jsx';


const App = function () {

  const hardCodedID = 63616;

  return (
    <div>
      <div>
        <OverviewApp product_id={ hardCodedID }/>
      </div>
      <div>
        <RelatedProductList product_id={ hardCodedID }/>
      </div>
      <div className="QA-section" style={{marginTop: '85vh'}}>
        <QAsection product_id={ hardCodedID } />
      </div>
    </div>
  )
}


export default App;
