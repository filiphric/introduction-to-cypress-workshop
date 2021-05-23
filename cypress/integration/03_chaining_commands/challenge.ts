beforeEach( () => {

  cy
    .visit(); // ⚠️ add ID of your board

});

// ⚠️ before you do these challenges, create a couple of tasks first 

// #1 try to use .contains() command to select different tasks in our app. try to use contains as a parent and as a child command
it('selecting a task', () => {



});

// #2: assert all texts using .then() command
it('assert task texts', () => {

})

// #3: check a couple of checkboxes and then use .then() and expect() to assert the state of those checkboxes
it('assert task checked state', () => {

});

// #4 try out the difference between .then() and .should(). assert texts of tasks and then reorder them to make test pass 
it('assert task texts using .should() command', () => {

  cy
    .get('[data-cy="task"]', { timeout: 30000 })
    .then( tasks => { // see how behavior changes if you change .then() to .should()

      // check e.g. task texts

    })

});