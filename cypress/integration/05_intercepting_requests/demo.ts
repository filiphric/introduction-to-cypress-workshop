beforeEach( () => {

  cy
    .visit('/');

});

it('creating a new board', () => {

  cy
    .get('[data-cy=create-board]')
    .click()

  cy
    .get('[data-cy=new-board-input]')
    .type('new garden')

  cy
    .contains('Save')
    .click()

});