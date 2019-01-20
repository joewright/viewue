(function() {
	class StateManager {
		constructor(options) {
			this.logger = options.logger;
			this.state = {};
		}
		setProp(property, value) {
			this.logger.debug(`Setting ${property} to ${value}`);
			this.state[property] = value;
		}
		getProp(property) {
			return this.state[property];
		}
		clearProp(property, value) {
			this.logger.debug(`Clearing ${property} to ${value}`);
			delete this.state[property];
		}
	}
	window.StateManager = StateManager;
})();