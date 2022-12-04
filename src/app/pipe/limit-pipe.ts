import { Injectable,Pipe } from "@angular/core";

@Pipe({
    name: 'limit'
})
@Injectable()
export class LimitPipe {

    constructor(){}

    transform(value: string, stringLimit: number): string{
        if(value.length > stringLimit){
            while(value.charAt(stringLimit) != ' ' && value.length > stringLimit){
                stringLimit++;
            }
            return value.substring(0, stringLimit);
        }
        return value;
    }
    

}