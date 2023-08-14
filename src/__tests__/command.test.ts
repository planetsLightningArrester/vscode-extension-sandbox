import assert from 'assert';
import vscode from 'vscode';

describe('check commands', () => {
	it('helloWorld', async () => {
		const settings = vscode.workspace.getConfiguration('vscode-sandbox-extension-example');
		const expected = settings.get('promptMessageContent');
		const messageDisplayed = await vscode.commands.executeCommand('vscode-sandbox-extension-example.helloWorld');
		assert.strictEqual(messageDisplayed, expected);
	});
});
