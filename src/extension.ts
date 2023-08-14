import vscode from 'vscode';
import { SampleHoverProviders } from '@providers';

export function activate(context?: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "vscode-sandbox-extension-example" is now active!');

	const disposals: Array<{ dispose(): any; }> = [];
	disposals.push(vscode.commands.registerCommand('vscode-sandbox-extension-example.helloWorld', () => {
		const settings = vscode.workspace.getConfiguration('vscode-sandbox-extension-example');
		const message = settings.get('promptMessageContent');
		if (typeof message === 'string') {
			vscode.window.showInformationMessage(message);
			return message;
		}
	}));
	disposals.push(vscode.languages.registerHoverProvider('plaintext', new SampleHoverProviders()));


	if (context) context.subscriptions.push(...disposals);
}

export function deactivate() { }
