Template.errors.helpers({
  errors: function () {
    return Errors.find();
  }
});

Template.error.onRendered(function() {
  // 'this' refers to current template instance
  // 'this.data' lets us access the current object being rendered.
  // In this case, an error.
  var error = this.data;
  Meteor.setTimeout(function() {
    Errors.remove(error._id);
  }, 3000);
});
