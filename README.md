# Slick Template

This repository provides template for `Slick`-based project with improvements made by MigaMake Pte Ltd in order to make static website generation more convinient.

- [GitLab CI](#gitlab-ci)
- [Install](#install)
- [Configure](#configure)
  * [Generator](#generator)
  * [HTML/CSS/JS/](#html-css-js-)
- [Running](#running)
- [Resources](#resources)


## GitLab CI

This project's static Pages are built by [GitLab CI][ci], following the steps
defined in [`.gitlab-ci.yml`](.gitlab-ci.yml):

```
image: haskell:7.10.3

pages:
  cache:
    paths:
      - _cache
      - .stack
  before_script:
    - export STACK_ROOT=`pwd`/.stack
    - stack install --only-dependencies
    - stack build
  script:
    -  stack exec -- site
  artifacts:
    paths:
      - public
  only:
    - master
```

Initial build may take some time (around 20 minutes), following builds will be significantly faster.


## Install

1. Install stack
2. Generate template with all relevant functionality by using following command
```
$ stack new <name of the project> https://gitlab.com/migamake/slick-template/raw/master/simple-slick.hsfiles
```

Template provides only Haskell source code, as a part of `Slick`-based generation you need to create template files yourself based on your design of hte site.

If you don't have global config for stack defined in `~/.stack/config.yaml`, you can create it before pulling template with following structure
```yaml
templates:
  params:
    author-email: email@site.com
    author-name: Name Surname
    category: Web
    copyright: 'Copyright: (c) 2019 Name Surname'
    github-username: sigrlami
```

if you prefer not to create you'll need to provide parameters for the repo by hand, like this

```bash
$ stack new <name of the project> https://gitlab.com/migamake/slick-template/raw/master/simple-slick.hsfiles -p "author-email:value" -p "author-name:value" -p "category:value" -p "copyright:value" -p "github-username:value"
```
which is not very confinient

## Configure

Configuring project for your needs done in 2 ways, by modification of Haskell source code and by adding specific site files like html-templates, css, js required for the project.

### Generator

Slick package resuses [Shake](https://shakebuild.com/) build system. In order to create your own rules, add your special rules to the function `buildRules` in `app/Main.hs` and conversion logic at `app/Builder.hs`

### HTML/CSS/JS/

Typically files live in `site` directory where everything outside `templates` folder will be considered either content or static file. Everything with `.md` extension wil be converted to `.html` if not specified differently. Here is example structure  mapped to the current generator configuration. You can download example content directory from source repository amd put along with your template.

```
├── 404.md
├── about.md
├── css                              -- CSS files
├── fonts
├── humans.txt
├── images                           -- Image files
├── js
├── post-drafts
│   ├── post1.md
├── posts                            -- add content files for posts
│   ├── post1.md
│   ├── post2.md
├── privacy.md
├── robots.txt
├── team                             -- content files about team members
│   ├── member1.md
│   ├── member2.md
│   └── member3.md
├── team-drafts                      -- content files about team members in draft
│   └── template.md
└── templates                        -- html templates for site pages
    ├── about.html
    ├── _components
    │   ├── post-list-featured.html
    │   ├── post-list.html
    │   └── team-list.html
    ├── generic.html
    ├── index.html
    ├── news.html
    ├── post.html
    ├── _shared                      -- templates that are reused in other templates
    │   ├── footer.html
    │   ├── header.html
    │   └── head.html
    └── team-member.html
```

### 3rd party tools

#### Tidy

#### Linkchecker

## Running

To run site generation you need to execute following commands

```bash
$ stack build
```
which will build Haskell executable, then

```bash
$ stack exec -- site
```
which will generate output in `public` folder.
Additionally you can use `--preview` and `--dev` options like this
```bash
$ stack exec -- site --preview --dev
```

- `site` name of executable, replace to yours
- (`--preview`) - Preview  mode will spin out small server and host site locally on port `3030`
- (`--dev`)     - Development mode will include drafts in the output for the site which is useful during content writing

## Resources

 - [slick-extra](https://gitlab.com/migamake/slick-extra) - package useful additional functionality for Slick
 - [slick-live](https://gitlab.com/migamake/slick-live) - package with live-reloading functionality
 - [shake-watch](https://gitlab.com/migamake/shake-watch) - package that provides file watching functionality for Shake
 - [MigaMake Pte Ltd](https://www.migamake.com/) - template maintainer and active Slick contributor
