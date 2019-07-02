# mParticle Web SDK Showcase

This repo houses [mParticle Web SDK](https://github.com/mparticle/mparticle-web-sdk) instrumentation examples for your reference.

Please also see the [primary documentation for the Web SDK](https://docs.mparticle.com/developers/sdk/web/).

## Example 1: SDK Bundling

This example shows some of the various ways you can add the SDK to your web app:

- Script tag: Load the SDK via a typical script tag
- Self-hosted SDK: Load the SDK and an example integration via webpack
- Self-hosted SDK + self-hosted SDK configuration: Load the SDK, integrations, and the SDK configuration all in one bundle

### Running the example

```sh
git clone git@github.com:mParticle/web-sdk-showcase.git
cd bundling/
npm install
npm run mpconfigure 
npm run build
npm start
```
