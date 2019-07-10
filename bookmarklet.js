// Copyright (c) 2019 Phillmont Muktar. All rights reserved.

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

(function() {
    const media = document.head.querySelector('[name="twitter:player:stream"]').content;
    const filename = document.title;
    const link = document.createElement("a");

    // For browsers that support HTML5 download
    if (typeof link.download !== typeof undefined) {
        link.href = media;
        link.download = filename;
        document.body.appendChild(link);
        link.dispatchEvent(new MouseEvent('click'));
        document.body.removeChild(link);
    } else {
        // If not, too bad :(
        window.open(media, '_self');
    }

    let toast = createToast(filename);

    // After 3s, remove the toast
    setTimeout(function () {
        document.body.removeChild(toast);
    }, 3000);

    // Remove the added launch script
    document.body.removeChild(document.getElementById("PanoptoBookmarklet"));
})();

function createToast(text) {
    const toast = document.createElement("div");
    toast.innerHTML = `<b>${text}</b> is now downloading`;
    toast.style.minWidth = "250px";
    toast.style.marginLeft = "-125px";
    toast.style.backgroundColor = "#2c3e50";
    toast.style.color = "white";
    toast.style.textAlign = "center";
    toast.style.borderRadius = "7px";
    toast.style.padding = "16px";
    toast.style.fontSize = "14px";
    toast.style.position = "fixed";
    toast.style.zIndex = "1";
    toast.style.left = "50%";
    toast.style.bottom = "30px";
    toast.style.boxShadow = "0px 25px 40px -10px rgba(0,0,0,0.8)";
    toast.style.webkitBoxShadow = "0px 25px 40px -10px rgba(0,0,0,0.8)";
    document.body.appendChild(toast);
    return toast;
}