new Vue({
  el: '#app',
  data: {
      valid: true,
    headers: [
      { text: 'First Name',align: 'left',value: 'firstname'},
      { text: 'Last Name', value: 'lastname' },
      { text: 'E-mail', value: 'email' },
      { text: 'Age', value: 'age' },
      { text: 'Interests', value: 'interests' },
    ],
    infos: [],
    dialog: false,
    dialogData: {
      firstname: '',
      lastname: '',
      email: '',
      age: '',
      interests: [],
    },
  },
  methods: {
    saveData() {
      if (this.validate()) {
        this.infos.push({
          firstname: this.dialogData.firstname,
          lastname: this.dialogData.lastname,
          email: this.dialogData.email,
          age: this.dialogData.age,
          interests: this.dialogData.interests.join(", "),
        });
        this.dialog = false;
        this.$refs.form.reset()
      } else {
        return false;
      }
    }, 
    validate() {
        const valid = this.$refs.form.validate();
        this.valid = valid;
        return valid;
      }, 
    save() {},
    cancel() {},
    open() {},
    close() {}
  }
})