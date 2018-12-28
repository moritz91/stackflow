export type Maybe<T> = T | null;

export interface CreateResponseInput {
  authorId: string;

  storyId: string;

  body: string;
}

export interface CreateStoryInput {
  title: string;

  summary: string;

  body: string;

  previewTitle: string;

  previewDescription: string;

  previewImageUrl?: Maybe<string>;

  tags: string[];
}

export interface LoginInput {
  usernameOrEmail: string;

  password: string;
}

export interface RegisterInput {
  username: string;

  email: string;

  password: string;
}

// ====================================================
// Documents
// ====================================================

export type CreateResponseMutationVariables = {
  input: CreateResponseInput;
};

export type CreateResponseMutationMutation = {
  __typename?: "Mutation";

  createResponse: CreateResponseMutationCreateResponse;
};

export type CreateResponseMutationCreateResponse = {
  __typename?: "CreateResponseResponse";

  ok: boolean;
};

export type CreateStoryMutationVariables = {
  input: CreateStoryInput;
};

export type CreateStoryMutationMutation = {
  __typename?: "Mutation";

  createStory: CreateStoryMutationCreateStory;
};

export type CreateStoryMutationCreateStory = {
  __typename?: "CreateStoryResponse";

  story: Maybe<CreateStoryMutationStory>;

  errors: Maybe<CreateStoryMutationErrors[]>;
};

export type CreateStoryMutationStory = StoryInfoFragment;

export type CreateStoryMutationErrors = {
  __typename?: "Error";

  path: string;

  message: string;
};

export type ListStoriesQueryVariables = {};

export type ListStoriesQueryQuery = {
  __typename?: "Query";

  listStories: ListStoriesQueryListStories[];
};

export type ListStoriesQueryListStories = {
  __typename?: "Story";

  author: ListStoriesQueryAuthor;
} & StoryInfoFragment;

export type ListStoriesQueryAuthor = {
  __typename?: "User";

  username: string;
};

export type LoginMutationVariables = {
  input: LoginInput;
};

export type LoginMutationMutation = {
  __typename?: "Mutation";

  login: LoginMutationLogin;
};

export type LoginMutationLogin = {
  __typename?: "LoginResponse";

  user: Maybe<LoginMutationUser>;

  errors: Maybe<LoginMutationErrors[]>;
};

export type LoginMutationUser = {
  __typename?: "User";

  username: string;

  email: string;
};

export type LoginMutationErrors = {
  __typename?: "Error";

  path: string;

  message: string;
};

export type RegisterMutationVariables = {
  input: RegisterInput;
};

export type RegisterMutationMutation = {
  __typename?: "Mutation";

  register: RegisterMutationRegister;
};

export type RegisterMutationRegister = {
  __typename?: "RegisterResponse";

  errors: Maybe<RegisterMutationErrors[]>;
};

export type RegisterMutationErrors = {
  __typename?: "Error";

  path: string;

  message: string;
};

export type MeQueryVariables = {};

export type MeQueryQuery = {
  __typename?: "Query";

  me: Maybe<MeQueryMe>;
};

export type MeQueryMe = {
  __typename?: "User";

  email: string;

  username: string;
};

export type ResponseInfoFragment = {
  __typename?: "Story";

  id: string;

  authorId: string;

  body: string;

  claps: Maybe<number>;
};

export type StoryInfoFragment = {
  __typename?: "Story";

  id: string;

  authorId: string;

  title: string;

  summary: string;

  body: string;

  previewTitle: string;

  previewDescription: string;

  previewImageUrl: Maybe<string>;

  tags: string[];
};

import * as ReactApollo from "react-apollo";
import * as React from "react";

import gql from "graphql-tag";

// ====================================================
// Fragments
// ====================================================

export const ResponseInfoFragmentDoc = gql`
  fragment ResponseInfo on Story {
    id
    authorId
    body
    claps
  }
`;

export const StoryInfoFragmentDoc = gql`
  fragment StoryInfo on Story {
    id
    authorId
    title
    summary
    body
    previewTitle
    previewDescription
    previewImageUrl
    tags
  }
`;

// ====================================================
// Components
// ====================================================

export const CreateResponseMutationDocument = gql`
  mutation CreateResponseMutation($input: CreateResponseInput!) {
    createResponse(input: $input) {
      ok
    }
  }
`;
export class CreateResponseMutationComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      CreateResponseMutationMutation,
      CreateResponseMutationVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<
        CreateResponseMutationMutation,
        CreateResponseMutationVariables
      >
        mutation={CreateResponseMutationDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type CreateResponseMutationProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<
    CreateResponseMutationMutation,
    CreateResponseMutationVariables
  >
> &
  TChildProps;
export type CreateResponseMutationMutationFn = ReactApollo.MutationFn<
  CreateResponseMutationMutation,
  CreateResponseMutationVariables
>;
export function CreateResponseMutationHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        CreateResponseMutationMutation,
        CreateResponseMutationVariables,
        CreateResponseMutationProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    CreateResponseMutationMutation,
    CreateResponseMutationVariables,
    CreateResponseMutationProps<TChildProps>
  >(CreateResponseMutationDocument, operationOptions);
}
export const CreateStoryMutationDocument = gql`
  mutation CreateStoryMutation($input: CreateStoryInput!) {
    createStory(input: $input) {
      story {
        ...StoryInfo
      }
      errors {
        path
        message
      }
    }
  }

  ${StoryInfoFragmentDoc}
`;
export class CreateStoryMutationComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      CreateStoryMutationMutation,
      CreateStoryMutationVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<
        CreateStoryMutationMutation,
        CreateStoryMutationVariables
      >
        mutation={CreateStoryMutationDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type CreateStoryMutationProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<
    CreateStoryMutationMutation,
    CreateStoryMutationVariables
  >
> &
  TChildProps;
export type CreateStoryMutationMutationFn = ReactApollo.MutationFn<
  CreateStoryMutationMutation,
  CreateStoryMutationVariables
>;
export function CreateStoryMutationHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        CreateStoryMutationMutation,
        CreateStoryMutationVariables,
        CreateStoryMutationProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    CreateStoryMutationMutation,
    CreateStoryMutationVariables,
    CreateStoryMutationProps<TChildProps>
  >(CreateStoryMutationDocument, operationOptions);
}
export const ListStoriesQueryDocument = gql`
  query ListStoriesQuery {
    listStories {
      ...StoryInfo
      author {
        username
      }
    }
  }

  ${StoryInfoFragmentDoc}
`;
export class ListStoriesQueryComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<ListStoriesQueryQuery, ListStoriesQueryVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Query<ListStoriesQueryQuery, ListStoriesQueryVariables>
        query={ListStoriesQueryDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type ListStoriesQueryProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<ListStoriesQueryQuery, ListStoriesQueryVariables>
> &
  TChildProps;
export function ListStoriesQueryHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        ListStoriesQueryQuery,
        ListStoriesQueryVariables,
        ListStoriesQueryProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    ListStoriesQueryQuery,
    ListStoriesQueryVariables,
    ListStoriesQueryProps<TChildProps>
  >(ListStoriesQueryDocument, operationOptions);
}
export const LoginMutationDocument = gql`
  mutation LoginMutation($input: LoginInput!) {
    login(input: $input) {
      user {
        username
        email
      }
      errors {
        path
        message
      }
    }
  }
`;
export class LoginMutationComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<LoginMutationMutation, LoginMutationVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<LoginMutationMutation, LoginMutationVariables>
        mutation={LoginMutationDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type LoginMutationProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<LoginMutationMutation, LoginMutationVariables>
> &
  TChildProps;
export type LoginMutationMutationFn = ReactApollo.MutationFn<
  LoginMutationMutation,
  LoginMutationVariables
>;
export function LoginMutationHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        LoginMutationMutation,
        LoginMutationVariables,
        LoginMutationProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    LoginMutationMutation,
    LoginMutationVariables,
    LoginMutationProps<TChildProps>
  >(LoginMutationDocument, operationOptions);
}
export const RegisterMutationDocument = gql`
  mutation RegisterMutation($input: RegisterInput!) {
    register(input: $input) {
      errors {
        path
        message
      }
    }
  }
`;
export class RegisterMutationComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      RegisterMutationMutation,
      RegisterMutationVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<RegisterMutationMutation, RegisterMutationVariables>
        mutation={RegisterMutationDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type RegisterMutationProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<RegisterMutationMutation, RegisterMutationVariables>
> &
  TChildProps;
export type RegisterMutationMutationFn = ReactApollo.MutationFn<
  RegisterMutationMutation,
  RegisterMutationVariables
>;
export function RegisterMutationHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        RegisterMutationMutation,
        RegisterMutationVariables,
        RegisterMutationProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    RegisterMutationMutation,
    RegisterMutationVariables,
    RegisterMutationProps<TChildProps>
  >(RegisterMutationDocument, operationOptions);
}
export const MeQueryDocument = gql`
  query meQuery {
    me {
      email
      username
    }
  }
`;
export class MeQueryComponent extends React.Component<
  Partial<ReactApollo.QueryProps<MeQueryQuery, MeQueryVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<MeQueryQuery, MeQueryVariables>
        query={MeQueryDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type MeQueryProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<MeQueryQuery, MeQueryVariables>
> &
  TChildProps;
export function MeQueryHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        MeQueryQuery,
        MeQueryVariables,
        MeQueryProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    MeQueryQuery,
    MeQueryVariables,
    MeQueryProps<TChildProps>
  >(MeQueryDocument, operationOptions);
}
