(function() {
	window.logger = new window.Logger({
		logLevel: 'development'
	});

	window.GlobalState = new window.StateManager({
		logger: window.logger
	});

	const AppRoutes = [{
		path: '/home',
		component: httpVueLoader('/app/pages/home.vue')
	}, {
		path: '/about',
		component: httpVueLoader('/app/pages/about.vue')
	}, {
		path: '/404',
		component: {
			template: '<p>Page not found</p>'
		}
	}];

	const AppRouter = new VueRouter({
		routes: AppRoutes
	});

	const vueApp = new Vue({
		router: AppRouter,
		el: '#app',
		data() {
			window.GlobalState.setProp('message', 'message!');
			return {
				globalState: window.GlobalState.state
			};
		},
		methods: {
			updateMessage: window.Utils.debounce(event => {
				window.GlobalState.setProp('message', event.target.value);
			}, 200)
		}
	});
	window.GlobalState.setProp('vueApp', vueApp);
})();