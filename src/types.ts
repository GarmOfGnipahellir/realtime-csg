import { NDArray } from "vectorious";

export interface ArraySized<T, N extends number> extends Array<T> {
  length: N;
}

export class Vec<D extends number> extends NDArray {
  constructor(...args: ArraySized<number, D>) {
    super(args);
  }
}
