export class ImageData{
    private id!: number;
    private name!: string;
    private imageSrc!: string | ArrayBuffer;
    private file?: File;

    setId(id: number){
        this.id = id;
    }
    getId():number{
       return this.id;
    }

    setName(name: string){
        this.name = name;
    }
    getName():string{
       return this.name;
    }

    setImageSrc(imageSrc: string | ArrayBuffer){
        this.imageSrc = imageSrc;
    }
    getImageSrc():string | ArrayBuffer{
       return this.imageSrc;
    }

    setFile(file: File){
        this.file = file;
    }
    getFile():File | undefined{
       return this.file;
    }
}