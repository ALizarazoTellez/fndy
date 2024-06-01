// Import rollup plugins
import resolve from "@rollup/plugin-node-resolve";
import summary from "rollup-plugin-summary";

export default {
  plugins: [
    // Resolve bare module specifiers to relative paths
    resolve(),

    // Print bundle summary
    summary(),
  ],

  input: {
    file: "index.js",
  },

  output: {
    format: "iife",
    dir: "build",
    entryFileNames: "components.js",
  },

  preserveEntrySignatures: "strict",
};
