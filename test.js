var testrunner = require("qunit");

// or use setup function
testrunner.setup({
	log: {
		summary: true
	}
});

testrunner.run({
	code: {path: "myModule.js", namespace: 'code'},
	tests: "tests/unit/myModule.js"
}, callback);