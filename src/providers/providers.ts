import vscode from 'vscode';

export class SampleHoverProviders implements vscode.HoverProvider {
  provideHover(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.ProviderResult<vscode.Hover> {
    return new vscode.Hover(new vscode.MarkdownString(`**This** is a \`Markdown\` *string*\n## With headers!`));
  }
}