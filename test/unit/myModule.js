/**
 * Created by vladgoran on 30/10/14.
 */


var assert = require("assert");
var myModule = require("../../myModule.js");

describe('myModule', function(){
	describe('myFunction', function(){
		it('should return true if even', function() {
			assert.equal(true, myModule.myFunction(10));
		})
	})
});