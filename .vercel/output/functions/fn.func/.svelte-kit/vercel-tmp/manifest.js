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
		client: {"start":"_app/immutable/entry/start.DDyraQia.js","app":"_app/immutable/entry/app.II7lyEH9.js","imports":["_app/immutable/entry/start.DDyraQia.js","_app/immutable/chunks/entry.CmckX2cD.js","_app/immutable/chunks/scheduler.W2pu3yam.js","_app/immutable/entry/app.II7lyEH9.js","_app/immutable/chunks/scheduler.W2pu3yam.js","_app/immutable/chunks/index.CvVRY0WJ.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
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
