import DS from "ember-data";
const { Model, attr } = DS;

export default Model.extend({
  addedOn: attr("date", {
    defaultValue: function() {
      return new Date();
    }
  }),
  value: attr("string")
});

// use firebase adapter or firestore adapter?
