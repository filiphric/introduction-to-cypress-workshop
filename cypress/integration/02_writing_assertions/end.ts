beforeEach( () => {

  cy
    .visit('/board/25619573353')

})

it('creating a card', () => {

  cy
    .get('[data-cy="new-card"]')
    .click();

  cy
    .get('[data-cy=new-card-input]')
    .type('buy milk{enter}')

  cy
    .get('[data-cy=card]')
    .should('be.visible')

})

it('asserting number of cards', () => {

  cy
    .get('[data-cy="new-card"]')
    .click();

  cy
    .get('[data-cy=new-card-input]')
    .type('wash dishes{enter}')

  cy
    .get('[data-cy=card]')
    .should('have.length', 2)

})

it('asserting checking a card', () => {

  cy
    .get('[data-cy=card-checkbox]')
    .check()

  cy
    .get('[data-cy=card-checkbox]')
    .should('be.checked')

})

it.only('asserting list name', () => {

  cy
    .get('[data-cy=list-name]')
    .should('have.value', 'new list')

})