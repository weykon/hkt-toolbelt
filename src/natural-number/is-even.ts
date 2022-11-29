import { Type, Kind, Number, NaturalNumber, DigitList } from "..";

export type _$isEven<
  T extends Number.Number,
  LIST extends DigitList.DigitList = NaturalNumber._$toList<T>,
  RESULT = DigitList._$isEven<LIST>
> = RESULT;

export declare abstract class IsEven extends Kind.Kind {
  abstract f: (
    x: Type._$cast<this[Kind._], Number.Number>
  ) => Number._$isNatural<typeof x> extends true ? _$isEven<typeof x> : never;
}
