"use strict";

var React       = require('react');
var RouterMixin = require('./RouterMixin');

/**
 * Create a new router class
 *
 * @param {String} name
 * @param {ReactComponent} component
 */
function createRouter(name, component) {

  return React.createClass({

    mixins: [RouterMixin],

    displayName: name,

    getRoutes: function() {
      return this.props.children;
    },

    getDefaultProps: function() {
      return {
        component: component
      }
    },

    render: function() {
      var handler = this.state.match.getHandler();
      return this.transferPropsTo(this.props.component(null, handler));
    }
  });
}

module.exports = {
  createRouter: createRouter,
  Locations: createRouter('Locations', React.DOM.div),
  Pages: createRouter('Pages', React.DOM.body),
}