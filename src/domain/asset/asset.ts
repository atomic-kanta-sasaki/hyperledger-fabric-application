export class Asset {
    private constructor(
        public readonly id: string,
        public color: string,
        public size: number,
        public owner: string,
        public value: number,
    ) {}

    static create(id: string, color: string, size: number, owner: string, value: number): Asset {
        return new Asset(id, color, size, owner, value);
    }

    public getId(): string {
        return this.id;
    }

    public getColor(): string {
        return this.color;
    }

    public getSize(): number {
        return this.size;
    }

    public getOwner(): string {
        return this.owner;
    }

    public getValue(): number {
        return this.value;
    }

    public getAsset(): Asset {
        return new Asset(this.id, this.color, this.size, this.owner, this.value);
    }

    public transfer(newOwner: string): void {
        this.owner = newOwner;
    }

    public updateAsset(color: string, size: number, owner: string, value: number): void {
        this.color = color;
        this.size = size;
        this.owner = owner;
        this.value = value;
    }
}