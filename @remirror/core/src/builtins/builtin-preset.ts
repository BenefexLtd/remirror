import { ExtensionFromConstructor } from '../extension';
import { PresetFactory } from '../preset';
import { AttributesExtension } from './attributes-extension';
import { CommandsExtension } from './commands-extension';
import { HelpersExtension } from './helpers-extension';
import { InputRulesExtension } from './input-rules-extension';
import { KeymapExtension } from './keymap-extension';
import { NodeViewsExtension } from './node-views-extension';
import { PasteRulesExtension } from './paste-rules-extension';
import { PluginsExtension } from './plugins-extension';
import { SchemaExtension } from './schema-extension';
import { SuggestionsExtension } from './suggestions-extension';
import { TagsExtension } from './tags-extension';

/** A list of all the builtIn extensions. */
export const builtInExtensions = [
  AttributesExtension,
  CommandsExtension,
  HelpersExtension,
  InputRulesExtension,
  KeymapExtension,
  NodeViewsExtension,
  PasteRulesExtension,
  PluginsExtension,
  SchemaExtension,
  SuggestionsExtension,
  TagsExtension,
] as const;

/**
 * Provides all the builtin extensions to the editor.
 *
 * @remarks
 *
 * This is used automatically and (at the time of writing) can't be removed from
 * the editor. If you feel that there's a compelling reason to override these
 * extensions feel free to open an [issue
 * here](https://github.com/remirror/remirror/issues) and it can be addressed.
 *
 * @builtin
 */
const BuiltinPreset = PresetFactory.typed().preset({
  name: 'builtin',
  createExtensions() {
    return builtInExtensions.map((extension) => extension.of());
  },
});

/**
 * The builtin preset to be injected into all editors by default.
 */
export const builtinPreset = BuiltinPreset.of();

/**
 * The type of builtinPreset which allows for extracting the editor shape.
 */
export type BuiltinPreset = typeof builtinPreset;

/** The built in extension as a type. */
export type BuiltInExtensions = ExtensionFromConstructor<typeof builtInExtensions[number]>;
