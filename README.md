# TheAudioDB

[![](https://img.shields.io/github/v/tag/thechampagne/audiodb-js?label=version)](https://github.com/thechampagne/audiodb-js/releases/latest) [![](https://img.shields.io/github/license/thechampagne/audiodb-js)](https://github.com/thechampagne/audiodb-js/blob/main/LICENSE)

TheAudioDB API client for **JavaScript**.

### Download
[npm](https://npmjs.com/package/audiodb/)

```
npm install audiodb
```

### Example

```js
const { searchAlbumsByArtistId } = require("audiodb");

searchAlbumsByArtistId(111674).then(albums => {
    albums.forEach(album => {
        console.log(album.strAlbum);
    });
});
```

### License

TheAudioDB is released under the [Apache License 2.0](https://github.com/thechampagne/audiodb-js/blob/main/LICENSE).

```
 Copyright 2022 XXIV

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
```