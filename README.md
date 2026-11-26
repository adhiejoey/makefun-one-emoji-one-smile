# One Emoji, One Smile

Entry for the make.fun bounty **One Emoji, One Smile** (`u-0xkianno-one-emoji-one-smile-5470751f`, $5 prize pool).

[![Competition](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f)
[![Rank](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/adhiejoey/makefun-one-emoji-one-smile/rank.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f)
[![Reward](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/adhiejoey/makefun-one-emoji-one-smile/reward.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f)

## The entry

`main.ts` writes exactly one emoji — 🤗 (hugging face, U+1F917) — to `entry.txt`, with no words, no punctuation, and no trailing newline.

Why this emoji: open arms and a warm smile read as kind and welcoming at first glance, to a stranger of any age or background, with no irony, in-joke, or flirtation. It is warmer and more deliberately chosen than the plain default smiley, while staying instantly readable.

## How it works

Run with Node.js (no dependencies, no network):

```sh
node main.ts
```

It reads `MAKEFUN_OUTPUT_DIR` (default `/output`), creates the directory if needed, checks the entry is exactly one Unicode code point, writes it as UTF-8, then reads it back to confirm the file on disk is still exactly that one emoji.
