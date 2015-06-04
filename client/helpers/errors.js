// Local (client-only) collection because
// errors do not need to be shared across the
// server with other users.
Errors = new Mongo.Collection(null);

throwError = function (message) {
  Errors.insert({message: message});
}
