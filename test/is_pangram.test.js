const isPangram = require('../src/is_pangram');

describe('isPangram()', () => {
  test('isPangram() is defined', () => {
    expect(isPangram).toBeDefined();
  });

  test('works with a pangram with only lower case', () => {
    // Arrange
    const text = 'the quick brown fox jumps over the lazy dog';
    // Act
    const answer = isPangram(text);
    // Assert
    expect(answer).toEqual(true);
  });

  test('works with "abcdefghijklmnopqrstuvwxyz"', () => {
    // Arrange
    const text = 'abcdefghijklmnopqrstuvwxyz';
    // Act
    const answer = isPangram(text);
    // Assert
    expect(answer).toEqual(true);

  });

  test("missing character 'x'", () => {
    // Arrange
    const text = 'abcdefghijklmnopqrstuvwyz'
    // Act
    const answer = isPangram(text);
    // Assert
    expect(answer).toBe(false);

  });

  test('empty sentence', () => {
    // Arrange
    const text = ''
    // Act
    const answer = isPangram(text);
    // Assert
    expect(answer).toEqual(false);
  });

  test('pangram with underscores instead of spaces works', () => {
    // Arrange
    const text = 'the_quick_brown_fox_jumps_over_the_lazy_dog';
    // Act
    const answer = isPangram(text);
    // Assert
    expect(answer).toEqual(true);

  });

  test('pangram with numbers', () => {
    // Arrange
    const text = '1abcdefghi35jklmnop65q6rst4uvwxy241z08';

    // Act
    const answer = isPangram(text);

    // Assert
    expect(answer).toEqual(true);
  });

  // Write your own test case
  test('returns true for mixed case pangram', () => {
    // Arrange
    const text = "ThE qUiCk BrOWn FoX jUmPs OvEr ThE lAzY dOg";

    // Act
    const answer= isPangram(text);

    // Assert
    expect(answer).toBe(true);

  });
})