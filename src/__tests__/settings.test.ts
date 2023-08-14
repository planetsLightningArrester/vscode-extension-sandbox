import assert from 'assert';
import vscode from 'vscode';

describe('check settings', () => {
	const settings = vscode.workspace.getConfiguration('vscode-sandbox-extension-example');

	afterEach(async () => {
		await settings.update('promptMessageContent', undefined, vscode.ConfigurationTarget.Global);
	});

	it('promptMessageContent', async () => {
		const newValue = 'new value';
		await settings.update('promptMessageContent', newValue, vscode.ConfigurationTarget.Global);
		const displayedMessage = await vscode.commands.executeCommand('vscode-sandbox-extension-example.helloWorld');
		assert.strictEqual(displayedMessage, newValue);
	});
});
