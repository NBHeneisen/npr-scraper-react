// var Note = require("../models/Note");

// module.exports = {
//   // This method handles retrieving quotes from the db
//   index: function(req, res) {
//     var query;
//     if (req.query) {
//       query = req.query;
//     }
//     else {
//       query = req.params.id ? { _id: req.params.id } : {};
//     }
//     Note.find(query)
//       .then(function(doc) {
//         res.json(doc);
//       }).catch(function(err) {
//         res.json(err);
//       });
//   },
//   // This method handles creating new quotes
//   create: function(req, res) {
//     Note.create(req.body).then(function(doc) {
//       res.json(doc);
//     }).catch(function(err) {
//       res.json(err);
//     });
//   },
//   // This method handles updating quotes
//   update: function(req, res) {
//     Note.update({
//       _id: req.params.id
//     },
//       req.body
//     ).then(function(doc) {
//       res.json(doc);
//     }).catch(function(err) {
//       res.json(err);
//     });
//   },
//   // This method handles deleting quotes
//   destroy: function(req, res) {
//     Note.remove({
//       _id: req.params.id
//     }).then(function(doc) {
//       res.json(doc);
//     }).catch(function(err) {
//       res.json(err);
//     });
//   }
// };
