import { ImageData } from "./ImageData";

export class MyworkData{
    id!: number;
    name!: string;
    detail!: string;
    directUrl!: string;
    images!: Array<ImageData>;


    constructor(mywork?: MyworkData){
        if(mywork){
            this.id = mywork.id;
            this.name = mywork.name;
            this.detail = mywork.detail;
            this.images = new Array<ImageData>(...mywork.images);
        }
    }
}