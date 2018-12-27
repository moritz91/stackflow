import { Form, Button } from "semantic-ui-react";
import { Formik, Field } from "formik";
import { InputField } from "../components/formik-fields/InputField";
import { ErrorMessage } from "../components/ErrorMessage";
import { normalizeErrors } from "../utils/normalizeErrors";
import { LoginMutationComponent } from "../components/apollo-components";
import { loginMutation } from "../graphql/user/mutation/login";
import Router from "next/router";

interface FormValues {
  usernameOrEmail: string;
  password: string;
}

export default () => (
  <LoginMutationComponent mutation={loginMutation}>
    {mutate => (
      <Formik<FormValues>
        initialValues={{ usernameOrEmail: "", password: "" }}
        onSubmit={async (input, { setErrors, setSubmitting }) => {
          const response = await mutate({
            variables: { input }
          });
          if (
            response &&
            response.data &&
            response.data.login.errors &&
            response.data.login.errors.length
          ) {
            setSubmitting(false);
            return setErrors(normalizeErrors(response.data.login.errors));
          } else {
            Router.push("/");
          }
        }}
        validateOnBlur={false}
        validateOnChange={false}
      >
        {({ errors, handleSubmit, isSubmitting }) => {
          <Form onSubmit={handleSubmit}>
            <Field
              name="usernameOrEmail"
              label="Username or Email"
              placeholder="Username or Email"
              component={InputField}
            />
            <Field
              name="password"
              label="Password"
              placeholder="Password"
              component={InputField}
            />
            <ErrorMessage errors={errors} />
            <Button disabled={isSubmitting} type="submit">
              Login
            </Button>
          </Form>;
        }}
      </Formik>
    )}
  </LoginMutationComponent>
);
