it('creating a new board', () => {

  cy
    .intercept('GET', '/api/boards', {
      fixture: 'threeBoards'
    })
    .as('boardList')

  cy
    .visit('/');

})

it('error message when creating a board', () => {

  cy
    .intercept('POST', '/api/boards', {
      forceNetworkError: true
    })
    .as('boardCreate')

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

  cy
    .get('[data-cy="notification-message"]')
    .should('be.visible')

})