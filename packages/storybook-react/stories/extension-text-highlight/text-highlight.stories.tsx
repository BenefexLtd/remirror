import 'remirror/styles/all.css';

import { htmlToProsemirrorNode } from 'remirror';
import { TextHighlightExtension } from 'remirror/extensions';
import { ProsemirrorDevTools } from '@remirror/dev';
import { Remirror, ThemeProvider, useCommands, useRemirror } from '@remirror/react';

export default { title: 'Extensions / TextHighlight' };

const extensions = () => [new TextHighlightExtension()];

const HighlightButtons = () => {
  const commands = useCommands();
  return (
    <>
      <button onClick={() => commands.setTextHighlight('red')}>Highlight red</button>
      <button onClick={() => commands.setTextHighlight('green')}>Highlight green</button>
      <button onClick={() => commands.removeTextHighlight()}>Remove</button>
    </>
  );
};

export const Basic = (): JSX.Element => {
  const { manager, state, onChange } = useRemirror({
    extensions: extensions,
    content: `<p>Some text</p>`,
    stringHandler: htmlToProsemirrorNode,
  });

  return (
    <ThemeProvider>
      <Remirror
        manager={manager}
        autoFocus
        onChange={onChange}
        initialContent={state}
        autoRender='end'
      >
        <HighlightButtons />
        <ProsemirrorDevTools />
      </Remirror>
    </ThemeProvider>
  );
};
