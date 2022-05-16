
Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@tiptap/core');

const inputRegex = /(?:^|\s)((?:~~)((?:[^~]+))(?:~~))$/;
const pasteRegex = /(?:^|\s)((?:~~)((?:[^~]+))(?:~~))/g;

const Underline = core.Mark.create({
    name: 'underline',
    addOptions() {
        return {
            HTMLAttributes: {},
        };
    },
    parseHTML() {
        return [
            {
                tag: 'u',
            },
            {
                style: 'text-decoration',
                consuming: false,
                getAttrs: style => (style.includes('underline') ? {} : false),
            },
        ];
    },
    renderHTML({ HTMLAttributes }) {
        return ['u', core.mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
    },
    addCommands() {
        return {
            setUnderline: () => ({ commands }) => {
                return commands.setMark(this.name);
            },
            toggleUnderline: () => ({ commands }) => {
                return commands.toggleMark(this.name);
            },
            unsetUnderline: () => ({ commands }) => {
                return commands.unsetMark(this.name);
            },
        };
    },
    addInputRules() {
        return [
            core.markInputRule({
                find: inputRegex,
                type: this.type,
            }),
        ];
    },
    addPasteRules() {
        return [
            core.markPasteRule({
                find: pasteRegex,
                type: this.type,
            }),
        ];
    },
});

exports.Underline = Underline;
exports["default"] = Underline;
exports.inputRegex = inputRegex;
exports.pasteRegex = pasteRegex;