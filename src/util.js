const picomatch = require("picomatch")

function isMatch(patterns, currentPath) {
  const isMatched = picomatch.isMatch(currentPath, patterns)
  return isMatched
}
function isJsonExt(ext) {
  return ext == "json"
}

function messagesJsonstring(fileName, ext) {
  try {
    const messages = require(fileName)
    return JSON.stringify(messages["default"])
  } catch (error) {
    if (error.code === "MODULE_NOT_FOUND") {
      process.env.NODE_ENV !== "test" &&
        console.error(
          `[gatsby-plugin-intl] couldn't find file "${path}/${language}.${ext}"`
        )
    }

    throw error
  }
}

export { isMatch, isJsonExt, messagesJsonstring }
