// Local (client-only) collection because
// errors do not need to be shared across the
// server with other users.
Errors = new Mongo.Collection(null);

throwError = function (message) {
  Errors.insert({message: message});
}

Template.errors.helpers({
  errors: function () {
    return Errors.find();
  }
});

Template.errors.onRendered(function() {
  // 'this' refers to current template instance
  // 'this.data' lets us access the current object being rendered.
  // In this case, an error.
  var error = this.data;
  Meteor.setTimeout(function() {
    Errors.remove(error._id);
  }, 3000);
});
