// export const handleChange = (event, setName, setNumber)  => {
//   const { name, value } = event.target;
//   if (name === 'name') {
//     setName(value);
//   } else if (name === 'number') {
//     setNumber(value);
//   }
// };

export const handleChange = (event, setName, setNumber) => {
  const { name, value } = event.target;
  name === 'name' ? setName(value) : setNumber(value);
};
