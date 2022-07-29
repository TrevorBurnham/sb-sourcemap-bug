# Storybook source map bug

Chrome's dev tools emits the warning

> DevTools failed to load source map: Could not load content for http://localhost:6006/index.js.map: HTTP error: status code 404, net::ERR_HTTP_RESPONSE_CODE_FAILURE

because multiple bundles emitted by Storybook include the source map reference

```js
//# sourceMappingURL=index.js.map
```

These source map references come from upstream packages. Normally the solution would be to use [source-map-loader](https://github.com/webpack-contrib/source-map-loader/) to resolve `sourceMappingURL` comments in imported code, but adding `source-map-loader` to Storybook's `webpackFinal` configuration does not eliminate all `sourceMappingURL` comments. Specifically, it `sourceMappingURL` comments in `vendors~main.iframe.bundle.js` but not in `vendors~main.manager.bundle.js`.

## Steps to reproduce

1. `yarn storybook`
2. Open `http://localhost:6006/` in Chrome and open the Dev Tools console
