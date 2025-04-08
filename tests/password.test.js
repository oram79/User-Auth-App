const { validatePassword } = require('../utils/validators');

describe('Password Validation', () => {
  test('should reject too short passwords', () => {
    expect(validatePassword('aB1!')).toBe(false);
  });

  test('should reject missing symbol', () => {
    expect(validatePassword('Password1')).toBe(false);
  });

  test('should accept strong password', () => {
    expect(validatePassword('Strong1!')).toBe(true);
  });
});
