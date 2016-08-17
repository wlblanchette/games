(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Enemy = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _item = require("./../item");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Enemy = function () {
	function Enemy(name, species) {
		var items = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];
		var position = arguments.length <= 3 || arguments[3] === undefined ? [0, 0] : arguments[3];

		_classCallCheck(this, Enemy);

		this.name = name;
		this.species = species;
		this.items = this.setItems(items);
		this.position = position;
		this.facing = 0;

		this.weapon = items.forEach(function (item) {
			if (item.type === "weapon") {
				return item;
			}
		});
	}

	//axis: 0 = down, 1 = left, 2 = right, 3 = up


	_createClass(Enemy, [{
		key: "move",
		value: function move() {
			var magnitude = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

			this.facing = Math.trunc(Math.random() * 1000) % 4;
			switch (this.facing) {
				case 0:
					this.position = [this.position[0], this.position[1] - magnitude];
					break;
				case 1:
					this.position = [this.position[0] - magnitude, this.position[1]];
					break;
				case 2:
					this.position = [this.position[0] + magnitude, this.position[1]];
					break;
				case 3:
					this.position = [this.position[0], this.position[1] + magnitude];
					break;
			}
		}
	}, {
		key: "attack",
		value: function attack() {
			return this.weapon.magnifier;
		}

		/*
   * internal functions
   */

	}, {
		key: "setItems",
		value: function setItems(items) {
			var c = [];

			items.forEach(function (item) {
				c.push(new _item.Item(item.name, item.type, item.magnifier));
			});
		}
	}]);

	return Enemy;
}();

exports.Enemy = Enemy;

},{"./../item":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Item = function Item(name, type, magnifier) {
	_classCallCheck(this, Item);

	this.name = name;
	this.magnifier = magnifier;

	// item types allowed
	if (type === "weapon" || type === "potion") {
		this.type = type;
	}
};

exports.Item = Item;

},{}]},{},[1]);
