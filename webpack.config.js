const { StatsWriterPlugin } = require("webpack-stats-plugin")

module.exports = {
  plugins: [
    new StatsWriterPlugin({
      filename: "stats.json"
    })
  ]
}