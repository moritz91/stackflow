import { Form, Button } from "semantic-ui-react";
import { Formik, Field } from "formik";
import { InputField } from "../components/formik-fields/InputField";
import { registerSchema } from "@stackflow/common";
import { ErrorMessage } from "../components/ErrorMessage";
import { normalizeErrors } from "../utils/normalizeErrors";
import { RegisterMutationComponent } from "../components/apollo-components";
import { registerMutation } from "../graphql/user/mutation/register";

interface FormValues {
  username: string;
  email: string;
  password: string;
}

export default () => (
  <RegisterMutationComponent mutation={registerMutation}>
    {mutate => (
      <Formik<FormValues>
        initialValues={{ username: "", email: "", password: "" }}
        onSubmit={async (input, { setErrors, setSubmitting }) => {
          const response = await mutate({
            variables: { input }
          });
          if (response && response.data && response.data.register.errors) {
            return setErrors(normalizeErrors(response.data.register.errors));
          } else {
            // navigate screen
          }
        }}
        validationSchema={registerSchema}
        validateOnBlur={false}
        validateOnChange={false}
      >
        {({ errors, handleSubmit }) => {
          <Form onSubmit={handleSubmit}>
            <Field
              name="username"
              label="Username"
              placeholder="Username"
              component={InputField}
            />
            <Field
              name="email"
              label="Email"
              placeholder="Email"
              component={InputField}
            />
            <Field
              name="password"
              label="Password"
              placeholder="Password"
              component={InputField}
            />
            <ErrorMessage errors={errors} />
            <Button type="submit">Create Account</Button>
          </Form>;
        }}
      </Formik>
    )}
  </RegisterMutationComponent>
);
