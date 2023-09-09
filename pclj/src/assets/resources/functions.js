"use strict";

var pclj = pclj ||
{
  ui: {
    setBusy: (element) => { },
    clearBusy: (element) => { }
  },
  notify: {
    success: (message, title, time) => { },
    info: (message, title, time) => { },
    warn: (message, title, time) => { },
    error: (message, title, time) => { }
  },
  message: {
    info: (message, title) => { },
    success: (message, title) => { },
    warn: (message, title) => { },
    error: (message, title) => { },
    confirm: (message, title, callback) => { }
  }
};