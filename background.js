// Service worker for handling extension icon clicks and storage
chrome.runtime.onInstalled.addListener(() => {
  // Initialize storage on install
  chrome.storage.local.set({
    notes: [{
      id: 'welcome-note',
      title: 'Welcome to Pure Notepad',
      content: `# Welcome to Pure Notepad! 🎉

This is your first note. Here's what you can do:

## ✨ Features
• **Write and edit** with live auto-save
• **Multiple notes** - Create, switch, and organize
• **Search** through all your notes instantly
• **Export** to .txt or .md files
• **Markdown support** for **bold** and *italic* text
• **Extension popup** - Quick access from toolbar

## 🎯 Keyboard Shortcuts
• **⌘+B** - Make text bold
• **⌘+I** - Make text italic
• **⌘+F** - Search notes
• **⌘+S** - Save note
• **⌘+N** - Create new note

## 🔒 Privacy First
Everything is stored locally in your browser. No data ever leaves your device!

Start writing your thoughts, ideas, or todo lists. This notepad will always be here when you need it.

Happy writing! ✍️`,
      createdAt: Date.now(),
      updatedAt: Date.now()
    }],
    currentNoteId: 'welcome-note',
    settings: {
      theme: 'auto',
      fontSize: 14,
      fontFamily: 'SF Pro Display',
      opacity: 95,
      autoSave: true,
      wordWrap: true,
      colorTheme: 0
    }
  });
});

// Handle storage changes to sync across tabs
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === 'local') {
    console.log('Storage changed:', changes);
  }
});

// Handle keyboard shortcuts (optional - for future use)
chrome.commands.onCommand.addListener(async (command) => {
  if (command === 'toggle-notepad') {
    // Could open popup programmatically if needed
    console.log('Keyboard shortcut triggered');
  }
});