	describe('matching', function() {
  it('should match', function() {
    val1='домик есть домик, но квартира лучше';
	

    expect(val1).toMatch('домик есть домик');
  });
});