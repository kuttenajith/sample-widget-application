export default function(values) {
  const errors = {};
  const requiredFields = [
    'Name',
    'number',
    'email',
    'Category',
    'notes',
    'age'
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  if(
    values.number && 
    !/^(0|[1-9][0-9]{9})$/i.test(values.number)
  ){
    errors.number = "Invalid phone number, must be 10 digits"
  }
  if(
    values.age < 18
  ){
    errors.age = "should be greater than 18"
  }
  return errors;
}
