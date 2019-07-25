import DS from "ember-data";
const { Model, attr } = DS;

export default Model.extend({
  contentLink: attr("string"),
  createdOn: attr("date", {
    defaultValue() {
      return new Date();
    }
  }),
  description: attr("string"),
  identities: attr("hasMany"),
  location: attr("string"),
  name: attr("string"),
  title: attr("string")
});
