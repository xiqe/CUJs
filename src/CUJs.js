import version from './Version'

import _string from './Func/String'
import _date from './Func/Date'
import _array from './Func/Array'

import _class from './Prototype/Class'

window.CUJs = window.CUJs || {};
CUJs = {
    Version: version,
    String: _string,
    Date: _date,
    Array: _array,
    Class: _class
}

export default CUJs;
