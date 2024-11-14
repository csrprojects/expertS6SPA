export class router {
    
  routes = {};

  add (name,route) {
    this.routes[name] = route;
  }

  route(e) {
    e = e || window.event;
    e.preventDefault();
    const target = e.target.closest('a')
    
    document.querySelectorAll('a').forEach(link => link.classList.remove('active'));
    target.classList.add('active');
    
    window.history.pushState({}, '', target.href);
    this.handle();
      
  }

  handle (){
    const {pathname} = window.location;
    const route = this.routes[pathname] || this.routes[404];
    
    const routeName = route.split('/').pop().split('.').shift();
    document.documentElement.className = (routeName == 404 ? 'home' : routeName);

    fetch(route)
        .then(response => response.text())
        .then(html => 
            document.getElementById('app').innerHTML = html)
        .catch(error => console.error(error));
  }
}