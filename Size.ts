enum SizeType {
  px = 'px',
  pc = '%',
  em = 'em',
  ex = 'ex',
  in = 'in',
  cm = 'cm',
  mm = 'mm',
  pt = 'pt',
}

export class Size {
  constructor(value: number = 0, type: SizeType = SizeType.px) {
    this.type = type;
    this.value = value;
  }
  value: number;
  type: SizeType;

  public get(): string {
    if (this.type == SizeType.px) {
      return this.value.toString();
    } else {
      return this.value.toString() + this.type;
    }
  }
  public add(value: number): Size {
    return {
      value: this.value + value,
      type: this.type,
    } as Size;
  }
  public subtract(value: number): Size {
    return {
      value: this.value - value,
      type: this.type,
    } as Size;
  }
}
