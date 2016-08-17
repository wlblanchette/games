(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Tile = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _storyPoint = require("./../story-point");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tile = function () {

	// ** Tile position will be it's position within the map.
	// position is defined with (x,y) where x = 0 and y = 0, being generated
	// top left. 
	// x values increase left to right
	// y values increase top to bottom

	function Tile() {
		var position = arguments.length <= 0 || arguments[0] === undefined ? [0, 0] : arguments[0];
		var artFile = arguments.length <= 1 || arguments[1] === undefined ? "./../assets/art/defaultTile.jpg" : arguments[1];

		_classCallCheck(this, Tile);

		this.position = position;
		this.artFile = artFile;
		this.isBoundary = false;
		this.movementAllowed = true;
		this.hasStoryPoint = false;
	}

	_createClass(Tile, [{
		key: "addStoryPoint",
		value: function addStoryPoint(storypoint__name, storypoint__content) {
			this.storyPoint = new _storyPoint.StoryPoint(storypoint__name, storypoint__content);
			this.hasStoryPoint = true;
		}
	}, {
		key: "setBoundary",
		value: function setBoundary() {
			var bool = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

			this.isBoundary = bool;
		}
	}, {
		key: "changeArtFile",
		value: function changeArtFile(newArtFile) {
			this.artFile = newArtFile;
		}
	}, {
		key: "getPosition",
		value: function getPosition() {
			return this.position;
		}
	}]);

	return Tile;
}();

exports.Tile = Tile;

},{"./../story-point":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Story points get activated in game by player actions, providing narative elements.

var StoryPoint = function StoryPoint() {
	var name = arguments.length <= 0 || arguments[0] === undefined ? "" : arguments[0];
	var content = arguments.length <= 1 || arguments[1] === undefined ? "" : arguments[1];

	_classCallCheck(this, StoryPoint);

	this.name = name;
	this.content = content;
};

exports.StoryPoint = StoryPoint;

},{}]},{},[1]);
