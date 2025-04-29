
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
 * Model Instance
 * 
 */
export type Instance = $Result.DefaultSelection<Prisma.$InstancePayload>
/**
 * Model Fragment
 * 
 */
export type Fragment = $Result.DefaultSelection<Prisma.$FragmentPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Instances
 * const instances = await prisma.instance.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Instances
   * const instances = await prisma.instance.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.instance`: Exposes CRUD operations for the **Instance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Instances
    * const instances = await prisma.instance.findMany()
    * ```
    */
  get instance(): Prisma.InstanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fragment`: Exposes CRUD operations for the **Fragment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fragments
    * const fragments = await prisma.fragment.findMany()
    * ```
    */
  get fragment(): Prisma.FragmentDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Instance: 'Instance',
    Fragment: 'Fragment'
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
      modelProps: "instance" | "fragment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Instance: {
        payload: Prisma.$InstancePayload<ExtArgs>
        fields: Prisma.InstanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstancePayload>
          }
          findFirst: {
            args: Prisma.InstanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstancePayload>
          }
          findMany: {
            args: Prisma.InstanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstancePayload>[]
          }
          create: {
            args: Prisma.InstanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstancePayload>
          }
          createMany: {
            args: Prisma.InstanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstancePayload>[]
          }
          delete: {
            args: Prisma.InstanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstancePayload>
          }
          update: {
            args: Prisma.InstanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstancePayload>
          }
          deleteMany: {
            args: Prisma.InstanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstancePayload>[]
          }
          upsert: {
            args: Prisma.InstanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstancePayload>
          }
          aggregate: {
            args: Prisma.InstanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstance>
          }
          groupBy: {
            args: Prisma.InstanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstanceCountArgs<ExtArgs>
            result: $Utils.Optional<InstanceCountAggregateOutputType> | number
          }
        }
      }
      Fragment: {
        payload: Prisma.$FragmentPayload<ExtArgs>
        fields: Prisma.FragmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FragmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FragmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FragmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FragmentPayload>
          }
          findFirst: {
            args: Prisma.FragmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FragmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FragmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FragmentPayload>
          }
          findMany: {
            args: Prisma.FragmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FragmentPayload>[]
          }
          create: {
            args: Prisma.FragmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FragmentPayload>
          }
          createMany: {
            args: Prisma.FragmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FragmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FragmentPayload>[]
          }
          delete: {
            args: Prisma.FragmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FragmentPayload>
          }
          update: {
            args: Prisma.FragmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FragmentPayload>
          }
          deleteMany: {
            args: Prisma.FragmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FragmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FragmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FragmentPayload>[]
          }
          upsert: {
            args: Prisma.FragmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FragmentPayload>
          }
          aggregate: {
            args: Prisma.FragmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFragment>
          }
          groupBy: {
            args: Prisma.FragmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<FragmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.FragmentCountArgs<ExtArgs>
            result: $Utils.Optional<FragmentCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    instance?: InstanceOmit
    fragment?: FragmentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Models
   */

  /**
   * Model Instance
   */

  export type AggregateInstance = {
    _count: InstanceCountAggregateOutputType | null
    _min: InstanceMinAggregateOutputType | null
    _max: InstanceMaxAggregateOutputType | null
  }

  export type InstanceMinAggregateOutputType = {
    id: string | null
    name: string | null
    content: string | null
  }

  export type InstanceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    content: string | null
  }

  export type InstanceCountAggregateOutputType = {
    id: number
    name: number
    content: number
    _all: number
  }


  export type InstanceMinAggregateInputType = {
    id?: true
    name?: true
    content?: true
  }

  export type InstanceMaxAggregateInputType = {
    id?: true
    name?: true
    content?: true
  }

  export type InstanceCountAggregateInputType = {
    id?: true
    name?: true
    content?: true
    _all?: true
  }

  export type InstanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instance to aggregate.
     */
    where?: InstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instances to fetch.
     */
    orderBy?: InstanceOrderByWithRelationInput | InstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Instances
    **/
    _count?: true | InstanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstanceMaxAggregateInputType
  }

  export type GetInstanceAggregateType<T extends InstanceAggregateArgs> = {
        [P in keyof T & keyof AggregateInstance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstance[P]>
      : GetScalarType<T[P], AggregateInstance[P]>
  }




  export type InstanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstanceWhereInput
    orderBy?: InstanceOrderByWithAggregationInput | InstanceOrderByWithAggregationInput[]
    by: InstanceScalarFieldEnum[] | InstanceScalarFieldEnum
    having?: InstanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstanceCountAggregateInputType | true
    _min?: InstanceMinAggregateInputType
    _max?: InstanceMaxAggregateInputType
  }

  export type InstanceGroupByOutputType = {
    id: string
    name: string
    content: string
    _count: InstanceCountAggregateOutputType | null
    _min: InstanceMinAggregateOutputType | null
    _max: InstanceMaxAggregateOutputType | null
  }

  type GetInstanceGroupByPayload<T extends InstanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstanceGroupByOutputType[P]>
            : GetScalarType<T[P], InstanceGroupByOutputType[P]>
        }
      >
    >


  export type InstanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    content?: boolean
  }, ExtArgs["result"]["instance"]>

  export type InstanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    content?: boolean
  }, ExtArgs["result"]["instance"]>

  export type InstanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    content?: boolean
  }, ExtArgs["result"]["instance"]>

  export type InstanceSelectScalar = {
    id?: boolean
    name?: boolean
    content?: boolean
  }

  export type InstanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "content", ExtArgs["result"]["instance"]>

  export type $InstancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Instance"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      content: string
    }, ExtArgs["result"]["instance"]>
    composites: {}
  }

  type InstanceGetPayload<S extends boolean | null | undefined | InstanceDefaultArgs> = $Result.GetResult<Prisma.$InstancePayload, S>

  type InstanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstanceCountAggregateInputType | true
    }

  export interface InstanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Instance'], meta: { name: 'Instance' } }
    /**
     * Find zero or one Instance that matches the filter.
     * @param {InstanceFindUniqueArgs} args - Arguments to find a Instance
     * @example
     * // Get one Instance
     * const instance = await prisma.instance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstanceFindUniqueArgs>(args: SelectSubset<T, InstanceFindUniqueArgs<ExtArgs>>): Prisma__InstanceClient<$Result.GetResult<Prisma.$InstancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Instance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstanceFindUniqueOrThrowArgs} args - Arguments to find a Instance
     * @example
     * // Get one Instance
     * const instance = await prisma.instance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstanceFindUniqueOrThrowArgs>(args: SelectSubset<T, InstanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstanceClient<$Result.GetResult<Prisma.$InstancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstanceFindFirstArgs} args - Arguments to find a Instance
     * @example
     * // Get one Instance
     * const instance = await prisma.instance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstanceFindFirstArgs>(args?: SelectSubset<T, InstanceFindFirstArgs<ExtArgs>>): Prisma__InstanceClient<$Result.GetResult<Prisma.$InstancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstanceFindFirstOrThrowArgs} args - Arguments to find a Instance
     * @example
     * // Get one Instance
     * const instance = await prisma.instance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstanceFindFirstOrThrowArgs>(args?: SelectSubset<T, InstanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstanceClient<$Result.GetResult<Prisma.$InstancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Instances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Instances
     * const instances = await prisma.instance.findMany()
     * 
     * // Get first 10 Instances
     * const instances = await prisma.instance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const instanceWithIdOnly = await prisma.instance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstanceFindManyArgs>(args?: SelectSubset<T, InstanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Instance.
     * @param {InstanceCreateArgs} args - Arguments to create a Instance.
     * @example
     * // Create one Instance
     * const Instance = await prisma.instance.create({
     *   data: {
     *     // ... data to create a Instance
     *   }
     * })
     * 
     */
    create<T extends InstanceCreateArgs>(args: SelectSubset<T, InstanceCreateArgs<ExtArgs>>): Prisma__InstanceClient<$Result.GetResult<Prisma.$InstancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Instances.
     * @param {InstanceCreateManyArgs} args - Arguments to create many Instances.
     * @example
     * // Create many Instances
     * const instance = await prisma.instance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstanceCreateManyArgs>(args?: SelectSubset<T, InstanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Instances and returns the data saved in the database.
     * @param {InstanceCreateManyAndReturnArgs} args - Arguments to create many Instances.
     * @example
     * // Create many Instances
     * const instance = await prisma.instance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Instances and only return the `id`
     * const instanceWithIdOnly = await prisma.instance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstanceCreateManyAndReturnArgs>(args?: SelectSubset<T, InstanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Instance.
     * @param {InstanceDeleteArgs} args - Arguments to delete one Instance.
     * @example
     * // Delete one Instance
     * const Instance = await prisma.instance.delete({
     *   where: {
     *     // ... filter to delete one Instance
     *   }
     * })
     * 
     */
    delete<T extends InstanceDeleteArgs>(args: SelectSubset<T, InstanceDeleteArgs<ExtArgs>>): Prisma__InstanceClient<$Result.GetResult<Prisma.$InstancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Instance.
     * @param {InstanceUpdateArgs} args - Arguments to update one Instance.
     * @example
     * // Update one Instance
     * const instance = await prisma.instance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstanceUpdateArgs>(args: SelectSubset<T, InstanceUpdateArgs<ExtArgs>>): Prisma__InstanceClient<$Result.GetResult<Prisma.$InstancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Instances.
     * @param {InstanceDeleteManyArgs} args - Arguments to filter Instances to delete.
     * @example
     * // Delete a few Instances
     * const { count } = await prisma.instance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstanceDeleteManyArgs>(args?: SelectSubset<T, InstanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Instances
     * const instance = await prisma.instance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstanceUpdateManyArgs>(args: SelectSubset<T, InstanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instances and returns the data updated in the database.
     * @param {InstanceUpdateManyAndReturnArgs} args - Arguments to update many Instances.
     * @example
     * // Update many Instances
     * const instance = await prisma.instance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Instances and only return the `id`
     * const instanceWithIdOnly = await prisma.instance.updateManyAndReturn({
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
    updateManyAndReturn<T extends InstanceUpdateManyAndReturnArgs>(args: SelectSubset<T, InstanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Instance.
     * @param {InstanceUpsertArgs} args - Arguments to update or create a Instance.
     * @example
     * // Update or create a Instance
     * const instance = await prisma.instance.upsert({
     *   create: {
     *     // ... data to create a Instance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Instance we want to update
     *   }
     * })
     */
    upsert<T extends InstanceUpsertArgs>(args: SelectSubset<T, InstanceUpsertArgs<ExtArgs>>): Prisma__InstanceClient<$Result.GetResult<Prisma.$InstancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Instances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstanceCountArgs} args - Arguments to filter Instances to count.
     * @example
     * // Count the number of Instances
     * const count = await prisma.instance.count({
     *   where: {
     *     // ... the filter for the Instances we want to count
     *   }
     * })
    **/
    count<T extends InstanceCountArgs>(
      args?: Subset<T, InstanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Instance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstanceAggregateArgs>(args: Subset<T, InstanceAggregateArgs>): Prisma.PrismaPromise<GetInstanceAggregateType<T>>

    /**
     * Group by Instance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstanceGroupByArgs} args - Group by arguments.
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
      T extends InstanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstanceGroupByArgs['orderBy'] }
        : { orderBy?: InstanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InstanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Instance model
   */
  readonly fields: InstanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Instance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Instance model
   */
  interface InstanceFieldRefs {
    readonly id: FieldRef<"Instance", 'String'>
    readonly name: FieldRef<"Instance", 'String'>
    readonly content: FieldRef<"Instance", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Instance findUnique
   */
  export type InstanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instance
     */
    select?: InstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instance
     */
    omit?: InstanceOmit<ExtArgs> | null
    /**
     * Filter, which Instance to fetch.
     */
    where: InstanceWhereUniqueInput
  }

  /**
   * Instance findUniqueOrThrow
   */
  export type InstanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instance
     */
    select?: InstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instance
     */
    omit?: InstanceOmit<ExtArgs> | null
    /**
     * Filter, which Instance to fetch.
     */
    where: InstanceWhereUniqueInput
  }

  /**
   * Instance findFirst
   */
  export type InstanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instance
     */
    select?: InstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instance
     */
    omit?: InstanceOmit<ExtArgs> | null
    /**
     * Filter, which Instance to fetch.
     */
    where?: InstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instances to fetch.
     */
    orderBy?: InstanceOrderByWithRelationInput | InstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instances.
     */
    cursor?: InstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instances.
     */
    distinct?: InstanceScalarFieldEnum | InstanceScalarFieldEnum[]
  }

  /**
   * Instance findFirstOrThrow
   */
  export type InstanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instance
     */
    select?: InstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instance
     */
    omit?: InstanceOmit<ExtArgs> | null
    /**
     * Filter, which Instance to fetch.
     */
    where?: InstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instances to fetch.
     */
    orderBy?: InstanceOrderByWithRelationInput | InstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instances.
     */
    cursor?: InstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instances.
     */
    distinct?: InstanceScalarFieldEnum | InstanceScalarFieldEnum[]
  }

  /**
   * Instance findMany
   */
  export type InstanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instance
     */
    select?: InstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instance
     */
    omit?: InstanceOmit<ExtArgs> | null
    /**
     * Filter, which Instances to fetch.
     */
    where?: InstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instances to fetch.
     */
    orderBy?: InstanceOrderByWithRelationInput | InstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Instances.
     */
    cursor?: InstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instances.
     */
    skip?: number
    distinct?: InstanceScalarFieldEnum | InstanceScalarFieldEnum[]
  }

  /**
   * Instance create
   */
  export type InstanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instance
     */
    select?: InstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instance
     */
    omit?: InstanceOmit<ExtArgs> | null
    /**
     * The data needed to create a Instance.
     */
    data: XOR<InstanceCreateInput, InstanceUncheckedCreateInput>
  }

  /**
   * Instance createMany
   */
  export type InstanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Instances.
     */
    data: InstanceCreateManyInput | InstanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Instance createManyAndReturn
   */
  export type InstanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instance
     */
    select?: InstanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Instance
     */
    omit?: InstanceOmit<ExtArgs> | null
    /**
     * The data used to create many Instances.
     */
    data: InstanceCreateManyInput | InstanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Instance update
   */
  export type InstanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instance
     */
    select?: InstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instance
     */
    omit?: InstanceOmit<ExtArgs> | null
    /**
     * The data needed to update a Instance.
     */
    data: XOR<InstanceUpdateInput, InstanceUncheckedUpdateInput>
    /**
     * Choose, which Instance to update.
     */
    where: InstanceWhereUniqueInput
  }

  /**
   * Instance updateMany
   */
  export type InstanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Instances.
     */
    data: XOR<InstanceUpdateManyMutationInput, InstanceUncheckedUpdateManyInput>
    /**
     * Filter which Instances to update
     */
    where?: InstanceWhereInput
    /**
     * Limit how many Instances to update.
     */
    limit?: number
  }

  /**
   * Instance updateManyAndReturn
   */
  export type InstanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instance
     */
    select?: InstanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Instance
     */
    omit?: InstanceOmit<ExtArgs> | null
    /**
     * The data used to update Instances.
     */
    data: XOR<InstanceUpdateManyMutationInput, InstanceUncheckedUpdateManyInput>
    /**
     * Filter which Instances to update
     */
    where?: InstanceWhereInput
    /**
     * Limit how many Instances to update.
     */
    limit?: number
  }

  /**
   * Instance upsert
   */
  export type InstanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instance
     */
    select?: InstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instance
     */
    omit?: InstanceOmit<ExtArgs> | null
    /**
     * The filter to search for the Instance to update in case it exists.
     */
    where: InstanceWhereUniqueInput
    /**
     * In case the Instance found by the `where` argument doesn't exist, create a new Instance with this data.
     */
    create: XOR<InstanceCreateInput, InstanceUncheckedCreateInput>
    /**
     * In case the Instance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstanceUpdateInput, InstanceUncheckedUpdateInput>
  }

  /**
   * Instance delete
   */
  export type InstanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instance
     */
    select?: InstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instance
     */
    omit?: InstanceOmit<ExtArgs> | null
    /**
     * Filter which Instance to delete.
     */
    where: InstanceWhereUniqueInput
  }

  /**
   * Instance deleteMany
   */
  export type InstanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instances to delete
     */
    where?: InstanceWhereInput
    /**
     * Limit how many Instances to delete.
     */
    limit?: number
  }

  /**
   * Instance without action
   */
  export type InstanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instance
     */
    select?: InstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instance
     */
    omit?: InstanceOmit<ExtArgs> | null
  }


  /**
   * Model Fragment
   */

  export type AggregateFragment = {
    _count: FragmentCountAggregateOutputType | null
    _min: FragmentMinAggregateOutputType | null
    _max: FragmentMaxAggregateOutputType | null
  }

  export type FragmentMinAggregateOutputType = {
    id: string | null
    name: string | null
    content: string | null
  }

  export type FragmentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    content: string | null
  }

  export type FragmentCountAggregateOutputType = {
    id: number
    name: number
    content: number
    _all: number
  }


  export type FragmentMinAggregateInputType = {
    id?: true
    name?: true
    content?: true
  }

  export type FragmentMaxAggregateInputType = {
    id?: true
    name?: true
    content?: true
  }

  export type FragmentCountAggregateInputType = {
    id?: true
    name?: true
    content?: true
    _all?: true
  }

  export type FragmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fragment to aggregate.
     */
    where?: FragmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fragments to fetch.
     */
    orderBy?: FragmentOrderByWithRelationInput | FragmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FragmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fragments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fragments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fragments
    **/
    _count?: true | FragmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FragmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FragmentMaxAggregateInputType
  }

  export type GetFragmentAggregateType<T extends FragmentAggregateArgs> = {
        [P in keyof T & keyof AggregateFragment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFragment[P]>
      : GetScalarType<T[P], AggregateFragment[P]>
  }




  export type FragmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FragmentWhereInput
    orderBy?: FragmentOrderByWithAggregationInput | FragmentOrderByWithAggregationInput[]
    by: FragmentScalarFieldEnum[] | FragmentScalarFieldEnum
    having?: FragmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FragmentCountAggregateInputType | true
    _min?: FragmentMinAggregateInputType
    _max?: FragmentMaxAggregateInputType
  }

  export type FragmentGroupByOutputType = {
    id: string
    name: string
    content: string
    _count: FragmentCountAggregateOutputType | null
    _min: FragmentMinAggregateOutputType | null
    _max: FragmentMaxAggregateOutputType | null
  }

  type GetFragmentGroupByPayload<T extends FragmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FragmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FragmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FragmentGroupByOutputType[P]>
            : GetScalarType<T[P], FragmentGroupByOutputType[P]>
        }
      >
    >


  export type FragmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    content?: boolean
  }, ExtArgs["result"]["fragment"]>

  export type FragmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    content?: boolean
  }, ExtArgs["result"]["fragment"]>

  export type FragmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    content?: boolean
  }, ExtArgs["result"]["fragment"]>

  export type FragmentSelectScalar = {
    id?: boolean
    name?: boolean
    content?: boolean
  }

  export type FragmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "content", ExtArgs["result"]["fragment"]>

  export type $FragmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fragment"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      content: string
    }, ExtArgs["result"]["fragment"]>
    composites: {}
  }

  type FragmentGetPayload<S extends boolean | null | undefined | FragmentDefaultArgs> = $Result.GetResult<Prisma.$FragmentPayload, S>

  type FragmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FragmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FragmentCountAggregateInputType | true
    }

  export interface FragmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fragment'], meta: { name: 'Fragment' } }
    /**
     * Find zero or one Fragment that matches the filter.
     * @param {FragmentFindUniqueArgs} args - Arguments to find a Fragment
     * @example
     * // Get one Fragment
     * const fragment = await prisma.fragment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FragmentFindUniqueArgs>(args: SelectSubset<T, FragmentFindUniqueArgs<ExtArgs>>): Prisma__FragmentClient<$Result.GetResult<Prisma.$FragmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fragment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FragmentFindUniqueOrThrowArgs} args - Arguments to find a Fragment
     * @example
     * // Get one Fragment
     * const fragment = await prisma.fragment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FragmentFindUniqueOrThrowArgs>(args: SelectSubset<T, FragmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FragmentClient<$Result.GetResult<Prisma.$FragmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fragment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FragmentFindFirstArgs} args - Arguments to find a Fragment
     * @example
     * // Get one Fragment
     * const fragment = await prisma.fragment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FragmentFindFirstArgs>(args?: SelectSubset<T, FragmentFindFirstArgs<ExtArgs>>): Prisma__FragmentClient<$Result.GetResult<Prisma.$FragmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fragment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FragmentFindFirstOrThrowArgs} args - Arguments to find a Fragment
     * @example
     * // Get one Fragment
     * const fragment = await prisma.fragment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FragmentFindFirstOrThrowArgs>(args?: SelectSubset<T, FragmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__FragmentClient<$Result.GetResult<Prisma.$FragmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fragments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FragmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fragments
     * const fragments = await prisma.fragment.findMany()
     * 
     * // Get first 10 Fragments
     * const fragments = await prisma.fragment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fragmentWithIdOnly = await prisma.fragment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FragmentFindManyArgs>(args?: SelectSubset<T, FragmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FragmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fragment.
     * @param {FragmentCreateArgs} args - Arguments to create a Fragment.
     * @example
     * // Create one Fragment
     * const Fragment = await prisma.fragment.create({
     *   data: {
     *     // ... data to create a Fragment
     *   }
     * })
     * 
     */
    create<T extends FragmentCreateArgs>(args: SelectSubset<T, FragmentCreateArgs<ExtArgs>>): Prisma__FragmentClient<$Result.GetResult<Prisma.$FragmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fragments.
     * @param {FragmentCreateManyArgs} args - Arguments to create many Fragments.
     * @example
     * // Create many Fragments
     * const fragment = await prisma.fragment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FragmentCreateManyArgs>(args?: SelectSubset<T, FragmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fragments and returns the data saved in the database.
     * @param {FragmentCreateManyAndReturnArgs} args - Arguments to create many Fragments.
     * @example
     * // Create many Fragments
     * const fragment = await prisma.fragment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fragments and only return the `id`
     * const fragmentWithIdOnly = await prisma.fragment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FragmentCreateManyAndReturnArgs>(args?: SelectSubset<T, FragmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FragmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fragment.
     * @param {FragmentDeleteArgs} args - Arguments to delete one Fragment.
     * @example
     * // Delete one Fragment
     * const Fragment = await prisma.fragment.delete({
     *   where: {
     *     // ... filter to delete one Fragment
     *   }
     * })
     * 
     */
    delete<T extends FragmentDeleteArgs>(args: SelectSubset<T, FragmentDeleteArgs<ExtArgs>>): Prisma__FragmentClient<$Result.GetResult<Prisma.$FragmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fragment.
     * @param {FragmentUpdateArgs} args - Arguments to update one Fragment.
     * @example
     * // Update one Fragment
     * const fragment = await prisma.fragment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FragmentUpdateArgs>(args: SelectSubset<T, FragmentUpdateArgs<ExtArgs>>): Prisma__FragmentClient<$Result.GetResult<Prisma.$FragmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fragments.
     * @param {FragmentDeleteManyArgs} args - Arguments to filter Fragments to delete.
     * @example
     * // Delete a few Fragments
     * const { count } = await prisma.fragment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FragmentDeleteManyArgs>(args?: SelectSubset<T, FragmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fragments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FragmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fragments
     * const fragment = await prisma.fragment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FragmentUpdateManyArgs>(args: SelectSubset<T, FragmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fragments and returns the data updated in the database.
     * @param {FragmentUpdateManyAndReturnArgs} args - Arguments to update many Fragments.
     * @example
     * // Update many Fragments
     * const fragment = await prisma.fragment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fragments and only return the `id`
     * const fragmentWithIdOnly = await prisma.fragment.updateManyAndReturn({
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
    updateManyAndReturn<T extends FragmentUpdateManyAndReturnArgs>(args: SelectSubset<T, FragmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FragmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fragment.
     * @param {FragmentUpsertArgs} args - Arguments to update or create a Fragment.
     * @example
     * // Update or create a Fragment
     * const fragment = await prisma.fragment.upsert({
     *   create: {
     *     // ... data to create a Fragment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fragment we want to update
     *   }
     * })
     */
    upsert<T extends FragmentUpsertArgs>(args: SelectSubset<T, FragmentUpsertArgs<ExtArgs>>): Prisma__FragmentClient<$Result.GetResult<Prisma.$FragmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fragments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FragmentCountArgs} args - Arguments to filter Fragments to count.
     * @example
     * // Count the number of Fragments
     * const count = await prisma.fragment.count({
     *   where: {
     *     // ... the filter for the Fragments we want to count
     *   }
     * })
    **/
    count<T extends FragmentCountArgs>(
      args?: Subset<T, FragmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FragmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fragment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FragmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FragmentAggregateArgs>(args: Subset<T, FragmentAggregateArgs>): Prisma.PrismaPromise<GetFragmentAggregateType<T>>

    /**
     * Group by Fragment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FragmentGroupByArgs} args - Group by arguments.
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
      T extends FragmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FragmentGroupByArgs['orderBy'] }
        : { orderBy?: FragmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FragmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFragmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fragment model
   */
  readonly fields: FragmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fragment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FragmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Fragment model
   */
  interface FragmentFieldRefs {
    readonly id: FieldRef<"Fragment", 'String'>
    readonly name: FieldRef<"Fragment", 'String'>
    readonly content: FieldRef<"Fragment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Fragment findUnique
   */
  export type FragmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fragment
     */
    select?: FragmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fragment
     */
    omit?: FragmentOmit<ExtArgs> | null
    /**
     * Filter, which Fragment to fetch.
     */
    where: FragmentWhereUniqueInput
  }

  /**
   * Fragment findUniqueOrThrow
   */
  export type FragmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fragment
     */
    select?: FragmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fragment
     */
    omit?: FragmentOmit<ExtArgs> | null
    /**
     * Filter, which Fragment to fetch.
     */
    where: FragmentWhereUniqueInput
  }

  /**
   * Fragment findFirst
   */
  export type FragmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fragment
     */
    select?: FragmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fragment
     */
    omit?: FragmentOmit<ExtArgs> | null
    /**
     * Filter, which Fragment to fetch.
     */
    where?: FragmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fragments to fetch.
     */
    orderBy?: FragmentOrderByWithRelationInput | FragmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fragments.
     */
    cursor?: FragmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fragments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fragments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fragments.
     */
    distinct?: FragmentScalarFieldEnum | FragmentScalarFieldEnum[]
  }

  /**
   * Fragment findFirstOrThrow
   */
  export type FragmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fragment
     */
    select?: FragmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fragment
     */
    omit?: FragmentOmit<ExtArgs> | null
    /**
     * Filter, which Fragment to fetch.
     */
    where?: FragmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fragments to fetch.
     */
    orderBy?: FragmentOrderByWithRelationInput | FragmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fragments.
     */
    cursor?: FragmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fragments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fragments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fragments.
     */
    distinct?: FragmentScalarFieldEnum | FragmentScalarFieldEnum[]
  }

  /**
   * Fragment findMany
   */
  export type FragmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fragment
     */
    select?: FragmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fragment
     */
    omit?: FragmentOmit<ExtArgs> | null
    /**
     * Filter, which Fragments to fetch.
     */
    where?: FragmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fragments to fetch.
     */
    orderBy?: FragmentOrderByWithRelationInput | FragmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fragments.
     */
    cursor?: FragmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fragments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fragments.
     */
    skip?: number
    distinct?: FragmentScalarFieldEnum | FragmentScalarFieldEnum[]
  }

  /**
   * Fragment create
   */
  export type FragmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fragment
     */
    select?: FragmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fragment
     */
    omit?: FragmentOmit<ExtArgs> | null
    /**
     * The data needed to create a Fragment.
     */
    data: XOR<FragmentCreateInput, FragmentUncheckedCreateInput>
  }

  /**
   * Fragment createMany
   */
  export type FragmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fragments.
     */
    data: FragmentCreateManyInput | FragmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fragment createManyAndReturn
   */
  export type FragmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fragment
     */
    select?: FragmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fragment
     */
    omit?: FragmentOmit<ExtArgs> | null
    /**
     * The data used to create many Fragments.
     */
    data: FragmentCreateManyInput | FragmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fragment update
   */
  export type FragmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fragment
     */
    select?: FragmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fragment
     */
    omit?: FragmentOmit<ExtArgs> | null
    /**
     * The data needed to update a Fragment.
     */
    data: XOR<FragmentUpdateInput, FragmentUncheckedUpdateInput>
    /**
     * Choose, which Fragment to update.
     */
    where: FragmentWhereUniqueInput
  }

  /**
   * Fragment updateMany
   */
  export type FragmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fragments.
     */
    data: XOR<FragmentUpdateManyMutationInput, FragmentUncheckedUpdateManyInput>
    /**
     * Filter which Fragments to update
     */
    where?: FragmentWhereInput
    /**
     * Limit how many Fragments to update.
     */
    limit?: number
  }

  /**
   * Fragment updateManyAndReturn
   */
  export type FragmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fragment
     */
    select?: FragmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fragment
     */
    omit?: FragmentOmit<ExtArgs> | null
    /**
     * The data used to update Fragments.
     */
    data: XOR<FragmentUpdateManyMutationInput, FragmentUncheckedUpdateManyInput>
    /**
     * Filter which Fragments to update
     */
    where?: FragmentWhereInput
    /**
     * Limit how many Fragments to update.
     */
    limit?: number
  }

  /**
   * Fragment upsert
   */
  export type FragmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fragment
     */
    select?: FragmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fragment
     */
    omit?: FragmentOmit<ExtArgs> | null
    /**
     * The filter to search for the Fragment to update in case it exists.
     */
    where: FragmentWhereUniqueInput
    /**
     * In case the Fragment found by the `where` argument doesn't exist, create a new Fragment with this data.
     */
    create: XOR<FragmentCreateInput, FragmentUncheckedCreateInput>
    /**
     * In case the Fragment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FragmentUpdateInput, FragmentUncheckedUpdateInput>
  }

  /**
   * Fragment delete
   */
  export type FragmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fragment
     */
    select?: FragmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fragment
     */
    omit?: FragmentOmit<ExtArgs> | null
    /**
     * Filter which Fragment to delete.
     */
    where: FragmentWhereUniqueInput
  }

  /**
   * Fragment deleteMany
   */
  export type FragmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fragments to delete
     */
    where?: FragmentWhereInput
    /**
     * Limit how many Fragments to delete.
     */
    limit?: number
  }

  /**
   * Fragment without action
   */
  export type FragmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fragment
     */
    select?: FragmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fragment
     */
    omit?: FragmentOmit<ExtArgs> | null
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


  export const InstanceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    content: 'content'
  };

  export type InstanceScalarFieldEnum = (typeof InstanceScalarFieldEnum)[keyof typeof InstanceScalarFieldEnum]


  export const FragmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    content: 'content'
  };

  export type FragmentScalarFieldEnum = (typeof FragmentScalarFieldEnum)[keyof typeof FragmentScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type InstanceWhereInput = {
    AND?: InstanceWhereInput | InstanceWhereInput[]
    OR?: InstanceWhereInput[]
    NOT?: InstanceWhereInput | InstanceWhereInput[]
    id?: UuidFilter<"Instance"> | string
    name?: StringFilter<"Instance"> | string
    content?: StringFilter<"Instance"> | string
  }

  export type InstanceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
  }

  export type InstanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InstanceWhereInput | InstanceWhereInput[]
    OR?: InstanceWhereInput[]
    NOT?: InstanceWhereInput | InstanceWhereInput[]
    name?: StringFilter<"Instance"> | string
    content?: StringFilter<"Instance"> | string
  }, "id">

  export type InstanceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    _count?: InstanceCountOrderByAggregateInput
    _max?: InstanceMaxOrderByAggregateInput
    _min?: InstanceMinOrderByAggregateInput
  }

  export type InstanceScalarWhereWithAggregatesInput = {
    AND?: InstanceScalarWhereWithAggregatesInput | InstanceScalarWhereWithAggregatesInput[]
    OR?: InstanceScalarWhereWithAggregatesInput[]
    NOT?: InstanceScalarWhereWithAggregatesInput | InstanceScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Instance"> | string
    name?: StringWithAggregatesFilter<"Instance"> | string
    content?: StringWithAggregatesFilter<"Instance"> | string
  }

  export type FragmentWhereInput = {
    AND?: FragmentWhereInput | FragmentWhereInput[]
    OR?: FragmentWhereInput[]
    NOT?: FragmentWhereInput | FragmentWhereInput[]
    id?: UuidFilter<"Fragment"> | string
    name?: StringFilter<"Fragment"> | string
    content?: StringFilter<"Fragment"> | string
  }

  export type FragmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
  }

  export type FragmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FragmentWhereInput | FragmentWhereInput[]
    OR?: FragmentWhereInput[]
    NOT?: FragmentWhereInput | FragmentWhereInput[]
    name?: StringFilter<"Fragment"> | string
    content?: StringFilter<"Fragment"> | string
  }, "id">

  export type FragmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    _count?: FragmentCountOrderByAggregateInput
    _max?: FragmentMaxOrderByAggregateInput
    _min?: FragmentMinOrderByAggregateInput
  }

  export type FragmentScalarWhereWithAggregatesInput = {
    AND?: FragmentScalarWhereWithAggregatesInput | FragmentScalarWhereWithAggregatesInput[]
    OR?: FragmentScalarWhereWithAggregatesInput[]
    NOT?: FragmentScalarWhereWithAggregatesInput | FragmentScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Fragment"> | string
    name?: StringWithAggregatesFilter<"Fragment"> | string
    content?: StringWithAggregatesFilter<"Fragment"> | string
  }

  export type InstanceCreateInput = {
    id: string
    name: string
    content: string
  }

  export type InstanceUncheckedCreateInput = {
    id: string
    name: string
    content: string
  }

  export type InstanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type InstanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type InstanceCreateManyInput = {
    id: string
    name: string
    content: string
  }

  export type InstanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type InstanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type FragmentCreateInput = {
    id: string
    name: string
    content: string
  }

  export type FragmentUncheckedCreateInput = {
    id: string
    name: string
    content: string
  }

  export type FragmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type FragmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type FragmentCreateManyInput = {
    id: string
    name: string
    content: string
  }

  export type FragmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type FragmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type InstanceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
  }

  export type InstanceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
  }

  export type InstanceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type FragmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
  }

  export type FragmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
  }

  export type FragmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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