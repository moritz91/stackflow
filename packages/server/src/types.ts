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
// Types
// ====================================================

export interface Query {
  listStories: Story[];

  me?: Maybe<User>;
}

export interface Story {
  id: string;

  authorId: string;

  author: User;

  title: string;

  summary: string;

  body: string;

  previewTitle: string;

  previewDescription: string;

  previewImageUrl?: Maybe<string>;

  claps?: Maybe<number>;

  tags: string[];
}

export interface User {
  id: string;

  username: string;

  email: string;
}

export interface Mutation {
  createResponse: CreateResponseResponse;

  createStory: CreateStoryResponse;

  login: LoginResponse;

  logout: boolean;

  register: RegisterResponse;
}

export interface CreateResponseResponse {
  ok: boolean;
}

export interface CreateStoryResponse {
  errors?: Maybe<Error[]>;

  story?: Maybe<Story>;
}

export interface Error {
  path: string;

  message: string;
}

export interface LoginResponse {
  errors?: Maybe<Error[]>;

  user?: Maybe<User>;
}

export interface RegisterResponse {
  errors?: Maybe<Error[]>;
}

// ====================================================
// Arguments
// ====================================================

export interface CreateResponseMutationArgs {
  input: CreateResponseInput;
}
export interface CreateStoryMutationArgs {
  input: CreateStoryInput;
}
export interface LoginMutationArgs {
  input: LoginInput;
}
export interface RegisterMutationArgs {
  input: RegisterInput;
}

import { GraphQLResolveInfo } from "graphql";

import { MyContext } from "./context";

export type Resolver<Result, Parent = {}, Context = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export interface ISubscriptionResolverObject<Result, Parent, Context, Args> {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result> | Promise<AsyncIterator<R | Result>>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
}

export type SubscriptionResolver<
  Result,
  Parent = {},
  Context = {},
  Args = {}
> =
  | ((
      ...args: any[]
    ) => ISubscriptionResolverObject<Result, Parent, Context, Args>)
  | ISubscriptionResolverObject<Result, Parent, Context, Args>;

export type TypeResolveFn<Types, Parent = {}, Context = {}> = (
  parent: Parent,
  context: Context,
  info: GraphQLResolveInfo
) => Maybe<Types>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult, TArgs = {}, TContext = {}> = (
  next: NextResolverFn<TResult>,
  source: any,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export namespace QueryResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = {}> {
    listStories?: ListStoriesResolver<Story[], TypeParent, Context>;

    me?: MeResolver<Maybe<User>, TypeParent, Context>;
  }

  export type ListStoriesResolver<
    R = Story[],
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type MeResolver<
    R = Maybe<User>,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace StoryResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = Story> {
    id?: IdResolver<string, TypeParent, Context>;

    authorId?: AuthorIdResolver<string, TypeParent, Context>;

    author?: AuthorResolver<User, TypeParent, Context>;

    title?: TitleResolver<string, TypeParent, Context>;

    summary?: SummaryResolver<string, TypeParent, Context>;

    body?: BodyResolver<string, TypeParent, Context>;

    previewTitle?: PreviewTitleResolver<string, TypeParent, Context>;

    previewDescription?: PreviewDescriptionResolver<
      string,
      TypeParent,
      Context
    >;

    previewImageUrl?: PreviewImageUrlResolver<
      Maybe<string>,
      TypeParent,
      Context
    >;

    claps?: ClapsResolver<Maybe<number>, TypeParent, Context>;

    tags?: TagsResolver<string[], TypeParent, Context>;
  }

  export type IdResolver<
    R = string,
    Parent = Story,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type AuthorIdResolver<
    R = string,
    Parent = Story,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type AuthorResolver<
    R = User,
    Parent = Story,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type TitleResolver<
    R = string,
    Parent = Story,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type SummaryResolver<
    R = string,
    Parent = Story,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type BodyResolver<
    R = string,
    Parent = Story,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type PreviewTitleResolver<
    R = string,
    Parent = Story,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type PreviewDescriptionResolver<
    R = string,
    Parent = Story,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type PreviewImageUrlResolver<
    R = Maybe<string>,
    Parent = Story,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ClapsResolver<
    R = Maybe<number>,
    Parent = Story,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type TagsResolver<
    R = string[],
    Parent = Story,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace UserResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = User> {
    id?: IdResolver<string, TypeParent, Context>;

    username?: UsernameResolver<string, TypeParent, Context>;

    email?: EmailResolver<string, TypeParent, Context>;
  }

  export type IdResolver<
    R = string,
    Parent = User,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type UsernameResolver<
    R = string,
    Parent = User,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type EmailResolver<
    R = string,
    Parent = User,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace MutationResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = {}> {
    createResponse?: CreateResponseResolver<
      CreateResponseResponse,
      TypeParent,
      Context
    >;

    createStory?: CreateStoryResolver<CreateStoryResponse, TypeParent, Context>;

    login?: LoginResolver<LoginResponse, TypeParent, Context>;

    logout?: LogoutResolver<boolean, TypeParent, Context>;

    register?: RegisterResolver<RegisterResponse, TypeParent, Context>;
  }

  export type CreateResponseResolver<
    R = CreateResponseResponse,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, CreateResponseArgs>;
  export interface CreateResponseArgs {
    input: CreateResponseInput;
  }

  export type CreateStoryResolver<
    R = CreateStoryResponse,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, CreateStoryArgs>;
  export interface CreateStoryArgs {
    input: CreateStoryInput;
  }

  export type LoginResolver<
    R = LoginResponse,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, LoginArgs>;
  export interface LoginArgs {
    input: LoginInput;
  }

  export type LogoutResolver<
    R = boolean,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type RegisterResolver<
    R = RegisterResponse,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, RegisterArgs>;
  export interface RegisterArgs {
    input: RegisterInput;
  }
}

export namespace CreateResponseResponseResolvers {
  export interface Resolvers<
    Context = MyContext,
    TypeParent = CreateResponseResponse
  > {
    ok?: OkResolver<boolean, TypeParent, Context>;
  }

  export type OkResolver<
    R = boolean,
    Parent = CreateResponseResponse,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace CreateStoryResponseResolvers {
  export interface Resolvers<
    Context = MyContext,
    TypeParent = CreateStoryResponse
  > {
    errors?: ErrorsResolver<Maybe<Error[]>, TypeParent, Context>;

    story?: StoryResolver<Maybe<Story>, TypeParent, Context>;
  }

  export type ErrorsResolver<
    R = Maybe<Error[]>,
    Parent = CreateStoryResponse,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type StoryResolver<
    R = Maybe<Story>,
    Parent = CreateStoryResponse,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace ErrorResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = Error> {
    path?: PathResolver<string, TypeParent, Context>;

    message?: MessageResolver<string, TypeParent, Context>;
  }

  export type PathResolver<
    R = string,
    Parent = Error,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type MessageResolver<
    R = string,
    Parent = Error,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace LoginResponseResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = LoginResponse> {
    errors?: ErrorsResolver<Maybe<Error[]>, TypeParent, Context>;

    user?: UserResolver<Maybe<User>, TypeParent, Context>;
  }

  export type ErrorsResolver<
    R = Maybe<Error[]>,
    Parent = LoginResponse,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type UserResolver<
    R = Maybe<User>,
    Parent = LoginResponse,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace RegisterResponseResolvers {
  export interface Resolvers<
    Context = MyContext,
    TypeParent = RegisterResponse
  > {
    errors?: ErrorsResolver<Maybe<Error[]>, TypeParent, Context>;
  }

  export type ErrorsResolver<
    R = Maybe<Error[]>,
    Parent = RegisterResponse,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

/** Directs the executor to skip this field or fragment when the `if` argument is true. */
export type SkipDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  SkipDirectiveArgs,
  MyContext
>;
export interface SkipDirectiveArgs {
  /** Skipped when true. */
  if: boolean;
}

/** Directs the executor to include this field or fragment only when the `if` argument is true. */
export type IncludeDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  IncludeDirectiveArgs,
  MyContext
>;
export interface IncludeDirectiveArgs {
  /** Included when true. */
  if: boolean;
}

/** Marks an element of a GraphQL schema as no longer supported. */
export type DeprecatedDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  DeprecatedDirectiveArgs,
  MyContext
>;
export interface DeprecatedDirectiveArgs {
  /** Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax (as specified by [CommonMark](https://commonmark.org/). */
  reason?: string;
}

export interface IResolvers {
  Query?: QueryResolvers.Resolvers;
  Story?: StoryResolvers.Resolvers;
  User?: UserResolvers.Resolvers;
  Mutation?: MutationResolvers.Resolvers;
  CreateResponseResponse?: CreateResponseResponseResolvers.Resolvers;
  CreateStoryResponse?: CreateStoryResponseResolvers.Resolvers;
  Error?: ErrorResolvers.Resolvers;
  LoginResponse?: LoginResponseResolvers.Resolvers;
  RegisterResponse?: RegisterResponseResolvers.Resolvers;
}

export interface IDirectiveResolvers<Result> {
  skip?: SkipDirectiveResolver<Result>;
  include?: IncludeDirectiveResolver<Result>;
  deprecated?: DeprecatedDirectiveResolver<Result>;
}
