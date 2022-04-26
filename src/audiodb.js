const https = require("https");

const http = async (endpoint) => {
  return new Promise((resolve, reject) => {
    const req = https.request(
      `https://theaudiodb.com/api/v1/json/2/${endpoint}`,
      {
        method: "GET",
      },
      (res) => {
        const body = [];
        res.on("data", (chunk) => body.push(chunk));
        res.on("end", () => {
          const resString = Buffer.concat(body).toString();
          resolve(resString);
        });
      }
    );

    req.on("error", (err) => {
      reject(null);
    });

    req.on("timeout", () => {
      req.destroy();
      reject(null);
    });
    req.end();
  });
};

/**
 *
 * @param  {string} s
 * @return Return Artist details from artist name
 */
async function searchArtist(s) {
  try {
    let response = await http(`search.php?s=${encodeURI(s)}`);
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.artists != null &&
        typeof data.artists !== "undefined" &&
        data.artists != ""
      ) {
        return data.artists[0];
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch {
    return null;
  }
}

/**
 *
 * @param  {string} s
 * @return Return Discography for an Artist with Album names and year only
 */
async function discography(s) {
  try {
    let response = await http(`discography.php?s=${encodeURI(s)}`);
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.album != null &&
        typeof data.album !== "undefined" &&
        data.album != ""
      ) {
        return data.album;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch {
    return null;
  }
}

/**
 *
 * @param  {number} i
 * @return Return individual Artist details using known Artist ID
 */
async function searchArtistById(i) {
  try {
    let response = await http(`artist.php?i=${i}`);
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.artists != null &&
        typeof data.artists !== "undefined" &&
        data.artists != ""
      ) {
        return data.artists[0];
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch {
    return null;
  }
}

/**
 *
 * @param  {number} i
 * @return Return individual Album info using known Album ID
 */
async function searchAlbumById(i) {
  try {
    let response = await http(`album.php?m=${i}`);
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.album != null &&
        typeof data.album !== "undefined" &&
        data.album != ""
      ) {
        return data.album[0];
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch {
    return null;
  }
}

/**
 *
 * @param  {number} i
 * @return Return All Albums for an Artist using known Artist ID
 */
async function searchAlbumsByArtistId(i) {
  try {
    let response = await http(`album.php?i=${i}`);
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.album != null &&
        typeof data.album !== "undefined" &&
        data.album != ""
      ) {
        return data.album;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch {
    return null;
  }
}

/**
 *
 * @param  {number} i
 * @return Return All Tracks for Album from known Album ID
 */
async function searchTracksByAlbumId(i) {
  try {
    let response = await http(`track.php?m=${i}`);
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.track != null &&
        typeof data.track !== "undefined" &&
        data.track != ""
      ) {
        return data.track;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch {
    return null;
  }
}

/**
 *
 * @param  {number} i
 * @return Return individual track info using a known Track ID
 */
async function searchTrackById(i) {
  try {
    let response = await http(`track.php?h=${i}`);
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.track != null &&
        typeof data.track !== "undefined" &&
        data.track != ""
      ) {
        return data.track[0];
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch {
    return null;
  }
}

/**
 *
 * @param  {number} i
 * @return Return all the Music videos for a known Artist ID
 */
async function searchMusicVideosByArtistId(i) {
  try {
    let response = await http(`mvid.php?i=${i}`);
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.mvids != null &&
        typeof data.mvids !== "undefined" &&
        data.mvids != ""
      ) {
        return data.mvids;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch {
    return null;
  }
}

module.exports = {
    searchArtist,
    searchArtistById,
    discography,
    searchAlbumById,
    searchAlbumsByArtistId,
    searchTrackById,
    searchTracksByAlbumId,
    searchMusicVideosByArtistId
};