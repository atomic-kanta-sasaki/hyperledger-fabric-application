export class Asset {
  private constructor(
    private readonly id: string,
    private color: string,
    private size: string,
    private owner: string,
    private value: string,
  ) {}

  static create(
    id: string,
    color: string,
    size: string,
    owner: string,
    value: string,
  ): Asset {
    return new Asset(id, color, size, owner, value);
  }

  public getId(): string {
    return this.id;
  }

  public getColor(): string {
    return this.color;
  }

  public getSize(): string {
    return this.size;
  }

  public getOwner(): string {
    return this.owner;
  }

  

  public getValue(): string {
    return this.value;
  }

  public getAsset(): Asset {
    return new Asset(this.id, this.color, this.size, this.owner, this.value);
  }

  public changeOwner(newOwner: string): void {
    this.owner = newOwner;
  }

  public updateAsset(
    color: string,
    size: string,
    owner: string,
    value: string,
  ): void {
    this.color = color;
    this.size = size;
    this.owner = owner;
    this.value = value;
  }
}
