import { taskFirst, getLast, taskNext } from './0-constants';

describe('tests for 0-constants.js', () => {
  it('taskFirst returns the correct string', () => {
    expect.hasAssertions();
    expect(taskFirst()).toBe('I prefer const when I can.');
  });

  it('getLast returns the correct string', () => {
    expect.hasAssertions();
    expect(getLast()).toBe(' is okay');
  });

  it('taskNext returns the correct string', () => {
    expect.hasAssertions();
    expect(taskNext()).toBe('But sometimes let is okay');
  });
});
