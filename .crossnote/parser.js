({
  // Please visit the URL below for more information:
  // https://shd101wyy.github.io/markdown-preview-enhanced/#/extend-parser

  onWillParseMarkdown: async function(markdown) {
    // 1. Convert <tg-math>...</tg-math> to $...$ (inline math)
    markdown = markdown.replace(/<tg-math>([\s\S]*?)<\/tg-math>/g, '$$$1$$');

    // 2. Convert <tg-math-block>...</tg-math-block> to $$...$$ (block math)
    markdown = markdown.replace(/<tg-math-block>([\s\S]*?)<\/tg-math-block>/g, '$$$$$1$$$$');

    // 3. Convert ||...|| to <span class="mpe-spoiler">...</span> (spoiler)
    markdown = markdown.replace(/\|\|([\s\S]*?)\|\|/g, '<span class="mpe-spoiler">$1</span>');

    return markdown;
  },

  onDidParseMarkdown: async function(html) {
    // Inject CSS to support the spoiler effect dynamically across both light and dark themes
    const style = `
<style>
.mpe-spoiler {
  background-color: rgba(127, 127, 127, 0.85);
  color: transparent;
  border-radius: 3px;
  padding: 0 4px;
  cursor: pointer;
  user-select: none;
  transition: all 0.15s ease;
}
.mpe-spoiler:hover {
  background-color: rgba(127, 127, 127, 0.15);
  color: inherit;
  user-select: auto;
}
</style>
`;
    return html + style;
  },
})