it('creating a new board', () => {

  cy
    .visit('/');

})

it('error message when creating a board', () => {

  cy
    .visit('/');

  cy
    .get('[data-cy=create-board]')
    .click()

  cy
    .get('[data-cy=new-board-input]')
    .type('new garden')

  cy
    .contains('Create board')
    .click()

})