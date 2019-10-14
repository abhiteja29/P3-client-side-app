QUnit.test('TEST add', assert => {
  assert.equal(speed(10, 5), 2, 'correct output')
  assert.equal(speed(20, 5), 6, 'In-correct output')
  assert.equal(speed(4, 5), 0.8, 'correct output')
  assert.equal(speed(36,6), 6, 'correct output')
  assert.equal(speed(4, 0), 5, 'correct output')
})

