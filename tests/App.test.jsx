import React from 'react';
import { screen, render } from '@testing-library/react';
import { test } from '@jest/globals';
import App from '../client/src/components/App';


test('EXPECTED: App should render \'Hello World!\'', () => {
  render(<App />);
  // screen.getByText('Q');
});

// test components if it is rendered
// test('it render without crashing', () => {
//   // render(<QAsection />); ---> get Component
// });
//test QA from curtain prodct ID props
  //check if certain Id which we already know amount of q and answer

    // check a number of render for Q and a for default

    //should not show button for mroe answer or question if no more

    //if no question should show only a button to add question



    //check order if it arranged by helpfulness onQ

    //check order if it arranged by seller then helpfulness on answer



//test functionality
  //click then show more q

  //click to show more answer

  //click cause increasing in helpfulness vote
  //second click on same helpfulness vote on both question and answer should not increase a vote but decrease  --> toggle

  //click add answer and question!! >> to be continue



