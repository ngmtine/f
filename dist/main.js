"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => main_default
});
module.exports = __toCommonJS(main_exports);

// src/range.ts
var range = function* (a, b, c) {
  let _a = a;
  if (0 < c) {
    while (_a < b) {
      yield _a;
      _a += c;
    }
  } else {
    while (_a > b) {
      yield _a;
      _a += c;
    }
  }
};

// src/sleep.ts
var sleep = async (t) => new Promise((resolve) => setTimeout(resolve, t));

// src/main.ts
var f = {
  sleep,
  range
};
var main_default = f;
