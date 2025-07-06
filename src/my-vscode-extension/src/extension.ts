import * as vscode from 'vscode';
import { BlogSection } from './blog/blogSection';

export function activate(context: vscode.ExtensionContext) {
    const blogSection = new BlogSection();

    let createBlogPostCommand = vscode.commands.registerCommand('extension.createBlogPost', () => {
        blogSection.createBlogPost();
    });

    let readBlogPostCommand = vscode.commands.registerCommand('extension.readBlogPost', () => {
        blogSection.readBlogPost();
    });

    let updateBlogPostCommand = vscode.commands.registerCommand('extension.updateBlogPost', () => {
        blogSection.updateBlogPost();
    });

    let deleteBlogPostCommand = vscode.commands.registerCommand('extension.deleteBlogPost', () => {
        blogSection.deleteBlogPost();
    });

    context.subscriptions.push(createBlogPostCommand);
    context.subscriptions.push(readBlogPostCommand);
    context.subscriptions.push(updateBlogPostCommand);
    context.subscriptions.push(deleteBlogPostCommand);
}

export function deactivate() {}