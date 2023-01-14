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
var foodclub_parser_exports = {};
__export(foodclub_parser_exports, {
  foodClubParser: () => foodClubParser
});
module.exports = __toCommonJS(foodclub_parser_exports);
const foodClubParser = ($, url) => {
  var _a, _b;
  const recipe = {
    description: "",
    instructions: [],
    name: "",
    pictureUrl: "",
    servings: "",
    source: "",
    sourceUrl: url,
    times: [],
    ingredients: []
  };
  recipe.source = (_a = $('span[itemprop="author"]')) == null ? void 0 : _a.text();
  recipe.name = (_b = $('span[itemprop="name"]')) == null ? void 0 : _b.text();
  return recipe;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  foodClubParser
});
//# sourceMappingURL=foodclub-parser.js.map
