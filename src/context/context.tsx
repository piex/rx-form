import { BehaviorSubject } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';

export interface Values {
  [key: string]: any;
}

export default class Context<V extends Values> {
  private readonly initialValue: V;
  private readonly subject$: BehaviorSubject<V>;

  constructor(values: Partial<V>) {
    this.initialValue = values as V;
    this.subject$ = new BehaviorSubject(values as V);
  }

  public getValues() {
    return this.values;
  }

  public values<K extends keyof V>(name: K): BehaviorSubject<V[K]>;
  public values(): BehaviorSubject<any>;
  public values(name?: string) {
    if (name) {
      return this.subject$.pipe(map(values => values[name]), distinctUntilChanged());
    }

    return this.subject$;
  }

  public setFieldValue(name: string, v: any) {
    this.patchValue({ [name]: v } as any);
  }

  /** 部分更新 */
  public patchValue(v: Partial<V>) {
    this.subject$.next(Object.assign({}, this.subject$.value, v));
  }

  /** 重置为 initialValue */
  public reset() {
    this.subject$.next(this.initialValue);
  }
}
