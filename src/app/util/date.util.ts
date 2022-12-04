
class _DateUtil{
    
    
    generateRamdomDate = ()=> {
        let start = new Date(2020, 0, 1);
        let end = new Date();

        return new Date(start.getTime() + Math.random() * (end.getTime()-start.getTime()));
    }

}

const DateUtil = new _DateUtil();

export {DateUtil}