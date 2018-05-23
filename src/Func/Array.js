const _array = {
    unique: (arr)=>{
        let res = [];
        res = arr.filter((item)=>{
            return res.includes(item)?'':res.push(item);
        })
        return res;
    }
}

export default _array;
