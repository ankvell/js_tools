function AppView(id) {
    this.el = $('#' + id);
    this.el.html(new BookView().el);
    console.log('In debugger we trust. c !== c');
}
function BookCollection() {
    this.data = [];
    users.forEach(function(user) {
        if (user.id) {
            this.data.push(new UserModel(user));
        } else {
            throw 'Error: user should have "id" property'
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
}]
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
    }
})();

BookView.prototype.render = function(contacts) {
    return this.tmpl({
        contacts: contacts
    });
}
function UserModel (data) {
  this.model = data;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFwcFZpZXcuanMiLCJCb29rQ29sbGVjdGlvbi5qcyIsIkJvb2tWaWV3LmpzIiwiVXNlck1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQkE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gQXBwVmlldyhpZCkge1xuICAgIHRoaXMuZWwgPSAkKCcjJyArIGlkKTtcbiAgICB0aGlzLmVsLmh0bWwobmV3IEJvb2tWaWV3KCkuZWwpO1xuICAgIGNvbnNvbGUubG9nKCdJbiBkZWJ1Z2dlciB3ZSB0cnVzdC4gYyAhPT0gYycpO1xufSIsImZ1bmN0aW9uIEJvb2tDb2xsZWN0aW9uKCkge1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgIHVzZXJzLmZvckVhY2goZnVuY3Rpb24odXNlcikge1xuICAgICAgICBpZiAodXNlci5pZCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhLnB1c2gobmV3IFVzZXJNb2RlbCh1c2VyKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyAnRXJyb3I6IHVzZXIgc2hvdWxkIGhhdmUgXCJpZFwiIHByb3BlcnR5J1xuICAgICAgICB9XG4gICAgfSwgdGhpcyk7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbn1cblxudmFyIHVzZXJzID0gW3tcbiAgICBcImlkXCI6IFwiYWFjNTFiYmMtYWViYS00ZmUyLWI0ZGEtODU3MjFiNGFkZWZhXCIsXG4gICAgXCJhZ2VcIjogMzMsXG4gICAgXCJuYW1lXCI6IFwiU2V4dG9uIE1vc2VzXCIsXG4gICAgXCJnZW5kZXJcIjogXCJtYWxlXCJcbn0sIHtcbiAgICBcImlkXCI6IFwiNDNkZjJmM2MtN2MxMy00ZGFiLTk1YWMtMzhjYmM1MjZjN2E4XCIsXG4gICAgXCJhZ2VcIjogMzEsXG4gICAgXCJuYW1lXCI6IFwiU2NobWlkdCBXYWxsZXJcIixcbiAgICBcImdlbmRlclwiOiBcIm1hbGVcIlxufSwge1xuICAgIFwiaWRcIjogXCJkNzg5N2EzNi00NjJjLTQ2NDUtOTE1Mi0yZmJhYjdhNjNjYjdcIixcbiAgICBcImFnZVwiOiAyNCxcbiAgICBcIm5hbWVcIjogXCJTYW1hbnRoYSBDaGFzZVwiLFxuICAgIFwiZ2VuZGVyXCI6IFwiZmVtYWxlXCJcbn0sIHtcbiAgICBcImlkXCI6IFwiNTFhMjAyNjMtZTUxNS00OWMyLTg1NTUtMTllYjAzOTUwMWUwXCIsXG4gICAgXCJhZ2VcIjogMzYsXG4gICAgXCJuYW1lXCI6IFwiUmlnZ3MgQ2VydmFudGVzXCIsXG4gICAgXCJnZW5kZXJcIjogXCJtYWxlXCJcbn0sIHtcbiAgICBcImlkXCI6IFwiNjY1ZDA0NWMtMzc0Ni00MTAwLWIzOGItNTJhNWQ0ZDQwMTQ1XCIsXG4gICAgXCJhZ2VcIjogMjYsXG4gICAgXCJuYW1lXCI6IFwiTW9zcyBEdW5uXCIsXG4gICAgXCJnZW5kZXJcIjogXCJtYWxlXCJcbn0sIHtcbiAgICBcImlkXCI6IFwiOWVlZDBlMDEtYzljMS00ZTBmLThkN2ItNTlhZTUwYmIyZDU4XCIsXG4gICAgXCJhZ2VcIjogMjUsXG4gICAgXCJuYW1lXCI6IFwiRnJhbmNlcyBCcmFkc2hhd1wiLFxuICAgIFwiZ2VuZGVyXCI6IFwiZmVtYWxlXCJcbn0sIHtcbiAgICBcImlkXCI6IFwiZDc4OTdhMzYtNDYyYy00NjQ1LTkxNTItMmZiYWI3YTYzY2I3XCIsXG4gICAgXCJhZ2VcIjogMzUsXG4gICAgXCJuYW1lXCI6IFwiVGF5bG9yIEZvcmRcIixcbiAgICBcImdlbmRlclwiOiBcImZlbWFsZVwiXG59XSIsInZhciBCb29rVmlldyA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgdG1wbCA9IF8udGVtcGxhdGUoJzxkaXYgY2xhc3M9XCJhZGRyZXNzLWJvb2tcIj4nICtcbiAgICAgICAgJzxoMT48JT0gY29udGFjdHMubGVuZ3RoICU+IFVzZXJzPC9oMT4nICtcbiAgICAgICAgJzx1bD48JSBfLmVhY2goY29udGFjdHMsIGZ1bmN0aW9uKGNvbnRhY3QpIHsgJT4nICtcbiAgICAgICAgJzxsaT48JT0gY29udGFjdC5tb2RlbC5uYW1lICU+PC9saT48JSB9KTsgJT4nICtcbiAgICAgICAgJzwvdWw+Jyk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMudG1wbCA9IHRtcGw7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbiA9IEJvb2tDb2xsZWN0aW9uKCk7XG4gICAgICAgIHRoaXMuZWwgPSAkKHRoaXMucmVuZGVyKHRoaXMuY29sbGVjdGlvbikpO1xuICAgIH1cbn0pKCk7XG5cbkJvb2tWaWV3LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbihjb250YWN0cykge1xuICAgIHJldHVybiB0aGlzLnRtcGwoe1xuICAgICAgICBjb250YWN0czogY29udGFjdHNcbiAgICB9KTtcbn0iLCJmdW5jdGlvbiBVc2VyTW9kZWwgKGRhdGEpIHtcbiAgdGhpcy5tb2RlbCA9IGRhdGE7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=