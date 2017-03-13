var mix = (function() {
  function parseColor(cstr) {
    cstr = cstr.replace(/#/g, '')
    var col = {}
    
    if(cstr.length == 3) {
      col["red"] = hexToInt(cstr[0]+cstr[0])
      col["green"] = hexToInt(cstr[1]+cstr[1])
      col["blue"] = hexToInt(cstr[2]+cstr[2])
    } else {
      col["red"] = hexToInt(cstr[0]+cstr[1])
      col["green"] = hexToInt(cstr[2]+cstr[3])
      col["blue"] = hexToInt(cstr[4]+cstr[5])
    }
    
    return col
  }
  
  function hexToInt(hxstr) {
    return parseInt(hxstr, 16)
  }
  
  function intToHex(inty) {
    var hexify = inty.toString(16);
    
    
    return ((hexify.length == 1) ? '0' : '') + hexify;
  }
  
  function gradient(from, to, point) {
    var fcol = parseColor(from);
    var tcol = parseColor(to);
    var bcol = {};
    
    function interpolate(a, b, t) {
      return Math.floor(a + ((b-a) * t));
    }
    
    for(rgb in fcol) {
      bcol[rgb] = interpolate(fcol[rgb], tcol[rgb], point);
    }
    
    return toString(bcol);
  }
  
  function toString(col) {
    var ret = ['#'];
    
    for(rgb in col) {
      ret.push(intToHex(col[rgb]))
    }
    
    return ret.join('');
    
  }
  
  this.gradient = gradient;
  
  return this;
})();