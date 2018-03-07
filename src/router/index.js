import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

// We are also using Webpack code splitting here so that each route's associated
// component code is loaded on-demand only when the route is visited.
// When do you use on-demand load? When the view is not one of the important one. When a route is important? You decide
import Home from "views/Home"
import Showcase from "views/Showcase" // include in the main bundle
import img from "views/img"
import vedio from "views/vedio"
import pdf from "views/pdf"

const NotFound = () => System.import("views/NotFound") // load dynamically when needed

let routes = [
	{ path: "/", name:"/",component: Home },
{ path: "/showcase:name", name: "showcase", component: Showcase },
{ path: "/img:name", name: "img", component: img },
{ path: "/vedio:name", name: "vedio", component: vedio },
{ path: "/pdf:name", name: "pdf", component: pdf }
]

if (process.env.NODE_ENV !== "production") {
	const Showcase = () => System.import("views/Showcase")
	const ShowcaseFetchError = () => System.import("views/ShowcaseFetchError")

	//routes.push({ path: "/showcase",name:"showcase",component: Showcase })
	routes.push({ path: "/showcase/fetch-error", component: ShowcaseFetchError })
}

// push as last element because the wildcard match will catch all the unknown urls
routes.push({ path: "*", component: NotFound })

export function createRouter() {
	return new Router({
		mode: "history",
	//scrollBehavior: () => ({ y: 0 }),
		routes,
		history: true,
		root:  '/'
	})
}
