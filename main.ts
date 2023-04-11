import { Editor, MarkdownView, Plugin } from 'obsidian';


// selects the entire line from index zero
function selectLine(editor: Editor) {
    const { line } = editor.getCursor();
    const lineText = editor.getLine(line);
    editor.setSelection({ line, ch: 0 }, { line, ch: lineText.length });
}

export default class SelectCurrentLinePlugin extends Plugin {

	async onload() {
	
		// This adds an editor command on the current editor instance
		this.addCommand({
			id: 'select-current-line-on-keystroke',
			name: 'select the current line in editor',
			hotkeys: [{modifiers: [], key: 'Escape'}],
			editorCallback: (editor: Editor) => {
				selectLine(editor);
			}
		});
	}

	onunload() {
	}
}
