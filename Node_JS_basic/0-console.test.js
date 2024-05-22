const displayMessage = require('./0-console');

test('prints the correct message to STDOUT', () => {
  const message = "Hello NodeJS!";
  const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

  displayMessage(message);

  expect(logSpy).toHaveBeenCalledWith(message);

  logSpy.mockRestore();
});
