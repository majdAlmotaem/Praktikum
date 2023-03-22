new Vue({
    el: '#app',
    data: {
      expanded: [],
      valid: true,
      dialog: false,
      deleteDialog: false,
      headers: [
        { text: '', align:'start', sortable: false },
        { text: 'First Name',value: 'firstname' },
        { text: 'Last Name', value: 'lastname' },
        { text: 'E-mail', value: 'email' },
        { text: 'Age', value: 'age' },
      ],
      infos: [],
      editedIndex: -1,
      editedItem: {
        firstname: '',
        lastname: '',
        email: '',
        age: '',
      },
      defaultItem: {
        firstname: '',
        lastname: '',
        email: '',
        age: '',
      },
      dialogRef: {
        open: false,
        title: "",
        text: "",
        onConfirm: () => {},
      },
      /* Footer Icons */
      icons: [
        'mdi-home',
        'mdi-email',
        'mdi-facebook',
        'mdi-github',
      ],
      item: null,
    },
    computed: {
      formTitle() {
        return this.editedIndex === -1 ? 'New User' : 'Edit User'
      },
    },
      watch: {
        dialog(val) {
            val || this.dialog
        },
        dialogDelete (val) {
          val || this.closeDelete()
        },
    },
    created () {
      this.initialize()
    },

    methods: {
      toggleExpanded(item) {
        if (this.expanded.includes(item)) {
          const index = this.expanded.indexOf(item);
          this.expanded.splice(index, 1);
        } else {
          this.expanded.push(item);
        }
      },      
      /* initialize infos */
      initialize() {
        this.infos = [ 
          {
            firstname : 'Majd',
            lastname : 'Almotaem',
            email: 'majdalmotaem1998@gmail.com',
            age: 25,
          },
          {
            firstname: 'Max',
            lastname: 'Muster',
            email: 'maxmuster@gmail.com',
            age: 'xx',
          },
          {
            firstname: 'Alex',
            lastname: 'Mix',
            email: 'alexmix@gmail.com',
            age: 55,
          },
        ]
        },
        /* Save Button */
        saveData() {
          this.$refs.form.validate();
          if (!this.valid) return;
          if (this.editedIndex > -1) {
            Object.assign(this.infos[this.editedIndex], this.editedItem)
          } else {
            this.infos.push(this.editedItem)
          }
          this.$refs.form.resetValidation()
          this.close()
        },  
        /* Edit Icon */
        editItem(item) {
          this.editedIndex = this.infos.indexOf(item)
          this.editedItem = item;
          this.dialog = true;
        },
        /* Delete Icon */
        deleteItem(item) {
          const index = this.infos.indexOf(item);
          this.dialogRef = {
            title: `Delete ${item.firstname} ${item.lastname}`,
            text: `Are you sure you want to delete ${item.firstname} ${item.lastname}?`,
            open: true,
            onConfirm: () => {
              this.infos.splice(index, 1);
              this.dialogRef.open = false;
            },
          };
        },
        /* Close Button */
        close () {
          this.dialog = false
          this.$nextTick(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
          })
        },
      },
});
  