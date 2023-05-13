import {
  isValidSession,
  getUserID,
  getEmail,
  getUsername,
  getFirstName,
  getLastName,
  getCredentials,
} from './Credentials';
import jwt from 'jwt-decode';
import server from '../../../../Data/server';

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
};
global.localStorage = localStorageMock;

// Mock server
jest.mock('../../../../Data/server', () => ({
  get: jest.fn().mockResolvedValue({ data: {} }),
}));

describe('isValidSession', () => {
  it('should return true if accessToken is present in localStorage', () => {
    localStorageMock.getItem.mockReturnValue('access-token');
    const result = isValidSession();
    expect(result).toBe(true);
    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      'isValidSession',
      true
    );
  });

  it('should return false if accessToken is not present in localStorage', () => {
    localStorageMock.getItem.mockReturnValue(null);
    const result = isValidSession();
    expect(result).toBe(false);
    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      'isValidSession',
      false
    );
  });
});

describe('getUserID', () => {
  it('should decode the token and return the user ID', () => {
    const accessToken = 'access-token';
    localStorageMock.getItem.mockReturnValue(accessToken);
    const jwtDecodeMock = jest
      .spyOn(jwt, 'default')
      .mockReturnValue({ user_id: 'user123' });

    const result = getUserID();

    expect(jwtDecodeMock).toHaveBeenCalledWith(accessToken);
    expect(localStorageMock.setItem).toHaveBeenCalledWith('userID', 'user123');
    expect(result).toBe('user123');

    jwtDecodeMock.mockRestore();
  });

  it('should handle errors when decoding the token', () => {
    const accessToken = 'access-token';
    localStorageMock.getItem.mockReturnValue(accessToken);
    const jwtDecodeMock = jest.spyOn(jwt, 'default').mockImplementation(() => {
      throw new Error('Decoding error');
    });
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();

    const result = getUserID();

    expect(jwtDecodeMock).toHaveBeenCalledWith(accessToken);
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'Error decoding JWT token:',
      expect.any(Error)
    );
    expect(result).toBeUndefined();

    jwtDecodeMock.mockRestore();
    consoleErrorSpy.mockRestore();
  });
});
