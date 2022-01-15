beforeEach(() => {

  cy
    .request('POST', '/api/reset')

  cy
    .visit('/');

});

it('creating new board', () => {

  cy
    .get('[data-cy=board-item]')
    .should('have.length', 0)

  cy
    .request({
      method: 'POST',
      url: '/api/boards',
      body: {
        name: 'board created api'
      }
    })

  cy.reload()

  cy
    .get('[data-cy=board-item]')
    .should('have.length', 1)

})