export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","font/cursor.svg","font/SuisseIntl-Medium.otf"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".otf":"font/otf"},
	_: {
		client: {"start":"_app/immutable/entry/start.h_KQTmAT.js","app":"_app/immutable/entry/app.uZBDtVJw.js","imports":["_app/immutable/entry/start.h_KQTmAT.js","_app/immutable/chunks/entry.DWx0pEQl.js","_app/immutable/chunks/scheduler.W2pu3yam.js","_app/immutable/entry/app.uZBDtVJw.js","_app/immutable/chunks/scheduler.W2pu3yam.js","_app/immutable/chunks/index.CvVRY0WJ.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
