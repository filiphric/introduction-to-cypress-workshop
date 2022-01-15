beforeEach(() => {

  cy
    .visit('/board/25619573353')

})

it('Chaining commands', () => {

  cy
    .get('[data-cy=card]')
    .should('be.visible')

});

it('Multiple assertions', () => {

  cy
    .get('[data-cy=card]')
    .eq(0)
    .should('contain.text', 'bread')

  cy
    .get('[data-cy=card]')
    .eq(1)
    .should('contain.text', 'milk')

})