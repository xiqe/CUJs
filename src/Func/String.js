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
    }
}

export default _string;
