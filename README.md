# Slick Template

This repository provides template for `Slick`-based project with improvements made by MigaMake Pte Ltd in order to make static website generation more convinient.

Template provides only Haskell source code, as a part of `Slick`-based generation you need to create template files yourself. Typically files live in `site` deirectory with strcture

```
├── 404.md
├── about.md
├── css
├── fonts
├── humans.txt
├── images
├── js
├── post-drafts
│   ├── post1.md
├── posts
│   ├── post1.md
│   ├── post2.md
├── privacy.md
├── robots.txt
├── team
│   ├── member1.md
│   ├── member2.md
│   └── member3.md
├── team-drafts
│   └── template.md
└── templates
    ├── about.html
    ├── _components
    │   ├── post-list-featured.html
    │   ├── post-list.html
    │   └── team-list.html
    ├── generic.html
    ├── index.html
    ├── news.html
    ├── post.html
    ├── _shared
    │   ├── footer.html
    │   ├── header.html
    │   └── head.html
    └── team-member.html
```
