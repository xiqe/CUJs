# CUJs
基于ES6编写的常用JS函数

## CSS 类

- hasClass(class)

检查当前的元素是否含有某个特定的类，如果有，则返回true。

- addClass(class)

为每个匹配的元素添加指定的类名，一个或多个要删除的CSS类名，请用空格分开。

- removeClass(class)

从所有匹配的元素中删除全部或者指定的类，一个或多个要删除的CSS类名，请用空格分开。

- toggleClass(class)

如果存在（不存在）就删除（添加）一个类。


## 效果

- show()

显示隐藏的匹配元素。

- hide()

隐藏显示的元素。


## String

- getQueryString()
``` js
// abc.com?test=123
CUJs.String.getQueryString('test')  // 123
```

- limitText()
``` js
let abc = 'abc12345678'
CUJs.String.getQueryString(abc,7)  // abc1234...
```

- requestGetParamFormat(obj)
``` js
let abc = {name:'jack',age:18,birth:'1988-10-10'}
CUJs.String.requestGetParamFormat(abc)  // ?name=jack&age=18&birth=1988-10-10
```


## Array

- unique(arr)
``` js
let arr = [1,3,4,5,8,5,3,9]
CUJs.Array.unique(arr)  // [1,3,4,5,8,9]
```


## Date

- format(fmt,date)
``` js
let _date = new Date();
CUJs.Date.format('yyyy-MM-dd hh:mm:ss',_date)  // 2018-05-30 10:05:54
CUJs.Date.format('yyyy-MM-dd',_date)  // 2018-05-30
CUJs.Date.format('M月d日 hh:mm:ss',_date);  // 5月30日 10:05:54
CUJs.Date.format('yyyy/MM/dd hh:mm',_date);  // 2018/05/30 10:05
```


## Function

- CountDown(el,options)
``` js
var app = document.getElementById('app');
var count = new CUJs.CountDown(app,{
    countDownSeconds: 7,       //倒计时间设置
    doubleDigit: true,          //'7'秒显示为'07'
    secondsOnly: false,         //是否只显示秒
    callback = () => {          //倒计时完回调函数
        return false;
    }
})
```