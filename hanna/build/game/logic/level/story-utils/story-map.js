(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Story_Map = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _storyPoint = require('./story-point');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Story_Map = function () {
	function Story_Map(map) {
		_classCallCheck(this, Story_Map);

		this.level_number = map.level_number;
		this.width = map.width;
		this.height = map.height;
		this.story_points = [];
	}

	_createClass(Story_Map, [{
		key: 'createStoryPoint',
		value: function createStoryPoint(position) {
			var x_coord = position[0];
			var y_coord = position[1];

			story_points.push(new _storyPoint.Story_Point());
		}
	}]);

	return Story_Map;
}();

exports.Story_Map = Story_Map;

},{"./story-point":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Story points get activated in game by player actions, providing narative elements.

var StoryPoint = function StoryPoint() {
	var position = arguments.length <= 0 || arguments[0] === undefined ? [0, 0] : arguments[0];
	var name = arguments[1];
	var content = arguments[2];

	_classCallCheck(this, StoryPoint);

	this.position = position;
	this.name = name || "new StoryPoint";
	this.content = content || ["Story Content, pane 1", "Story Content, pane 2"];
};

exports.StoryPoint = StoryPoint;

},{}]},{},[1]);
