import React from 'react';

const Breadcrumbs = React.lazy(() => import('./views/Base/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/Base/Cards'));
const Carousels = React.lazy(() => import('./views/Base/Carousels'));
const Collapses = React.lazy(() => import('./views/Base/Collapses'));
const Dropdowns = React.lazy(() => import('./views/Base/Dropdowns'));
const Forms = React.lazy(() => import('./views/Base/Forms'));
const Jumbotrons = React.lazy(() => import('./views/Base/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/Base/ListGroups'));
const Navbars = React.lazy(() => import('./views/Base/Navbars'));
const Navs = React.lazy(() => import('./views/Base/Navs'));
const Paginations = React.lazy(() => import('./views/Base/Paginations'));
const Popovers = React.lazy(() => import('./views/Base/Popovers'));
const ProgressBar = React.lazy(() => import('./views/Base/ProgressBar'));
const Switches = React.lazy(() => import('./views/Base/Switches'));
const Tables = React.lazy(() => import('./views/Base/Tables'));
const Tabs = React.lazy(() => import('./views/Base/Tabs'));
const Tooltips = React.lazy(() => import('./views/Base/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/Buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/Buttons/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/Buttons/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/Buttons/Buttons'));
const Charts = React.lazy(() => import('./views/Charts'));
const CompanyList = React.lazy(() => import('./views/Company/Company'));
const DisplayEmployee = React.lazy(() => import('./views/Display/DisplayEmployee'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/Icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/Icons/Flags'));
const FontAwesome = React.lazy(() => import('./views/Icons/FontAwesome'));
const SimpleLineIcons = React.lazy(() => import('./views/Icons/SimpleLineIcons'));
const Alerts = React.lazy(() => import('./views/Notifications/Alerts'));
const Badges = React.lazy(() => import('./views/Notifications/Badges'));
const Modals = React.lazy(() => import('./views/Notifications/Modals'));
const Colors = React.lazy(() => import('./views/Theme/Colors'));
const Typography = React.lazy(() => import('./views/Theme/Typography'));
const Widgets = React.lazy(() => import('./views/Widgets/Widgets'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/dashboard', exact: true, name: 'Home' },
  { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/dashboard/theme', exact: true, name: 'Theme', component: Colors },
  { path: '/dashboard/theme/colors', name: 'Colors', component: Colors },
  { path: '/dashboard/theme/typography', name: 'Typography', component: Typography },
  { path: '/dashboard/base', exact: true, name: 'Base', component: Cards },
  { path: '/dashboard/base/cards', name: 'Cards', component: Cards },
  { path: '/dashboard/base/forms', name: 'Forms', component: Forms },
  { path: '/dashboard/base/switches', name: 'Switches', component: Switches },
  { path: '/dashboard/base/tables', name: 'Tables', component: Tables },
  { path: '/dashboard/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/dashboard/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/dashboard/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/dashboard/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/dashboard/base/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/dashboard/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/dashboard/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/dashboard/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/dashboard/base/navs', name: 'Navs', component: Navs },
  { path: '/dashboard/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/dashboard/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/dashboard/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/dashboard/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/dashboard/buttons', exact: true, name: 'Buttons', component: Buttons },
  { path: '/dashboard/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/dashboard/buttons/button-dropdowns', name: 'Button Dropdowns', component: ButtonDropdowns },
  { path: '/dashboard/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/dashboard/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/dashboard/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/dashboard/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/dashboard/icons/flags', name: 'Flags', component: Flags },
  { path: '/dashboard/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  { path: '/dashboard/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
  { path: '/dashboard/notifications', exact: true, name: 'Notifications', component: Alerts },
  { path: '/dashboard/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/dashboard/notifications/badges', name: 'Badges', component: Badges },
  { path: '/dashboard/notifications/modals', name: 'Modals', component: Modals },
  { path: '/dashboard/widgets', name: 'Widgets', component: Widgets },
  { path: '/dashboard/charts',exact: true, name: 'Charts', component: Charts },
  { path: '/dashboard/company', name: 'Company List', component: CompanyList },
  { path: '/dashboard/employee', name: 'Employee', component: DisplayEmployee },
  { path: '/dashboard/users', exact: true,  name: 'Users', component: Users },
  { path: '/dashboard/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;
