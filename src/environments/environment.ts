// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  host: 'localhost:3320',
  promoteToHomePage: 'promote',
  photoListEndpoint: "/rest/content/photo",
  photoDetailEndpoint: "/rest/content/photo-detail",
  newsListEndpoint:"/rest/content/news",
  newsDetailEndpoint:"/rest/content/news-detail",
  videoListEndpoint:"/rest/content/video",
  merchListEndpoint:"/rest/content/merch",
  taxonomyListEndpoint:"/rest/taxonomy",
  photoCategoryEndpoint:"/rest/content/photo/category",
  videoCategoryEndpoint:"/rest/content/video/category",
  newsCategoryEndpoint:"/rest/content/news/category",
  tourEndpoint:"http://api.bandsintown.com/artists/shinedown/events.json?api_version=2.0&extended=true&app_id=music",
  blockEndpoint:"/rest/block/all",
  albumListEndpoint:"/rest/content/albums",
  audioListEndpoint:"/rest/content/audio",
  audioAlbumListEndpoint:"/rest/content/tracks-album",
  albumDetailEndpoint:"/rest/content/album-detail",
  audioDetailEndpoint:"/rest/content/audio-detail",
  albumEmbedEndpoint: "/rest/content/album-embed",
  pageEndPoint : "/rest/page/all"
};
