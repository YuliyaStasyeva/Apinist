	describe('matching', function() {
  it('should match', function() {
    val1='домик есть домик';
	val2='домик есть домик';

    expect(val1).toEqual(val2);
  });
});