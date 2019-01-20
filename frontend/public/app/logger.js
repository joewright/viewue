(function() {
	/* globals console */
	const levels = {
		'trace': 0,
		'development': 1,
		'warning': 2
	};
	class Logger {
		constructor(options) {
			this.logLevel = levels[options.logLevel] || 2;
			this.name = options.name || '';
		}
		debug(message) {
			if (this.logLevel < 2) {
				console.log(`${this.name} ${message}`);
			}
		}
		info(message) {
			if (this.logLevel > 1) {
				console.log(`${this.name} ${message}`);
			}
		}
		error(message, error) {
			console.error(`${this.name} ${message}`);
			console.error(error);
		}
	}
	window.Logger = Logger;
})();