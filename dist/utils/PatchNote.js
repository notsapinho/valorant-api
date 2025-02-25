"use strict";
// import
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchNote = void 0;
const lib_1 = require("@valapi/lib");
// class
/**
 * Valorant Patch Note URL
 */
class PatchNote {
    /**
     *
     * @param {string} language Language of the patch note
     */
    constructor(language = "en-US") {
        const lowerCase_language = language.toLowerCase();
        this.json = `https://playvalorant.com/page-data/${lowerCase_language}/news/tags/patch-notes/page-data.json`;
        this.patch_list = `https://playvalorant.com/${lowerCase_language}/news/tags/patch-notes/`;
        this.patch_note = `https://playvalorant.com/${lowerCase_language}/news/game-updates`;
    }
    /**
     *
     * @param {string} language Language
     * @returns {string} Url of Json data
     */
    static getJsonUrl(language) {
        const _myPatchNote = new PatchNote(language);
        return `${_myPatchNote.json}`;
    }
    /**
     *
     * @param {string} patch Version
     * @param {string} language Language
     * @returns {string} Url of Patch note
     */
    static getUrl(patch, language) {
        const _myPatchNote = new PatchNote(language);
        if (!patch) {
            return `${_myPatchNote.patch_list}`;
        }
        const split_patch = patch.split(".");
        if (split_patch.length !== 2) {
            throw new lib_1.ValError({
                name: "PatchNote_Error",
                message: "Invalid patch number",
                data: patch
            });
        }
        else if (split_patch.at(1) !== "0" && String(split_patch.at(1)).length === 1) {
            split_patch[1] = `0${split_patch[1]}`;
            patch = `${Number(split_patch.at(0))}.${String(split_patch.at(1))}`;
        }
        return `${_myPatchNote.patch_note}/valorant-patch-notes-${patch.replace(".", "-")}`;
    }
}
exports.PatchNote = PatchNote;
