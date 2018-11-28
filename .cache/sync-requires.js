// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/mnt/c/Users/jumer/event-dev/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/mnt/c/Users/jumer/event-dev/.cache/dev-404-page.js")),
  "component---src-pages-404-jsx": preferDefault(require("/mnt/c/Users/jumer/event-dev/src/pages/404.jsx"))
}

exports.json = {
  "layout-index.json": require("/mnt/c/Users/jumer/event-dev/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/mnt/c/Users/jumer/event-dev/.cache/json/dev-404-page.json"),
  "404-html.json": require("/mnt/c/Users/jumer/event-dev/.cache/json/404-html.json")
}