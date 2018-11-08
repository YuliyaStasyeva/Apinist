	array1=['гуси, гуси','га-га-га'];
	array2=['гуси, гуси','есть хотите'];
	describe('matching', function() {
  it('should match', function() {
    
	    expect(array1).not.toEqual(array2);
  });
 
});
//expect(array).toBeArrayOfStrings();