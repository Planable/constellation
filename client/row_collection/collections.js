Template.Constellation_collection_count.helpers({
  collectionCount: function () {

    var collectionName = String(this);
    var collectionVar = Constellation.Collection(collectionName);

    var count = collectionVar && collectionVar.find(Constellation.searchSelector(collectionName)).count() || 0;

    return count;

  },
  currentPosition: function () {

    var targetCollection = String(this);
    var sessionKey = "Constellation_" + targetCollection;

    var current = Session.get(sessionKey);
    var count = current + 1;

    return count;

  }
});
