import { Form, Button } from "semantic-ui-react";
import { Formik, Field } from "formik";
import { InputField } from "../components/formik-fields/InputField";
import { ErrorMessage } from "../components/ErrorMessage";
import { normalizeErrors } from "../utils/normalizeErrors";
import { CreateStoryMutationComponent } from "../components/apollo-components";
import { createStoryMutation } from "../graphql/story/mutation/createStory";
import Layout from "../components/Layout";

interface FormValues {
  title: string;
  summary: string;
  body: string;
  previewTitle: string;
  previewDescription: string;
  previewImageUrl: string;
  tags: string[];
}

export default () => (
  <Layout title={`New Story:`}>
    <CreateStoryMutationComponent mutation={createStoryMutation}>
      {mutate => (
        <Formik<FormValues>
          initialValues={{
            title: "",
            summary: "",
            body: "",
            previewTitle: "",
            previewDescription: "",
            previewImageUrl: "",
            tags: []
          }}
          onSubmit={async (input, { setErrors, setSubmitting }) => {
            const response = await mutate({
              variables: { input }
            });
            if (
              response &&
              response.data &&
              response.data.createStory.errors &&
              response.data.createStory.errors.length
            ) {
              setSubmitting(false);
              return setErrors(
                normalizeErrors(response.data.createStory.errors)
              );
            } else {
              console.log("Login success");
            }
          }}
          validateOnBlur={false}
          validateOnChange={false}
        >
          {({ errors, handleSubmit, isSubmitting }) => {
            <Form onSubmit={handleSubmit}>
              <Field
                name="title"
                label="Title"
                placeholder="Title"
                component={InputField}
              />
              <Field
                name="summary"
                label="Summary"
                placeholder="Summary"
                component={InputField}
              />
              <Field
                name="body"
                label="Body"
                placeholder="Body"
                component={InputField}
              />
              <Field
                name="previewTitle"
                label="Preview Title"
                placeholder="Preview Title"
                component={InputField}
              />
              <Field
                name="previewDescription"
                label="Preview Description"
                placeholder="Preview Description"
                component={InputField}
              />
              <Field
                name="previewImageUrl"
                label="Preview Image"
                placeholder="Preview Image"
                component={InputField}
              />
              <Field
                name="tags"
                label="Tags"
                placeholder="Tags"
                component={InputField}
              />
              <ErrorMessage errors={errors as any} />
              <Button disabled={isSubmitting} type="submit">
                Post Story
              </Button>
            </Form>;
          }}
        </Formik>
      )}
    </CreateStoryMutationComponent>
  </Layout>
);
