const mockValidTarget = { value: '19'};
const mockNotValidTarget = { value: 'm'};

export const Mock = {
   mock_9: () => ({
    target: { ...mockValidTarget },
    key: '9'
  }),
  mock_M: () => ({
    target: { ...mockNotValidTarget },
    key: 'm',
    preventDefault: () => false
  })
};
