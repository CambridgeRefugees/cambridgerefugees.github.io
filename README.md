# 2019 CRRC website

Website redesign for 2019, built on the Jekyll static site generator.

## How to get a new post published

There are two options. First, write your post in plain text or MS Word, and send it to [the webmaster](mailto:johnpettigrew@cambridgerefugees.org) or one of the other admins for the site (probably, via the Trustees). Please also include any images you need, as well as information like the desired publication date, post title and what type of post it is. However, doing this means you can't easily see what the post will look like before it's posted live!

Second, you can clone or fork the repository and work on your own computer. If you set up the [Jekyll](http://jekyllrb.org) software as well, you'll be able to build and test your new pages before pushing changes to the public site.

If you want to make any changes more significant than adding news items or job posts, you will probably need to take the second option.

If you clone the repository (only available to the admins), *please* create a branch with your name as its name. Do all your work and testing in this branch. Do *not* merge any significant changes to master until another admin has checked your work.

For those who are not admins, you can fork the repository, which gives you your own copy to work on that is completely independent of the source. Once you've done your work, you'll need to issue a pull request to the main repository. One of the admins will then check your work and merge it into the main website if they're happy with it.

## How to add and edit pages

The most common task is likely to be adding a news item, event, job posting or campaign. These all live in the _posts directory and are distinguished from each other by having a different `category` value (see below for what this means!).

To create a new item, the safest route is to copy one of the existing files of the same type.

Your file must be named with the date first, followed by the post title, and must *not* use spaces in the filename. Please distinguish jobs and campaigns from news and events by putting "job" or "campaign" after the date, as you can see in the existing files (this will make it easier to remove them once they're no longer relevant). The date format used in the name is the ISO standard of YEAR-MONTH-DATE (e.g. `2019-04-03-job-more-text.md`).

The files are plain-text, but allow formatting, links and images to be added using the [Markdown](https://www.markdownguide.org/) language. In addition, each file has a header block that defines several important terms that are used to build the site. A standard header block might look like this.

```
---
layout: post
title:  "More Jekyll!"
date:   2019-03-02
category: newslist
type: news
---
```

The section starts and ends with a row of hyphens. Each line defines a separate term.

- `layout` defines the template that will be used to build the page. Don't change this unless you know what you're doing!
- `title` is the text that will appear in the window's title bar, and will also be used as a title for the post you're making.
- `date` is the date (obviously!), and is shown alongside each post.
- The `category` value is vital because it controls which section of the site your post will be included in, and can be any of:
  - `newslist` (for news and events)
  - `job`
  - `campaign`
- The type has two values, `news` or `event`, and is only used for posts in the `newslist` category. It controls the on-page styling used to distinguish between news and events on the listing page.

You can set an article up to be posted *in the future* by setting a future date. However, it will **not** be automatically posted when the dates comes, but only when the site is next rebuilt after that future date. If you're concerned, don't create the post until it's the right time!

If you need to change any of the other pages and can't work out the structure, check with John!
