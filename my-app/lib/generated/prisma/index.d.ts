
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Case
 * 
 */
export type Case = $Result.DefaultSelection<Prisma.$CasePayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model PostVote
 * 
 */
export type PostVote = $Result.DefaultSelection<Prisma.$PostVotePayload>
/**
 * Model CommentVote
 * 
 */
export type CommentVote = $Result.DefaultSelection<Prisma.$CommentVotePayload>
/**
 * Model PostReaction
 * 
 */
export type PostReaction = $Result.DefaultSelection<Prisma.$PostReactionPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  MEMBER: 'MEMBER',
  MODERATOR: 'MODERATOR',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const CaseStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type CaseStatus = (typeof CaseStatus)[keyof typeof CaseStatus]


export const CaseSeverity: {
  CRITICAL: 'CRITICAL',
  WARNING: 'WARNING',
  STABLE: 'STABLE'
};

export type CaseSeverity = (typeof CaseSeverity)[keyof typeof CaseSeverity]


export const NotificationType: {
  REPLY: 'REPLY',
  MENTION: 'MENTION',
  UPVOTE: 'UPVOTE',
  REACTION: 'REACTION',
  BADGE_UNLOCKED: 'BADGE_UNLOCKED',
  CASE_APPROVED: 'CASE_APPROVED',
  CASE_REJECTED: 'CASE_REJECTED',
  CASE_UPDATED: 'CASE_UPDATED',
  POST_PINNED: 'POST_PINNED'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type CaseStatus = $Enums.CaseStatus

export const CaseStatus: typeof $Enums.CaseStatus

export type CaseSeverity = $Enums.CaseSeverity

export const CaseSeverity: typeof $Enums.CaseSeverity

export type NotificationType = $Enums.NotificationType

export const NotificationType: typeof $Enums.NotificationType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.case`: Exposes CRUD operations for the **Case** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cases
    * const cases = await prisma.case.findMany()
    * ```
    */
  get case(): Prisma.CaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postVote`: Exposes CRUD operations for the **PostVote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostVotes
    * const postVotes = await prisma.postVote.findMany()
    * ```
    */
  get postVote(): Prisma.PostVoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.commentVote`: Exposes CRUD operations for the **CommentVote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommentVotes
    * const commentVotes = await prisma.commentVote.findMany()
    * ```
    */
  get commentVote(): Prisma.CommentVoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postReaction`: Exposes CRUD operations for the **PostReaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostReactions
    * const postReactions = await prisma.postReaction.findMany()
    * ```
    */
  get postReaction(): Prisma.PostReactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.3
   * Query Engine version: bb420e667c1820a8c05a38023385f6cc7ef8e83a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Case: 'Case',
    Post: 'Post',
    Comment: 'Comment',
    PostVote: 'PostVote',
    CommentVote: 'CommentVote',
    PostReaction: 'PostReaction',
    Notification: 'Notification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "case" | "post" | "comment" | "postVote" | "commentVote" | "postReaction" | "notification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Case: {
        payload: Prisma.$CasePayload<ExtArgs>
        fields: Prisma.CaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>
          }
          findFirst: {
            args: Prisma.CaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>
          }
          findMany: {
            args: Prisma.CaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>[]
          }
          create: {
            args: Prisma.CaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>
          }
          createMany: {
            args: Prisma.CaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>[]
          }
          delete: {
            args: Prisma.CaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>
          }
          update: {
            args: Prisma.CaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>
          }
          deleteMany: {
            args: Prisma.CaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>[]
          }
          upsert: {
            args: Prisma.CaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>
          }
          aggregate: {
            args: Prisma.CaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCase>
          }
          groupBy: {
            args: Prisma.CaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CaseCountArgs<ExtArgs>
            result: $Utils.Optional<CaseCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      PostVote: {
        payload: Prisma.$PostVotePayload<ExtArgs>
        fields: Prisma.PostVoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostVoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostVotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostVoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostVotePayload>
          }
          findFirst: {
            args: Prisma.PostVoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostVotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostVoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostVotePayload>
          }
          findMany: {
            args: Prisma.PostVoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostVotePayload>[]
          }
          create: {
            args: Prisma.PostVoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostVotePayload>
          }
          createMany: {
            args: Prisma.PostVoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostVoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostVotePayload>[]
          }
          delete: {
            args: Prisma.PostVoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostVotePayload>
          }
          update: {
            args: Prisma.PostVoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostVotePayload>
          }
          deleteMany: {
            args: Prisma.PostVoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostVoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostVoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostVotePayload>[]
          }
          upsert: {
            args: Prisma.PostVoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostVotePayload>
          }
          aggregate: {
            args: Prisma.PostVoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostVote>
          }
          groupBy: {
            args: Prisma.PostVoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostVoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostVoteCountArgs<ExtArgs>
            result: $Utils.Optional<PostVoteCountAggregateOutputType> | number
          }
        }
      }
      CommentVote: {
        payload: Prisma.$CommentVotePayload<ExtArgs>
        fields: Prisma.CommentVoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentVoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentVotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentVoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentVotePayload>
          }
          findFirst: {
            args: Prisma.CommentVoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentVotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentVoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentVotePayload>
          }
          findMany: {
            args: Prisma.CommentVoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentVotePayload>[]
          }
          create: {
            args: Prisma.CommentVoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentVotePayload>
          }
          createMany: {
            args: Prisma.CommentVoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentVoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentVotePayload>[]
          }
          delete: {
            args: Prisma.CommentVoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentVotePayload>
          }
          update: {
            args: Prisma.CommentVoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentVotePayload>
          }
          deleteMany: {
            args: Prisma.CommentVoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentVoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentVoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentVotePayload>[]
          }
          upsert: {
            args: Prisma.CommentVoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentVotePayload>
          }
          aggregate: {
            args: Prisma.CommentVoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommentVote>
          }
          groupBy: {
            args: Prisma.CommentVoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentVoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentVoteCountArgs<ExtArgs>
            result: $Utils.Optional<CommentVoteCountAggregateOutputType> | number
          }
        }
      }
      PostReaction: {
        payload: Prisma.$PostReactionPayload<ExtArgs>
        fields: Prisma.PostReactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostReactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostReactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostReactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostReactionPayload>
          }
          findFirst: {
            args: Prisma.PostReactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostReactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostReactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostReactionPayload>
          }
          findMany: {
            args: Prisma.PostReactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostReactionPayload>[]
          }
          create: {
            args: Prisma.PostReactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostReactionPayload>
          }
          createMany: {
            args: Prisma.PostReactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostReactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostReactionPayload>[]
          }
          delete: {
            args: Prisma.PostReactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostReactionPayload>
          }
          update: {
            args: Prisma.PostReactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostReactionPayload>
          }
          deleteMany: {
            args: Prisma.PostReactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostReactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostReactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostReactionPayload>[]
          }
          upsert: {
            args: Prisma.PostReactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostReactionPayload>
          }
          aggregate: {
            args: Prisma.PostReactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostReaction>
          }
          groupBy: {
            args: Prisma.PostReactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostReactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostReactionCountArgs<ExtArgs>
            result: $Utils.Optional<PostReactionCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    case?: CaseOmit
    post?: PostOmit
    comment?: CommentOmit
    postVote?: PostVoteOmit
    commentVote?: CommentVoteOmit
    postReaction?: PostReactionOmit
    notification?: NotificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    cases: number
    posts: number
    comments: number
    postVotes: number
    commentVotes: number
    reactions: number
    notifications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cases?: boolean | UserCountOutputTypeCountCasesArgs
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    postVotes?: boolean | UserCountOutputTypeCountPostVotesArgs
    commentVotes?: boolean | UserCountOutputTypeCountCommentVotesArgs
    reactions?: boolean | UserCountOutputTypeCountReactionsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostVoteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentVoteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostReactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    comments: number
    votes: number
    reactions: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | PostCountOutputTypeCountCommentsArgs
    votes?: boolean | PostCountOutputTypeCountVotesArgs
    reactions?: boolean | PostCountOutputTypeCountReactionsArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostVoteWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountReactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostReactionWhereInput
  }


  /**
   * Count Type CommentCountOutputType
   */

  export type CommentCountOutputType = {
    replies: number
    votes: number
  }

  export type CommentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replies?: boolean | CommentCountOutputTypeCountRepliesArgs
    votes?: boolean | CommentCountOutputTypeCountVotesArgs
  }

  // Custom InputTypes
  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentCountOutputType
     */
    select?: CommentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentVoteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    reputation: number | null
  }

  export type UserSumAggregateOutputType = {
    reputation: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    role: $Enums.Role | null
    organization: string | null
    reputation: number | null
    badges: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    role: $Enums.Role | null
    organization: string | null
    reputation: number | null
    badges: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    role: number
    organization: number
    reputation: number
    badges: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    reputation?: true
  }

  export type UserSumAggregateInputType = {
    reputation?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    organization?: true
    reputation?: true
    badges?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    organization?: true
    reputation?: true
    badges?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    organization?: true
    reputation?: true
    badges?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    password: string
    role: $Enums.Role
    organization: string | null
    reputation: number
    badges: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    organization?: boolean
    reputation?: boolean
    badges?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cases?: boolean | User$casesArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    postVotes?: boolean | User$postVotesArgs<ExtArgs>
    commentVotes?: boolean | User$commentVotesArgs<ExtArgs>
    reactions?: boolean | User$reactionsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    organization?: boolean
    reputation?: boolean
    badges?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    organization?: boolean
    reputation?: boolean
    badges?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    organization?: boolean
    reputation?: boolean
    badges?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "role" | "organization" | "reputation" | "badges" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cases?: boolean | User$casesArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    postVotes?: boolean | User$postVotesArgs<ExtArgs>
    commentVotes?: boolean | User$commentVotesArgs<ExtArgs>
    reactions?: boolean | User$reactionsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      cases: Prisma.$CasePayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      postVotes: Prisma.$PostVotePayload<ExtArgs>[]
      commentVotes: Prisma.$CommentVotePayload<ExtArgs>[]
      reactions: Prisma.$PostReactionPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      password: string
      role: $Enums.Role
      organization: string | null
      reputation: number
      badges: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cases<T extends User$casesArgs<ExtArgs> = {}>(args?: Subset<T, User$casesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    postVotes<T extends User$postVotesArgs<ExtArgs> = {}>(args?: Subset<T, User$postVotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    commentVotes<T extends User$commentVotesArgs<ExtArgs> = {}>(args?: Subset<T, User$commentVotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reactions<T extends User$reactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$reactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostReactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly organization: FieldRef<"User", 'String'>
    readonly reputation: FieldRef<"User", 'Int'>
    readonly badges: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.cases
   */
  export type User$casesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    where?: CaseWhereInput
    orderBy?: CaseOrderByWithRelationInput | CaseOrderByWithRelationInput[]
    cursor?: CaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CaseScalarFieldEnum | CaseScalarFieldEnum[]
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.postVotes
   */
  export type User$postVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostVote
     */
    omit?: PostVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostVoteInclude<ExtArgs> | null
    where?: PostVoteWhereInput
    orderBy?: PostVoteOrderByWithRelationInput | PostVoteOrderByWithRelationInput[]
    cursor?: PostVoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostVoteScalarFieldEnum | PostVoteScalarFieldEnum[]
  }

  /**
   * User.commentVotes
   */
  export type User$commentVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentVote
     */
    omit?: CommentVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentVoteInclude<ExtArgs> | null
    where?: CommentVoteWhereInput
    orderBy?: CommentVoteOrderByWithRelationInput | CommentVoteOrderByWithRelationInput[]
    cursor?: CommentVoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentVoteScalarFieldEnum | CommentVoteScalarFieldEnum[]
  }

  /**
   * User.reactions
   */
  export type User$reactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostReaction
     */
    select?: PostReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostReaction
     */
    omit?: PostReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostReactionInclude<ExtArgs> | null
    where?: PostReactionWhereInput
    orderBy?: PostReactionOrderByWithRelationInput | PostReactionOrderByWithRelationInput[]
    cursor?: PostReactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostReactionScalarFieldEnum | PostReactionScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Case
   */

  export type AggregateCase = {
    _count: CaseCountAggregateOutputType | null
    _avg: CaseAvgAggregateOutputType | null
    _sum: CaseSumAggregateOutputType | null
    _min: CaseMinAggregateOutputType | null
    _max: CaseMaxAggregateOutputType | null
  }

  export type CaseAvgAggregateOutputType = {
    reportCount: number | null
  }

  export type CaseSumAggregateOutputType = {
    reportCount: number | null
  }

  export type CaseMinAggregateOutputType = {
    id: string | null
    companyName: string | null
    productName: string | null
    category: string | null
    licenseInitial: string | null
    licenseFinal: string | null
    changeDate: string | null
    website: string | null
    description: string | null
    legalAnalysis: string | null
    communityReaction: string | null
    sources: string | null
    alternatives: string | null
    status: $Enums.CaseStatus | null
    severity: $Enums.CaseSeverity | null
    reportCount: number | null
    reporterId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CaseMaxAggregateOutputType = {
    id: string | null
    companyName: string | null
    productName: string | null
    category: string | null
    licenseInitial: string | null
    licenseFinal: string | null
    changeDate: string | null
    website: string | null
    description: string | null
    legalAnalysis: string | null
    communityReaction: string | null
    sources: string | null
    alternatives: string | null
    status: $Enums.CaseStatus | null
    severity: $Enums.CaseSeverity | null
    reportCount: number | null
    reporterId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CaseCountAggregateOutputType = {
    id: number
    companyName: number
    productName: number
    category: number
    licenseInitial: number
    licenseFinal: number
    changeDate: number
    website: number
    description: number
    legalAnalysis: number
    communityReaction: number
    sources: number
    alternatives: number
    status: number
    severity: number
    reportCount: number
    reporterId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CaseAvgAggregateInputType = {
    reportCount?: true
  }

  export type CaseSumAggregateInputType = {
    reportCount?: true
  }

  export type CaseMinAggregateInputType = {
    id?: true
    companyName?: true
    productName?: true
    category?: true
    licenseInitial?: true
    licenseFinal?: true
    changeDate?: true
    website?: true
    description?: true
    legalAnalysis?: true
    communityReaction?: true
    sources?: true
    alternatives?: true
    status?: true
    severity?: true
    reportCount?: true
    reporterId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CaseMaxAggregateInputType = {
    id?: true
    companyName?: true
    productName?: true
    category?: true
    licenseInitial?: true
    licenseFinal?: true
    changeDate?: true
    website?: true
    description?: true
    legalAnalysis?: true
    communityReaction?: true
    sources?: true
    alternatives?: true
    status?: true
    severity?: true
    reportCount?: true
    reporterId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CaseCountAggregateInputType = {
    id?: true
    companyName?: true
    productName?: true
    category?: true
    licenseInitial?: true
    licenseFinal?: true
    changeDate?: true
    website?: true
    description?: true
    legalAnalysis?: true
    communityReaction?: true
    sources?: true
    alternatives?: true
    status?: true
    severity?: true
    reportCount?: true
    reporterId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Case to aggregate.
     */
    where?: CaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cases to fetch.
     */
    orderBy?: CaseOrderByWithRelationInput | CaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cases
    **/
    _count?: true | CaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CaseMaxAggregateInputType
  }

  export type GetCaseAggregateType<T extends CaseAggregateArgs> = {
        [P in keyof T & keyof AggregateCase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCase[P]>
      : GetScalarType<T[P], AggregateCase[P]>
  }




  export type CaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaseWhereInput
    orderBy?: CaseOrderByWithAggregationInput | CaseOrderByWithAggregationInput[]
    by: CaseScalarFieldEnum[] | CaseScalarFieldEnum
    having?: CaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CaseCountAggregateInputType | true
    _avg?: CaseAvgAggregateInputType
    _sum?: CaseSumAggregateInputType
    _min?: CaseMinAggregateInputType
    _max?: CaseMaxAggregateInputType
  }

  export type CaseGroupByOutputType = {
    id: string
    companyName: string
    productName: string
    category: string
    licenseInitial: string
    licenseFinal: string
    changeDate: string
    website: string
    description: string
    legalAnalysis: string
    communityReaction: string
    sources: string
    alternatives: string | null
    status: $Enums.CaseStatus
    severity: $Enums.CaseSeverity
    reportCount: number
    reporterId: string
    createdAt: Date
    updatedAt: Date
    _count: CaseCountAggregateOutputType | null
    _avg: CaseAvgAggregateOutputType | null
    _sum: CaseSumAggregateOutputType | null
    _min: CaseMinAggregateOutputType | null
    _max: CaseMaxAggregateOutputType | null
  }

  type GetCaseGroupByPayload<T extends CaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CaseGroupByOutputType[P]>
            : GetScalarType<T[P], CaseGroupByOutputType[P]>
        }
      >
    >


  export type CaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
    productName?: boolean
    category?: boolean
    licenseInitial?: boolean
    licenseFinal?: boolean
    changeDate?: boolean
    website?: boolean
    description?: boolean
    legalAnalysis?: boolean
    communityReaction?: boolean
    sources?: boolean
    alternatives?: boolean
    status?: boolean
    severity?: boolean
    reportCount?: boolean
    reporterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reporter?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["case"]>

  export type CaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
    productName?: boolean
    category?: boolean
    licenseInitial?: boolean
    licenseFinal?: boolean
    changeDate?: boolean
    website?: boolean
    description?: boolean
    legalAnalysis?: boolean
    communityReaction?: boolean
    sources?: boolean
    alternatives?: boolean
    status?: boolean
    severity?: boolean
    reportCount?: boolean
    reporterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reporter?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["case"]>

  export type CaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
    productName?: boolean
    category?: boolean
    licenseInitial?: boolean
    licenseFinal?: boolean
    changeDate?: boolean
    website?: boolean
    description?: boolean
    legalAnalysis?: boolean
    communityReaction?: boolean
    sources?: boolean
    alternatives?: boolean
    status?: boolean
    severity?: boolean
    reportCount?: boolean
    reporterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reporter?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["case"]>

  export type CaseSelectScalar = {
    id?: boolean
    companyName?: boolean
    productName?: boolean
    category?: boolean
    licenseInitial?: boolean
    licenseFinal?: boolean
    changeDate?: boolean
    website?: boolean
    description?: boolean
    legalAnalysis?: boolean
    communityReaction?: boolean
    sources?: boolean
    alternatives?: boolean
    status?: boolean
    severity?: boolean
    reportCount?: boolean
    reporterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyName" | "productName" | "category" | "licenseInitial" | "licenseFinal" | "changeDate" | "website" | "description" | "legalAnalysis" | "communityReaction" | "sources" | "alternatives" | "status" | "severity" | "reportCount" | "reporterId" | "createdAt" | "updatedAt", ExtArgs["result"]["case"]>
  export type CaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reporter?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reporter?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reporter?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Case"
    objects: {
      reporter: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      companyName: string
      productName: string
      category: string
      licenseInitial: string
      licenseFinal: string
      changeDate: string
      website: string
      description: string
      legalAnalysis: string
      communityReaction: string
      sources: string
      alternatives: string | null
      status: $Enums.CaseStatus
      severity: $Enums.CaseSeverity
      reportCount: number
      reporterId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["case"]>
    composites: {}
  }

  type CaseGetPayload<S extends boolean | null | undefined | CaseDefaultArgs> = $Result.GetResult<Prisma.$CasePayload, S>

  type CaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CaseCountAggregateInputType | true
    }

  export interface CaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Case'], meta: { name: 'Case' } }
    /**
     * Find zero or one Case that matches the filter.
     * @param {CaseFindUniqueArgs} args - Arguments to find a Case
     * @example
     * // Get one Case
     * const case = await prisma.case.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CaseFindUniqueArgs>(args: SelectSubset<T, CaseFindUniqueArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Case that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CaseFindUniqueOrThrowArgs} args - Arguments to find a Case
     * @example
     * // Get one Case
     * const case = await prisma.case.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CaseFindUniqueOrThrowArgs>(args: SelectSubset<T, CaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Case that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseFindFirstArgs} args - Arguments to find a Case
     * @example
     * // Get one Case
     * const case = await prisma.case.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CaseFindFirstArgs>(args?: SelectSubset<T, CaseFindFirstArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Case that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseFindFirstOrThrowArgs} args - Arguments to find a Case
     * @example
     * // Get one Case
     * const case = await prisma.case.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CaseFindFirstOrThrowArgs>(args?: SelectSubset<T, CaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cases
     * const cases = await prisma.case.findMany()
     * 
     * // Get first 10 Cases
     * const cases = await prisma.case.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const caseWithIdOnly = await prisma.case.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CaseFindManyArgs>(args?: SelectSubset<T, CaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Case.
     * @param {CaseCreateArgs} args - Arguments to create a Case.
     * @example
     * // Create one Case
     * const Case = await prisma.case.create({
     *   data: {
     *     // ... data to create a Case
     *   }
     * })
     * 
     */
    create<T extends CaseCreateArgs>(args: SelectSubset<T, CaseCreateArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cases.
     * @param {CaseCreateManyArgs} args - Arguments to create many Cases.
     * @example
     * // Create many Cases
     * const case = await prisma.case.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CaseCreateManyArgs>(args?: SelectSubset<T, CaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cases and returns the data saved in the database.
     * @param {CaseCreateManyAndReturnArgs} args - Arguments to create many Cases.
     * @example
     * // Create many Cases
     * const case = await prisma.case.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cases and only return the `id`
     * const caseWithIdOnly = await prisma.case.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CaseCreateManyAndReturnArgs>(args?: SelectSubset<T, CaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Case.
     * @param {CaseDeleteArgs} args - Arguments to delete one Case.
     * @example
     * // Delete one Case
     * const Case = await prisma.case.delete({
     *   where: {
     *     // ... filter to delete one Case
     *   }
     * })
     * 
     */
    delete<T extends CaseDeleteArgs>(args: SelectSubset<T, CaseDeleteArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Case.
     * @param {CaseUpdateArgs} args - Arguments to update one Case.
     * @example
     * // Update one Case
     * const case = await prisma.case.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CaseUpdateArgs>(args: SelectSubset<T, CaseUpdateArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cases.
     * @param {CaseDeleteManyArgs} args - Arguments to filter Cases to delete.
     * @example
     * // Delete a few Cases
     * const { count } = await prisma.case.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CaseDeleteManyArgs>(args?: SelectSubset<T, CaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cases
     * const case = await prisma.case.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CaseUpdateManyArgs>(args: SelectSubset<T, CaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cases and returns the data updated in the database.
     * @param {CaseUpdateManyAndReturnArgs} args - Arguments to update many Cases.
     * @example
     * // Update many Cases
     * const case = await prisma.case.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cases and only return the `id`
     * const caseWithIdOnly = await prisma.case.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CaseUpdateManyAndReturnArgs>(args: SelectSubset<T, CaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Case.
     * @param {CaseUpsertArgs} args - Arguments to update or create a Case.
     * @example
     * // Update or create a Case
     * const case = await prisma.case.upsert({
     *   create: {
     *     // ... data to create a Case
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Case we want to update
     *   }
     * })
     */
    upsert<T extends CaseUpsertArgs>(args: SelectSubset<T, CaseUpsertArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseCountArgs} args - Arguments to filter Cases to count.
     * @example
     * // Count the number of Cases
     * const count = await prisma.case.count({
     *   where: {
     *     // ... the filter for the Cases we want to count
     *   }
     * })
    **/
    count<T extends CaseCountArgs>(
      args?: Subset<T, CaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Case.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CaseAggregateArgs>(args: Subset<T, CaseAggregateArgs>): Prisma.PrismaPromise<GetCaseAggregateType<T>>

    /**
     * Group by Case.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CaseGroupByArgs['orderBy'] }
        : { orderBy?: CaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Case model
   */
  readonly fields: CaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Case.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reporter<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Case model
   */
  interface CaseFieldRefs {
    readonly id: FieldRef<"Case", 'String'>
    readonly companyName: FieldRef<"Case", 'String'>
    readonly productName: FieldRef<"Case", 'String'>
    readonly category: FieldRef<"Case", 'String'>
    readonly licenseInitial: FieldRef<"Case", 'String'>
    readonly licenseFinal: FieldRef<"Case", 'String'>
    readonly changeDate: FieldRef<"Case", 'String'>
    readonly website: FieldRef<"Case", 'String'>
    readonly description: FieldRef<"Case", 'String'>
    readonly legalAnalysis: FieldRef<"Case", 'String'>
    readonly communityReaction: FieldRef<"Case", 'String'>
    readonly sources: FieldRef<"Case", 'String'>
    readonly alternatives: FieldRef<"Case", 'String'>
    readonly status: FieldRef<"Case", 'CaseStatus'>
    readonly severity: FieldRef<"Case", 'CaseSeverity'>
    readonly reportCount: FieldRef<"Case", 'Int'>
    readonly reporterId: FieldRef<"Case", 'String'>
    readonly createdAt: FieldRef<"Case", 'DateTime'>
    readonly updatedAt: FieldRef<"Case", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Case findUnique
   */
  export type CaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * Filter, which Case to fetch.
     */
    where: CaseWhereUniqueInput
  }

  /**
   * Case findUniqueOrThrow
   */
  export type CaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * Filter, which Case to fetch.
     */
    where: CaseWhereUniqueInput
  }

  /**
   * Case findFirst
   */
  export type CaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * Filter, which Case to fetch.
     */
    where?: CaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cases to fetch.
     */
    orderBy?: CaseOrderByWithRelationInput | CaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cases.
     */
    cursor?: CaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cases.
     */
    distinct?: CaseScalarFieldEnum | CaseScalarFieldEnum[]
  }

  /**
   * Case findFirstOrThrow
   */
  export type CaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * Filter, which Case to fetch.
     */
    where?: CaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cases to fetch.
     */
    orderBy?: CaseOrderByWithRelationInput | CaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cases.
     */
    cursor?: CaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cases.
     */
    distinct?: CaseScalarFieldEnum | CaseScalarFieldEnum[]
  }

  /**
   * Case findMany
   */
  export type CaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * Filter, which Cases to fetch.
     */
    where?: CaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cases to fetch.
     */
    orderBy?: CaseOrderByWithRelationInput | CaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cases.
     */
    cursor?: CaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cases.
     */
    skip?: number
    distinct?: CaseScalarFieldEnum | CaseScalarFieldEnum[]
  }

  /**
   * Case create
   */
  export type CaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Case.
     */
    data: XOR<CaseCreateInput, CaseUncheckedCreateInput>
  }

  /**
   * Case createMany
   */
  export type CaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cases.
     */
    data: CaseCreateManyInput | CaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Case createManyAndReturn
   */
  export type CaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * The data used to create many Cases.
     */
    data: CaseCreateManyInput | CaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Case update
   */
  export type CaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Case.
     */
    data: XOR<CaseUpdateInput, CaseUncheckedUpdateInput>
    /**
     * Choose, which Case to update.
     */
    where: CaseWhereUniqueInput
  }

  /**
   * Case updateMany
   */
  export type CaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cases.
     */
    data: XOR<CaseUpdateManyMutationInput, CaseUncheckedUpdateManyInput>
    /**
     * Filter which Cases to update
     */
    where?: CaseWhereInput
    /**
     * Limit how many Cases to update.
     */
    limit?: number
  }

  /**
   * Case updateManyAndReturn
   */
  export type CaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * The data used to update Cases.
     */
    data: XOR<CaseUpdateManyMutationInput, CaseUncheckedUpdateManyInput>
    /**
     * Filter which Cases to update
     */
    where?: CaseWhereInput
    /**
     * Limit how many Cases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Case upsert
   */
  export type CaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Case to update in case it exists.
     */
    where: CaseWhereUniqueInput
    /**
     * In case the Case found by the `where` argument doesn't exist, create a new Case with this data.
     */
    create: XOR<CaseCreateInput, CaseUncheckedCreateInput>
    /**
     * In case the Case was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CaseUpdateInput, CaseUncheckedUpdateInput>
  }

  /**
   * Case delete
   */
  export type CaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * Filter which Case to delete.
     */
    where: CaseWhereUniqueInput
  }

  /**
   * Case deleteMany
   */
  export type CaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cases to delete
     */
    where?: CaseWhereInput
    /**
     * Limit how many Cases to delete.
     */
    limit?: number
  }

  /**
   * Case without action
   */
  export type CaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    views: number | null
    upvotes: number | null
    downvotes: number | null
  }

  export type PostSumAggregateOutputType = {
    views: number | null
    upvotes: number | null
    downvotes: number | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    category: string | null
    tags: string | null
    authorId: string | null
    isPinned: boolean | null
    views: number | null
    upvotes: number | null
    downvotes: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    category: string | null
    tags: string | null
    authorId: string | null
    isPinned: boolean | null
    views: number | null
    upvotes: number | null
    downvotes: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    content: number
    category: number
    tags: number
    authorId: number
    isPinned: number
    views: number
    upvotes: number
    downvotes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    views?: true
    upvotes?: true
    downvotes?: true
  }

  export type PostSumAggregateInputType = {
    views?: true
    upvotes?: true
    downvotes?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    category?: true
    tags?: true
    authorId?: true
    isPinned?: true
    views?: true
    upvotes?: true
    downvotes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    category?: true
    tags?: true
    authorId?: true
    isPinned?: true
    views?: true
    upvotes?: true
    downvotes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    category?: true
    tags?: true
    authorId?: true
    isPinned?: true
    views?: true
    upvotes?: true
    downvotes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    title: string
    content: string
    category: string
    tags: string
    authorId: string
    isPinned: boolean
    views: number
    upvotes: number
    downvotes: number
    createdAt: Date
    updatedAt: Date
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    category?: boolean
    tags?: boolean
    authorId?: boolean
    isPinned?: boolean
    views?: boolean
    upvotes?: boolean
    downvotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | Post$commentsArgs<ExtArgs>
    votes?: boolean | Post$votesArgs<ExtArgs>
    reactions?: boolean | Post$reactionsArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    category?: boolean
    tags?: boolean
    authorId?: boolean
    isPinned?: boolean
    views?: boolean
    upvotes?: boolean
    downvotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    category?: boolean
    tags?: boolean
    authorId?: boolean
    isPinned?: boolean
    views?: boolean
    upvotes?: boolean
    downvotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    category?: boolean
    tags?: boolean
    authorId?: boolean
    isPinned?: boolean
    views?: boolean
    upvotes?: boolean
    downvotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "category" | "tags" | "authorId" | "isPinned" | "views" | "upvotes" | "downvotes" | "createdAt" | "updatedAt", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | Post$commentsArgs<ExtArgs>
    votes?: boolean | Post$votesArgs<ExtArgs>
    reactions?: boolean | Post$reactionsArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      comments: Prisma.$CommentPayload<ExtArgs>[]
      votes: Prisma.$PostVotePayload<ExtArgs>[]
      reactions: Prisma.$PostReactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      category: string
      tags: string
      authorId: string
      isPinned: boolean
      views: number
      upvotes: number
      downvotes: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comments<T extends Post$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Post$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    votes<T extends Post$votesArgs<ExtArgs> = {}>(args?: Subset<T, Post$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reactions<T extends Post$reactionsArgs<ExtArgs> = {}>(args?: Subset<T, Post$reactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostReactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly title: FieldRef<"Post", 'String'>
    readonly content: FieldRef<"Post", 'String'>
    readonly category: FieldRef<"Post", 'String'>
    readonly tags: FieldRef<"Post", 'String'>
    readonly authorId: FieldRef<"Post", 'String'>
    readonly isPinned: FieldRef<"Post", 'Boolean'>
    readonly views: FieldRef<"Post", 'Int'>
    readonly upvotes: FieldRef<"Post", 'Int'>
    readonly downvotes: FieldRef<"Post", 'Int'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.comments
   */
  export type Post$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Post.votes
   */
  export type Post$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostVote
     */
    omit?: PostVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostVoteInclude<ExtArgs> | null
    where?: PostVoteWhereInput
    orderBy?: PostVoteOrderByWithRelationInput | PostVoteOrderByWithRelationInput[]
    cursor?: PostVoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostVoteScalarFieldEnum | PostVoteScalarFieldEnum[]
  }

  /**
   * Post.reactions
   */
  export type Post$reactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostReaction
     */
    select?: PostReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostReaction
     */
    omit?: PostReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostReactionInclude<ExtArgs> | null
    where?: PostReactionWhereInput
    orderBy?: PostReactionOrderByWithRelationInput | PostReactionOrderByWithRelationInput[]
    cursor?: PostReactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostReactionScalarFieldEnum | PostReactionScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    upvotes: number | null
    downvotes: number | null
  }

  export type CommentSumAggregateOutputType = {
    upvotes: number | null
    downvotes: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    content: string | null
    authorId: string | null
    postId: string | null
    parentId: string | null
    upvotes: number | null
    downvotes: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    content: string | null
    authorId: string | null
    postId: string | null
    parentId: string | null
    upvotes: number | null
    downvotes: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    content: number
    authorId: number
    postId: number
    parentId: number
    upvotes: number
    downvotes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    upvotes?: true
    downvotes?: true
  }

  export type CommentSumAggregateInputType = {
    upvotes?: true
    downvotes?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    content?: true
    authorId?: true
    postId?: true
    parentId?: true
    upvotes?: true
    downvotes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    content?: true
    authorId?: true
    postId?: true
    parentId?: true
    upvotes?: true
    downvotes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    content?: true
    authorId?: true
    postId?: true
    parentId?: true
    upvotes?: true
    downvotes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    content: string
    authorId: string
    postId: string
    parentId: string | null
    upvotes: number
    downvotes: number
    createdAt: Date
    updatedAt: Date
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    authorId?: boolean
    postId?: boolean
    parentId?: boolean
    upvotes?: boolean
    downvotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
    replies?: boolean | Comment$repliesArgs<ExtArgs>
    votes?: boolean | Comment$votesArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    authorId?: boolean
    postId?: boolean
    parentId?: boolean
    upvotes?: boolean
    downvotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    authorId?: boolean
    postId?: boolean
    parentId?: boolean
    upvotes?: boolean
    downvotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    content?: boolean
    authorId?: boolean
    postId?: boolean
    parentId?: boolean
    upvotes?: boolean
    downvotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "authorId" | "postId" | "parentId" | "upvotes" | "downvotes" | "createdAt" | "updatedAt", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
    replies?: boolean | Comment$repliesArgs<ExtArgs>
    votes?: boolean | Comment$votesArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      post: Prisma.$PostPayload<ExtArgs>
      parent: Prisma.$CommentPayload<ExtArgs> | null
      replies: Prisma.$CommentPayload<ExtArgs>[]
      votes: Prisma.$CommentVotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      authorId: string
      postId: string
      parentId: string | null
      upvotes: number
      downvotes: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parent<T extends Comment$parentArgs<ExtArgs> = {}>(args?: Subset<T, Comment$parentArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    replies<T extends Comment$repliesArgs<ExtArgs> = {}>(args?: Subset<T, Comment$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    votes<T extends Comment$votesArgs<ExtArgs> = {}>(args?: Subset<T, Comment$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly authorId: FieldRef<"Comment", 'String'>
    readonly postId: FieldRef<"Comment", 'String'>
    readonly parentId: FieldRef<"Comment", 'String'>
    readonly upvotes: FieldRef<"Comment", 'Int'>
    readonly downvotes: FieldRef<"Comment", 'Int'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly updatedAt: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment.parent
   */
  export type Comment$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
  }

  /**
   * Comment.replies
   */
  export type Comment$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment.votes
   */
  export type Comment$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentVote
     */
    omit?: CommentVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentVoteInclude<ExtArgs> | null
    where?: CommentVoteWhereInput
    orderBy?: CommentVoteOrderByWithRelationInput | CommentVoteOrderByWithRelationInput[]
    cursor?: CommentVoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentVoteScalarFieldEnum | CommentVoteScalarFieldEnum[]
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model PostVote
   */

  export type AggregatePostVote = {
    _count: PostVoteCountAggregateOutputType | null
    _avg: PostVoteAvgAggregateOutputType | null
    _sum: PostVoteSumAggregateOutputType | null
    _min: PostVoteMinAggregateOutputType | null
    _max: PostVoteMaxAggregateOutputType | null
  }

  export type PostVoteAvgAggregateOutputType = {
    value: number | null
  }

  export type PostVoteSumAggregateOutputType = {
    value: number | null
  }

  export type PostVoteMinAggregateOutputType = {
    id: string | null
    value: number | null
    userId: string | null
    postId: string | null
    createdAt: Date | null
  }

  export type PostVoteMaxAggregateOutputType = {
    id: string | null
    value: number | null
    userId: string | null
    postId: string | null
    createdAt: Date | null
  }

  export type PostVoteCountAggregateOutputType = {
    id: number
    value: number
    userId: number
    postId: number
    createdAt: number
    _all: number
  }


  export type PostVoteAvgAggregateInputType = {
    value?: true
  }

  export type PostVoteSumAggregateInputType = {
    value?: true
  }

  export type PostVoteMinAggregateInputType = {
    id?: true
    value?: true
    userId?: true
    postId?: true
    createdAt?: true
  }

  export type PostVoteMaxAggregateInputType = {
    id?: true
    value?: true
    userId?: true
    postId?: true
    createdAt?: true
  }

  export type PostVoteCountAggregateInputType = {
    id?: true
    value?: true
    userId?: true
    postId?: true
    createdAt?: true
    _all?: true
  }

  export type PostVoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostVote to aggregate.
     */
    where?: PostVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostVotes to fetch.
     */
    orderBy?: PostVoteOrderByWithRelationInput | PostVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostVotes
    **/
    _count?: true | PostVoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostVoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostVoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostVoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostVoteMaxAggregateInputType
  }

  export type GetPostVoteAggregateType<T extends PostVoteAggregateArgs> = {
        [P in keyof T & keyof AggregatePostVote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostVote[P]>
      : GetScalarType<T[P], AggregatePostVote[P]>
  }




  export type PostVoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostVoteWhereInput
    orderBy?: PostVoteOrderByWithAggregationInput | PostVoteOrderByWithAggregationInput[]
    by: PostVoteScalarFieldEnum[] | PostVoteScalarFieldEnum
    having?: PostVoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostVoteCountAggregateInputType | true
    _avg?: PostVoteAvgAggregateInputType
    _sum?: PostVoteSumAggregateInputType
    _min?: PostVoteMinAggregateInputType
    _max?: PostVoteMaxAggregateInputType
  }

  export type PostVoteGroupByOutputType = {
    id: string
    value: number
    userId: string
    postId: string
    createdAt: Date
    _count: PostVoteCountAggregateOutputType | null
    _avg: PostVoteAvgAggregateOutputType | null
    _sum: PostVoteSumAggregateOutputType | null
    _min: PostVoteMinAggregateOutputType | null
    _max: PostVoteMaxAggregateOutputType | null
  }

  type GetPostVoteGroupByPayload<T extends PostVoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostVoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostVoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostVoteGroupByOutputType[P]>
            : GetScalarType<T[P], PostVoteGroupByOutputType[P]>
        }
      >
    >


  export type PostVoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    userId?: boolean
    postId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postVote"]>

  export type PostVoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    userId?: boolean
    postId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postVote"]>

  export type PostVoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    userId?: boolean
    postId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postVote"]>

  export type PostVoteSelectScalar = {
    id?: boolean
    value?: boolean
    userId?: boolean
    postId?: boolean
    createdAt?: boolean
  }

  export type PostVoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "value" | "userId" | "postId" | "createdAt", ExtArgs["result"]["postVote"]>
  export type PostVoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type PostVoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type PostVoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $PostVotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostVote"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      value: number
      userId: string
      postId: string
      createdAt: Date
    }, ExtArgs["result"]["postVote"]>
    composites: {}
  }

  type PostVoteGetPayload<S extends boolean | null | undefined | PostVoteDefaultArgs> = $Result.GetResult<Prisma.$PostVotePayload, S>

  type PostVoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostVoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostVoteCountAggregateInputType | true
    }

  export interface PostVoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostVote'], meta: { name: 'PostVote' } }
    /**
     * Find zero or one PostVote that matches the filter.
     * @param {PostVoteFindUniqueArgs} args - Arguments to find a PostVote
     * @example
     * // Get one PostVote
     * const postVote = await prisma.postVote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostVoteFindUniqueArgs>(args: SelectSubset<T, PostVoteFindUniqueArgs<ExtArgs>>): Prisma__PostVoteClient<$Result.GetResult<Prisma.$PostVotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostVote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostVoteFindUniqueOrThrowArgs} args - Arguments to find a PostVote
     * @example
     * // Get one PostVote
     * const postVote = await prisma.postVote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostVoteFindUniqueOrThrowArgs>(args: SelectSubset<T, PostVoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostVoteClient<$Result.GetResult<Prisma.$PostVotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostVote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostVoteFindFirstArgs} args - Arguments to find a PostVote
     * @example
     * // Get one PostVote
     * const postVote = await prisma.postVote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostVoteFindFirstArgs>(args?: SelectSubset<T, PostVoteFindFirstArgs<ExtArgs>>): Prisma__PostVoteClient<$Result.GetResult<Prisma.$PostVotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostVote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostVoteFindFirstOrThrowArgs} args - Arguments to find a PostVote
     * @example
     * // Get one PostVote
     * const postVote = await prisma.postVote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostVoteFindFirstOrThrowArgs>(args?: SelectSubset<T, PostVoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostVoteClient<$Result.GetResult<Prisma.$PostVotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostVotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostVoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostVotes
     * const postVotes = await prisma.postVote.findMany()
     * 
     * // Get first 10 PostVotes
     * const postVotes = await prisma.postVote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postVoteWithIdOnly = await prisma.postVote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostVoteFindManyArgs>(args?: SelectSubset<T, PostVoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostVote.
     * @param {PostVoteCreateArgs} args - Arguments to create a PostVote.
     * @example
     * // Create one PostVote
     * const PostVote = await prisma.postVote.create({
     *   data: {
     *     // ... data to create a PostVote
     *   }
     * })
     * 
     */
    create<T extends PostVoteCreateArgs>(args: SelectSubset<T, PostVoteCreateArgs<ExtArgs>>): Prisma__PostVoteClient<$Result.GetResult<Prisma.$PostVotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostVotes.
     * @param {PostVoteCreateManyArgs} args - Arguments to create many PostVotes.
     * @example
     * // Create many PostVotes
     * const postVote = await prisma.postVote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostVoteCreateManyArgs>(args?: SelectSubset<T, PostVoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostVotes and returns the data saved in the database.
     * @param {PostVoteCreateManyAndReturnArgs} args - Arguments to create many PostVotes.
     * @example
     * // Create many PostVotes
     * const postVote = await prisma.postVote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostVotes and only return the `id`
     * const postVoteWithIdOnly = await prisma.postVote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostVoteCreateManyAndReturnArgs>(args?: SelectSubset<T, PostVoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostVotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostVote.
     * @param {PostVoteDeleteArgs} args - Arguments to delete one PostVote.
     * @example
     * // Delete one PostVote
     * const PostVote = await prisma.postVote.delete({
     *   where: {
     *     // ... filter to delete one PostVote
     *   }
     * })
     * 
     */
    delete<T extends PostVoteDeleteArgs>(args: SelectSubset<T, PostVoteDeleteArgs<ExtArgs>>): Prisma__PostVoteClient<$Result.GetResult<Prisma.$PostVotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostVote.
     * @param {PostVoteUpdateArgs} args - Arguments to update one PostVote.
     * @example
     * // Update one PostVote
     * const postVote = await prisma.postVote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostVoteUpdateArgs>(args: SelectSubset<T, PostVoteUpdateArgs<ExtArgs>>): Prisma__PostVoteClient<$Result.GetResult<Prisma.$PostVotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostVotes.
     * @param {PostVoteDeleteManyArgs} args - Arguments to filter PostVotes to delete.
     * @example
     * // Delete a few PostVotes
     * const { count } = await prisma.postVote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostVoteDeleteManyArgs>(args?: SelectSubset<T, PostVoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostVoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostVotes
     * const postVote = await prisma.postVote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostVoteUpdateManyArgs>(args: SelectSubset<T, PostVoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostVotes and returns the data updated in the database.
     * @param {PostVoteUpdateManyAndReturnArgs} args - Arguments to update many PostVotes.
     * @example
     * // Update many PostVotes
     * const postVote = await prisma.postVote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostVotes and only return the `id`
     * const postVoteWithIdOnly = await prisma.postVote.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostVoteUpdateManyAndReturnArgs>(args: SelectSubset<T, PostVoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostVotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostVote.
     * @param {PostVoteUpsertArgs} args - Arguments to update or create a PostVote.
     * @example
     * // Update or create a PostVote
     * const postVote = await prisma.postVote.upsert({
     *   create: {
     *     // ... data to create a PostVote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostVote we want to update
     *   }
     * })
     */
    upsert<T extends PostVoteUpsertArgs>(args: SelectSubset<T, PostVoteUpsertArgs<ExtArgs>>): Prisma__PostVoteClient<$Result.GetResult<Prisma.$PostVotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostVoteCountArgs} args - Arguments to filter PostVotes to count.
     * @example
     * // Count the number of PostVotes
     * const count = await prisma.postVote.count({
     *   where: {
     *     // ... the filter for the PostVotes we want to count
     *   }
     * })
    **/
    count<T extends PostVoteCountArgs>(
      args?: Subset<T, PostVoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostVoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostVote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostVoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostVoteAggregateArgs>(args: Subset<T, PostVoteAggregateArgs>): Prisma.PrismaPromise<GetPostVoteAggregateType<T>>

    /**
     * Group by PostVote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostVoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostVoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostVoteGroupByArgs['orderBy'] }
        : { orderBy?: PostVoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostVoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostVoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostVote model
   */
  readonly fields: PostVoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostVote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostVoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PostVote model
   */
  interface PostVoteFieldRefs {
    readonly id: FieldRef<"PostVote", 'String'>
    readonly value: FieldRef<"PostVote", 'Int'>
    readonly userId: FieldRef<"PostVote", 'String'>
    readonly postId: FieldRef<"PostVote", 'String'>
    readonly createdAt: FieldRef<"PostVote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PostVote findUnique
   */
  export type PostVoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostVote
     */
    omit?: PostVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostVoteInclude<ExtArgs> | null
    /**
     * Filter, which PostVote to fetch.
     */
    where: PostVoteWhereUniqueInput
  }

  /**
   * PostVote findUniqueOrThrow
   */
  export type PostVoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostVote
     */
    omit?: PostVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostVoteInclude<ExtArgs> | null
    /**
     * Filter, which PostVote to fetch.
     */
    where: PostVoteWhereUniqueInput
  }

  /**
   * PostVote findFirst
   */
  export type PostVoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostVote
     */
    omit?: PostVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostVoteInclude<ExtArgs> | null
    /**
     * Filter, which PostVote to fetch.
     */
    where?: PostVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostVotes to fetch.
     */
    orderBy?: PostVoteOrderByWithRelationInput | PostVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostVotes.
     */
    cursor?: PostVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostVotes.
     */
    distinct?: PostVoteScalarFieldEnum | PostVoteScalarFieldEnum[]
  }

  /**
   * PostVote findFirstOrThrow
   */
  export type PostVoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostVote
     */
    omit?: PostVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostVoteInclude<ExtArgs> | null
    /**
     * Filter, which PostVote to fetch.
     */
    where?: PostVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostVotes to fetch.
     */
    orderBy?: PostVoteOrderByWithRelationInput | PostVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostVotes.
     */
    cursor?: PostVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostVotes.
     */
    distinct?: PostVoteScalarFieldEnum | PostVoteScalarFieldEnum[]
  }

  /**
   * PostVote findMany
   */
  export type PostVoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostVote
     */
    omit?: PostVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostVoteInclude<ExtArgs> | null
    /**
     * Filter, which PostVotes to fetch.
     */
    where?: PostVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostVotes to fetch.
     */
    orderBy?: PostVoteOrderByWithRelationInput | PostVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostVotes.
     */
    cursor?: PostVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostVotes.
     */
    skip?: number
    distinct?: PostVoteScalarFieldEnum | PostVoteScalarFieldEnum[]
  }

  /**
   * PostVote create
   */
  export type PostVoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostVote
     */
    omit?: PostVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostVoteInclude<ExtArgs> | null
    /**
     * The data needed to create a PostVote.
     */
    data: XOR<PostVoteCreateInput, PostVoteUncheckedCreateInput>
  }

  /**
   * PostVote createMany
   */
  export type PostVoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostVotes.
     */
    data: PostVoteCreateManyInput | PostVoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostVote createManyAndReturn
   */
  export type PostVoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostVote
     */
    omit?: PostVoteOmit<ExtArgs> | null
    /**
     * The data used to create many PostVotes.
     */
    data: PostVoteCreateManyInput | PostVoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostVoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostVote update
   */
  export type PostVoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostVote
     */
    omit?: PostVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostVoteInclude<ExtArgs> | null
    /**
     * The data needed to update a PostVote.
     */
    data: XOR<PostVoteUpdateInput, PostVoteUncheckedUpdateInput>
    /**
     * Choose, which PostVote to update.
     */
    where: PostVoteWhereUniqueInput
  }

  /**
   * PostVote updateMany
   */
  export type PostVoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostVotes.
     */
    data: XOR<PostVoteUpdateManyMutationInput, PostVoteUncheckedUpdateManyInput>
    /**
     * Filter which PostVotes to update
     */
    where?: PostVoteWhereInput
    /**
     * Limit how many PostVotes to update.
     */
    limit?: number
  }

  /**
   * PostVote updateManyAndReturn
   */
  export type PostVoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostVote
     */
    omit?: PostVoteOmit<ExtArgs> | null
    /**
     * The data used to update PostVotes.
     */
    data: XOR<PostVoteUpdateManyMutationInput, PostVoteUncheckedUpdateManyInput>
    /**
     * Filter which PostVotes to update
     */
    where?: PostVoteWhereInput
    /**
     * Limit how many PostVotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostVoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostVote upsert
   */
  export type PostVoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostVote
     */
    omit?: PostVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostVoteInclude<ExtArgs> | null
    /**
     * The filter to search for the PostVote to update in case it exists.
     */
    where: PostVoteWhereUniqueInput
    /**
     * In case the PostVote found by the `where` argument doesn't exist, create a new PostVote with this data.
     */
    create: XOR<PostVoteCreateInput, PostVoteUncheckedCreateInput>
    /**
     * In case the PostVote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostVoteUpdateInput, PostVoteUncheckedUpdateInput>
  }

  /**
   * PostVote delete
   */
  export type PostVoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostVote
     */
    omit?: PostVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostVoteInclude<ExtArgs> | null
    /**
     * Filter which PostVote to delete.
     */
    where: PostVoteWhereUniqueInput
  }

  /**
   * PostVote deleteMany
   */
  export type PostVoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostVotes to delete
     */
    where?: PostVoteWhereInput
    /**
     * Limit how many PostVotes to delete.
     */
    limit?: number
  }

  /**
   * PostVote without action
   */
  export type PostVoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostVote
     */
    omit?: PostVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostVoteInclude<ExtArgs> | null
  }


  /**
   * Model CommentVote
   */

  export type AggregateCommentVote = {
    _count: CommentVoteCountAggregateOutputType | null
    _avg: CommentVoteAvgAggregateOutputType | null
    _sum: CommentVoteSumAggregateOutputType | null
    _min: CommentVoteMinAggregateOutputType | null
    _max: CommentVoteMaxAggregateOutputType | null
  }

  export type CommentVoteAvgAggregateOutputType = {
    value: number | null
  }

  export type CommentVoteSumAggregateOutputType = {
    value: number | null
  }

  export type CommentVoteMinAggregateOutputType = {
    id: string | null
    value: number | null
    userId: string | null
    commentId: string | null
    createdAt: Date | null
  }

  export type CommentVoteMaxAggregateOutputType = {
    id: string | null
    value: number | null
    userId: string | null
    commentId: string | null
    createdAt: Date | null
  }

  export type CommentVoteCountAggregateOutputType = {
    id: number
    value: number
    userId: number
    commentId: number
    createdAt: number
    _all: number
  }


  export type CommentVoteAvgAggregateInputType = {
    value?: true
  }

  export type CommentVoteSumAggregateInputType = {
    value?: true
  }

  export type CommentVoteMinAggregateInputType = {
    id?: true
    value?: true
    userId?: true
    commentId?: true
    createdAt?: true
  }

  export type CommentVoteMaxAggregateInputType = {
    id?: true
    value?: true
    userId?: true
    commentId?: true
    createdAt?: true
  }

  export type CommentVoteCountAggregateInputType = {
    id?: true
    value?: true
    userId?: true
    commentId?: true
    createdAt?: true
    _all?: true
  }

  export type CommentVoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommentVote to aggregate.
     */
    where?: CommentVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentVotes to fetch.
     */
    orderBy?: CommentVoteOrderByWithRelationInput | CommentVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommentVotes
    **/
    _count?: true | CommentVoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentVoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentVoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentVoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentVoteMaxAggregateInputType
  }

  export type GetCommentVoteAggregateType<T extends CommentVoteAggregateArgs> = {
        [P in keyof T & keyof AggregateCommentVote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommentVote[P]>
      : GetScalarType<T[P], AggregateCommentVote[P]>
  }




  export type CommentVoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentVoteWhereInput
    orderBy?: CommentVoteOrderByWithAggregationInput | CommentVoteOrderByWithAggregationInput[]
    by: CommentVoteScalarFieldEnum[] | CommentVoteScalarFieldEnum
    having?: CommentVoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentVoteCountAggregateInputType | true
    _avg?: CommentVoteAvgAggregateInputType
    _sum?: CommentVoteSumAggregateInputType
    _min?: CommentVoteMinAggregateInputType
    _max?: CommentVoteMaxAggregateInputType
  }

  export type CommentVoteGroupByOutputType = {
    id: string
    value: number
    userId: string
    commentId: string
    createdAt: Date
    _count: CommentVoteCountAggregateOutputType | null
    _avg: CommentVoteAvgAggregateOutputType | null
    _sum: CommentVoteSumAggregateOutputType | null
    _min: CommentVoteMinAggregateOutputType | null
    _max: CommentVoteMaxAggregateOutputType | null
  }

  type GetCommentVoteGroupByPayload<T extends CommentVoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentVoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentVoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentVoteGroupByOutputType[P]>
            : GetScalarType<T[P], CommentVoteGroupByOutputType[P]>
        }
      >
    >


  export type CommentVoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    userId?: boolean
    commentId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commentVote"]>

  export type CommentVoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    userId?: boolean
    commentId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commentVote"]>

  export type CommentVoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    userId?: boolean
    commentId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commentVote"]>

  export type CommentVoteSelectScalar = {
    id?: boolean
    value?: boolean
    userId?: boolean
    commentId?: boolean
    createdAt?: boolean
  }

  export type CommentVoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "value" | "userId" | "commentId" | "createdAt", ExtArgs["result"]["commentVote"]>
  export type CommentVoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }
  export type CommentVoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }
  export type CommentVoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }

  export type $CommentVotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommentVote"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      comment: Prisma.$CommentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      value: number
      userId: string
      commentId: string
      createdAt: Date
    }, ExtArgs["result"]["commentVote"]>
    composites: {}
  }

  type CommentVoteGetPayload<S extends boolean | null | undefined | CommentVoteDefaultArgs> = $Result.GetResult<Prisma.$CommentVotePayload, S>

  type CommentVoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentVoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentVoteCountAggregateInputType | true
    }

  export interface CommentVoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommentVote'], meta: { name: 'CommentVote' } }
    /**
     * Find zero or one CommentVote that matches the filter.
     * @param {CommentVoteFindUniqueArgs} args - Arguments to find a CommentVote
     * @example
     * // Get one CommentVote
     * const commentVote = await prisma.commentVote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentVoteFindUniqueArgs>(args: SelectSubset<T, CommentVoteFindUniqueArgs<ExtArgs>>): Prisma__CommentVoteClient<$Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CommentVote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentVoteFindUniqueOrThrowArgs} args - Arguments to find a CommentVote
     * @example
     * // Get one CommentVote
     * const commentVote = await prisma.commentVote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentVoteFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentVoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentVoteClient<$Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommentVote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentVoteFindFirstArgs} args - Arguments to find a CommentVote
     * @example
     * // Get one CommentVote
     * const commentVote = await prisma.commentVote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentVoteFindFirstArgs>(args?: SelectSubset<T, CommentVoteFindFirstArgs<ExtArgs>>): Prisma__CommentVoteClient<$Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommentVote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentVoteFindFirstOrThrowArgs} args - Arguments to find a CommentVote
     * @example
     * // Get one CommentVote
     * const commentVote = await prisma.commentVote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentVoteFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentVoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentVoteClient<$Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CommentVotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentVoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommentVotes
     * const commentVotes = await prisma.commentVote.findMany()
     * 
     * // Get first 10 CommentVotes
     * const commentVotes = await prisma.commentVote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentVoteWithIdOnly = await prisma.commentVote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentVoteFindManyArgs>(args?: SelectSubset<T, CommentVoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CommentVote.
     * @param {CommentVoteCreateArgs} args - Arguments to create a CommentVote.
     * @example
     * // Create one CommentVote
     * const CommentVote = await prisma.commentVote.create({
     *   data: {
     *     // ... data to create a CommentVote
     *   }
     * })
     * 
     */
    create<T extends CommentVoteCreateArgs>(args: SelectSubset<T, CommentVoteCreateArgs<ExtArgs>>): Prisma__CommentVoteClient<$Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CommentVotes.
     * @param {CommentVoteCreateManyArgs} args - Arguments to create many CommentVotes.
     * @example
     * // Create many CommentVotes
     * const commentVote = await prisma.commentVote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentVoteCreateManyArgs>(args?: SelectSubset<T, CommentVoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CommentVotes and returns the data saved in the database.
     * @param {CommentVoteCreateManyAndReturnArgs} args - Arguments to create many CommentVotes.
     * @example
     * // Create many CommentVotes
     * const commentVote = await prisma.commentVote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CommentVotes and only return the `id`
     * const commentVoteWithIdOnly = await prisma.commentVote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentVoteCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentVoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CommentVote.
     * @param {CommentVoteDeleteArgs} args - Arguments to delete one CommentVote.
     * @example
     * // Delete one CommentVote
     * const CommentVote = await prisma.commentVote.delete({
     *   where: {
     *     // ... filter to delete one CommentVote
     *   }
     * })
     * 
     */
    delete<T extends CommentVoteDeleteArgs>(args: SelectSubset<T, CommentVoteDeleteArgs<ExtArgs>>): Prisma__CommentVoteClient<$Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CommentVote.
     * @param {CommentVoteUpdateArgs} args - Arguments to update one CommentVote.
     * @example
     * // Update one CommentVote
     * const commentVote = await prisma.commentVote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentVoteUpdateArgs>(args: SelectSubset<T, CommentVoteUpdateArgs<ExtArgs>>): Prisma__CommentVoteClient<$Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CommentVotes.
     * @param {CommentVoteDeleteManyArgs} args - Arguments to filter CommentVotes to delete.
     * @example
     * // Delete a few CommentVotes
     * const { count } = await prisma.commentVote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentVoteDeleteManyArgs>(args?: SelectSubset<T, CommentVoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommentVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentVoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommentVotes
     * const commentVote = await prisma.commentVote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentVoteUpdateManyArgs>(args: SelectSubset<T, CommentVoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommentVotes and returns the data updated in the database.
     * @param {CommentVoteUpdateManyAndReturnArgs} args - Arguments to update many CommentVotes.
     * @example
     * // Update many CommentVotes
     * const commentVote = await prisma.commentVote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CommentVotes and only return the `id`
     * const commentVoteWithIdOnly = await prisma.commentVote.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentVoteUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentVoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CommentVote.
     * @param {CommentVoteUpsertArgs} args - Arguments to update or create a CommentVote.
     * @example
     * // Update or create a CommentVote
     * const commentVote = await prisma.commentVote.upsert({
     *   create: {
     *     // ... data to create a CommentVote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommentVote we want to update
     *   }
     * })
     */
    upsert<T extends CommentVoteUpsertArgs>(args: SelectSubset<T, CommentVoteUpsertArgs<ExtArgs>>): Prisma__CommentVoteClient<$Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CommentVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentVoteCountArgs} args - Arguments to filter CommentVotes to count.
     * @example
     * // Count the number of CommentVotes
     * const count = await prisma.commentVote.count({
     *   where: {
     *     // ... the filter for the CommentVotes we want to count
     *   }
     * })
    **/
    count<T extends CommentVoteCountArgs>(
      args?: Subset<T, CommentVoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentVoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommentVote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentVoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentVoteAggregateArgs>(args: Subset<T, CommentVoteAggregateArgs>): Prisma.PrismaPromise<GetCommentVoteAggregateType<T>>

    /**
     * Group by CommentVote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentVoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentVoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentVoteGroupByArgs['orderBy'] }
        : { orderBy?: CommentVoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentVoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentVoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommentVote model
   */
  readonly fields: CommentVoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommentVote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentVoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comment<T extends CommentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommentDefaultArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CommentVote model
   */
  interface CommentVoteFieldRefs {
    readonly id: FieldRef<"CommentVote", 'String'>
    readonly value: FieldRef<"CommentVote", 'Int'>
    readonly userId: FieldRef<"CommentVote", 'String'>
    readonly commentId: FieldRef<"CommentVote", 'String'>
    readonly createdAt: FieldRef<"CommentVote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CommentVote findUnique
   */
  export type CommentVoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentVote
     */
    omit?: CommentVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentVoteInclude<ExtArgs> | null
    /**
     * Filter, which CommentVote to fetch.
     */
    where: CommentVoteWhereUniqueInput
  }

  /**
   * CommentVote findUniqueOrThrow
   */
  export type CommentVoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentVote
     */
    omit?: CommentVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentVoteInclude<ExtArgs> | null
    /**
     * Filter, which CommentVote to fetch.
     */
    where: CommentVoteWhereUniqueInput
  }

  /**
   * CommentVote findFirst
   */
  export type CommentVoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentVote
     */
    omit?: CommentVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentVoteInclude<ExtArgs> | null
    /**
     * Filter, which CommentVote to fetch.
     */
    where?: CommentVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentVotes to fetch.
     */
    orderBy?: CommentVoteOrderByWithRelationInput | CommentVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommentVotes.
     */
    cursor?: CommentVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommentVotes.
     */
    distinct?: CommentVoteScalarFieldEnum | CommentVoteScalarFieldEnum[]
  }

  /**
   * CommentVote findFirstOrThrow
   */
  export type CommentVoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentVote
     */
    omit?: CommentVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentVoteInclude<ExtArgs> | null
    /**
     * Filter, which CommentVote to fetch.
     */
    where?: CommentVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentVotes to fetch.
     */
    orderBy?: CommentVoteOrderByWithRelationInput | CommentVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommentVotes.
     */
    cursor?: CommentVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommentVotes.
     */
    distinct?: CommentVoteScalarFieldEnum | CommentVoteScalarFieldEnum[]
  }

  /**
   * CommentVote findMany
   */
  export type CommentVoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentVote
     */
    omit?: CommentVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentVoteInclude<ExtArgs> | null
    /**
     * Filter, which CommentVotes to fetch.
     */
    where?: CommentVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentVotes to fetch.
     */
    orderBy?: CommentVoteOrderByWithRelationInput | CommentVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommentVotes.
     */
    cursor?: CommentVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentVotes.
     */
    skip?: number
    distinct?: CommentVoteScalarFieldEnum | CommentVoteScalarFieldEnum[]
  }

  /**
   * CommentVote create
   */
  export type CommentVoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentVote
     */
    omit?: CommentVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentVoteInclude<ExtArgs> | null
    /**
     * The data needed to create a CommentVote.
     */
    data: XOR<CommentVoteCreateInput, CommentVoteUncheckedCreateInput>
  }

  /**
   * CommentVote createMany
   */
  export type CommentVoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommentVotes.
     */
    data: CommentVoteCreateManyInput | CommentVoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommentVote createManyAndReturn
   */
  export type CommentVoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommentVote
     */
    omit?: CommentVoteOmit<ExtArgs> | null
    /**
     * The data used to create many CommentVotes.
     */
    data: CommentVoteCreateManyInput | CommentVoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentVoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommentVote update
   */
  export type CommentVoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentVote
     */
    omit?: CommentVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentVoteInclude<ExtArgs> | null
    /**
     * The data needed to update a CommentVote.
     */
    data: XOR<CommentVoteUpdateInput, CommentVoteUncheckedUpdateInput>
    /**
     * Choose, which CommentVote to update.
     */
    where: CommentVoteWhereUniqueInput
  }

  /**
   * CommentVote updateMany
   */
  export type CommentVoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommentVotes.
     */
    data: XOR<CommentVoteUpdateManyMutationInput, CommentVoteUncheckedUpdateManyInput>
    /**
     * Filter which CommentVotes to update
     */
    where?: CommentVoteWhereInput
    /**
     * Limit how many CommentVotes to update.
     */
    limit?: number
  }

  /**
   * CommentVote updateManyAndReturn
   */
  export type CommentVoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommentVote
     */
    omit?: CommentVoteOmit<ExtArgs> | null
    /**
     * The data used to update CommentVotes.
     */
    data: XOR<CommentVoteUpdateManyMutationInput, CommentVoteUncheckedUpdateManyInput>
    /**
     * Filter which CommentVotes to update
     */
    where?: CommentVoteWhereInput
    /**
     * Limit how many CommentVotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentVoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommentVote upsert
   */
  export type CommentVoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentVote
     */
    omit?: CommentVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentVoteInclude<ExtArgs> | null
    /**
     * The filter to search for the CommentVote to update in case it exists.
     */
    where: CommentVoteWhereUniqueInput
    /**
     * In case the CommentVote found by the `where` argument doesn't exist, create a new CommentVote with this data.
     */
    create: XOR<CommentVoteCreateInput, CommentVoteUncheckedCreateInput>
    /**
     * In case the CommentVote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentVoteUpdateInput, CommentVoteUncheckedUpdateInput>
  }

  /**
   * CommentVote delete
   */
  export type CommentVoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentVote
     */
    omit?: CommentVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentVoteInclude<ExtArgs> | null
    /**
     * Filter which CommentVote to delete.
     */
    where: CommentVoteWhereUniqueInput
  }

  /**
   * CommentVote deleteMany
   */
  export type CommentVoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommentVotes to delete
     */
    where?: CommentVoteWhereInput
    /**
     * Limit how many CommentVotes to delete.
     */
    limit?: number
  }

  /**
   * CommentVote without action
   */
  export type CommentVoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentVote
     */
    omit?: CommentVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentVoteInclude<ExtArgs> | null
  }


  /**
   * Model PostReaction
   */

  export type AggregatePostReaction = {
    _count: PostReactionCountAggregateOutputType | null
    _min: PostReactionMinAggregateOutputType | null
    _max: PostReactionMaxAggregateOutputType | null
  }

  export type PostReactionMinAggregateOutputType = {
    id: string | null
    emoji: string | null
    userId: string | null
    postId: string | null
    createdAt: Date | null
  }

  export type PostReactionMaxAggregateOutputType = {
    id: string | null
    emoji: string | null
    userId: string | null
    postId: string | null
    createdAt: Date | null
  }

  export type PostReactionCountAggregateOutputType = {
    id: number
    emoji: number
    userId: number
    postId: number
    createdAt: number
    _all: number
  }


  export type PostReactionMinAggregateInputType = {
    id?: true
    emoji?: true
    userId?: true
    postId?: true
    createdAt?: true
  }

  export type PostReactionMaxAggregateInputType = {
    id?: true
    emoji?: true
    userId?: true
    postId?: true
    createdAt?: true
  }

  export type PostReactionCountAggregateInputType = {
    id?: true
    emoji?: true
    userId?: true
    postId?: true
    createdAt?: true
    _all?: true
  }

  export type PostReactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostReaction to aggregate.
     */
    where?: PostReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostReactions to fetch.
     */
    orderBy?: PostReactionOrderByWithRelationInput | PostReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostReactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostReactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostReactions
    **/
    _count?: true | PostReactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostReactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostReactionMaxAggregateInputType
  }

  export type GetPostReactionAggregateType<T extends PostReactionAggregateArgs> = {
        [P in keyof T & keyof AggregatePostReaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostReaction[P]>
      : GetScalarType<T[P], AggregatePostReaction[P]>
  }




  export type PostReactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostReactionWhereInput
    orderBy?: PostReactionOrderByWithAggregationInput | PostReactionOrderByWithAggregationInput[]
    by: PostReactionScalarFieldEnum[] | PostReactionScalarFieldEnum
    having?: PostReactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostReactionCountAggregateInputType | true
    _min?: PostReactionMinAggregateInputType
    _max?: PostReactionMaxAggregateInputType
  }

  export type PostReactionGroupByOutputType = {
    id: string
    emoji: string
    userId: string
    postId: string
    createdAt: Date
    _count: PostReactionCountAggregateOutputType | null
    _min: PostReactionMinAggregateOutputType | null
    _max: PostReactionMaxAggregateOutputType | null
  }

  type GetPostReactionGroupByPayload<T extends PostReactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostReactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostReactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostReactionGroupByOutputType[P]>
            : GetScalarType<T[P], PostReactionGroupByOutputType[P]>
        }
      >
    >


  export type PostReactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    emoji?: boolean
    userId?: boolean
    postId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postReaction"]>

  export type PostReactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    emoji?: boolean
    userId?: boolean
    postId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postReaction"]>

  export type PostReactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    emoji?: boolean
    userId?: boolean
    postId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postReaction"]>

  export type PostReactionSelectScalar = {
    id?: boolean
    emoji?: boolean
    userId?: boolean
    postId?: boolean
    createdAt?: boolean
  }

  export type PostReactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "emoji" | "userId" | "postId" | "createdAt", ExtArgs["result"]["postReaction"]>
  export type PostReactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type PostReactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type PostReactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $PostReactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostReaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      emoji: string
      userId: string
      postId: string
      createdAt: Date
    }, ExtArgs["result"]["postReaction"]>
    composites: {}
  }

  type PostReactionGetPayload<S extends boolean | null | undefined | PostReactionDefaultArgs> = $Result.GetResult<Prisma.$PostReactionPayload, S>

  type PostReactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostReactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostReactionCountAggregateInputType | true
    }

  export interface PostReactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostReaction'], meta: { name: 'PostReaction' } }
    /**
     * Find zero or one PostReaction that matches the filter.
     * @param {PostReactionFindUniqueArgs} args - Arguments to find a PostReaction
     * @example
     * // Get one PostReaction
     * const postReaction = await prisma.postReaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostReactionFindUniqueArgs>(args: SelectSubset<T, PostReactionFindUniqueArgs<ExtArgs>>): Prisma__PostReactionClient<$Result.GetResult<Prisma.$PostReactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostReaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostReactionFindUniqueOrThrowArgs} args - Arguments to find a PostReaction
     * @example
     * // Get one PostReaction
     * const postReaction = await prisma.postReaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostReactionFindUniqueOrThrowArgs>(args: SelectSubset<T, PostReactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostReactionClient<$Result.GetResult<Prisma.$PostReactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostReaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostReactionFindFirstArgs} args - Arguments to find a PostReaction
     * @example
     * // Get one PostReaction
     * const postReaction = await prisma.postReaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostReactionFindFirstArgs>(args?: SelectSubset<T, PostReactionFindFirstArgs<ExtArgs>>): Prisma__PostReactionClient<$Result.GetResult<Prisma.$PostReactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostReaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostReactionFindFirstOrThrowArgs} args - Arguments to find a PostReaction
     * @example
     * // Get one PostReaction
     * const postReaction = await prisma.postReaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostReactionFindFirstOrThrowArgs>(args?: SelectSubset<T, PostReactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostReactionClient<$Result.GetResult<Prisma.$PostReactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostReactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostReactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostReactions
     * const postReactions = await prisma.postReaction.findMany()
     * 
     * // Get first 10 PostReactions
     * const postReactions = await prisma.postReaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postReactionWithIdOnly = await prisma.postReaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostReactionFindManyArgs>(args?: SelectSubset<T, PostReactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostReactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostReaction.
     * @param {PostReactionCreateArgs} args - Arguments to create a PostReaction.
     * @example
     * // Create one PostReaction
     * const PostReaction = await prisma.postReaction.create({
     *   data: {
     *     // ... data to create a PostReaction
     *   }
     * })
     * 
     */
    create<T extends PostReactionCreateArgs>(args: SelectSubset<T, PostReactionCreateArgs<ExtArgs>>): Prisma__PostReactionClient<$Result.GetResult<Prisma.$PostReactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostReactions.
     * @param {PostReactionCreateManyArgs} args - Arguments to create many PostReactions.
     * @example
     * // Create many PostReactions
     * const postReaction = await prisma.postReaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostReactionCreateManyArgs>(args?: SelectSubset<T, PostReactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostReactions and returns the data saved in the database.
     * @param {PostReactionCreateManyAndReturnArgs} args - Arguments to create many PostReactions.
     * @example
     * // Create many PostReactions
     * const postReaction = await prisma.postReaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostReactions and only return the `id`
     * const postReactionWithIdOnly = await prisma.postReaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostReactionCreateManyAndReturnArgs>(args?: SelectSubset<T, PostReactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostReactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostReaction.
     * @param {PostReactionDeleteArgs} args - Arguments to delete one PostReaction.
     * @example
     * // Delete one PostReaction
     * const PostReaction = await prisma.postReaction.delete({
     *   where: {
     *     // ... filter to delete one PostReaction
     *   }
     * })
     * 
     */
    delete<T extends PostReactionDeleteArgs>(args: SelectSubset<T, PostReactionDeleteArgs<ExtArgs>>): Prisma__PostReactionClient<$Result.GetResult<Prisma.$PostReactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostReaction.
     * @param {PostReactionUpdateArgs} args - Arguments to update one PostReaction.
     * @example
     * // Update one PostReaction
     * const postReaction = await prisma.postReaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostReactionUpdateArgs>(args: SelectSubset<T, PostReactionUpdateArgs<ExtArgs>>): Prisma__PostReactionClient<$Result.GetResult<Prisma.$PostReactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostReactions.
     * @param {PostReactionDeleteManyArgs} args - Arguments to filter PostReactions to delete.
     * @example
     * // Delete a few PostReactions
     * const { count } = await prisma.postReaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostReactionDeleteManyArgs>(args?: SelectSubset<T, PostReactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostReactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostReactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostReactions
     * const postReaction = await prisma.postReaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostReactionUpdateManyArgs>(args: SelectSubset<T, PostReactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostReactions and returns the data updated in the database.
     * @param {PostReactionUpdateManyAndReturnArgs} args - Arguments to update many PostReactions.
     * @example
     * // Update many PostReactions
     * const postReaction = await prisma.postReaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostReactions and only return the `id`
     * const postReactionWithIdOnly = await prisma.postReaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostReactionUpdateManyAndReturnArgs>(args: SelectSubset<T, PostReactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostReactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostReaction.
     * @param {PostReactionUpsertArgs} args - Arguments to update or create a PostReaction.
     * @example
     * // Update or create a PostReaction
     * const postReaction = await prisma.postReaction.upsert({
     *   create: {
     *     // ... data to create a PostReaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostReaction we want to update
     *   }
     * })
     */
    upsert<T extends PostReactionUpsertArgs>(args: SelectSubset<T, PostReactionUpsertArgs<ExtArgs>>): Prisma__PostReactionClient<$Result.GetResult<Prisma.$PostReactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostReactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostReactionCountArgs} args - Arguments to filter PostReactions to count.
     * @example
     * // Count the number of PostReactions
     * const count = await prisma.postReaction.count({
     *   where: {
     *     // ... the filter for the PostReactions we want to count
     *   }
     * })
    **/
    count<T extends PostReactionCountArgs>(
      args?: Subset<T, PostReactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostReactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostReaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostReactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostReactionAggregateArgs>(args: Subset<T, PostReactionAggregateArgs>): Prisma.PrismaPromise<GetPostReactionAggregateType<T>>

    /**
     * Group by PostReaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostReactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostReactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostReactionGroupByArgs['orderBy'] }
        : { orderBy?: PostReactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostReactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostReactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostReaction model
   */
  readonly fields: PostReactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostReaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostReactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PostReaction model
   */
  interface PostReactionFieldRefs {
    readonly id: FieldRef<"PostReaction", 'String'>
    readonly emoji: FieldRef<"PostReaction", 'String'>
    readonly userId: FieldRef<"PostReaction", 'String'>
    readonly postId: FieldRef<"PostReaction", 'String'>
    readonly createdAt: FieldRef<"PostReaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PostReaction findUnique
   */
  export type PostReactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostReaction
     */
    select?: PostReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostReaction
     */
    omit?: PostReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostReactionInclude<ExtArgs> | null
    /**
     * Filter, which PostReaction to fetch.
     */
    where: PostReactionWhereUniqueInput
  }

  /**
   * PostReaction findUniqueOrThrow
   */
  export type PostReactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostReaction
     */
    select?: PostReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostReaction
     */
    omit?: PostReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostReactionInclude<ExtArgs> | null
    /**
     * Filter, which PostReaction to fetch.
     */
    where: PostReactionWhereUniqueInput
  }

  /**
   * PostReaction findFirst
   */
  export type PostReactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostReaction
     */
    select?: PostReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostReaction
     */
    omit?: PostReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostReactionInclude<ExtArgs> | null
    /**
     * Filter, which PostReaction to fetch.
     */
    where?: PostReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostReactions to fetch.
     */
    orderBy?: PostReactionOrderByWithRelationInput | PostReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostReactions.
     */
    cursor?: PostReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostReactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostReactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostReactions.
     */
    distinct?: PostReactionScalarFieldEnum | PostReactionScalarFieldEnum[]
  }

  /**
   * PostReaction findFirstOrThrow
   */
  export type PostReactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostReaction
     */
    select?: PostReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostReaction
     */
    omit?: PostReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostReactionInclude<ExtArgs> | null
    /**
     * Filter, which PostReaction to fetch.
     */
    where?: PostReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostReactions to fetch.
     */
    orderBy?: PostReactionOrderByWithRelationInput | PostReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostReactions.
     */
    cursor?: PostReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostReactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostReactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostReactions.
     */
    distinct?: PostReactionScalarFieldEnum | PostReactionScalarFieldEnum[]
  }

  /**
   * PostReaction findMany
   */
  export type PostReactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostReaction
     */
    select?: PostReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostReaction
     */
    omit?: PostReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostReactionInclude<ExtArgs> | null
    /**
     * Filter, which PostReactions to fetch.
     */
    where?: PostReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostReactions to fetch.
     */
    orderBy?: PostReactionOrderByWithRelationInput | PostReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostReactions.
     */
    cursor?: PostReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostReactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostReactions.
     */
    skip?: number
    distinct?: PostReactionScalarFieldEnum | PostReactionScalarFieldEnum[]
  }

  /**
   * PostReaction create
   */
  export type PostReactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostReaction
     */
    select?: PostReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostReaction
     */
    omit?: PostReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostReactionInclude<ExtArgs> | null
    /**
     * The data needed to create a PostReaction.
     */
    data: XOR<PostReactionCreateInput, PostReactionUncheckedCreateInput>
  }

  /**
   * PostReaction createMany
   */
  export type PostReactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostReactions.
     */
    data: PostReactionCreateManyInput | PostReactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostReaction createManyAndReturn
   */
  export type PostReactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostReaction
     */
    select?: PostReactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostReaction
     */
    omit?: PostReactionOmit<ExtArgs> | null
    /**
     * The data used to create many PostReactions.
     */
    data: PostReactionCreateManyInput | PostReactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostReactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostReaction update
   */
  export type PostReactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostReaction
     */
    select?: PostReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostReaction
     */
    omit?: PostReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostReactionInclude<ExtArgs> | null
    /**
     * The data needed to update a PostReaction.
     */
    data: XOR<PostReactionUpdateInput, PostReactionUncheckedUpdateInput>
    /**
     * Choose, which PostReaction to update.
     */
    where: PostReactionWhereUniqueInput
  }

  /**
   * PostReaction updateMany
   */
  export type PostReactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostReactions.
     */
    data: XOR<PostReactionUpdateManyMutationInput, PostReactionUncheckedUpdateManyInput>
    /**
     * Filter which PostReactions to update
     */
    where?: PostReactionWhereInput
    /**
     * Limit how many PostReactions to update.
     */
    limit?: number
  }

  /**
   * PostReaction updateManyAndReturn
   */
  export type PostReactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostReaction
     */
    select?: PostReactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostReaction
     */
    omit?: PostReactionOmit<ExtArgs> | null
    /**
     * The data used to update PostReactions.
     */
    data: XOR<PostReactionUpdateManyMutationInput, PostReactionUncheckedUpdateManyInput>
    /**
     * Filter which PostReactions to update
     */
    where?: PostReactionWhereInput
    /**
     * Limit how many PostReactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostReactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostReaction upsert
   */
  export type PostReactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostReaction
     */
    select?: PostReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostReaction
     */
    omit?: PostReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostReactionInclude<ExtArgs> | null
    /**
     * The filter to search for the PostReaction to update in case it exists.
     */
    where: PostReactionWhereUniqueInput
    /**
     * In case the PostReaction found by the `where` argument doesn't exist, create a new PostReaction with this data.
     */
    create: XOR<PostReactionCreateInput, PostReactionUncheckedCreateInput>
    /**
     * In case the PostReaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostReactionUpdateInput, PostReactionUncheckedUpdateInput>
  }

  /**
   * PostReaction delete
   */
  export type PostReactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostReaction
     */
    select?: PostReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostReaction
     */
    omit?: PostReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostReactionInclude<ExtArgs> | null
    /**
     * Filter which PostReaction to delete.
     */
    where: PostReactionWhereUniqueInput
  }

  /**
   * PostReaction deleteMany
   */
  export type PostReactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostReactions to delete
     */
    where?: PostReactionWhereInput
    /**
     * Limit how many PostReactions to delete.
     */
    limit?: number
  }

  /**
   * PostReaction without action
   */
  export type PostReactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostReaction
     */
    select?: PostReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostReaction
     */
    omit?: PostReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostReactionInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    type: $Enums.NotificationType | null
    title: string | null
    message: string | null
    link: string | null
    isRead: boolean | null
    metadata: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    type: $Enums.NotificationType | null
    title: string | null
    message: string | null
    link: string | null
    isRead: boolean | null
    metadata: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    type: number
    title: number
    message: number
    link: number
    isRead: number
    metadata: number
    userId: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    type?: true
    title?: true
    message?: true
    link?: true
    isRead?: true
    metadata?: true
    userId?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    type?: true
    title?: true
    message?: true
    link?: true
    isRead?: true
    metadata?: true
    userId?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    type?: true
    title?: true
    message?: true
    link?: true
    isRead?: true
    metadata?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    type: $Enums.NotificationType
    title: string
    message: string
    link: string | null
    isRead: boolean
    metadata: string | null
    userId: string
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    link?: boolean
    isRead?: boolean
    metadata?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    link?: boolean
    isRead?: boolean
    metadata?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    link?: boolean
    isRead?: boolean
    metadata?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    link?: boolean
    isRead?: boolean
    metadata?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "title" | "message" | "link" | "isRead" | "metadata" | "userId" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.NotificationType
      title: string
      message: string
      link: string | null
      isRead: boolean
      metadata: string | null
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'NotificationType'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly link: FieldRef<"Notification", 'String'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly metadata: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    role: 'role',
    organization: 'organization',
    reputation: 'reputation',
    badges: 'badges',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CaseScalarFieldEnum: {
    id: 'id',
    companyName: 'companyName',
    productName: 'productName',
    category: 'category',
    licenseInitial: 'licenseInitial',
    licenseFinal: 'licenseFinal',
    changeDate: 'changeDate',
    website: 'website',
    description: 'description',
    legalAnalysis: 'legalAnalysis',
    communityReaction: 'communityReaction',
    sources: 'sources',
    alternatives: 'alternatives',
    status: 'status',
    severity: 'severity',
    reportCount: 'reportCount',
    reporterId: 'reporterId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CaseScalarFieldEnum = (typeof CaseScalarFieldEnum)[keyof typeof CaseScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    category: 'category',
    tags: 'tags',
    authorId: 'authorId',
    isPinned: 'isPinned',
    views: 'views',
    upvotes: 'upvotes',
    downvotes: 'downvotes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    content: 'content',
    authorId: 'authorId',
    postId: 'postId',
    parentId: 'parentId',
    upvotes: 'upvotes',
    downvotes: 'downvotes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const PostVoteScalarFieldEnum: {
    id: 'id',
    value: 'value',
    userId: 'userId',
    postId: 'postId',
    createdAt: 'createdAt'
  };

  export type PostVoteScalarFieldEnum = (typeof PostVoteScalarFieldEnum)[keyof typeof PostVoteScalarFieldEnum]


  export const CommentVoteScalarFieldEnum: {
    id: 'id',
    value: 'value',
    userId: 'userId',
    commentId: 'commentId',
    createdAt: 'createdAt'
  };

  export type CommentVoteScalarFieldEnum = (typeof CommentVoteScalarFieldEnum)[keyof typeof CommentVoteScalarFieldEnum]


  export const PostReactionScalarFieldEnum: {
    id: 'id',
    emoji: 'emoji',
    userId: 'userId',
    postId: 'postId',
    createdAt: 'createdAt'
  };

  export type PostReactionScalarFieldEnum = (typeof PostReactionScalarFieldEnum)[keyof typeof PostReactionScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    type: 'type',
    title: 'title',
    message: 'message',
    link: 'link',
    isRead: 'isRead',
    metadata: 'metadata',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'CaseStatus'
   */
  export type EnumCaseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CaseStatus'>
    


  /**
   * Reference to a field of type 'CaseStatus[]'
   */
  export type ListEnumCaseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CaseStatus[]'>
    


  /**
   * Reference to a field of type 'CaseSeverity'
   */
  export type EnumCaseSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CaseSeverity'>
    


  /**
   * Reference to a field of type 'CaseSeverity[]'
   */
  export type ListEnumCaseSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CaseSeverity[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'NotificationType'
   */
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>
    


  /**
   * Reference to a field of type 'NotificationType[]'
   */
  export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    organization?: StringNullableFilter<"User"> | string | null
    reputation?: IntFilter<"User"> | number
    badges?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    cases?: CaseListRelationFilter
    posts?: PostListRelationFilter
    comments?: CommentListRelationFilter
    postVotes?: PostVoteListRelationFilter
    commentVotes?: CommentVoteListRelationFilter
    reactions?: PostReactionListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    organization?: SortOrderInput | SortOrder
    reputation?: SortOrder
    badges?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cases?: CaseOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    postVotes?: PostVoteOrderByRelationAggregateInput
    commentVotes?: CommentVoteOrderByRelationAggregateInput
    reactions?: PostReactionOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    organization?: StringNullableFilter<"User"> | string | null
    reputation?: IntFilter<"User"> | number
    badges?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    cases?: CaseListRelationFilter
    posts?: PostListRelationFilter
    comments?: CommentListRelationFilter
    postVotes?: PostVoteListRelationFilter
    commentVotes?: CommentVoteListRelationFilter
    reactions?: PostReactionListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    organization?: SortOrderInput | SortOrder
    reputation?: SortOrder
    badges?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    organization?: StringNullableWithAggregatesFilter<"User"> | string | null
    reputation?: IntWithAggregatesFilter<"User"> | number
    badges?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CaseWhereInput = {
    AND?: CaseWhereInput | CaseWhereInput[]
    OR?: CaseWhereInput[]
    NOT?: CaseWhereInput | CaseWhereInput[]
    id?: StringFilter<"Case"> | string
    companyName?: StringFilter<"Case"> | string
    productName?: StringFilter<"Case"> | string
    category?: StringFilter<"Case"> | string
    licenseInitial?: StringFilter<"Case"> | string
    licenseFinal?: StringFilter<"Case"> | string
    changeDate?: StringFilter<"Case"> | string
    website?: StringFilter<"Case"> | string
    description?: StringFilter<"Case"> | string
    legalAnalysis?: StringFilter<"Case"> | string
    communityReaction?: StringFilter<"Case"> | string
    sources?: StringFilter<"Case"> | string
    alternatives?: StringNullableFilter<"Case"> | string | null
    status?: EnumCaseStatusFilter<"Case"> | $Enums.CaseStatus
    severity?: EnumCaseSeverityFilter<"Case"> | $Enums.CaseSeverity
    reportCount?: IntFilter<"Case"> | number
    reporterId?: StringFilter<"Case"> | string
    createdAt?: DateTimeFilter<"Case"> | Date | string
    updatedAt?: DateTimeFilter<"Case"> | Date | string
    reporter?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CaseOrderByWithRelationInput = {
    id?: SortOrder
    companyName?: SortOrder
    productName?: SortOrder
    category?: SortOrder
    licenseInitial?: SortOrder
    licenseFinal?: SortOrder
    changeDate?: SortOrder
    website?: SortOrder
    description?: SortOrder
    legalAnalysis?: SortOrder
    communityReaction?: SortOrder
    sources?: SortOrder
    alternatives?: SortOrderInput | SortOrder
    status?: SortOrder
    severity?: SortOrder
    reportCount?: SortOrder
    reporterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reporter?: UserOrderByWithRelationInput
  }

  export type CaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CaseWhereInput | CaseWhereInput[]
    OR?: CaseWhereInput[]
    NOT?: CaseWhereInput | CaseWhereInput[]
    companyName?: StringFilter<"Case"> | string
    productName?: StringFilter<"Case"> | string
    category?: StringFilter<"Case"> | string
    licenseInitial?: StringFilter<"Case"> | string
    licenseFinal?: StringFilter<"Case"> | string
    changeDate?: StringFilter<"Case"> | string
    website?: StringFilter<"Case"> | string
    description?: StringFilter<"Case"> | string
    legalAnalysis?: StringFilter<"Case"> | string
    communityReaction?: StringFilter<"Case"> | string
    sources?: StringFilter<"Case"> | string
    alternatives?: StringNullableFilter<"Case"> | string | null
    status?: EnumCaseStatusFilter<"Case"> | $Enums.CaseStatus
    severity?: EnumCaseSeverityFilter<"Case"> | $Enums.CaseSeverity
    reportCount?: IntFilter<"Case"> | number
    reporterId?: StringFilter<"Case"> | string
    createdAt?: DateTimeFilter<"Case"> | Date | string
    updatedAt?: DateTimeFilter<"Case"> | Date | string
    reporter?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CaseOrderByWithAggregationInput = {
    id?: SortOrder
    companyName?: SortOrder
    productName?: SortOrder
    category?: SortOrder
    licenseInitial?: SortOrder
    licenseFinal?: SortOrder
    changeDate?: SortOrder
    website?: SortOrder
    description?: SortOrder
    legalAnalysis?: SortOrder
    communityReaction?: SortOrder
    sources?: SortOrder
    alternatives?: SortOrderInput | SortOrder
    status?: SortOrder
    severity?: SortOrder
    reportCount?: SortOrder
    reporterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CaseCountOrderByAggregateInput
    _avg?: CaseAvgOrderByAggregateInput
    _max?: CaseMaxOrderByAggregateInput
    _min?: CaseMinOrderByAggregateInput
    _sum?: CaseSumOrderByAggregateInput
  }

  export type CaseScalarWhereWithAggregatesInput = {
    AND?: CaseScalarWhereWithAggregatesInput | CaseScalarWhereWithAggregatesInput[]
    OR?: CaseScalarWhereWithAggregatesInput[]
    NOT?: CaseScalarWhereWithAggregatesInput | CaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Case"> | string
    companyName?: StringWithAggregatesFilter<"Case"> | string
    productName?: StringWithAggregatesFilter<"Case"> | string
    category?: StringWithAggregatesFilter<"Case"> | string
    licenseInitial?: StringWithAggregatesFilter<"Case"> | string
    licenseFinal?: StringWithAggregatesFilter<"Case"> | string
    changeDate?: StringWithAggregatesFilter<"Case"> | string
    website?: StringWithAggregatesFilter<"Case"> | string
    description?: StringWithAggregatesFilter<"Case"> | string
    legalAnalysis?: StringWithAggregatesFilter<"Case"> | string
    communityReaction?: StringWithAggregatesFilter<"Case"> | string
    sources?: StringWithAggregatesFilter<"Case"> | string
    alternatives?: StringNullableWithAggregatesFilter<"Case"> | string | null
    status?: EnumCaseStatusWithAggregatesFilter<"Case"> | $Enums.CaseStatus
    severity?: EnumCaseSeverityWithAggregatesFilter<"Case"> | $Enums.CaseSeverity
    reportCount?: IntWithAggregatesFilter<"Case"> | number
    reporterId?: StringWithAggregatesFilter<"Case"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Case"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Case"> | Date | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    category?: StringFilter<"Post"> | string
    tags?: StringFilter<"Post"> | string
    authorId?: StringFilter<"Post"> | string
    isPinned?: BoolFilter<"Post"> | boolean
    views?: IntFilter<"Post"> | number
    upvotes?: IntFilter<"Post"> | number
    downvotes?: IntFilter<"Post"> | number
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: CommentListRelationFilter
    votes?: PostVoteListRelationFilter
    reactions?: PostReactionListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    authorId?: SortOrder
    isPinned?: SortOrder
    views?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    author?: UserOrderByWithRelationInput
    comments?: CommentOrderByRelationAggregateInput
    votes?: PostVoteOrderByRelationAggregateInput
    reactions?: PostReactionOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    title?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    category?: StringFilter<"Post"> | string
    tags?: StringFilter<"Post"> | string
    authorId?: StringFilter<"Post"> | string
    isPinned?: BoolFilter<"Post"> | boolean
    views?: IntFilter<"Post"> | number
    upvotes?: IntFilter<"Post"> | number
    downvotes?: IntFilter<"Post"> | number
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: CommentListRelationFilter
    votes?: PostVoteListRelationFilter
    reactions?: PostReactionListRelationFilter
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    authorId?: SortOrder
    isPinned?: SortOrder
    views?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    title?: StringWithAggregatesFilter<"Post"> | string
    content?: StringWithAggregatesFilter<"Post"> | string
    category?: StringWithAggregatesFilter<"Post"> | string
    tags?: StringWithAggregatesFilter<"Post"> | string
    authorId?: StringWithAggregatesFilter<"Post"> | string
    isPinned?: BoolWithAggregatesFilter<"Post"> | boolean
    views?: IntWithAggregatesFilter<"Post"> | number
    upvotes?: IntWithAggregatesFilter<"Post"> | number
    downvotes?: IntWithAggregatesFilter<"Post"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    authorId?: StringFilter<"Comment"> | string
    postId?: StringFilter<"Comment"> | string
    parentId?: StringNullableFilter<"Comment"> | string | null
    upvotes?: IntFilter<"Comment"> | number
    downvotes?: IntFilter<"Comment"> | number
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    parent?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
    replies?: CommentListRelationFilter
    votes?: CommentVoteListRelationFilter
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    postId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    author?: UserOrderByWithRelationInput
    post?: PostOrderByWithRelationInput
    parent?: CommentOrderByWithRelationInput
    replies?: CommentOrderByRelationAggregateInput
    votes?: CommentVoteOrderByRelationAggregateInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    content?: StringFilter<"Comment"> | string
    authorId?: StringFilter<"Comment"> | string
    postId?: StringFilter<"Comment"> | string
    parentId?: StringNullableFilter<"Comment"> | string | null
    upvotes?: IntFilter<"Comment"> | number
    downvotes?: IntFilter<"Comment"> | number
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    parent?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
    replies?: CommentListRelationFilter
    votes?: CommentVoteListRelationFilter
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    postId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    content?: StringWithAggregatesFilter<"Comment"> | string
    authorId?: StringWithAggregatesFilter<"Comment"> | string
    postId?: StringWithAggregatesFilter<"Comment"> | string
    parentId?: StringNullableWithAggregatesFilter<"Comment"> | string | null
    upvotes?: IntWithAggregatesFilter<"Comment"> | number
    downvotes?: IntWithAggregatesFilter<"Comment"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type PostVoteWhereInput = {
    AND?: PostVoteWhereInput | PostVoteWhereInput[]
    OR?: PostVoteWhereInput[]
    NOT?: PostVoteWhereInput | PostVoteWhereInput[]
    id?: StringFilter<"PostVote"> | string
    value?: IntFilter<"PostVote"> | number
    userId?: StringFilter<"PostVote"> | string
    postId?: StringFilter<"PostVote"> | string
    createdAt?: DateTimeFilter<"PostVote"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type PostVoteOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    post?: PostOrderByWithRelationInput
  }

  export type PostVoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_postId?: PostVoteUserIdPostIdCompoundUniqueInput
    AND?: PostVoteWhereInput | PostVoteWhereInput[]
    OR?: PostVoteWhereInput[]
    NOT?: PostVoteWhereInput | PostVoteWhereInput[]
    value?: IntFilter<"PostVote"> | number
    userId?: StringFilter<"PostVote"> | string
    postId?: StringFilter<"PostVote"> | string
    createdAt?: DateTimeFilter<"PostVote"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id" | "userId_postId">

  export type PostVoteOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    _count?: PostVoteCountOrderByAggregateInput
    _avg?: PostVoteAvgOrderByAggregateInput
    _max?: PostVoteMaxOrderByAggregateInput
    _min?: PostVoteMinOrderByAggregateInput
    _sum?: PostVoteSumOrderByAggregateInput
  }

  export type PostVoteScalarWhereWithAggregatesInput = {
    AND?: PostVoteScalarWhereWithAggregatesInput | PostVoteScalarWhereWithAggregatesInput[]
    OR?: PostVoteScalarWhereWithAggregatesInput[]
    NOT?: PostVoteScalarWhereWithAggregatesInput | PostVoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PostVote"> | string
    value?: IntWithAggregatesFilter<"PostVote"> | number
    userId?: StringWithAggregatesFilter<"PostVote"> | string
    postId?: StringWithAggregatesFilter<"PostVote"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PostVote"> | Date | string
  }

  export type CommentVoteWhereInput = {
    AND?: CommentVoteWhereInput | CommentVoteWhereInput[]
    OR?: CommentVoteWhereInput[]
    NOT?: CommentVoteWhereInput | CommentVoteWhereInput[]
    id?: StringFilter<"CommentVote"> | string
    value?: IntFilter<"CommentVote"> | number
    userId?: StringFilter<"CommentVote"> | string
    commentId?: StringFilter<"CommentVote"> | string
    createdAt?: DateTimeFilter<"CommentVote"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    comment?: XOR<CommentScalarRelationFilter, CommentWhereInput>
  }

  export type CommentVoteOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
    userId?: SortOrder
    commentId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    comment?: CommentOrderByWithRelationInput
  }

  export type CommentVoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_commentId?: CommentVoteUserIdCommentIdCompoundUniqueInput
    AND?: CommentVoteWhereInput | CommentVoteWhereInput[]
    OR?: CommentVoteWhereInput[]
    NOT?: CommentVoteWhereInput | CommentVoteWhereInput[]
    value?: IntFilter<"CommentVote"> | number
    userId?: StringFilter<"CommentVote"> | string
    commentId?: StringFilter<"CommentVote"> | string
    createdAt?: DateTimeFilter<"CommentVote"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    comment?: XOR<CommentScalarRelationFilter, CommentWhereInput>
  }, "id" | "userId_commentId">

  export type CommentVoteOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    userId?: SortOrder
    commentId?: SortOrder
    createdAt?: SortOrder
    _count?: CommentVoteCountOrderByAggregateInput
    _avg?: CommentVoteAvgOrderByAggregateInput
    _max?: CommentVoteMaxOrderByAggregateInput
    _min?: CommentVoteMinOrderByAggregateInput
    _sum?: CommentVoteSumOrderByAggregateInput
  }

  export type CommentVoteScalarWhereWithAggregatesInput = {
    AND?: CommentVoteScalarWhereWithAggregatesInput | CommentVoteScalarWhereWithAggregatesInput[]
    OR?: CommentVoteScalarWhereWithAggregatesInput[]
    NOT?: CommentVoteScalarWhereWithAggregatesInput | CommentVoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CommentVote"> | string
    value?: IntWithAggregatesFilter<"CommentVote"> | number
    userId?: StringWithAggregatesFilter<"CommentVote"> | string
    commentId?: StringWithAggregatesFilter<"CommentVote"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CommentVote"> | Date | string
  }

  export type PostReactionWhereInput = {
    AND?: PostReactionWhereInput | PostReactionWhereInput[]
    OR?: PostReactionWhereInput[]
    NOT?: PostReactionWhereInput | PostReactionWhereInput[]
    id?: StringFilter<"PostReaction"> | string
    emoji?: StringFilter<"PostReaction"> | string
    userId?: StringFilter<"PostReaction"> | string
    postId?: StringFilter<"PostReaction"> | string
    createdAt?: DateTimeFilter<"PostReaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type PostReactionOrderByWithRelationInput = {
    id?: SortOrder
    emoji?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    post?: PostOrderByWithRelationInput
  }

  export type PostReactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_postId_emoji?: PostReactionUserIdPostIdEmojiCompoundUniqueInput
    AND?: PostReactionWhereInput | PostReactionWhereInput[]
    OR?: PostReactionWhereInput[]
    NOT?: PostReactionWhereInput | PostReactionWhereInput[]
    emoji?: StringFilter<"PostReaction"> | string
    userId?: StringFilter<"PostReaction"> | string
    postId?: StringFilter<"PostReaction"> | string
    createdAt?: DateTimeFilter<"PostReaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id" | "userId_postId_emoji">

  export type PostReactionOrderByWithAggregationInput = {
    id?: SortOrder
    emoji?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    _count?: PostReactionCountOrderByAggregateInput
    _max?: PostReactionMaxOrderByAggregateInput
    _min?: PostReactionMinOrderByAggregateInput
  }

  export type PostReactionScalarWhereWithAggregatesInput = {
    AND?: PostReactionScalarWhereWithAggregatesInput | PostReactionScalarWhereWithAggregatesInput[]
    OR?: PostReactionScalarWhereWithAggregatesInput[]
    NOT?: PostReactionScalarWhereWithAggregatesInput | PostReactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PostReaction"> | string
    emoji?: StringWithAggregatesFilter<"PostReaction"> | string
    userId?: StringWithAggregatesFilter<"PostReaction"> | string
    postId?: StringWithAggregatesFilter<"PostReaction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PostReaction"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    link?: StringNullableFilter<"Notification"> | string | null
    isRead?: BoolFilter<"Notification"> | boolean
    metadata?: StringNullableFilter<"Notification"> | string | null
    userId?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    link?: SortOrderInput | SortOrder
    isRead?: SortOrder
    metadata?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    link?: StringNullableFilter<"Notification"> | string | null
    isRead?: BoolFilter<"Notification"> | boolean
    metadata?: StringNullableFilter<"Notification"> | string | null
    userId?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    link?: SortOrderInput | SortOrder
    isRead?: SortOrder
    metadata?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    type?: EnumNotificationTypeWithAggregatesFilter<"Notification"> | $Enums.NotificationType
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    link?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    metadata?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    userId?: StringWithAggregatesFilter<"Notification"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    organization?: string | null
    reputation?: number
    badges?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cases?: CaseCreateNestedManyWithoutReporterInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    postVotes?: PostVoteCreateNestedManyWithoutUserInput
    commentVotes?: CommentVoteCreateNestedManyWithoutUserInput
    reactions?: PostReactionCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    organization?: string | null
    reputation?: number
    badges?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cases?: CaseUncheckedCreateNestedManyWithoutReporterInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    postVotes?: PostVoteUncheckedCreateNestedManyWithoutUserInput
    commentVotes?: CommentVoteUncheckedCreateNestedManyWithoutUserInput
    reactions?: PostReactionUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: IntFieldUpdateOperationsInput | number
    badges?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cases?: CaseUpdateManyWithoutReporterNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    postVotes?: PostVoteUpdateManyWithoutUserNestedInput
    commentVotes?: CommentVoteUpdateManyWithoutUserNestedInput
    reactions?: PostReactionUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: IntFieldUpdateOperationsInput | number
    badges?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cases?: CaseUncheckedUpdateManyWithoutReporterNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    postVotes?: PostVoteUncheckedUpdateManyWithoutUserNestedInput
    commentVotes?: CommentVoteUncheckedUpdateManyWithoutUserNestedInput
    reactions?: PostReactionUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    organization?: string | null
    reputation?: number
    badges?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: IntFieldUpdateOperationsInput | number
    badges?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: IntFieldUpdateOperationsInput | number
    badges?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaseCreateInput = {
    id?: string
    companyName: string
    productName: string
    category: string
    licenseInitial: string
    licenseFinal: string
    changeDate: string
    website: string
    description: string
    legalAnalysis: string
    communityReaction: string
    sources: string
    alternatives?: string | null
    status?: $Enums.CaseStatus
    severity?: $Enums.CaseSeverity
    reportCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reporter: UserCreateNestedOneWithoutCasesInput
  }

  export type CaseUncheckedCreateInput = {
    id?: string
    companyName: string
    productName: string
    category: string
    licenseInitial: string
    licenseFinal: string
    changeDate: string
    website: string
    description: string
    legalAnalysis: string
    communityReaction: string
    sources: string
    alternatives?: string | null
    status?: $Enums.CaseStatus
    severity?: $Enums.CaseSeverity
    reportCount?: number
    reporterId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    licenseInitial?: StringFieldUpdateOperationsInput | string
    licenseFinal?: StringFieldUpdateOperationsInput | string
    changeDate?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    legalAnalysis?: StringFieldUpdateOperationsInput | string
    communityReaction?: StringFieldUpdateOperationsInput | string
    sources?: StringFieldUpdateOperationsInput | string
    alternatives?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    severity?: EnumCaseSeverityFieldUpdateOperationsInput | $Enums.CaseSeverity
    reportCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reporter?: UserUpdateOneRequiredWithoutCasesNestedInput
  }

  export type CaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    licenseInitial?: StringFieldUpdateOperationsInput | string
    licenseFinal?: StringFieldUpdateOperationsInput | string
    changeDate?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    legalAnalysis?: StringFieldUpdateOperationsInput | string
    communityReaction?: StringFieldUpdateOperationsInput | string
    sources?: StringFieldUpdateOperationsInput | string
    alternatives?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    severity?: EnumCaseSeverityFieldUpdateOperationsInput | $Enums.CaseSeverity
    reportCount?: IntFieldUpdateOperationsInput | number
    reporterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaseCreateManyInput = {
    id?: string
    companyName: string
    productName: string
    category: string
    licenseInitial: string
    licenseFinal: string
    changeDate: string
    website: string
    description: string
    legalAnalysis: string
    communityReaction: string
    sources: string
    alternatives?: string | null
    status?: $Enums.CaseStatus
    severity?: $Enums.CaseSeverity
    reportCount?: number
    reporterId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    licenseInitial?: StringFieldUpdateOperationsInput | string
    licenseFinal?: StringFieldUpdateOperationsInput | string
    changeDate?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    legalAnalysis?: StringFieldUpdateOperationsInput | string
    communityReaction?: StringFieldUpdateOperationsInput | string
    sources?: StringFieldUpdateOperationsInput | string
    alternatives?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    severity?: EnumCaseSeverityFieldUpdateOperationsInput | $Enums.CaseSeverity
    reportCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    licenseInitial?: StringFieldUpdateOperationsInput | string
    licenseFinal?: StringFieldUpdateOperationsInput | string
    changeDate?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    legalAnalysis?: StringFieldUpdateOperationsInput | string
    communityReaction?: StringFieldUpdateOperationsInput | string
    sources?: StringFieldUpdateOperationsInput | string
    alternatives?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    severity?: EnumCaseSeverityFieldUpdateOperationsInput | $Enums.CaseSeverity
    reportCount?: IntFieldUpdateOperationsInput | number
    reporterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateInput = {
    id?: string
    title: string
    content: string
    category: string
    tags?: string
    isPinned?: boolean
    views?: number
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
    votes?: PostVoteCreateNestedManyWithoutPostInput
    reactions?: PostReactionCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    category: string
    tags?: string
    authorId: string
    isPinned?: boolean
    views?: number
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    votes?: PostVoteUncheckedCreateNestedManyWithoutPostInput
    reactions?: PostReactionUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
    votes?: PostVoteUpdateManyWithoutPostNestedInput
    reactions?: PostReactionUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
    votes?: PostVoteUncheckedUpdateManyWithoutPostNestedInput
    reactions?: PostReactionUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: string
    title: string
    content: string
    category: string
    tags?: string
    authorId: string
    isPinned?: boolean
    views?: number
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    id?: string
    content: string
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutCommentsInput
    post: PostCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
    votes?: CommentVoteCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    content: string
    authorId: string
    postId: string
    parentId?: string | null
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
    votes?: CommentVoteUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
    votes?: CommentVoteUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
    votes?: CommentVoteUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentCreateManyInput = {
    id?: string
    content: string
    authorId: string
    postId: string
    parentId?: string | null
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostVoteCreateInput = {
    id?: string
    value: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPostVotesInput
    post: PostCreateNestedOneWithoutVotesInput
  }

  export type PostVoteUncheckedCreateInput = {
    id?: string
    value: number
    userId: string
    postId: string
    createdAt?: Date | string
  }

  export type PostVoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostVotesNestedInput
    post?: PostUpdateOneRequiredWithoutVotesNestedInput
  }

  export type PostVoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostVoteCreateManyInput = {
    id?: string
    value: number
    userId: string
    postId: string
    createdAt?: Date | string
  }

  export type PostVoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostVoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentVoteCreateInput = {
    id?: string
    value: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCommentVotesInput
    comment: CommentCreateNestedOneWithoutVotesInput
  }

  export type CommentVoteUncheckedCreateInput = {
    id?: string
    value: number
    userId: string
    commentId: string
    createdAt?: Date | string
  }

  export type CommentVoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentVotesNestedInput
    comment?: CommentUpdateOneRequiredWithoutVotesNestedInput
  }

  export type CommentVoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    commentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentVoteCreateManyInput = {
    id?: string
    value: number
    userId: string
    commentId: string
    createdAt?: Date | string
  }

  export type CommentVoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentVoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    commentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostReactionCreateInput = {
    id?: string
    emoji: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReactionsInput
    post: PostCreateNestedOneWithoutReactionsInput
  }

  export type PostReactionUncheckedCreateInput = {
    id?: string
    emoji: string
    userId: string
    postId: string
    createdAt?: Date | string
  }

  export type PostReactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReactionsNestedInput
    post?: PostUpdateOneRequiredWithoutReactionsNestedInput
  }

  export type PostReactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostReactionCreateManyInput = {
    id?: string
    emoji: string
    userId: string
    postId: string
    createdAt?: Date | string
  }

  export type PostReactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostReactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    link?: string | null
    isRead?: boolean
    metadata?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    link?: string | null
    isRead?: boolean
    metadata?: string | null
    userId: string
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    link?: string | null
    isRead?: boolean
    metadata?: string | null
    userId: string
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CaseListRelationFilter = {
    every?: CaseWhereInput
    some?: CaseWhereInput
    none?: CaseWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type PostVoteListRelationFilter = {
    every?: PostVoteWhereInput
    some?: PostVoteWhereInput
    none?: PostVoteWhereInput
  }

  export type CommentVoteListRelationFilter = {
    every?: CommentVoteWhereInput
    some?: CommentVoteWhereInput
    none?: CommentVoteWhereInput
  }

  export type PostReactionListRelationFilter = {
    every?: PostReactionWhereInput
    some?: PostReactionWhereInput
    none?: PostReactionWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostVoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentVoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostReactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    organization?: SortOrder
    reputation?: SortOrder
    badges?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    reputation?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    organization?: SortOrder
    reputation?: SortOrder
    badges?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    organization?: SortOrder
    reputation?: SortOrder
    badges?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    reputation?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumCaseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CaseStatus | EnumCaseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CaseStatus[] | ListEnumCaseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CaseStatus[] | ListEnumCaseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCaseStatusFilter<$PrismaModel> | $Enums.CaseStatus
  }

  export type EnumCaseSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.CaseSeverity | EnumCaseSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.CaseSeverity[] | ListEnumCaseSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.CaseSeverity[] | ListEnumCaseSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumCaseSeverityFilter<$PrismaModel> | $Enums.CaseSeverity
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CaseCountOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    productName?: SortOrder
    category?: SortOrder
    licenseInitial?: SortOrder
    licenseFinal?: SortOrder
    changeDate?: SortOrder
    website?: SortOrder
    description?: SortOrder
    legalAnalysis?: SortOrder
    communityReaction?: SortOrder
    sources?: SortOrder
    alternatives?: SortOrder
    status?: SortOrder
    severity?: SortOrder
    reportCount?: SortOrder
    reporterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CaseAvgOrderByAggregateInput = {
    reportCount?: SortOrder
  }

  export type CaseMaxOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    productName?: SortOrder
    category?: SortOrder
    licenseInitial?: SortOrder
    licenseFinal?: SortOrder
    changeDate?: SortOrder
    website?: SortOrder
    description?: SortOrder
    legalAnalysis?: SortOrder
    communityReaction?: SortOrder
    sources?: SortOrder
    alternatives?: SortOrder
    status?: SortOrder
    severity?: SortOrder
    reportCount?: SortOrder
    reporterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CaseMinOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    productName?: SortOrder
    category?: SortOrder
    licenseInitial?: SortOrder
    licenseFinal?: SortOrder
    changeDate?: SortOrder
    website?: SortOrder
    description?: SortOrder
    legalAnalysis?: SortOrder
    communityReaction?: SortOrder
    sources?: SortOrder
    alternatives?: SortOrder
    status?: SortOrder
    severity?: SortOrder
    reportCount?: SortOrder
    reporterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CaseSumOrderByAggregateInput = {
    reportCount?: SortOrder
  }

  export type EnumCaseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CaseStatus | EnumCaseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CaseStatus[] | ListEnumCaseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CaseStatus[] | ListEnumCaseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCaseStatusWithAggregatesFilter<$PrismaModel> | $Enums.CaseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCaseStatusFilter<$PrismaModel>
    _max?: NestedEnumCaseStatusFilter<$PrismaModel>
  }

  export type EnumCaseSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CaseSeverity | EnumCaseSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.CaseSeverity[] | ListEnumCaseSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.CaseSeverity[] | ListEnumCaseSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumCaseSeverityWithAggregatesFilter<$PrismaModel> | $Enums.CaseSeverity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCaseSeverityFilter<$PrismaModel>
    _max?: NestedEnumCaseSeverityFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    authorId?: SortOrder
    isPinned?: SortOrder
    views?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    views?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    authorId?: SortOrder
    isPinned?: SortOrder
    views?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    authorId?: SortOrder
    isPinned?: SortOrder
    views?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    views?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PostScalarRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type CommentNullableScalarRelationFilter = {
    is?: CommentWhereInput | null
    isNot?: CommentWhereInput | null
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    postId?: SortOrder
    parentId?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    upvotes?: SortOrder
    downvotes?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    postId?: SortOrder
    parentId?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    postId?: SortOrder
    parentId?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    upvotes?: SortOrder
    downvotes?: SortOrder
  }

  export type PostVoteUserIdPostIdCompoundUniqueInput = {
    userId: string
    postId: string
  }

  export type PostVoteCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
  }

  export type PostVoteAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type PostVoteMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
  }

  export type PostVoteMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
  }

  export type PostVoteSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type CommentScalarRelationFilter = {
    is?: CommentWhereInput
    isNot?: CommentWhereInput
  }

  export type CommentVoteUserIdCommentIdCompoundUniqueInput = {
    userId: string
    commentId: string
  }

  export type CommentVoteCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    userId?: SortOrder
    commentId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentVoteAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type CommentVoteMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    userId?: SortOrder
    commentId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentVoteMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    userId?: SortOrder
    commentId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentVoteSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type PostReactionUserIdPostIdEmojiCompoundUniqueInput = {
    userId: string
    postId: string
    emoji: string
  }

  export type PostReactionCountOrderByAggregateInput = {
    id?: SortOrder
    emoji?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
  }

  export type PostReactionMaxOrderByAggregateInput = {
    id?: SortOrder
    emoji?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
  }

  export type PostReactionMinOrderByAggregateInput = {
    id?: SortOrder
    emoji?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    link?: SortOrder
    isRead?: SortOrder
    metadata?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    link?: SortOrder
    isRead?: SortOrder
    metadata?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    link?: SortOrder
    isRead?: SortOrder
    metadata?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type CaseCreateNestedManyWithoutReporterInput = {
    create?: XOR<CaseCreateWithoutReporterInput, CaseUncheckedCreateWithoutReporterInput> | CaseCreateWithoutReporterInput[] | CaseUncheckedCreateWithoutReporterInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutReporterInput | CaseCreateOrConnectWithoutReporterInput[]
    createMany?: CaseCreateManyReporterInputEnvelope
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type PostVoteCreateNestedManyWithoutUserInput = {
    create?: XOR<PostVoteCreateWithoutUserInput, PostVoteUncheckedCreateWithoutUserInput> | PostVoteCreateWithoutUserInput[] | PostVoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostVoteCreateOrConnectWithoutUserInput | PostVoteCreateOrConnectWithoutUserInput[]
    createMany?: PostVoteCreateManyUserInputEnvelope
    connect?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
  }

  export type CommentVoteCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentVoteCreateWithoutUserInput, CommentVoteUncheckedCreateWithoutUserInput> | CommentVoteCreateWithoutUserInput[] | CommentVoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentVoteCreateOrConnectWithoutUserInput | CommentVoteCreateOrConnectWithoutUserInput[]
    createMany?: CommentVoteCreateManyUserInputEnvelope
    connect?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
  }

  export type PostReactionCreateNestedManyWithoutUserInput = {
    create?: XOR<PostReactionCreateWithoutUserInput, PostReactionUncheckedCreateWithoutUserInput> | PostReactionCreateWithoutUserInput[] | PostReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostReactionCreateOrConnectWithoutUserInput | PostReactionCreateOrConnectWithoutUserInput[]
    createMany?: PostReactionCreateManyUserInputEnvelope
    connect?: PostReactionWhereUniqueInput | PostReactionWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type CaseUncheckedCreateNestedManyWithoutReporterInput = {
    create?: XOR<CaseCreateWithoutReporterInput, CaseUncheckedCreateWithoutReporterInput> | CaseCreateWithoutReporterInput[] | CaseUncheckedCreateWithoutReporterInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutReporterInput | CaseCreateOrConnectWithoutReporterInput[]
    createMany?: CaseCreateManyReporterInputEnvelope
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type PostVoteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostVoteCreateWithoutUserInput, PostVoteUncheckedCreateWithoutUserInput> | PostVoteCreateWithoutUserInput[] | PostVoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostVoteCreateOrConnectWithoutUserInput | PostVoteCreateOrConnectWithoutUserInput[]
    createMany?: PostVoteCreateManyUserInputEnvelope
    connect?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
  }

  export type CommentVoteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentVoteCreateWithoutUserInput, CommentVoteUncheckedCreateWithoutUserInput> | CommentVoteCreateWithoutUserInput[] | CommentVoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentVoteCreateOrConnectWithoutUserInput | CommentVoteCreateOrConnectWithoutUserInput[]
    createMany?: CommentVoteCreateManyUserInputEnvelope
    connect?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
  }

  export type PostReactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostReactionCreateWithoutUserInput, PostReactionUncheckedCreateWithoutUserInput> | PostReactionCreateWithoutUserInput[] | PostReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostReactionCreateOrConnectWithoutUserInput | PostReactionCreateOrConnectWithoutUserInput[]
    createMany?: PostReactionCreateManyUserInputEnvelope
    connect?: PostReactionWhereUniqueInput | PostReactionWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CaseUpdateManyWithoutReporterNestedInput = {
    create?: XOR<CaseCreateWithoutReporterInput, CaseUncheckedCreateWithoutReporterInput> | CaseCreateWithoutReporterInput[] | CaseUncheckedCreateWithoutReporterInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutReporterInput | CaseCreateOrConnectWithoutReporterInput[]
    upsert?: CaseUpsertWithWhereUniqueWithoutReporterInput | CaseUpsertWithWhereUniqueWithoutReporterInput[]
    createMany?: CaseCreateManyReporterInputEnvelope
    set?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    disconnect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    delete?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    update?: CaseUpdateWithWhereUniqueWithoutReporterInput | CaseUpdateWithWhereUniqueWithoutReporterInput[]
    updateMany?: CaseUpdateManyWithWhereWithoutReporterInput | CaseUpdateManyWithWhereWithoutReporterInput[]
    deleteMany?: CaseScalarWhereInput | CaseScalarWhereInput[]
  }

  export type PostUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAuthorInput | CommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAuthorInput | CommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAuthorInput | CommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type PostVoteUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostVoteCreateWithoutUserInput, PostVoteUncheckedCreateWithoutUserInput> | PostVoteCreateWithoutUserInput[] | PostVoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostVoteCreateOrConnectWithoutUserInput | PostVoteCreateOrConnectWithoutUserInput[]
    upsert?: PostVoteUpsertWithWhereUniqueWithoutUserInput | PostVoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostVoteCreateManyUserInputEnvelope
    set?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
    disconnect?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
    delete?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
    connect?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
    update?: PostVoteUpdateWithWhereUniqueWithoutUserInput | PostVoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostVoteUpdateManyWithWhereWithoutUserInput | PostVoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostVoteScalarWhereInput | PostVoteScalarWhereInput[]
  }

  export type CommentVoteUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentVoteCreateWithoutUserInput, CommentVoteUncheckedCreateWithoutUserInput> | CommentVoteCreateWithoutUserInput[] | CommentVoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentVoteCreateOrConnectWithoutUserInput | CommentVoteCreateOrConnectWithoutUserInput[]
    upsert?: CommentVoteUpsertWithWhereUniqueWithoutUserInput | CommentVoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentVoteCreateManyUserInputEnvelope
    set?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
    disconnect?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
    delete?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
    connect?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
    update?: CommentVoteUpdateWithWhereUniqueWithoutUserInput | CommentVoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentVoteUpdateManyWithWhereWithoutUserInput | CommentVoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentVoteScalarWhereInput | CommentVoteScalarWhereInput[]
  }

  export type PostReactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostReactionCreateWithoutUserInput, PostReactionUncheckedCreateWithoutUserInput> | PostReactionCreateWithoutUserInput[] | PostReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostReactionCreateOrConnectWithoutUserInput | PostReactionCreateOrConnectWithoutUserInput[]
    upsert?: PostReactionUpsertWithWhereUniqueWithoutUserInput | PostReactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostReactionCreateManyUserInputEnvelope
    set?: PostReactionWhereUniqueInput | PostReactionWhereUniqueInput[]
    disconnect?: PostReactionWhereUniqueInput | PostReactionWhereUniqueInput[]
    delete?: PostReactionWhereUniqueInput | PostReactionWhereUniqueInput[]
    connect?: PostReactionWhereUniqueInput | PostReactionWhereUniqueInput[]
    update?: PostReactionUpdateWithWhereUniqueWithoutUserInput | PostReactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostReactionUpdateManyWithWhereWithoutUserInput | PostReactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostReactionScalarWhereInput | PostReactionScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type CaseUncheckedUpdateManyWithoutReporterNestedInput = {
    create?: XOR<CaseCreateWithoutReporterInput, CaseUncheckedCreateWithoutReporterInput> | CaseCreateWithoutReporterInput[] | CaseUncheckedCreateWithoutReporterInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutReporterInput | CaseCreateOrConnectWithoutReporterInput[]
    upsert?: CaseUpsertWithWhereUniqueWithoutReporterInput | CaseUpsertWithWhereUniqueWithoutReporterInput[]
    createMany?: CaseCreateManyReporterInputEnvelope
    set?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    disconnect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    delete?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    update?: CaseUpdateWithWhereUniqueWithoutReporterInput | CaseUpdateWithWhereUniqueWithoutReporterInput[]
    updateMany?: CaseUpdateManyWithWhereWithoutReporterInput | CaseUpdateManyWithWhereWithoutReporterInput[]
    deleteMany?: CaseScalarWhereInput | CaseScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAuthorInput | CommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAuthorInput | CommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAuthorInput | CommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type PostVoteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostVoteCreateWithoutUserInput, PostVoteUncheckedCreateWithoutUserInput> | PostVoteCreateWithoutUserInput[] | PostVoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostVoteCreateOrConnectWithoutUserInput | PostVoteCreateOrConnectWithoutUserInput[]
    upsert?: PostVoteUpsertWithWhereUniqueWithoutUserInput | PostVoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostVoteCreateManyUserInputEnvelope
    set?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
    disconnect?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
    delete?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
    connect?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
    update?: PostVoteUpdateWithWhereUniqueWithoutUserInput | PostVoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostVoteUpdateManyWithWhereWithoutUserInput | PostVoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostVoteScalarWhereInput | PostVoteScalarWhereInput[]
  }

  export type CommentVoteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentVoteCreateWithoutUserInput, CommentVoteUncheckedCreateWithoutUserInput> | CommentVoteCreateWithoutUserInput[] | CommentVoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentVoteCreateOrConnectWithoutUserInput | CommentVoteCreateOrConnectWithoutUserInput[]
    upsert?: CommentVoteUpsertWithWhereUniqueWithoutUserInput | CommentVoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentVoteCreateManyUserInputEnvelope
    set?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
    disconnect?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
    delete?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
    connect?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
    update?: CommentVoteUpdateWithWhereUniqueWithoutUserInput | CommentVoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentVoteUpdateManyWithWhereWithoutUserInput | CommentVoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentVoteScalarWhereInput | CommentVoteScalarWhereInput[]
  }

  export type PostReactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostReactionCreateWithoutUserInput, PostReactionUncheckedCreateWithoutUserInput> | PostReactionCreateWithoutUserInput[] | PostReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostReactionCreateOrConnectWithoutUserInput | PostReactionCreateOrConnectWithoutUserInput[]
    upsert?: PostReactionUpsertWithWhereUniqueWithoutUserInput | PostReactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostReactionCreateManyUserInputEnvelope
    set?: PostReactionWhereUniqueInput | PostReactionWhereUniqueInput[]
    disconnect?: PostReactionWhereUniqueInput | PostReactionWhereUniqueInput[]
    delete?: PostReactionWhereUniqueInput | PostReactionWhereUniqueInput[]
    connect?: PostReactionWhereUniqueInput | PostReactionWhereUniqueInput[]
    update?: PostReactionUpdateWithWhereUniqueWithoutUserInput | PostReactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostReactionUpdateManyWithWhereWithoutUserInput | PostReactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostReactionScalarWhereInput | PostReactionScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCasesInput = {
    create?: XOR<UserCreateWithoutCasesInput, UserUncheckedCreateWithoutCasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCasesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumCaseStatusFieldUpdateOperationsInput = {
    set?: $Enums.CaseStatus
  }

  export type EnumCaseSeverityFieldUpdateOperationsInput = {
    set?: $Enums.CaseSeverity
  }

  export type UserUpdateOneRequiredWithoutCasesNestedInput = {
    create?: XOR<UserCreateWithoutCasesInput, UserUncheckedCreateWithoutCasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCasesInput
    upsert?: UserUpsertWithoutCasesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCasesInput, UserUpdateWithoutCasesInput>, UserUncheckedUpdateWithoutCasesInput>
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type PostVoteCreateNestedManyWithoutPostInput = {
    create?: XOR<PostVoteCreateWithoutPostInput, PostVoteUncheckedCreateWithoutPostInput> | PostVoteCreateWithoutPostInput[] | PostVoteUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostVoteCreateOrConnectWithoutPostInput | PostVoteCreateOrConnectWithoutPostInput[]
    createMany?: PostVoteCreateManyPostInputEnvelope
    connect?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
  }

  export type PostReactionCreateNestedManyWithoutPostInput = {
    create?: XOR<PostReactionCreateWithoutPostInput, PostReactionUncheckedCreateWithoutPostInput> | PostReactionCreateWithoutPostInput[] | PostReactionUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostReactionCreateOrConnectWithoutPostInput | PostReactionCreateOrConnectWithoutPostInput[]
    createMany?: PostReactionCreateManyPostInputEnvelope
    connect?: PostReactionWhereUniqueInput | PostReactionWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type PostVoteUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostVoteCreateWithoutPostInput, PostVoteUncheckedCreateWithoutPostInput> | PostVoteCreateWithoutPostInput[] | PostVoteUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostVoteCreateOrConnectWithoutPostInput | PostVoteCreateOrConnectWithoutPostInput[]
    createMany?: PostVoteCreateManyPostInputEnvelope
    connect?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
  }

  export type PostReactionUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostReactionCreateWithoutPostInput, PostReactionUncheckedCreateWithoutPostInput> | PostReactionCreateWithoutPostInput[] | PostReactionUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostReactionCreateOrConnectWithoutPostInput | PostReactionCreateOrConnectWithoutPostInput[]
    createMany?: PostReactionCreateManyPostInputEnvelope
    connect?: PostReactionWhereUniqueInput | PostReactionWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type CommentUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutPostInput | CommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutPostInput | CommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutPostInput | CommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type PostVoteUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostVoteCreateWithoutPostInput, PostVoteUncheckedCreateWithoutPostInput> | PostVoteCreateWithoutPostInput[] | PostVoteUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostVoteCreateOrConnectWithoutPostInput | PostVoteCreateOrConnectWithoutPostInput[]
    upsert?: PostVoteUpsertWithWhereUniqueWithoutPostInput | PostVoteUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostVoteCreateManyPostInputEnvelope
    set?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
    disconnect?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
    delete?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
    connect?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
    update?: PostVoteUpdateWithWhereUniqueWithoutPostInput | PostVoteUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostVoteUpdateManyWithWhereWithoutPostInput | PostVoteUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostVoteScalarWhereInput | PostVoteScalarWhereInput[]
  }

  export type PostReactionUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostReactionCreateWithoutPostInput, PostReactionUncheckedCreateWithoutPostInput> | PostReactionCreateWithoutPostInput[] | PostReactionUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostReactionCreateOrConnectWithoutPostInput | PostReactionCreateOrConnectWithoutPostInput[]
    upsert?: PostReactionUpsertWithWhereUniqueWithoutPostInput | PostReactionUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostReactionCreateManyPostInputEnvelope
    set?: PostReactionWhereUniqueInput | PostReactionWhereUniqueInput[]
    disconnect?: PostReactionWhereUniqueInput | PostReactionWhereUniqueInput[]
    delete?: PostReactionWhereUniqueInput | PostReactionWhereUniqueInput[]
    connect?: PostReactionWhereUniqueInput | PostReactionWhereUniqueInput[]
    update?: PostReactionUpdateWithWhereUniqueWithoutPostInput | PostReactionUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostReactionUpdateManyWithWhereWithoutPostInput | PostReactionUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostReactionScalarWhereInput | PostReactionScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutPostInput | CommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutPostInput | CommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutPostInput | CommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type PostVoteUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostVoteCreateWithoutPostInput, PostVoteUncheckedCreateWithoutPostInput> | PostVoteCreateWithoutPostInput[] | PostVoteUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostVoteCreateOrConnectWithoutPostInput | PostVoteCreateOrConnectWithoutPostInput[]
    upsert?: PostVoteUpsertWithWhereUniqueWithoutPostInput | PostVoteUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostVoteCreateManyPostInputEnvelope
    set?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
    disconnect?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
    delete?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
    connect?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
    update?: PostVoteUpdateWithWhereUniqueWithoutPostInput | PostVoteUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostVoteUpdateManyWithWhereWithoutPostInput | PostVoteUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostVoteScalarWhereInput | PostVoteScalarWhereInput[]
  }

  export type PostReactionUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostReactionCreateWithoutPostInput, PostReactionUncheckedCreateWithoutPostInput> | PostReactionCreateWithoutPostInput[] | PostReactionUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostReactionCreateOrConnectWithoutPostInput | PostReactionCreateOrConnectWithoutPostInput[]
    upsert?: PostReactionUpsertWithWhereUniqueWithoutPostInput | PostReactionUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostReactionCreateManyPostInputEnvelope
    set?: PostReactionWhereUniqueInput | PostReactionWhereUniqueInput[]
    disconnect?: PostReactionWhereUniqueInput | PostReactionWhereUniqueInput[]
    delete?: PostReactionWhereUniqueInput | PostReactionWhereUniqueInput[]
    connect?: PostReactionWhereUniqueInput | PostReactionWhereUniqueInput[]
    update?: PostReactionUpdateWithWhereUniqueWithoutPostInput | PostReactionUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostReactionUpdateManyWithWhereWithoutPostInput | PostReactionUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostReactionScalarWhereInput | PostReactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutCommentsInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
    connect?: PostWhereUniqueInput
  }

  export type CommentCreateNestedOneWithoutRepliesInput = {
    create?: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput
    connect?: CommentWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutParentInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CommentVoteCreateNestedManyWithoutCommentInput = {
    create?: XOR<CommentVoteCreateWithoutCommentInput, CommentVoteUncheckedCreateWithoutCommentInput> | CommentVoteCreateWithoutCommentInput[] | CommentVoteUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: CommentVoteCreateOrConnectWithoutCommentInput | CommentVoteCreateOrConnectWithoutCommentInput[]
    createMany?: CommentVoteCreateManyCommentInputEnvelope
    connect?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CommentVoteUncheckedCreateNestedManyWithoutCommentInput = {
    create?: XOR<CommentVoteCreateWithoutCommentInput, CommentVoteUncheckedCreateWithoutCommentInput> | CommentVoteCreateWithoutCommentInput[] | CommentVoteUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: CommentVoteCreateOrConnectWithoutCommentInput | CommentVoteCreateOrConnectWithoutCommentInput[]
    createMany?: CommentVoteCreateManyCommentInputEnvelope
    connect?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type PostUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
    upsert?: PostUpsertWithoutCommentsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutCommentsInput, PostUpdateWithoutCommentsInput>, PostUncheckedUpdateWithoutCommentsInput>
  }

  export type CommentUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput
    upsert?: CommentUpsertWithoutRepliesInput
    disconnect?: CommentWhereInput | boolean
    delete?: CommentWhereInput | boolean
    connect?: CommentWhereUniqueInput
    update?: XOR<XOR<CommentUpdateToOneWithWhereWithoutRepliesInput, CommentUpdateWithoutRepliesInput>, CommentUncheckedUpdateWithoutRepliesInput>
  }

  export type CommentUpdateManyWithoutParentNestedInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutParentInput | CommentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutParentInput | CommentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutParentInput | CommentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CommentVoteUpdateManyWithoutCommentNestedInput = {
    create?: XOR<CommentVoteCreateWithoutCommentInput, CommentVoteUncheckedCreateWithoutCommentInput> | CommentVoteCreateWithoutCommentInput[] | CommentVoteUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: CommentVoteCreateOrConnectWithoutCommentInput | CommentVoteCreateOrConnectWithoutCommentInput[]
    upsert?: CommentVoteUpsertWithWhereUniqueWithoutCommentInput | CommentVoteUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: CommentVoteCreateManyCommentInputEnvelope
    set?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
    disconnect?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
    delete?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
    connect?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
    update?: CommentVoteUpdateWithWhereUniqueWithoutCommentInput | CommentVoteUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: CommentVoteUpdateManyWithWhereWithoutCommentInput | CommentVoteUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: CommentVoteScalarWhereInput | CommentVoteScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutParentInput | CommentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutParentInput | CommentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutParentInput | CommentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CommentVoteUncheckedUpdateManyWithoutCommentNestedInput = {
    create?: XOR<CommentVoteCreateWithoutCommentInput, CommentVoteUncheckedCreateWithoutCommentInput> | CommentVoteCreateWithoutCommentInput[] | CommentVoteUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: CommentVoteCreateOrConnectWithoutCommentInput | CommentVoteCreateOrConnectWithoutCommentInput[]
    upsert?: CommentVoteUpsertWithWhereUniqueWithoutCommentInput | CommentVoteUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: CommentVoteCreateManyCommentInputEnvelope
    set?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
    disconnect?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
    delete?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
    connect?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
    update?: CommentVoteUpdateWithWhereUniqueWithoutCommentInput | CommentVoteUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: CommentVoteUpdateManyWithWhereWithoutCommentInput | CommentVoteUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: CommentVoteScalarWhereInput | CommentVoteScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPostVotesInput = {
    create?: XOR<UserCreateWithoutPostVotesInput, UserUncheckedCreateWithoutPostVotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostVotesInput
    connect?: UserWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutVotesInput = {
    create?: XOR<PostCreateWithoutVotesInput, PostUncheckedCreateWithoutVotesInput>
    connectOrCreate?: PostCreateOrConnectWithoutVotesInput
    connect?: PostWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPostVotesNestedInput = {
    create?: XOR<UserCreateWithoutPostVotesInput, UserUncheckedCreateWithoutPostVotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostVotesInput
    upsert?: UserUpsertWithoutPostVotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostVotesInput, UserUpdateWithoutPostVotesInput>, UserUncheckedUpdateWithoutPostVotesInput>
  }

  export type PostUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<PostCreateWithoutVotesInput, PostUncheckedCreateWithoutVotesInput>
    connectOrCreate?: PostCreateOrConnectWithoutVotesInput
    upsert?: PostUpsertWithoutVotesInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutVotesInput, PostUpdateWithoutVotesInput>, PostUncheckedUpdateWithoutVotesInput>
  }

  export type UserCreateNestedOneWithoutCommentVotesInput = {
    create?: XOR<UserCreateWithoutCommentVotesInput, UserUncheckedCreateWithoutCommentVotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentVotesInput
    connect?: UserWhereUniqueInput
  }

  export type CommentCreateNestedOneWithoutVotesInput = {
    create?: XOR<CommentCreateWithoutVotesInput, CommentUncheckedCreateWithoutVotesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutVotesInput
    connect?: CommentWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCommentVotesNestedInput = {
    create?: XOR<UserCreateWithoutCommentVotesInput, UserUncheckedCreateWithoutCommentVotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentVotesInput
    upsert?: UserUpsertWithoutCommentVotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentVotesInput, UserUpdateWithoutCommentVotesInput>, UserUncheckedUpdateWithoutCommentVotesInput>
  }

  export type CommentUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<CommentCreateWithoutVotesInput, CommentUncheckedCreateWithoutVotesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutVotesInput
    upsert?: CommentUpsertWithoutVotesInput
    connect?: CommentWhereUniqueInput
    update?: XOR<XOR<CommentUpdateToOneWithWhereWithoutVotesInput, CommentUpdateWithoutVotesInput>, CommentUncheckedUpdateWithoutVotesInput>
  }

  export type UserCreateNestedOneWithoutReactionsInput = {
    create?: XOR<UserCreateWithoutReactionsInput, UserUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReactionsInput
    connect?: UserWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutReactionsInput = {
    create?: XOR<PostCreateWithoutReactionsInput, PostUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: PostCreateOrConnectWithoutReactionsInput
    connect?: PostWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReactionsNestedInput = {
    create?: XOR<UserCreateWithoutReactionsInput, UserUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReactionsInput
    upsert?: UserUpsertWithoutReactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReactionsInput, UserUpdateWithoutReactionsInput>, UserUncheckedUpdateWithoutReactionsInput>
  }

  export type PostUpdateOneRequiredWithoutReactionsNestedInput = {
    create?: XOR<PostCreateWithoutReactionsInput, PostUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: PostCreateOrConnectWithoutReactionsInput
    upsert?: PostUpsertWithoutReactionsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutReactionsInput, PostUpdateWithoutReactionsInput>, PostUncheckedUpdateWithoutReactionsInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumCaseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CaseStatus | EnumCaseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CaseStatus[] | ListEnumCaseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CaseStatus[] | ListEnumCaseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCaseStatusFilter<$PrismaModel> | $Enums.CaseStatus
  }

  export type NestedEnumCaseSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.CaseSeverity | EnumCaseSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.CaseSeverity[] | ListEnumCaseSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.CaseSeverity[] | ListEnumCaseSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumCaseSeverityFilter<$PrismaModel> | $Enums.CaseSeverity
  }

  export type NestedEnumCaseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CaseStatus | EnumCaseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CaseStatus[] | ListEnumCaseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CaseStatus[] | ListEnumCaseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCaseStatusWithAggregatesFilter<$PrismaModel> | $Enums.CaseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCaseStatusFilter<$PrismaModel>
    _max?: NestedEnumCaseStatusFilter<$PrismaModel>
  }

  export type NestedEnumCaseSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CaseSeverity | EnumCaseSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.CaseSeverity[] | ListEnumCaseSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.CaseSeverity[] | ListEnumCaseSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumCaseSeverityWithAggregatesFilter<$PrismaModel> | $Enums.CaseSeverity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCaseSeverityFilter<$PrismaModel>
    _max?: NestedEnumCaseSeverityFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type CaseCreateWithoutReporterInput = {
    id?: string
    companyName: string
    productName: string
    category: string
    licenseInitial: string
    licenseFinal: string
    changeDate: string
    website: string
    description: string
    legalAnalysis: string
    communityReaction: string
    sources: string
    alternatives?: string | null
    status?: $Enums.CaseStatus
    severity?: $Enums.CaseSeverity
    reportCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CaseUncheckedCreateWithoutReporterInput = {
    id?: string
    companyName: string
    productName: string
    category: string
    licenseInitial: string
    licenseFinal: string
    changeDate: string
    website: string
    description: string
    legalAnalysis: string
    communityReaction: string
    sources: string
    alternatives?: string | null
    status?: $Enums.CaseStatus
    severity?: $Enums.CaseSeverity
    reportCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CaseCreateOrConnectWithoutReporterInput = {
    where: CaseWhereUniqueInput
    create: XOR<CaseCreateWithoutReporterInput, CaseUncheckedCreateWithoutReporterInput>
  }

  export type CaseCreateManyReporterInputEnvelope = {
    data: CaseCreateManyReporterInput | CaseCreateManyReporterInput[]
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutAuthorInput = {
    id?: string
    title: string
    content: string
    category: string
    tags?: string
    isPinned?: boolean
    views?: number
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentCreateNestedManyWithoutPostInput
    votes?: PostVoteCreateNestedManyWithoutPostInput
    reactions?: PostReactionCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutAuthorInput = {
    id?: string
    title: string
    content: string
    category: string
    tags?: string
    isPinned?: boolean
    views?: number
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    votes?: PostVoteUncheckedCreateNestedManyWithoutPostInput
    reactions?: PostReactionUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutAuthorInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostCreateManyAuthorInputEnvelope = {
    data: PostCreateManyAuthorInput | PostCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutAuthorInput = {
    id?: string
    content: string
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
    votes?: CommentVoteCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutAuthorInput = {
    id?: string
    content: string
    postId: string
    parentId?: string | null
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
    votes?: CommentVoteUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
  }

  export type CommentCreateManyAuthorInputEnvelope = {
    data: CommentCreateManyAuthorInput | CommentCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type PostVoteCreateWithoutUserInput = {
    id?: string
    value: number
    createdAt?: Date | string
    post: PostCreateNestedOneWithoutVotesInput
  }

  export type PostVoteUncheckedCreateWithoutUserInput = {
    id?: string
    value: number
    postId: string
    createdAt?: Date | string
  }

  export type PostVoteCreateOrConnectWithoutUserInput = {
    where: PostVoteWhereUniqueInput
    create: XOR<PostVoteCreateWithoutUserInput, PostVoteUncheckedCreateWithoutUserInput>
  }

  export type PostVoteCreateManyUserInputEnvelope = {
    data: PostVoteCreateManyUserInput | PostVoteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentVoteCreateWithoutUserInput = {
    id?: string
    value: number
    createdAt?: Date | string
    comment: CommentCreateNestedOneWithoutVotesInput
  }

  export type CommentVoteUncheckedCreateWithoutUserInput = {
    id?: string
    value: number
    commentId: string
    createdAt?: Date | string
  }

  export type CommentVoteCreateOrConnectWithoutUserInput = {
    where: CommentVoteWhereUniqueInput
    create: XOR<CommentVoteCreateWithoutUserInput, CommentVoteUncheckedCreateWithoutUserInput>
  }

  export type CommentVoteCreateManyUserInputEnvelope = {
    data: CommentVoteCreateManyUserInput | CommentVoteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostReactionCreateWithoutUserInput = {
    id?: string
    emoji: string
    createdAt?: Date | string
    post: PostCreateNestedOneWithoutReactionsInput
  }

  export type PostReactionUncheckedCreateWithoutUserInput = {
    id?: string
    emoji: string
    postId: string
    createdAt?: Date | string
  }

  export type PostReactionCreateOrConnectWithoutUserInput = {
    where: PostReactionWhereUniqueInput
    create: XOR<PostReactionCreateWithoutUserInput, PostReactionUncheckedCreateWithoutUserInput>
  }

  export type PostReactionCreateManyUserInputEnvelope = {
    data: PostReactionCreateManyUserInput | PostReactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    link?: string | null
    isRead?: boolean
    metadata?: string | null
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    link?: string | null
    isRead?: boolean
    metadata?: string | null
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CaseUpsertWithWhereUniqueWithoutReporterInput = {
    where: CaseWhereUniqueInput
    update: XOR<CaseUpdateWithoutReporterInput, CaseUncheckedUpdateWithoutReporterInput>
    create: XOR<CaseCreateWithoutReporterInput, CaseUncheckedCreateWithoutReporterInput>
  }

  export type CaseUpdateWithWhereUniqueWithoutReporterInput = {
    where: CaseWhereUniqueInput
    data: XOR<CaseUpdateWithoutReporterInput, CaseUncheckedUpdateWithoutReporterInput>
  }

  export type CaseUpdateManyWithWhereWithoutReporterInput = {
    where: CaseScalarWhereInput
    data: XOR<CaseUpdateManyMutationInput, CaseUncheckedUpdateManyWithoutReporterInput>
  }

  export type CaseScalarWhereInput = {
    AND?: CaseScalarWhereInput | CaseScalarWhereInput[]
    OR?: CaseScalarWhereInput[]
    NOT?: CaseScalarWhereInput | CaseScalarWhereInput[]
    id?: StringFilter<"Case"> | string
    companyName?: StringFilter<"Case"> | string
    productName?: StringFilter<"Case"> | string
    category?: StringFilter<"Case"> | string
    licenseInitial?: StringFilter<"Case"> | string
    licenseFinal?: StringFilter<"Case"> | string
    changeDate?: StringFilter<"Case"> | string
    website?: StringFilter<"Case"> | string
    description?: StringFilter<"Case"> | string
    legalAnalysis?: StringFilter<"Case"> | string
    communityReaction?: StringFilter<"Case"> | string
    sources?: StringFilter<"Case"> | string
    alternatives?: StringNullableFilter<"Case"> | string | null
    status?: EnumCaseStatusFilter<"Case"> | $Enums.CaseStatus
    severity?: EnumCaseSeverityFilter<"Case"> | $Enums.CaseSeverity
    reportCount?: IntFilter<"Case"> | number
    reporterId?: StringFilter<"Case"> | string
    createdAt?: DateTimeFilter<"Case"> | Date | string
    updatedAt?: DateTimeFilter<"Case"> | Date | string
  }

  export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
  }

  export type PostUpdateManyWithWhereWithoutAuthorInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutAuthorInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    category?: StringFilter<"Post"> | string
    tags?: StringFilter<"Post"> | string
    authorId?: StringFilter<"Post"> | string
    isPinned?: BoolFilter<"Post"> | boolean
    views?: IntFilter<"Post"> | number
    upvotes?: IntFilter<"Post"> | number
    downvotes?: IntFilter<"Post"> | number
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutAuthorInput, CommentUncheckedUpdateWithoutAuthorInput>
    create: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutAuthorInput, CommentUncheckedUpdateWithoutAuthorInput>
  }

  export type CommentUpdateManyWithWhereWithoutAuthorInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutAuthorInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    authorId?: StringFilter<"Comment"> | string
    postId?: StringFilter<"Comment"> | string
    parentId?: StringNullableFilter<"Comment"> | string | null
    upvotes?: IntFilter<"Comment"> | number
    downvotes?: IntFilter<"Comment"> | number
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
  }

  export type PostVoteUpsertWithWhereUniqueWithoutUserInput = {
    where: PostVoteWhereUniqueInput
    update: XOR<PostVoteUpdateWithoutUserInput, PostVoteUncheckedUpdateWithoutUserInput>
    create: XOR<PostVoteCreateWithoutUserInput, PostVoteUncheckedCreateWithoutUserInput>
  }

  export type PostVoteUpdateWithWhereUniqueWithoutUserInput = {
    where: PostVoteWhereUniqueInput
    data: XOR<PostVoteUpdateWithoutUserInput, PostVoteUncheckedUpdateWithoutUserInput>
  }

  export type PostVoteUpdateManyWithWhereWithoutUserInput = {
    where: PostVoteScalarWhereInput
    data: XOR<PostVoteUpdateManyMutationInput, PostVoteUncheckedUpdateManyWithoutUserInput>
  }

  export type PostVoteScalarWhereInput = {
    AND?: PostVoteScalarWhereInput | PostVoteScalarWhereInput[]
    OR?: PostVoteScalarWhereInput[]
    NOT?: PostVoteScalarWhereInput | PostVoteScalarWhereInput[]
    id?: StringFilter<"PostVote"> | string
    value?: IntFilter<"PostVote"> | number
    userId?: StringFilter<"PostVote"> | string
    postId?: StringFilter<"PostVote"> | string
    createdAt?: DateTimeFilter<"PostVote"> | Date | string
  }

  export type CommentVoteUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentVoteWhereUniqueInput
    update: XOR<CommentVoteUpdateWithoutUserInput, CommentVoteUncheckedUpdateWithoutUserInput>
    create: XOR<CommentVoteCreateWithoutUserInput, CommentVoteUncheckedCreateWithoutUserInput>
  }

  export type CommentVoteUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentVoteWhereUniqueInput
    data: XOR<CommentVoteUpdateWithoutUserInput, CommentVoteUncheckedUpdateWithoutUserInput>
  }

  export type CommentVoteUpdateManyWithWhereWithoutUserInput = {
    where: CommentVoteScalarWhereInput
    data: XOR<CommentVoteUpdateManyMutationInput, CommentVoteUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentVoteScalarWhereInput = {
    AND?: CommentVoteScalarWhereInput | CommentVoteScalarWhereInput[]
    OR?: CommentVoteScalarWhereInput[]
    NOT?: CommentVoteScalarWhereInput | CommentVoteScalarWhereInput[]
    id?: StringFilter<"CommentVote"> | string
    value?: IntFilter<"CommentVote"> | number
    userId?: StringFilter<"CommentVote"> | string
    commentId?: StringFilter<"CommentVote"> | string
    createdAt?: DateTimeFilter<"CommentVote"> | Date | string
  }

  export type PostReactionUpsertWithWhereUniqueWithoutUserInput = {
    where: PostReactionWhereUniqueInput
    update: XOR<PostReactionUpdateWithoutUserInput, PostReactionUncheckedUpdateWithoutUserInput>
    create: XOR<PostReactionCreateWithoutUserInput, PostReactionUncheckedCreateWithoutUserInput>
  }

  export type PostReactionUpdateWithWhereUniqueWithoutUserInput = {
    where: PostReactionWhereUniqueInput
    data: XOR<PostReactionUpdateWithoutUserInput, PostReactionUncheckedUpdateWithoutUserInput>
  }

  export type PostReactionUpdateManyWithWhereWithoutUserInput = {
    where: PostReactionScalarWhereInput
    data: XOR<PostReactionUpdateManyMutationInput, PostReactionUncheckedUpdateManyWithoutUserInput>
  }

  export type PostReactionScalarWhereInput = {
    AND?: PostReactionScalarWhereInput | PostReactionScalarWhereInput[]
    OR?: PostReactionScalarWhereInput[]
    NOT?: PostReactionScalarWhereInput | PostReactionScalarWhereInput[]
    id?: StringFilter<"PostReaction"> | string
    emoji?: StringFilter<"PostReaction"> | string
    userId?: StringFilter<"PostReaction"> | string
    postId?: StringFilter<"PostReaction"> | string
    createdAt?: DateTimeFilter<"PostReaction"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    link?: StringNullableFilter<"Notification"> | string | null
    isRead?: BoolFilter<"Notification"> | boolean
    metadata?: StringNullableFilter<"Notification"> | string | null
    userId?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type UserCreateWithoutCasesInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    organization?: string | null
    reputation?: number
    badges?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    postVotes?: PostVoteCreateNestedManyWithoutUserInput
    commentVotes?: CommentVoteCreateNestedManyWithoutUserInput
    reactions?: PostReactionCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCasesInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    organization?: string | null
    reputation?: number
    badges?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    postVotes?: PostVoteUncheckedCreateNestedManyWithoutUserInput
    commentVotes?: CommentVoteUncheckedCreateNestedManyWithoutUserInput
    reactions?: PostReactionUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCasesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCasesInput, UserUncheckedCreateWithoutCasesInput>
  }

  export type UserUpsertWithoutCasesInput = {
    update: XOR<UserUpdateWithoutCasesInput, UserUncheckedUpdateWithoutCasesInput>
    create: XOR<UserCreateWithoutCasesInput, UserUncheckedCreateWithoutCasesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCasesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCasesInput, UserUncheckedUpdateWithoutCasesInput>
  }

  export type UserUpdateWithoutCasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: IntFieldUpdateOperationsInput | number
    badges?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    postVotes?: PostVoteUpdateManyWithoutUserNestedInput
    commentVotes?: CommentVoteUpdateManyWithoutUserNestedInput
    reactions?: PostReactionUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: IntFieldUpdateOperationsInput | number
    badges?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    postVotes?: PostVoteUncheckedUpdateManyWithoutUserNestedInput
    commentVotes?: CommentVoteUncheckedUpdateManyWithoutUserNestedInput
    reactions?: PostReactionUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPostsInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    organization?: string | null
    reputation?: number
    badges?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cases?: CaseCreateNestedManyWithoutReporterInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    postVotes?: PostVoteCreateNestedManyWithoutUserInput
    commentVotes?: CommentVoteCreateNestedManyWithoutUserInput
    reactions?: PostReactionCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    organization?: string | null
    reputation?: number
    badges?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cases?: CaseUncheckedCreateNestedManyWithoutReporterInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    postVotes?: PostVoteUncheckedCreateNestedManyWithoutUserInput
    commentVotes?: CommentVoteUncheckedCreateNestedManyWithoutUserInput
    reactions?: PostReactionUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type CommentCreateWithoutPostInput = {
    id?: string
    content: string
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
    votes?: CommentVoteCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutPostInput = {
    id?: string
    content: string
    authorId: string
    parentId?: string | null
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
    votes?: CommentVoteUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutPostInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
  }

  export type CommentCreateManyPostInputEnvelope = {
    data: CommentCreateManyPostInput | CommentCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type PostVoteCreateWithoutPostInput = {
    id?: string
    value: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPostVotesInput
  }

  export type PostVoteUncheckedCreateWithoutPostInput = {
    id?: string
    value: number
    userId: string
    createdAt?: Date | string
  }

  export type PostVoteCreateOrConnectWithoutPostInput = {
    where: PostVoteWhereUniqueInput
    create: XOR<PostVoteCreateWithoutPostInput, PostVoteUncheckedCreateWithoutPostInput>
  }

  export type PostVoteCreateManyPostInputEnvelope = {
    data: PostVoteCreateManyPostInput | PostVoteCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type PostReactionCreateWithoutPostInput = {
    id?: string
    emoji: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReactionsInput
  }

  export type PostReactionUncheckedCreateWithoutPostInput = {
    id?: string
    emoji: string
    userId: string
    createdAt?: Date | string
  }

  export type PostReactionCreateOrConnectWithoutPostInput = {
    where: PostReactionWhereUniqueInput
    create: XOR<PostReactionCreateWithoutPostInput, PostReactionUncheckedCreateWithoutPostInput>
  }

  export type PostReactionCreateManyPostInputEnvelope = {
    data: PostReactionCreateManyPostInput | PostReactionCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: IntFieldUpdateOperationsInput | number
    badges?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cases?: CaseUpdateManyWithoutReporterNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    postVotes?: PostVoteUpdateManyWithoutUserNestedInput
    commentVotes?: CommentVoteUpdateManyWithoutUserNestedInput
    reactions?: PostReactionUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: IntFieldUpdateOperationsInput | number
    badges?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cases?: CaseUncheckedUpdateManyWithoutReporterNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    postVotes?: PostVoteUncheckedUpdateManyWithoutUserNestedInput
    commentVotes?: CommentVoteUncheckedUpdateManyWithoutUserNestedInput
    reactions?: PostReactionUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommentUpsertWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>
  }

  export type CommentUpdateManyWithWhereWithoutPostInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutPostInput>
  }

  export type PostVoteUpsertWithWhereUniqueWithoutPostInput = {
    where: PostVoteWhereUniqueInput
    update: XOR<PostVoteUpdateWithoutPostInput, PostVoteUncheckedUpdateWithoutPostInput>
    create: XOR<PostVoteCreateWithoutPostInput, PostVoteUncheckedCreateWithoutPostInput>
  }

  export type PostVoteUpdateWithWhereUniqueWithoutPostInput = {
    where: PostVoteWhereUniqueInput
    data: XOR<PostVoteUpdateWithoutPostInput, PostVoteUncheckedUpdateWithoutPostInput>
  }

  export type PostVoteUpdateManyWithWhereWithoutPostInput = {
    where: PostVoteScalarWhereInput
    data: XOR<PostVoteUpdateManyMutationInput, PostVoteUncheckedUpdateManyWithoutPostInput>
  }

  export type PostReactionUpsertWithWhereUniqueWithoutPostInput = {
    where: PostReactionWhereUniqueInput
    update: XOR<PostReactionUpdateWithoutPostInput, PostReactionUncheckedUpdateWithoutPostInput>
    create: XOR<PostReactionCreateWithoutPostInput, PostReactionUncheckedCreateWithoutPostInput>
  }

  export type PostReactionUpdateWithWhereUniqueWithoutPostInput = {
    where: PostReactionWhereUniqueInput
    data: XOR<PostReactionUpdateWithoutPostInput, PostReactionUncheckedUpdateWithoutPostInput>
  }

  export type PostReactionUpdateManyWithWhereWithoutPostInput = {
    where: PostReactionScalarWhereInput
    data: XOR<PostReactionUpdateManyMutationInput, PostReactionUncheckedUpdateManyWithoutPostInput>
  }

  export type UserCreateWithoutCommentsInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    organization?: string | null
    reputation?: number
    badges?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cases?: CaseCreateNestedManyWithoutReporterInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    postVotes?: PostVoteCreateNestedManyWithoutUserInput
    commentVotes?: CommentVoteCreateNestedManyWithoutUserInput
    reactions?: PostReactionCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    organization?: string | null
    reputation?: number
    badges?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cases?: CaseUncheckedCreateNestedManyWithoutReporterInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    postVotes?: PostVoteUncheckedCreateNestedManyWithoutUserInput
    commentVotes?: CommentVoteUncheckedCreateNestedManyWithoutUserInput
    reactions?: PostReactionUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type PostCreateWithoutCommentsInput = {
    id?: string
    title: string
    content: string
    category: string
    tags?: string
    isPinned?: boolean
    views?: number
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutPostsInput
    votes?: PostVoteCreateNestedManyWithoutPostInput
    reactions?: PostReactionCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutCommentsInput = {
    id?: string
    title: string
    content: string
    category: string
    tags?: string
    authorId: string
    isPinned?: boolean
    views?: number
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: PostVoteUncheckedCreateNestedManyWithoutPostInput
    reactions?: PostReactionUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutCommentsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
  }

  export type CommentCreateWithoutRepliesInput = {
    id?: string
    content: string
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutCommentsInput
    post: PostCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    votes?: CommentVoteCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutRepliesInput = {
    id?: string
    content: string
    authorId: string
    postId: string
    parentId?: string | null
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: CommentVoteUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutRepliesInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
  }

  export type CommentCreateWithoutParentInput = {
    id?: string
    content: string
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutCommentsInput
    post: PostCreateNestedOneWithoutCommentsInput
    replies?: CommentCreateNestedManyWithoutParentInput
    votes?: CommentVoteCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutParentInput = {
    id?: string
    content: string
    authorId: string
    postId: string
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
    votes?: CommentVoteUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutParentInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput>
  }

  export type CommentCreateManyParentInputEnvelope = {
    data: CommentCreateManyParentInput | CommentCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type CommentVoteCreateWithoutCommentInput = {
    id?: string
    value: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCommentVotesInput
  }

  export type CommentVoteUncheckedCreateWithoutCommentInput = {
    id?: string
    value: number
    userId: string
    createdAt?: Date | string
  }

  export type CommentVoteCreateOrConnectWithoutCommentInput = {
    where: CommentVoteWhereUniqueInput
    create: XOR<CommentVoteCreateWithoutCommentInput, CommentVoteUncheckedCreateWithoutCommentInput>
  }

  export type CommentVoteCreateManyCommentInputEnvelope = {
    data: CommentVoteCreateManyCommentInput | CommentVoteCreateManyCommentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: IntFieldUpdateOperationsInput | number
    badges?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cases?: CaseUpdateManyWithoutReporterNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    postVotes?: PostVoteUpdateManyWithoutUserNestedInput
    commentVotes?: CommentVoteUpdateManyWithoutUserNestedInput
    reactions?: PostReactionUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: IntFieldUpdateOperationsInput | number
    badges?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cases?: CaseUncheckedUpdateManyWithoutReporterNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    postVotes?: PostVoteUncheckedUpdateManyWithoutUserNestedInput
    commentVotes?: CommentVoteUncheckedUpdateManyWithoutUserNestedInput
    reactions?: PostReactionUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostUpsertWithoutCommentsInput = {
    update: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutCommentsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
  }

  export type PostUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    votes?: PostVoteUpdateManyWithoutPostNestedInput
    reactions?: PostReactionUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: PostVoteUncheckedUpdateManyWithoutPostNestedInput
    reactions?: PostReactionUncheckedUpdateManyWithoutPostNestedInput
  }

  export type CommentUpsertWithoutRepliesInput = {
    update: XOR<CommentUpdateWithoutRepliesInput, CommentUncheckedUpdateWithoutRepliesInput>
    create: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    where?: CommentWhereInput
  }

  export type CommentUpdateToOneWithWhereWithoutRepliesInput = {
    where?: CommentWhereInput
    data: XOR<CommentUpdateWithoutRepliesInput, CommentUncheckedUpdateWithoutRepliesInput>
  }

  export type CommentUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    votes?: CommentVoteUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: CommentVoteUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentUpsertWithWhereUniqueWithoutParentInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutParentInput, CommentUncheckedUpdateWithoutParentInput>
    create: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutParentInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutParentInput, CommentUncheckedUpdateWithoutParentInput>
  }

  export type CommentUpdateManyWithWhereWithoutParentInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutParentInput>
  }

  export type CommentVoteUpsertWithWhereUniqueWithoutCommentInput = {
    where: CommentVoteWhereUniqueInput
    update: XOR<CommentVoteUpdateWithoutCommentInput, CommentVoteUncheckedUpdateWithoutCommentInput>
    create: XOR<CommentVoteCreateWithoutCommentInput, CommentVoteUncheckedCreateWithoutCommentInput>
  }

  export type CommentVoteUpdateWithWhereUniqueWithoutCommentInput = {
    where: CommentVoteWhereUniqueInput
    data: XOR<CommentVoteUpdateWithoutCommentInput, CommentVoteUncheckedUpdateWithoutCommentInput>
  }

  export type CommentVoteUpdateManyWithWhereWithoutCommentInput = {
    where: CommentVoteScalarWhereInput
    data: XOR<CommentVoteUpdateManyMutationInput, CommentVoteUncheckedUpdateManyWithoutCommentInput>
  }

  export type UserCreateWithoutPostVotesInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    organization?: string | null
    reputation?: number
    badges?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cases?: CaseCreateNestedManyWithoutReporterInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    commentVotes?: CommentVoteCreateNestedManyWithoutUserInput
    reactions?: PostReactionCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostVotesInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    organization?: string | null
    reputation?: number
    badges?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cases?: CaseUncheckedCreateNestedManyWithoutReporterInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    commentVotes?: CommentVoteUncheckedCreateNestedManyWithoutUserInput
    reactions?: PostReactionUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostVotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostVotesInput, UserUncheckedCreateWithoutPostVotesInput>
  }

  export type PostCreateWithoutVotesInput = {
    id?: string
    title: string
    content: string
    category: string
    tags?: string
    isPinned?: boolean
    views?: number
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
    reactions?: PostReactionCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutVotesInput = {
    id?: string
    title: string
    content: string
    category: string
    tags?: string
    authorId: string
    isPinned?: boolean
    views?: number
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    reactions?: PostReactionUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutVotesInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutVotesInput, PostUncheckedCreateWithoutVotesInput>
  }

  export type UserUpsertWithoutPostVotesInput = {
    update: XOR<UserUpdateWithoutPostVotesInput, UserUncheckedUpdateWithoutPostVotesInput>
    create: XOR<UserCreateWithoutPostVotesInput, UserUncheckedCreateWithoutPostVotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostVotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostVotesInput, UserUncheckedUpdateWithoutPostVotesInput>
  }

  export type UserUpdateWithoutPostVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: IntFieldUpdateOperationsInput | number
    badges?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cases?: CaseUpdateManyWithoutReporterNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    commentVotes?: CommentVoteUpdateManyWithoutUserNestedInput
    reactions?: PostReactionUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: IntFieldUpdateOperationsInput | number
    badges?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cases?: CaseUncheckedUpdateManyWithoutReporterNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    commentVotes?: CommentVoteUncheckedUpdateManyWithoutUserNestedInput
    reactions?: PostReactionUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostUpsertWithoutVotesInput = {
    update: XOR<PostUpdateWithoutVotesInput, PostUncheckedUpdateWithoutVotesInput>
    create: XOR<PostCreateWithoutVotesInput, PostUncheckedCreateWithoutVotesInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutVotesInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutVotesInput, PostUncheckedUpdateWithoutVotesInput>
  }

  export type PostUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
    reactions?: PostReactionUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
    reactions?: PostReactionUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UserCreateWithoutCommentVotesInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    organization?: string | null
    reputation?: number
    badges?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cases?: CaseCreateNestedManyWithoutReporterInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    postVotes?: PostVoteCreateNestedManyWithoutUserInput
    reactions?: PostReactionCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentVotesInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    organization?: string | null
    reputation?: number
    badges?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cases?: CaseUncheckedCreateNestedManyWithoutReporterInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    postVotes?: PostVoteUncheckedCreateNestedManyWithoutUserInput
    reactions?: PostReactionUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentVotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentVotesInput, UserUncheckedCreateWithoutCommentVotesInput>
  }

  export type CommentCreateWithoutVotesInput = {
    id?: string
    content: string
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutCommentsInput
    post: PostCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
  }

  export type CommentUncheckedCreateWithoutVotesInput = {
    id?: string
    content: string
    authorId: string
    postId: string
    parentId?: string | null
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
  }

  export type CommentCreateOrConnectWithoutVotesInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutVotesInput, CommentUncheckedCreateWithoutVotesInput>
  }

  export type UserUpsertWithoutCommentVotesInput = {
    update: XOR<UserUpdateWithoutCommentVotesInput, UserUncheckedUpdateWithoutCommentVotesInput>
    create: XOR<UserCreateWithoutCommentVotesInput, UserUncheckedCreateWithoutCommentVotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentVotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentVotesInput, UserUncheckedUpdateWithoutCommentVotesInput>
  }

  export type UserUpdateWithoutCommentVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: IntFieldUpdateOperationsInput | number
    badges?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cases?: CaseUpdateManyWithoutReporterNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    postVotes?: PostVoteUpdateManyWithoutUserNestedInput
    reactions?: PostReactionUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: IntFieldUpdateOperationsInput | number
    badges?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cases?: CaseUncheckedUpdateManyWithoutReporterNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    postVotes?: PostVoteUncheckedUpdateManyWithoutUserNestedInput
    reactions?: PostReactionUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommentUpsertWithoutVotesInput = {
    update: XOR<CommentUpdateWithoutVotesInput, CommentUncheckedUpdateWithoutVotesInput>
    create: XOR<CommentCreateWithoutVotesInput, CommentUncheckedCreateWithoutVotesInput>
    where?: CommentWhereInput
  }

  export type CommentUpdateToOneWithWhereWithoutVotesInput = {
    where?: CommentWhereInput
    data: XOR<CommentUpdateWithoutVotesInput, CommentUncheckedUpdateWithoutVotesInput>
  }

  export type CommentUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type UserCreateWithoutReactionsInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    organization?: string | null
    reputation?: number
    badges?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cases?: CaseCreateNestedManyWithoutReporterInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    postVotes?: PostVoteCreateNestedManyWithoutUserInput
    commentVotes?: CommentVoteCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReactionsInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    organization?: string | null
    reputation?: number
    badges?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cases?: CaseUncheckedCreateNestedManyWithoutReporterInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    postVotes?: PostVoteUncheckedCreateNestedManyWithoutUserInput
    commentVotes?: CommentVoteUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReactionsInput, UserUncheckedCreateWithoutReactionsInput>
  }

  export type PostCreateWithoutReactionsInput = {
    id?: string
    title: string
    content: string
    category: string
    tags?: string
    isPinned?: boolean
    views?: number
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
    votes?: PostVoteCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutReactionsInput = {
    id?: string
    title: string
    content: string
    category: string
    tags?: string
    authorId: string
    isPinned?: boolean
    views?: number
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    votes?: PostVoteUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutReactionsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutReactionsInput, PostUncheckedCreateWithoutReactionsInput>
  }

  export type UserUpsertWithoutReactionsInput = {
    update: XOR<UserUpdateWithoutReactionsInput, UserUncheckedUpdateWithoutReactionsInput>
    create: XOR<UserCreateWithoutReactionsInput, UserUncheckedCreateWithoutReactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReactionsInput, UserUncheckedUpdateWithoutReactionsInput>
  }

  export type UserUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: IntFieldUpdateOperationsInput | number
    badges?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cases?: CaseUpdateManyWithoutReporterNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    postVotes?: PostVoteUpdateManyWithoutUserNestedInput
    commentVotes?: CommentVoteUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: IntFieldUpdateOperationsInput | number
    badges?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cases?: CaseUncheckedUpdateManyWithoutReporterNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    postVotes?: PostVoteUncheckedUpdateManyWithoutUserNestedInput
    commentVotes?: CommentVoteUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostUpsertWithoutReactionsInput = {
    update: XOR<PostUpdateWithoutReactionsInput, PostUncheckedUpdateWithoutReactionsInput>
    create: XOR<PostCreateWithoutReactionsInput, PostUncheckedCreateWithoutReactionsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutReactionsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutReactionsInput, PostUncheckedUpdateWithoutReactionsInput>
  }

  export type PostUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
    votes?: PostVoteUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
    votes?: PostVoteUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    organization?: string | null
    reputation?: number
    badges?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cases?: CaseCreateNestedManyWithoutReporterInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    postVotes?: PostVoteCreateNestedManyWithoutUserInput
    commentVotes?: CommentVoteCreateNestedManyWithoutUserInput
    reactions?: PostReactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    organization?: string | null
    reputation?: number
    badges?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cases?: CaseUncheckedCreateNestedManyWithoutReporterInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    postVotes?: PostVoteUncheckedCreateNestedManyWithoutUserInput
    commentVotes?: CommentVoteUncheckedCreateNestedManyWithoutUserInput
    reactions?: PostReactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: IntFieldUpdateOperationsInput | number
    badges?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cases?: CaseUpdateManyWithoutReporterNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    postVotes?: PostVoteUpdateManyWithoutUserNestedInput
    commentVotes?: CommentVoteUpdateManyWithoutUserNestedInput
    reactions?: PostReactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: IntFieldUpdateOperationsInput | number
    badges?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cases?: CaseUncheckedUpdateManyWithoutReporterNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    postVotes?: PostVoteUncheckedUpdateManyWithoutUserNestedInput
    commentVotes?: CommentVoteUncheckedUpdateManyWithoutUserNestedInput
    reactions?: PostReactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CaseCreateManyReporterInput = {
    id?: string
    companyName: string
    productName: string
    category: string
    licenseInitial: string
    licenseFinal: string
    changeDate: string
    website: string
    description: string
    legalAnalysis: string
    communityReaction: string
    sources: string
    alternatives?: string | null
    status?: $Enums.CaseStatus
    severity?: $Enums.CaseSeverity
    reportCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateManyAuthorInput = {
    id?: string
    title: string
    content: string
    category: string
    tags?: string
    isPinned?: boolean
    views?: number
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateManyAuthorInput = {
    id?: string
    content: string
    postId: string
    parentId?: string | null
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostVoteCreateManyUserInput = {
    id?: string
    value: number
    postId: string
    createdAt?: Date | string
  }

  export type CommentVoteCreateManyUserInput = {
    id?: string
    value: number
    commentId: string
    createdAt?: Date | string
  }

  export type PostReactionCreateManyUserInput = {
    id?: string
    emoji: string
    postId: string
    createdAt?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    link?: string | null
    isRead?: boolean
    metadata?: string | null
    createdAt?: Date | string
  }

  export type CaseUpdateWithoutReporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    licenseInitial?: StringFieldUpdateOperationsInput | string
    licenseFinal?: StringFieldUpdateOperationsInput | string
    changeDate?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    legalAnalysis?: StringFieldUpdateOperationsInput | string
    communityReaction?: StringFieldUpdateOperationsInput | string
    sources?: StringFieldUpdateOperationsInput | string
    alternatives?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    severity?: EnumCaseSeverityFieldUpdateOperationsInput | $Enums.CaseSeverity
    reportCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaseUncheckedUpdateWithoutReporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    licenseInitial?: StringFieldUpdateOperationsInput | string
    licenseFinal?: StringFieldUpdateOperationsInput | string
    changeDate?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    legalAnalysis?: StringFieldUpdateOperationsInput | string
    communityReaction?: StringFieldUpdateOperationsInput | string
    sources?: StringFieldUpdateOperationsInput | string
    alternatives?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    severity?: EnumCaseSeverityFieldUpdateOperationsInput | $Enums.CaseSeverity
    reportCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaseUncheckedUpdateManyWithoutReporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    licenseInitial?: StringFieldUpdateOperationsInput | string
    licenseFinal?: StringFieldUpdateOperationsInput | string
    changeDate?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    legalAnalysis?: StringFieldUpdateOperationsInput | string
    communityReaction?: StringFieldUpdateOperationsInput | string
    sources?: StringFieldUpdateOperationsInput | string
    alternatives?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    severity?: EnumCaseSeverityFieldUpdateOperationsInput | $Enums.CaseSeverity
    reportCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUpdateManyWithoutPostNestedInput
    votes?: PostVoteUpdateManyWithoutPostNestedInput
    reactions?: PostReactionUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
    votes?: PostVoteUncheckedUpdateManyWithoutPostNestedInput
    reactions?: PostReactionUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
    votes?: CommentVoteUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
    votes?: CommentVoteUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostVoteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutVotesNestedInput
  }

  export type PostVoteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostVoteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentVoteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: CommentUpdateOneRequiredWithoutVotesNestedInput
  }

  export type CommentVoteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    commentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentVoteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    commentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostReactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutReactionsNestedInput
  }

  export type PostReactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostReactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyPostInput = {
    id?: string
    content: string
    authorId: string
    parentId?: string | null
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostVoteCreateManyPostInput = {
    id?: string
    value: number
    userId: string
    createdAt?: Date | string
  }

  export type PostReactionCreateManyPostInput = {
    id?: string
    emoji: string
    userId: string
    createdAt?: Date | string
  }

  export type CommentUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
    votes?: CommentVoteUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
    votes?: CommentVoteUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostVoteUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostVotesNestedInput
  }

  export type PostVoteUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostVoteUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostReactionUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReactionsNestedInput
  }

  export type PostReactionUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostReactionUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyParentInput = {
    id?: string
    content: string
    authorId: string
    postId: string
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentVoteCreateManyCommentInput = {
    id?: string
    value: number
    userId: string
    createdAt?: Date | string
  }

  export type CommentUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
    votes?: CommentVoteUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
    votes?: CommentVoteUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentVoteUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentVotesNestedInput
  }

  export type CommentVoteUncheckedUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentVoteUncheckedUpdateManyWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}