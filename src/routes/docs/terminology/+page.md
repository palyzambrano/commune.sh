---
title: Terminology
---

For clarity on technical vs user-facing terms in Commune.

### Spaces

Every new community instance in Commune starts out as a new `space`, exactly equivalent to [Matrix Spaces](https://element.io/blog/spaces-the-next-frontier/). Unlike Matrix/Element however which allows for rooms (channels) to be created without a `space` container, Commune *requires* each new community to begin with a `space`containing at minimum one channel. We believe this is more in line with conventional group-messaging UX, such as Discord's 'servers' and Slack's 'workspaces'.

### Channels

`channels` in Commune are the technical equivalent of `[rooms](https://spec.matrix.org/v1.8/rooms/)` in Matrix.

We opted for the `channel` term because of its mainstream use in chat platforms like [Slack](https://slack.com/features/channels), [Discord](https://discord.com/developers/docs/resources/channel) and [Microsoft Teams](https://learn.microsoft.com/en-us/microsoftteams/teams-channels-overview).

Similar concepts:

- Fediverse: [Groups](https://codeberg.org/fediverse/fep/src/branch/main/fep/1b12/fep-1b12.md) 
Partial compatibility is planned, e.g. by enabling an Announcements category to be federated.

- Discourse: [Categories](https://meta.discourse.org/t/create-a-category-in-discourse/197224)
Effectively the same as channels, except Discourse treats topics-board channels and chat-room channels as two separate containers, whereas in Commune each channel contains and is capable of both.

### Boards and view-modes

`boards` are a novel concept in Commune compared to conventional group-messaging designs. Every channel in Commune can be viewed in two different modes:

- Chat-view
- Board-view

Chat-view works like any other group chat. Board-view on the other hand presents a threads-centric view of the channel, in the tabulated style of an "[internet forum or message board](https://en.wikipedia.org/wiki/Internet_forum)".

Channels intended strictly for asynchronous discourse in the form of threads can opt to disable the chat-view altogether and only allow thread posting.

### Threads

`threads` in Commune are the same as `[threads](https://spec.matrix.org/v1.8/client-server-api/#threading)` in Matrix. However, Commune makes `threads` web-readable and thus SEO-friendly.