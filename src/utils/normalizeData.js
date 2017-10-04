export default data => data.reduce((prev, current) => ({
  ...prev,
  [current.id]: {
    ...current,
  },
}), {});
