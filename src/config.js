export default class Config {

  static set(item, value) {
    if (typeof item === "string") {
      global.__CONFIG__[item] = value;
    } else {
      global.__CONFIG__ = Object.assign({}, global.__CONFIG__, item);
    }

    return true;
  }

  static get(key) {
    return global.__CONFIG__[key];
  }
}
