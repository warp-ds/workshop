import { defineConfig } from 'unocss';
import { presetWarp } from '@warp-ds/uno';
import { classes } from '@warp-ds/css/component-classes/classes';

export default defineConfig({
  presets: [presetWarp({ externalClasses: classes, skipResets: true })],
  cli: {
    entry: {
        patterns: ['src/app/*.tsx', 'src/app/**/*.tsx'],
        outFile: 'src/app/styles/uno.css',
    },
},
});