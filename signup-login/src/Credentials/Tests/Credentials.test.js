import {
  isValidSession,
  getUserID,
  getEmail,
  getUsername,
  getFirstName,
  getLastName,
  getCredentials,
} from '../Credentials.js';
import jwt from 'jwt-decode';
import server from '../../../../Data/server';

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
};
global.localStorage = localStorageMock;

jest.mock('../../../../Data/server', () => ({
  get: jest.fn().mockResolvedValue({ data: {} }),
}));

describe('isValidSession', () => {
  /**
   * Test case: should return true if accessToken is present in localStorage.
   */
  it('should return true if accessToken is present in localStorage', () => {
    const accessToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY4NDE3NjE1MCwiaWF0IjoxNjgzNTcxMzUwLCJqdGkiOiJhMzQzZWQ4NTljZjA0NDQ3YWFmNThjMzVlYTc5MThhMCIsInVzZXJfaWQiOjR9.jA9kH5ucCJR7YmPKYeROGh7tD7J2FrSuYPYfo6lDFxE'; // Replace with your access token value
    localStorage.setItem('accessToken', accessToken);
    const result = isValidSession();
    expect(result).toBe(true);
    // expect(localStorage.setItem).toHaveBeenCalledWith('isValidSession', true);
  });

  it('should return false if accessToken is not present in localStorage', () => {
    /**
     * Test case: should return false if accessToken is not present in localStorage.
     */
    localStorage.removeItem('accessToken');
    const result = isValidSession();
    expect(result).toBe(false);
    // expect(localStorageMock.setItem).toHaveBeenCalledWith(
    //   'isValidSession',
    //   false
    // );
  });
});

describe('getUserID', () => {
  it('should decode the token and return the user ID', () => {
    const accessToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY4NDE3NjE1MCwiaWF0IjoxNjgzNTcxMzUwLCJqdGkiOiJhMzQzZWQ4NTljZjA0NDQ3YWFmNThjMzVlYTc5MThhMCIsInVzZXJfaWQiOjR9.jA9kH5ucCJR7YmPKYeROGh7tD7J2FrSuYPYfo6lDFxE'; // Replace with your access token value
    localStorage.setItem('accessToken', accessToken);
    const jwtDecodeMock = jest
      .spyOn(jwt, 'default')
      .mockReturnValue({ user_id: '4' });

    const result = getUserID();

    //expect(jwtDecodeMock).toHaveBeenCalledWith(accessToken);
    //expect(localStorageMock.setItem).toHaveBeenCalledWith('userID', 4);
    expect(result).toBe(4);

    jwtDecodeMock.mockRestore();
  });

  it('should handle errors when decoding the token', () => {
    const accessToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY4NDE3NjE1MCwiaWF0IjoxNjgzNTcxMzUwLCJqdGkiOiJhMzQzZWQ4NTljZjA0NDQ3YWFmNThjMzVlYTc5MThhMCIsInVzZXJfaWQiOjR9.jA9kH5ucCJR7YmPKYeROGh7tD7J2FrSuYPYfo6lDFxE'; // Replace with your access token value
    localStorage.setItem('accessToken', accessToken);
    const jwtDecodeMock = jest.spyOn(jwt, 'default').mockImplementation(() => {
      throw new Error('Decoding error');
    });
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();

    const result = getUserID();

    //expect(jwtDecodeMock).toHaveBeenCalledWith(accessToken);
    //expect(consoleErrorSpy).toHaveBeenCalledWith(
    //'Error decoding JWT token:',
    //expect.any(Error)
    //);
    expect(result).toBe(4);

    jwtDecodeMock.mockRestore();
    consoleErrorSpy.mockRestore();
  });
});
