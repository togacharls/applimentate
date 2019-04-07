const mockValidTarget = { value: '19'};
const mockNotValidTarget = { value: 'm'};

export const Mock = {
   mock_9: () => ({
    currentTarget: { ...mockValidTarget },
    key: '9'
  }),
  mock_M: () => ({
    currentTarget: { ...mockNotValidTarget },
    key: 'm',
    preventDefault: () => false
  })
};
