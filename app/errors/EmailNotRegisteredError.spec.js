const EmailNotRegisteredError = require('./EmailNotRegisteredError');

describe('EmailNotRegisteredError', () => {
  describe('#getDetails', () => {
    it('should return email object when called.', () => {
      const email = 'm.nafis.2001@gmail.com';
      const err = new EmailNotRegisteredError(email);

      expect(err.details).toEqual({email});
    });
  });
});