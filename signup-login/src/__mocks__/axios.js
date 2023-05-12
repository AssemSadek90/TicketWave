const mockAxios = {
  get: jest.fn().mockResolvedValue({ data: {} }),
};

// this is the key to fix the axios.create() undefined error!
mockAxios.create = jest.fn(() => mockAxios);

export default mockAxios;
