# CUJs
基于ES6编写的常用JS函数

## 函数
### CSS 类

- hasClass(class)

检查当前的元素是否含有某个特定的类，如果有，则返回true。

- addClass(class)

为每个匹配的元素添加指定的类名，一个或多个要删除的CSS类名，请用空格分开。

- removeClass(class)

从所有匹配的元素中删除全部或者指定的类，一个或多个要删除的CSS类名，请用空格分开。

- toggleClass(class)

如果存在（不存在）就删除（添加）一个类。


### 效果

- show()

显示隐藏的匹配元素。

- hide()

隐藏显示的元素。


### String

- getQueryString()
``` js
// abc.com?test=123
CUJs.String.getQueryString('test')  // 123
```