new Vue({
  el: '#tasklist',
  data: {
    title: 'to do list',
    tasks: [
      { name: 'today: meeting' },
      { name: 'tomorrow : read a book' },
      { name: 'daily: learn frontend' },
    ],
  },
  methods: {
    newItem: function () {
      if (!this.tasks.name) {
        return;
      }

      this.tasks.push({
        name: this.tasks.name,
        del: '',
      });
      this.tasks.name = '';
    },
    delItem: function (task) {
      this.tasks.splice(this.tasks.indexOf(task), 1);
    },
  },
});
