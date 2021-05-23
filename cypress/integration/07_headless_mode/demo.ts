beforeEach(() => {

  cy
    .request('POST', '/reset')

});

it('creating board, list and tasks', () => {

  cy
    .visit('/')

  cy
    .get('[data-cy=create-board]')
    .click();

  cy
    .get('[data-cy=new-board-input]')
    .type('new board{enter}');

  cy
    .url()
    .should('contain', '/board/')

  cy
    .get('[data-cy=add-list]')
    .click()

  cy
    .get('[data-cy=add-list-input]')
    .type('new list{enter}')

  cy
    .get('[data-cy=list]')
    .should('be.visible')

  cy
    .get('[data-cy=new-task]')
    .click()

  cy
    .get('[data-cy=task-input]')
    .type('buy milk{enter}')

  cy
    .get('[data-cy=task]')
    .should('have.length', 1)

})