export default class State {

  static set(item, value) {
    if (typeof item === "string") {
      global.__STATE__[item] = value;
    } else {
      global.__STATE__ = Object.assign({}, global.__STATE__, item);
    }

    return true;
  }

  static get(key) {
    return global.__STATE__[key];
  }
}
