it.only('Creating first test', () => {

  cy
    .visit('/');

  cy
    .get('[data-cy="create-board"]')
    .click();

  cy
    .get('[data-cy=new-board-input]')
    .type('new board{enter}');

});

it('Checking a task', () => {

  cy
    .visit('/board/3404110071');

  cy
    .get('[data-cy="card-checkbox"]')
    .check();

});

it('Starring a board', () => {

  cy
    .visit('/');

  cy
    .get('[data-cy="star"]')
    .click({force: true})

});