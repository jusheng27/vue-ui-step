import withInstall from '../utils/withInstall';
import Container from './container.vue';
import Header from './header.vue';
import Footer from './footer.vue';
import Main from './main.vue';
import Aside from './aside.vue';

export const ElContainer = withInstall(Container);
export const ElHeader = withInstall(Header);
export const ElFooter = withInstall(Footer);
export const ElMain = withInstall(Main);
export const ElSide = withInstall(Aside);

export default ElContainer;
