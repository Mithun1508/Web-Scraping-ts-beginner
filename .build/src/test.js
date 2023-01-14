var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var import_cheerio = __toESM(require("cheerio"));
var import_node_fetch = __toESM(require("node-fetch"));
var import_foodclub_parser = require("./foodclub-parser");
const url = "https://www.foodclub.ru/detail/solyanka-sbornaya-myasnaya/";
const test = async () => {
  const html = await (0, import_node_fetch.default)(url).then((x) => x.textConverted());
  const $ = import_cheerio.default.load(html);
  console.log((0, import_foodclub_parser.foodClubParser)($, url));
};
test();
//# sourceMappingURL=test.js.map
