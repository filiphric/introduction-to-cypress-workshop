beforeEach(() => {

  cy
    .request('POST', '/api/reset')

});

it('creating board, list and card', () => {

  cy
    .visit('/')

  cy
    .get('[data-cy=first-board]')
    .type('new board{enter}');

  cy
    .url()
    .should('contain', '/board/')

  cy
    .get('[data-cy=add-list-input]')
    .type('new list{enter}')

  cy
    .get('[data-cy=list]')
    .should('be.visible')

  cy
    .get('[data-cy=new-card]')
    .click()

  cy
    .get('[data-cy=new-card-input]')
    .type('buy milk{enter}')

  cy
    .get('[data-cy=card]')
    .should('have.length', 1)

})