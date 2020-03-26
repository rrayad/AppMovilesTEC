export const SimpleClousure = tag => {
  let _val = null;

  return (...args) => (args.length === 1 ? (_val = args[0]) : _val);
};
