import { Message } from "semantic-ui-react";
import * as React from "react";

export const ErrorMessage = ({
  errors
}: {
  errors: { [key: string]: string };
}) => {
  const entries = Object.entries(errors);
  if (!entries.length) {
    return null;
  }

  return (
    <Message negative>
      {entries.map(([path, message]) => (
        <React.Fragment key={`${path}-${message}`}>
          <Message.Header>{path}</Message.Header>
          <p>{message}</p>
        </React.Fragment>
      ))}
    </Message>
  );
};
