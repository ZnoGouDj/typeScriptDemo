export class Plantable {
    public plant(where: Pot): void {

    }
}


export class Plant extends Plantable {

    public leafCount: number;

    public constructor(leafCount: number) {
        super()
        this.leafCount = leafCount;
    }

}

export class Shroom extends Plantable {

    public color: string;

    public constructor(color: string) {
        super();
        this.color = color;
    }

}




export class Pot {

    private contents: any;

    public plant(plantable: any): void {
        //
    }

}