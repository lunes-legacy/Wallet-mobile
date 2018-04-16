// do not import to export next.
// use export { default as ... }
import Base from './Base';
import LogoSmall from './LogoSmall';
import Tabs from './tabs/Tabs';
import TabLink from './tabs/TabLink';
import TabLinkContainer from './tabs/TabLinkContainer';
import TabContent from './tabs/TabContent';

export { Base, LogoSmall, Tabs, TabLink, TabLinkContainer, TabContent };

export { default as Logo } from './Logo';
export { default as Header } from './Header';
export { default as Swiper } from './swiper/Swiper';
export { default as LoginForm } from './forms/LoginForm';
export { default as Button } from './buttons/Button';
export { default as LunesGradientButton } from './buttons/LunesGradientButton';
export { default as LunesAlert } from './alerts/LunesAlert';
export {
  LunesIconError,
  LunesIconSuccess,
  LunesIconWarning,
} from './icons/LunesCustomIcon';
