# Gatsby Netlify CMS Starter Template

[![Netlify Status](https://api.netlify.com/api/v1/badges/b654c94e-08a6-4b79-b443-7837581b1d8d/deploy-status)](https://app.netlify.com/sites/gatsby-starter-netlify-cms-ci/deploys) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](code_of_conduct.md)

![Screenshot](https://github.com/simarmannsingh/gatsby-netlifycms-starter-template/blob/master/src/img/gatsbynetlifyBlog.png)

This is a public repo that contains a [Gatsby](https://www.gatsbyjs.org/) based template website which can be easily hosted on any platform. This website uses the [Netlify CMS](https://www.netlifycms.org) as its content management system.

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution. Surely you can use a different host. Netlify CMS and Netlify are two different products and not to be confused as one dependent on another. You are free to use both in combination and separately as well.

**Note:** This starter template is a customized version of the original template by Netlify that can be found on [Netlify CMS](https://www.netlifycms.org/) website and uses [Gatsby v2](https://www.gatsbyjs.org/blog/2018-09-17-gatsby-v2/). It is an Open-source project, however, the licence is yet to be decided and hence poeple are discouraged to use it. You can use it for your project ONLY if you are willing to pay the licence fee.

Also, this project is not yet finished. Different vulnerabilities may exist and hence usage is production is discouraged. Use at your own risk.

### A Screenshot of the Blog Post.

![Screenshot](https://github.com/simarmannsingh/gatsby-netlifycms-starter-template/blob/master/src/img/gatsbyBasedBlog_blogPost.png)

## Features

- A simple landing page with a customized blog functionality built with Netlify CMS
- Editable Pages: Landing, About, Product, Blog-Collection and Contact page with Netlify Form support
- Create Blog posts from Netlify CMS
- Tags support: Separate page for posts under each tag
- Basic directory organization
- Uses Bulma for styling, but size is reduced by `purge-css-plugin`
- Blazing fast loading times thanks to pre-rendered HTML and automatic chunk loading of JS files
- Uses `gatsby-image` with Netlify-CMS preview support
- Separate components for everything
- Netlify deploy configuration
- Netlify function support, see `lambda` folder
- Perfect score on Lighthouse for SEO, Accessibility and Performance (wip:PWA)
- ..and more

## Prerequisites

- Node (The developers of this template recommend using v8.2.0 or higher, but I've tested it works with v6.14.4 as well if you are deploying on Netlify. A blog post is written here on how to deploy to Netlify)
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)
- [Netlify CLI](https://github.com/netlify/cli)

## Setting up the CMS

Follow the [Netlify CMS Quick Start Guide](https://www.netlifycms.org/docs/quick-start/#authentication) to set up authentication, and hosting.

## Debugging

Windows users might encounter `node-gyp` errors when trying to npm install.
To resolve, make sure that you have both Python 2.7 and the Visual C++ build environment installed.

```
npm config set python python2.7
npm install --global --production windows-build-tools
```

[Full details here](https://www.npmjs.com/package/node-gyp 'NPM node-gyp page')

MacOS users might also encounter some errors, for more info check [node-gyp](https://github.com/nodejs/node-gyp). We recommend using the latest stable node version.

## Purgecss

This plugin uses [gatsby-plugin-purgecss](https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/) and [bulma](https://bulma.io/). The bulma builds are usually ~170K but reduced 90% by purgecss.

## CONTRIBUTING

Contributions are always welcome, no matter how large or small. Before contributing,
please read the [code of conduct](CODE_OF_CONDUCT.md).
