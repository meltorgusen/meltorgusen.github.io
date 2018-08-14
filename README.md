# meltorgusen.com

[meltorgusen.com](meltorgusen.com) is the personal website of Mel Torgusen,
yoga teacher 🙏 and people person 👩‍💻

## git flow

__do not ever pull or push master__. 

1. `dev` is the working development branch. Do all work in `dev` (or in a
   feature branch, and merge it back into `dev`) and then run `npm
   run deploy`

2. `npm run deploy` will push a `dist` subtree to master.

3. push `dev` up to sync the development environment.

## running locally

It's a static site. `cd dist` and fire up your favorite static web server. Here
are a couple suggestions:

1. `python -m SimpleHTTPServer`

2. `http-server` (after `npm -i http-server -g`)
