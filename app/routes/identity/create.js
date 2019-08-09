import Route from "@ember/routing/route";

export default Route.extend({
  actions: {
    create(newIdentity) {
      console.log('value variable : ', newIdentity)
      console.log('value variable : ', this)

      const newRecord = this.store.createRecord("identity", {
        identity: {
          value: this.get('newIdentity'),
          addedOn: () => new Date()
        }
      });

      console.log(newRecord);
    }
  }
});
