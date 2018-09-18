export default class State {

  static set(item, value) {
    if (!global.__STATE__) {
      global.__STATE__ = {}
    }

    if (typeof item === "string") {
      global.__STATE__[item] = value;
    } else {
      global.__STATE__ = Object.assign({}, global.__STATE__, item);
    }

    return true;
  }

  static get(key) {
    if (!global.__STATE__) {
      global.__STATE__ = {}
    }
    return global.__STATE__[key];
  }
}
