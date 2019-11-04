export namespace Counter {
  export class ResetToDefault {
    static readonly type = '[Counter] ResetToDefault';
  }

  export class Increase {
    static readonly type = '[Counter] Increase';
  }

  export class Decrease {
    static readonly type = '[Counter] Decrease';
  }
}
