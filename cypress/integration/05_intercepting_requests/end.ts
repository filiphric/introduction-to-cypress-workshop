beforeEach( () => {

  cy
    .intercept('POST', '/api/boards')
    .as('createBoard')

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
    .contains('Create board')
    .click()

  cy
    .wait('@createBoard').then( board => {

      expect(board.request.body.name).to.eq('new garden')
      expect(board.response.statusCode).to.eq(201)
      expect(board.response.body.name).to.eq('new garden')
      expect(board.response.body.starred).to.be.false;
      assert.isString(board.response.body.created)
      assert.isNumber(board.response.body.id)

    })

});