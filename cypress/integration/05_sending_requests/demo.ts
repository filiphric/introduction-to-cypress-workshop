beforeEach(() => {

  cy
    .visit('/board/23312666956')

})

it('Chaining commands', () => {

  cy
    .get('[data-cy=task]')
    .should('be.visible')

});