var app = new Vue({
  el: '#app',
  data() {
    return {
      publicSpreadsheetUrl:
        'https://docs.google.com/spreadsheets/d/11IvwQf64LUUqnZSpfza-Rea66SIVsSbse6kKBeOPJXg/edit?usp=sharing',
      requests: null
    };
  },
  mounted() {
    var self = this;

    Tabletop.init({
      prettyColumnNames: false,
      key: this.publicSpreadsheetUrl,
      callback: function(data, tabletop) {
        self.requests = data;
      },
      simpleSheet: true
    });
  },
  methods: {}
});
