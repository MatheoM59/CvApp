export const Name = ({ data }) => {
  const personal = data.personal;
  if (personal.name && personal.firstName) {
    return <h1>{personal.name + ' ' + personal.firstName}</h1>;
  } else if (personal.name) {
    return <h1>{personal.name}</h1>;
  } else if (personal.firstName) {
    return <h1>{personal.firstName}</h1>;
  }
  return 'Your Name';
};
