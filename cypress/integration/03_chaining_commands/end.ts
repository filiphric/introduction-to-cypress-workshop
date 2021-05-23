beforeEach(() => {

  cy
    .visit('/board/23312666956')

})

it('Chaining commands', () => {

  cy
    .contains('milk')

  cy
    .get('[data-cy=list]')
    .eq(1)
    .contains('milk')

});

it('Multiple assertions', () => {

  cy
    .get('[data-cy=task]')
    .should( item => {
      if (item.length !== 3) {
        throw new Error('Not enough elements!')
      }
      expect(item[0]).to.contain.text('bread')
      expect(item[1]).to.contain.text('milk')
    })

})