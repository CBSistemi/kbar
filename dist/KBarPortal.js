"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KBarPortal = void 0;
var react_portal_1 = require("@radix-ui/react-portal");
var React = __importStar(require("react"));
var types_1 = require("./types");
var useKBar_1 = require("./useKBar");
function KBarPortal(props) {
    var showing = (0, useKBar_1.useKBar)(function (state) { return ({
        showing: state.visualState !== types_1.VisualState.hidden,
    }); }).showing;
    if (!showing) {
        return null;
    }
    return React.createElement(react_portal_1.Portal, null, props.children);
}
exports.KBarPortal = KBarPortal;
