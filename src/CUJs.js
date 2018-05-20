import version from './Version'

import _string from './Func/String'
import _date from './Func/Date'
import _array from './Func/Array'

import './Proto/Class'

window.CUJs = window.CUJs || {};
[CUJs.Version,CUJs.Func,CUJs.Proto] = [
    version,
    {
        String: _string,
        Date: _date,
        Array: _array
    }
]

export default CUJs;
