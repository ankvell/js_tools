function AppView(id) {
    this.el = $('#' + id);
    this.el.html(new BookView().el);
    console.log('In debugger we trust. c !== c');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJBcHBWaWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIEFwcFZpZXcoaWQpIHtcbiAgICB0aGlzLmVsID0gJCgnIycgKyBpZCk7XG4gICAgdGhpcy5lbC5odG1sKG5ldyBCb29rVmlldygpLmVsKTtcbiAgICBjb25zb2xlLmxvZygnSW4gZGVidWdnZXIgd2UgdHJ1c3QuIGMgIT09IGMnKTtcbn0iXSwiZmlsZSI6IkFwcFZpZXcuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
function BookCollection() {
    this.data = [];
    users.forEach(function(user) {
        if (user.id) {
            this.data.push(new UserModel(user));
        } else {
            throw 'Error: user should have "id" property';
        }
    }, this);
    return this.data;
}

var users = [{
    "id": "aac51bbc-aeba-4fe2-b4da-85721b4adefa",
    "age": 33,
    "name": "Sexton Moses",
    "gender": "male"
}, {
    "id": "43df2f3c-7c13-4dab-95ac-38cbc526c7a8",
    "age": 31,
    "name": "Schmidt Waller",
    "gender": "male"
}, {
    "id": "d7897a36-462c-4645-9152-2fbab7a63cb7",
    "age": 24,
    "name": "Samantha Chase",
    "gender": "female"
}, {
    "id": "51a20263-e515-49c2-8555-19eb039501e0",
    "age": 36,
    "name": "Riggs Cervantes",
    "gender": "male"
}, {
    "id": "665d045c-3746-4100-b38b-52a5d4d40145",
    "age": 26,
    "name": "Moss Dunn",
    "gender": "male"
}, {
    "id": "9eed0e01-c9c1-4e0f-8d7b-59ae50bb2d58",
    "age": 25,
    "name": "Frances Bradshaw",
    "gender": "female"
}, {
    "id": "d7897a36-462c-4645-9152-2fbab7a63cb7",
    "age": 35,
    "name": "Taylor Ford",
    "gender": "female"
}];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJCb29rQ29sbGVjdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBCb29rQ29sbGVjdGlvbigpIHtcbiAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICB1c2Vycy5mb3JFYWNoKGZ1bmN0aW9uKHVzZXIpIHtcbiAgICAgICAgaWYgKHVzZXIuaWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5wdXNoKG5ldyBVc2VyTW9kZWwodXNlcikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgJ0Vycm9yOiB1c2VyIHNob3VsZCBoYXZlIFwiaWRcIiBwcm9wZXJ0eSc7XG4gICAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xufVxuXG52YXIgdXNlcnMgPSBbe1xuICAgIFwiaWRcIjogXCJhYWM1MWJiYy1hZWJhLTRmZTItYjRkYS04NTcyMWI0YWRlZmFcIixcbiAgICBcImFnZVwiOiAzMyxcbiAgICBcIm5hbWVcIjogXCJTZXh0b24gTW9zZXNcIixcbiAgICBcImdlbmRlclwiOiBcIm1hbGVcIlxufSwge1xuICAgIFwiaWRcIjogXCI0M2RmMmYzYy03YzEzLTRkYWItOTVhYy0zOGNiYzUyNmM3YThcIixcbiAgICBcImFnZVwiOiAzMSxcbiAgICBcIm5hbWVcIjogXCJTY2htaWR0IFdhbGxlclwiLFxuICAgIFwiZ2VuZGVyXCI6IFwibWFsZVwiXG59LCB7XG4gICAgXCJpZFwiOiBcImQ3ODk3YTM2LTQ2MmMtNDY0NS05MTUyLTJmYmFiN2E2M2NiN1wiLFxuICAgIFwiYWdlXCI6IDI0LFxuICAgIFwibmFtZVwiOiBcIlNhbWFudGhhIENoYXNlXCIsXG4gICAgXCJnZW5kZXJcIjogXCJmZW1hbGVcIlxufSwge1xuICAgIFwiaWRcIjogXCI1MWEyMDI2My1lNTE1LTQ5YzItODU1NS0xOWViMDM5NTAxZTBcIixcbiAgICBcImFnZVwiOiAzNixcbiAgICBcIm5hbWVcIjogXCJSaWdncyBDZXJ2YW50ZXNcIixcbiAgICBcImdlbmRlclwiOiBcIm1hbGVcIlxufSwge1xuICAgIFwiaWRcIjogXCI2NjVkMDQ1Yy0zNzQ2LTQxMDAtYjM4Yi01MmE1ZDRkNDAxNDVcIixcbiAgICBcImFnZVwiOiAyNixcbiAgICBcIm5hbWVcIjogXCJNb3NzIER1bm5cIixcbiAgICBcImdlbmRlclwiOiBcIm1hbGVcIlxufSwge1xuICAgIFwiaWRcIjogXCI5ZWVkMGUwMS1jOWMxLTRlMGYtOGQ3Yi01OWFlNTBiYjJkNThcIixcbiAgICBcImFnZVwiOiAyNSxcbiAgICBcIm5hbWVcIjogXCJGcmFuY2VzIEJyYWRzaGF3XCIsXG4gICAgXCJnZW5kZXJcIjogXCJmZW1hbGVcIlxufSwge1xuICAgIFwiaWRcIjogXCJkNzg5N2EzNi00NjJjLTQ2NDUtOTE1Mi0yZmJhYjdhNjNjYjdcIixcbiAgICBcImFnZVwiOiAzNSxcbiAgICBcIm5hbWVcIjogXCJUYXlsb3IgRm9yZFwiLFxuICAgIFwiZ2VuZGVyXCI6IFwiZmVtYWxlXCJcbn1dOyJdLCJmaWxlIjoiQm9va0NvbGxlY3Rpb24uanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
var BookView = (function() {
    var tmpl = _.template('<div class="address-book">' +
        '<h1><%= contacts.length %> Users</h1>' +
        '<ul><% _.each(contacts, function(contact) { %>' +
        '<li><%= contact.model.name %></li><% }); %>' +
        '</ul>');

    return function() {
        this.tmpl = tmpl;
        this.collection = BookCollection();
        this.el = $(this.render(this.collection));
    };
})();

BookView.prototype.render = function(contacts) {
    return this.tmpl({
        contacts: contacts
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJCb29rVmlldy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQm9va1ZpZXcgPSAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHRtcGwgPSBfLnRlbXBsYXRlKCc8ZGl2IGNsYXNzPVwiYWRkcmVzcy1ib29rXCI+JyArXG4gICAgICAgICc8aDE+PCU9IGNvbnRhY3RzLmxlbmd0aCAlPiBVc2VyczwvaDE+JyArXG4gICAgICAgICc8dWw+PCUgXy5lYWNoKGNvbnRhY3RzLCBmdW5jdGlvbihjb250YWN0KSB7ICU+JyArXG4gICAgICAgICc8bGk+PCU9IGNvbnRhY3QubW9kZWwubmFtZSAlPjwvbGk+PCUgfSk7ICU+JyArXG4gICAgICAgICc8L3VsPicpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnRtcGwgPSB0bXBsO1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb24gPSBCb29rQ29sbGVjdGlvbigpO1xuICAgICAgICB0aGlzLmVsID0gJCh0aGlzLnJlbmRlcih0aGlzLmNvbGxlY3Rpb24pKTtcbiAgICB9O1xufSkoKTtcblxuQm9va1ZpZXcucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKGNvbnRhY3RzKSB7XG4gICAgcmV0dXJuIHRoaXMudG1wbCh7XG4gICAgICAgIGNvbnRhY3RzOiBjb250YWN0c1xuICAgIH0pO1xufTsiXSwiZmlsZSI6IkJvb2tWaWV3LmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
function UserModel (data) {
  this.model = data;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJVc2VyTW9kZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gVXNlck1vZGVsIChkYXRhKSB7XG4gIHRoaXMubW9kZWwgPSBkYXRhO1xufVxuIl0sImZpbGUiOiJVc2VyTW9kZWwuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==