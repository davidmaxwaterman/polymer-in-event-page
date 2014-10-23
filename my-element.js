Polymer({
  ready: function () {
    this.$.ajax.go();
  },

  handleResponse: function (e) {
    console.log('received response:e:', e);
  }
}); // Polymer

