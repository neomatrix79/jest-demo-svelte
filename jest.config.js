module.exports = {
  bail: false,
  moduleFileExtensions: ["js", "ts", "svelte"],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.svelte$": [
      "svelte-jester",
      {
        preprocess: true,
      },
    ],
    "^.+\\.ts$": "ts-jest",
  },
  verbose: true,
};
