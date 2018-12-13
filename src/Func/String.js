const _string = {
    getQueryString: (name) => {
        let reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        let r = window.location.search.substr(1).match(reg);
        if(r!=null)return  unescape(r[2]); return null;
    },

    limitText: (txt,limit)=> {
        if(txt.length > limit){
            return txt.slice(0,limit) + '...';
        } else {
            return txt;
        }
    },

    requestGetParamFormat: (obj) => {
        let params = '';
        Object.keys(obj).forEach(function(key,i){
            (i==0)?params += `?${key}=${obj[key]}`:params += `&${key}=${obj[key]}`;
        });
        return params;
    }
}

export default _string;
