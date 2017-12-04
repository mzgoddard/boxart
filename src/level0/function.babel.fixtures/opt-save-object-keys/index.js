function explodeSaveObjectKeys() {
  const f = function(o) {
    const f = function() {
      let s = '';
      for (const [k, v] of Object.keys(o)) {
        s = v(k, s);
      }
      return s;
    };
    return f;
  };
  return f;
}

module.exports = explodeSaveObjectKeys;
