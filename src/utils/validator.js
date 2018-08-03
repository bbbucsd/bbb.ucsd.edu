import Config from '../config';

export default class Validator {

  static IMAGE_REGEX = /^.*\.(?:gif|jpg|jpeg|tiff|png|webp)$/i;
  static AUDIO_REGEX = /^.*\.(?:wav|mp3)$/i;
  static VIDEO_REGEX = /^.*\.(?:avi|wmv|flv|mpg|mp4)$/i;
  static EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  static isImage(path) {
    return !!path.match(this.IMAGE_REGEX);
  }

  static isAudio(path) {
    return !!path.match(this.AUDIO_REGEX);
  }

  static isVideo(path) {
    return !!path.match(this.VIDEO_REGEX);
  }

  static isEmail(str) {
    return !!str.match(this.EMAIL_REGEX);
  }

  static isCurrentSite(url) {
    return url && url.match(Config.get("hostname")) || !url.match('http');
  }

  static isExternalSite(url) {
    return url && !this.isCurrentSite(url);
  }

  static isPageLink(url) {
    return url && !!url.match('page://');
  }

  static isModalLink(url) {
    return url && !!url.match('modal://');
  }

  static isHashTag(url) {
    return url && !url.match('http') && url.match(/#/);
  }

}
