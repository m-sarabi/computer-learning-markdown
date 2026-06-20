({
  // Please visit the URL below for more information:
  // https://shd101wyy.github.io/markdown-preview-enhanced/#/extend-parser

  onWillParseMarkdown: async function(markdown) {
    // 1. Convert <tg-math>...</tg-math> to $...$ (inline math)
    markdown = markdown.replace(/<tg-math>([\s\S]*?)<\/tg-math>/g, '$$$1$$');

    // 2. Convert <tg-math-block>...</tg-math-block> to $$...$$ (block math)
    markdown = markdown.replace(/<tg-math-block>([\s\S]*?)<\/tg-math-block>/g, '$$$$$1$$$$');

    // 3. Convert ||...|| to a toggleable HTML structure
    markdown = markdown.replace(/\|\|([\s\S]*?)\|\|/g, '<label class="mpe-spoiler"><input type="checkbox"><span>$1</span></label>');

    return markdown;
  },

  onDidParseMarkdown: async function(html) {
    const style = `
<style>
.mpe-spoiler input[type="checkbox"] {
  display: none !important;
}

.mpe-spoiler {
  cursor: pointer;
  display: inline;
}

.mpe-spoiler span {
  background-color: rgba(127, 127, 127, 0.85);
  color: transparent;
  border-radius: 3px;
  padding: 0 0;
  user-select: none;
  transition: all 0.15s ease;
  display: inline;
}

.mpe-spoiler input[type="checkbox"]:checked ~ span {
  background-color: transparent;
  color: inherit;
  user-select: auto;
}
</style>
`;
    return html + style;
  },
})