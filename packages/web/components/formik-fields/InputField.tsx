import { Form } from "semantic-ui-react";

export const InputField = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  ...props
}) => {
  const hasError = !!(touched[field.name] && errors[field.name]);

  return (
    <Form.Field error={hasError}>
      <label>{label}</label>
      <input error={hasError} {...field} {...props} />
    </Form.Field>
  );
};
