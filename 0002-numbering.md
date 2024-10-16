---
category: general
state: approved
created: 2014-10-14
updated: 2014-10-14
---

# Numbering

The CIP system provides a mechanism to index and have a single source of truth for Clarity Improvement Proposals, as
well as iterate on them collaboratively and transparently. This document describes the guidance numbering system which
is based on [Google's API Numbering](https://google.aip.dev/2).

## Assigning AIP Numbers

The Clarity team is responsible for assigning a number to each CIP when it is accepted as a draft for review.
Importantly, *all* CIPs have numbers, not just approved ones. The [CIP Index](/) clearly clearly delineates which CIPs
are approved and binding and which are under discussion.

The team may decide to reserve a specific of numbers for grouping CIPs. Beyond this, numbers are assigned arbitrarily.
In general, the team will simply use the next available number.

## Number Blocks

Currently recognized blocks of guidance numbers are:

- *1-99*: reserved for meta-guidance (generally process-related)
- *100-199*: component design guidance

```ts
import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));

let foo = true;
let pattern = /asdf/;
```

## Changelog

- **2024-10-14**: initial version
