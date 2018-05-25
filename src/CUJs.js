import version from './Version'

import _string from './Func/String'
import _date from './Func/Date'
import _array from './Func/Array'

import './Proto/Class'
import './Proto/Dom'

import CountDown from './Func/countDown'

window.CUJs = window.CUJs || {};
CUJs = {
    Version: version,
    String: _string,
    Date: _date,
    Array: _array,
    CountDown:CountDown
}

export default CUJs;
