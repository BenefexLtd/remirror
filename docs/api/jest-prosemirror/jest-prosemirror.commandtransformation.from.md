<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [jest-prosemirror](./jest-prosemirror.md) &gt; [CommandTransformation](./jest-prosemirror.commandtransformation.md) &gt; [from](./jest-prosemirror.commandtransformation.from.md)

## CommandTransformation.from property

The initial prosemirror node.

```ts
import { doc, p, strong} from 'jest-prosemirror';

const from = doc(p('Hello ', strong('Friend')));

```

<b>Signature:</b>

```typescript
from: TaggedProsemirrorNode<GSchema>;
```