import State from '../state';

/* eslint-disable */
export default class Validator {

  static IMAGE_REGEX = /^.*\.(?:gif|jpg|jpeg|tiff|png|webp)$/i;
  static AUDIO_REGEX = /^.*\.(?:wav|mp3)$/i;
  static VIDEO_REGEX = /^.*\.(?:avi|wmv|flv|mpg|mp4)$/i;
  static EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  static COLOR_REGEX = /^#[0-9a-f]{3,6}$/i

  static isImage(path) {
    return path && !!path.match(this.IMAGE_REGEX);
  }

  static isAudio(path) {
    return path && !!path.match(this.AUDIO_REGEX);
  }

  static isVideo(path) {
    return path && !!path.match(this.VIDEO_REGEX);
  }

  static isEmail(str) {
    return str && !!str.match(this.EMAIL_REGEX);
  }

  static isCurrentSite(url) {
    return url && url.match(State.get("hostname")) || !url.match('http');
  }

  static isExternalSite(url) {
    return url && !this.isCurrentSite(url);
  }

  static isPageLink(url) {
    return ((url && !!url.match('page://')) || this.isCurrentSite(url)) && !this.isModalLink(url);
  }

  static isModalLink(url) {
    return url && !!url.match('modal://');
  }

  static isHashTag(url) {
    return url && !url.match('http') && url.match(/#/);
  }

  static isColor(str) {
    return !!str.match(this.COLOR_REGEX);
  }

}
