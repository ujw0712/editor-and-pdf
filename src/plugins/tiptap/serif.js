'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@tiptap/core');

const starInputRegex = /(?:^|\s)((?:\*)((?:[^*]+))(?:\*))$/;
const starPasteRegex = /(?:^|\s)((?:\*)((?:[^*]+))(?:\*))/g;
const underscoreInputRegex = /(?:^|\s)((?:_)((?:[^_]+))(?:_))$/;
const underscorePasteRegex = /(?:^|\s)((?:_)((?:[^_]+))(?:_))/g;
const Serif = core.Mark.create({
    name: 'serif',
    addOptions() {
        return {
            HTMLAttributes: {},
        };
    },
    parseHTML() {
        return [
            {
                tag: 'span',
            },
        ];
    },
    renderHTML({ HTMLAttributes }) {
        return ['span', {class: 'serif'}, 0];
    },
    addCommands() {
        return {
            setSerif: () => ({ commands }) => {
                return commands.setMark(this.name);
            },
            toggleSerif: () => ({ commands }) => {
                return commands.toggleMark(this.name);
            },
            unsetSerif: () => ({ commands }) => {
                return commands.unsetMark(this.name);
            },
        };
    },
    addInputRules() {
        return [
            core.markInputRule({
                find: starInputRegex,
                type: this.type,
            }),
            core.markInputRule({
                find: underscoreInputRegex,
                type: this.type,
            }),
        ];
    },
    addPasteRules() {
        return [
            core.markPasteRule({
                find: starPasteRegex,
                type: this.type,
            }),
            core.markPasteRule({
                find: underscorePasteRegex,
                type: this.type,
            }),
        ];
    },
});

exports.Serif = Serif;
exports["default"] = Serif;
exports.starInputRegex = starInputRegex;
exports.starPasteRegex = starPasteRegex;
exports.underscoreInputRegex = underscoreInputRegex;
exports.underscorePasteRegex = underscorePasteRegex;
