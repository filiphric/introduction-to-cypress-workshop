beforeEach(() => {

  cy
    .visit('/board/23312666956')

})

it('Chaining commands', () => {

  cy
    .get('[data-cy=task]')
    .should('be.visible')

});

it('Multiple assertions', () => {

  cy
    .get('[data-cy=task]')
    .eq(0)
    .should('contain.text', 'bread')

  cy
    .get('[data-cy=task]')
    .eq(1)
    .should('contain.text', 'milk')

})