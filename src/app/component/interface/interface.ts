export interface ImageData{
    id: number;
    name: string;
    imageSrc: string | ArrayBuffer;
    file?: File;
}

export interface MyworkData{
    id: number;
    name: string;
    detail: string;
    directUrl: string;
    images: ImageData[];
}

export interface FileData{
  file: File | null;
  src: string | ArrayBuffer | null;
}