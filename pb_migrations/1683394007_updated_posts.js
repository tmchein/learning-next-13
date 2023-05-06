migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fs9n91jh1tkbd2h")

  collection.name = "notes"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fs9n91jh1tkbd2h")

  collection.name = "posts"

  return dao.saveCollection(collection)
})
