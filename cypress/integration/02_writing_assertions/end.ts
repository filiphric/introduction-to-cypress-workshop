beforeEach( () => {

  cy
    .visit('/board/25619573353')

})

it('creating a task', () => {

  cy
    .contains('Add new task')
    .click();

  cy
    .get('[data-cy=task-input]')
    .type('buy milk{enter}')

  cy
    .get('[data-cy=task]')
    .should('be.visible')

})

it('asserting number of tasks', () => {

  cy
    .contains('Add new task')
    .click();

  cy
    .get('[data-cy=task-input]')
    .type('wash dishes{enter}')

  cy
    .get('[data-cy=task]')
    .should('have.length', 2)

})

it('asserting checking a task', () => {

  cy
    .get('[data-cy=task-done]')
    .check()

  cy
    .get('[data-cy=task-title]')
    .should('have.class', 'completed')

  cy
    .get('[data-cy=task-done]')
    .should('be.checked')

})

it('asserting list name', () => {

  cy
    .get('[data-cy=list-name]')
    .should('have.value', 'new list')

})