# building-u-contribute

Front-end component templates built for [Building U](https://building-u.com), December 2022 –
February 2023.

## What this is

A standalone "business island" component — a card/panel layout for presenting partner
businesses — delivered as a self-contained template Building U could drop into their site.

It ships in **desktop and mobile variants**, with a modal, button interaction states, and its
own asset set. The `desktop_version/` and `mobile_version/` directories hold the two layouts;
`business-island-template.{html,css,js}` is the extracted component.

Work went through an iterative review cycle — the commit history tracks revisions coming back
from meetings ("Changes in meeting added, Header list font size fixed for mobile") through to
each delivered version.

## Stack

Hand-written HTML, CSS, and JavaScript on Bootstrap, with jQuery. No build step.

Roughly 530 lines of hand-written template code across the component files; 65 files
including assets.

## Timeline

16 commits, 2022-12-16 → 2023-02-08. All mine.

Commits are authored as `ImAKidDontAsk <owennfts@gmail.com>`, which was my git identity at
the time.

## Status

Delivered and archived. Kept public as a record of the work.
