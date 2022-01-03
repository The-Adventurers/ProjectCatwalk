import React, { useState, useEffect} from 'react';
import QAsection from './QA/QAsection.jsx';
import { OverviewApp } from './overview/OverviewApp.jsx';

/*  PLEASE READ* QAsection is currently getting product name by sending request to product route for Only component testing purpose, will remove both product_name requestion and generate random product_id when all components are connected - QAsection component takes in product_id and product_name as input params */
import { getProducts } from '../shared/api.js';

const App = function () {
  /** ------------------USE for generate randon product_id to test component ---------------*/
  const [id, setID] = useState(63609);
  const [name, setProductName] = useState('Camo Onesie')
  const generateRandomProduct = () => {
    let RandomProduct_id = Math.floor(Math.random() * 6) + 63609;
    setID(RandomProduct_id);
  }
  useEffect(()=>{
    getProducts({product_id: id}).then(res=> setProductName(res.data.name));
  },[id])
  /**------------------ end of component testing input param for QAsection ----------------**/

  return (
    <div id="main">
      <div>
        {/* <OverviewApp product_id={ 63616}/> */}
      </div>
      <div className="QA-section">
        <button onClick={generateRandomProduct}>Random product ({id})</button>
        <QAsection product_id={id} product_name={name} />
      </div>
    </div>
  )
}


export default App;
