(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Player = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Player orientation:
//
// var Down	 	= 0;
// var Left	 	= 1;
// var Up	 	= 2;
// var Right	= 3;

var _item = require("./item");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {
	function Player(x, y) {
		_classCallCheck(this, Player);

		this.name = "Hanna";
		this.health = 100;
		this.items = [];
		this.position = [x, y];
		this.facing = 0;
	}

	_createClass(Player, [{
		key: "putItems",
		value: function putItems(newItems) {
			newItems.forEach(function (item) {
				this.items.push(new _item.Item(item.name, item.type, item.magnifier));
			});
		}
	}, {
		key: "takeDamage",
		value: function takeDamage(damage) {
			this.health = this.health - Math.trunc(damage);
		}
	}, {
		key: "heal",
		value: function heal(addHealth) {
			this.health = this.health + Math.trunc(addHealth);
		}
	}, {
		key: "useItem",
		value: function useItem(item) {
			this.items.forEach(function (i) {
				if (i.name === item) {
					switch (item.type) {
						case "weapon":
							return item.magnifier;
						case "potion":
							this.heal(item.magnifier);
							break;
					}
				}
			});
		}
	}, {
		key: "move",
		value: function move(axis, magnitude) {
			if (this.facing === axis) {
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
			} else {
				this.facing = axis;
			}
		}
	}]);

	return Player;
}();

exports.Player = Player;

},{"./item":1}]},{},[2]);
