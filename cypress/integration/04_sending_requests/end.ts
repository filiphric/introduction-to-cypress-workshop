beforeEach(() => {

  cy
    .visit('/');

  cy
    .request('POST', '/api/reset')

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
        name: 'board vytvoreny cez api'
      }
    })

  cy
    .get('[data-cy=board-item]')
    .should('have.length', 1)

})