Polymer({
  ready: function () {
    this.$.ajax.params='{"alt","json", "q":"chrome"}'; // moved from my-element.html - couldn't see how to escape the quotes
    this.$.ajax.go();
  },

  handleResponse: function (e) {
    console.log('received response:e:', e);
  }
}); // Polymer

