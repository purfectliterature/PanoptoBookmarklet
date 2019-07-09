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

    if (typeof link.download !== typeof undefined) {
        link.href = media;
        link.download = filename;
        link.title = "Download by BBBB";
        document.body.appendChild(link);
        link.dispatchEvent(new MouseEvent('click'));
    } else {
        window.open(media, '_blank');
    }
})();