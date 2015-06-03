Meteor.publish('posts', function() {
  return Posts.find();
});

Meteor.publish('comments', function(postId) {
  check(postId, String);
  return Comments.find({postId: postID});
});

Meteor.publish('notifications', function() {
  return Notifications.find();
});
