import { UserData } from "../component/admin/dashboard/dashboard.component";
import { NAMES, PROJECT_NAME, PROJECT_TYPE } from "../constants/dummy-data";
import { DateUtil } from "./date.util";

export module Util{
    export function generateDummyData():UserData[]{
        // Create 100 Dummy Data
        return Array.from({length: 100}, (_, k) => createNewData(k + 1));
    }

    export function convertListWithNColumn(array: any[], column: number):[]{
        let row: any = [];
        let col:any = [];
        let colCount = 0;
        for(var i=0; i<array.length; i++){
           if(colCount == column){
                row.push(col);
                col = [];
                colCount = 0;
            }
           col.push(array[i]);
           colCount++;
        }
    
        if(col.length > 0){
             row.push(col);
        }

        return row;
    }

    function createNewData(id: number): UserData {
    const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
      ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
      '.';

        return {
        id: id,
        type: PROJECT_TYPE[Math.round(Math.random() * (PROJECT_TYPE.length - 1))],
        projectName: PROJECT_NAME[Math.round(Math.random() * (PROJECT_NAME.length - 1))],
        requestorName: name,
        date: DateUtil.generateRamdomDate().toISOString(),
        };
    }
}