function abProperties() {
  const _f3 = function (state, element, data) {
    state = state || {};

    state.a = element.a;
    state.b = element.b;
    return state;
  };

  _f3.copy = function (dest, src) {
    dest = dest || {};
    return dest;
  };

  return _f3;
}

module.exports = abProperties();