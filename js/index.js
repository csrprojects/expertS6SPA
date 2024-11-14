import { router } from './router.js';

const Router = new router(); 



Router.add('/', '/pages/home.html');
Router.add('/universo', '/pages/universo.html');
Router.add('/exploracao', '/pages/exploracao.html');
Router.add(404, '/pages/404.html');

Router.handle();
window.onpopstate = () => Router.handle();
window.route = (e) => Router.route(e);