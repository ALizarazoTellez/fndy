// Import rollup plugins
import { copy } from "@web/rollup-plugin-copy";
import resolve from "@rollup/plugin-node-resolve";
import summary from "rollup-plugin-summary";

export default {
  plugins: [
    // Resolve bare module specifiers to relative paths
    resolve(),

    // Print bundle summary
    summary(),

    // Optional: copy any static assets to build directory
    copy({
      patterns: ["images/**/*"],
    }),
  ],

  output: {
    dir: "build",
  },

  preserveEntrySignatures: "strict",
};
