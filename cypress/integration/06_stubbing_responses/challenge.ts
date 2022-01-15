it('list of two boards from fixture', () => {

  cy
    .visit('/');

  // #1: use the file twoBoards.json from fixtures folder to provide stubbed response

})

it('empty board list', () => {

  cy
    .visit('/');

  // #2: use "body" attribute to stub a response with empty board list

})

it('error when creating a new card', () => {

  cy
    .visit('/');

  // add the correct attribute to simulate a network error

})