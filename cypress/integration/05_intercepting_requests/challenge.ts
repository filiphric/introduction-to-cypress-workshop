beforeEach( () => {

  cy
    .visit(); // ⚠️ add ID of your board

});

it('creating a card', () => {

  // #1: using your test, create a new card (but use UI, not request) and intercept 
  // the request that is called when a new board is created. try to write a couple of tests
  // for the response

})

it('deleting a list', () => {

  // #2: create a new list and then delete it using UI. intercept the request and test
  // the status code

})

it('checking card', () => {

  // #3: using your test, check a card and intercept a request
  //  write a couple of tests for request and response

})