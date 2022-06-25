/* eslint-disable @typescript-eslint/no-explicit-any */

import { InitialEntry } from 'history';

type TFunction = (...args: any) => any;

type TObject = Record<string, unknown>;

type TArgs<K> = Partial<K> & BaseDecoratorsArgs;

type TParameters<T extends TFunction> = Parameters<T> extends []
  ? unknown
  : Parameters<T>[0];

export type BaseDecoratorsArgs = { routeEntries?: InitialEntry[] };

export type StoryArgs<
  TComponent extends TFunction,
  AdditionalArgs extends TObject = TObject
> = (_: TArgs<AdditionalArgs> & TParameters<TComponent>) => JSX.Element;
