# NUS Panopto Web Lecture Downloader Bookmarklet

NUS' web lecture (recording of physical lectures) are hosted on Panopto. This [bookmarklet](https://en.wikipedia.org/wiki/Bookmarklet) is made to help students download the lecture videos for offline viewing.
>This bookmarklet has been developed and tested on Google Chrome 75. It should also work with Safari. Dear Firefox users, due to Firefox's security reason, the video will not auto-download but it will be loaded onto the active tab. To continue downloading, right-click anywere and click on *Save video as* and type the video name. I will look onto this issue, but for now, either go the extra step or switch to Google Chrome (lol).
## How-to-use

Click and drag this link: <a href="javascript:(function(){const  js=document.createElement('script');js.id='PanoptoBookmarklet';js.src='https://cdn.jsdelivr.net/gh/purfectliterature/PanoptoBookmarklet@master/bookmarklet.min.js';document.body.appendChild(js);})();">Download Webcast</a> to your browser's bookmarks bar to install. **OR** if you want to manually add the bookmarklet, follow the instructions below.

Simply create a new bookmarks bar in your browser, set the *name* to whatever you want (e.g. "Download Webcast"), and set the *URL* as follows:

    javascript:(function(){const js=document.createElement('script');js.id='PanoptoBookmarklet';js.src='https://cdn.jsdelivr.net/gh/purfectliterature/PanoptoBookmarklet@master/bookmarklet.min.js';document.body.appendChild(js);})();
To download a webcast, click on this bookmarklet when you are on the video site.

---
For a more step-by-step tutorial, here is with Google Chrome:
1. Unhide your bookmarks bar, if you haven't already.
2. Right-click on your bookmarks bar and click *Add page...*.
3. Set *Name* as whatever you want (e.g. *Download Webcast*) and *URL* as the code above.
4. Click *Save*.
5. Whenever you are on a Panopto web lecture page, click on this bookmarklet to download.

When you clicked the bookmarklet at the right page, a small notification at the bottom of the page will  appear. Your browser will download the video shortly.

## Notes for tech savvies

You must have looked into the JavaScript code and seen how the bookmarklet work. Sure enough, it may seem like a simple script, I'll admit. However, there is a more *proper* way to download videos from Panopto (\**[IDM](https://www.internetdownloadmanager.com/) users cheering*\*).

Panopto uses [M3U playlist files](https://en.wikipedia.org/wiki/M3U) to fetch videos from their servers. That means, we cannot simply get an .mp4 file from their server, as the way they are delivering the video file is through *streaming*. Theoretically, one could *Inspect* the web lecture page, go to *Network* and find (an) entry(ies) of *index.m3u8* or *master.m3u8* files. If we get this(ese) files, we can let a streamer application stream and record through the whole stream and get the videos as a .ts file (or maybe .mp4 if you re-encode).

## Feedback?
If you have any technical or non-technical feedback, please do so by dropping me an email at [phillmont22900@gmail.com](mailto:phillmont22900@gmail.com). I'm also up for a collaboration, but bear with my fairly fresh Git knowledge (\**haha*\*).
