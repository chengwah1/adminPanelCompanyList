export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      title: true,
      name: 'Theme',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Colors',
      url: '/dashboard/theme/colors',
      icon: 'icon-drop',
    },
    {
      name: 'Typography',
      url: '/dashboard/theme/typography',
      icon: 'icon-pencil',
    },
    {
      title: true,
      name: 'Components',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Base',
      url: '/dashboard/base',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Breadcrumbs',
          url: '/dashboard/base/breadcrumbs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Cards',
          url: '/dashboard/base/cards',
          icon: 'icon-puzzle',
        },
        {
          name: 'Carousels',
          url: '/dashboard/base/carousels',
          icon: 'icon-puzzle',
        },
        {
          name: 'Collapses',
          url: '/dashboard/base/collapses',
          icon: 'icon-puzzle',
        },
        {
          name: 'Dropdowns',
          url: '/dashboard/base/dropdowns',
          icon: 'icon-puzzle',
        },
        {
          name: 'Forms',
          url: '/dashboard/base/forms',
          icon: 'icon-puzzle',
        },
        {
          name: 'Jumbotrons',
          url: '/dashboard/base/jumbotrons',
          icon: 'icon-puzzle',
        },
        {
          name: 'List groups',
          url: '/dashboard/base/list-groups',
          icon: 'icon-puzzle',
        },
        {
          name: 'Navs',
          url: '/dashboard/base/navs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Paginations',
          url: '/dashboard/base/paginations',
          icon: 'icon-puzzle',
        },
        {
          name: 'Popovers',
          url: '/dashboard/base/popovers',
          icon: 'icon-puzzle',
        },
        {
          name: 'Progress Bar',
          url: '/dashboard/base/progress-bar',
          icon: 'icon-puzzle',
        },
        {
          name: 'Switches',
          url: '/dashboard/base/switches',
          icon: 'icon-puzzle',
        },
        {
          name: 'Tables',
          url: '/dashboard/base/tables',
          icon: 'icon-puzzle',
        },
        {
          name: 'Tabs',
          url: '/dashboard/base/tabs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Tooltips',
          url: '/dashboard/base/tooltips',
          icon: 'icon-puzzle',
        },
      ],
    },
    {
      name: 'Buttons',
      url: '/dashboard/buttons',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Buttons',
          url: '/dashboard/buttons/buttons',
          icon: 'icon-cursor',
        },
        {
          name: 'Button dropdowns',
          url: '/dashboard/buttons/button-dropdowns',
          icon: 'icon-cursor',
        },
        {
          name: 'Button groups',
          url: '/dashboard/buttons/button-groups',
          icon: 'icon-cursor',
        },
        {
          name: 'Brand Buttons',
          url: '/dashboard/buttons/brand-buttons',
          icon: 'icon-cursor',
        },
      ],
    },
    {
      name: 'Compoany List',
      url: '/dashboard/company',
      icon: 'icon-pie-chart',
    },
    {
      name: 'Employee',
      url: '/dashboard/employee',
      icon: 'icon-pie-chart',
    },
    {
      name: 'Charts',
      url: '/dashboard/charts',
      icon: 'icon-pie-chart',
    },
    {
      name: 'Icons',
      url: '/dashboard/icons',
      icon: 'icon-star',
      children: [
        {
          name: 'CoreUI Icons',
          url: '/dashboard/icons/coreui-icons',
          icon: 'icon-star',
          badge: {
            variant: 'info',
            text: 'NEW',
          },
        },
        {
          name: 'Flags',
          url: '/dashboard/icons/flags',
          icon: 'icon-star',
        },
        {
          name: 'Font Awesome',
          url: '/dashboard/icons/font-awesome',
          icon: 'icon-star',
          badge: {
            variant: 'secondary',
            text: '4.7',
          },
        },
        {
          name: 'Simple Line Icons',
          url: '/dashboard/icons/simple-line-icons',
          icon: 'icon-star',
        },
      ],
    },
    {
      name: 'Notifications',
      url: '/dashboard/notifications',
      icon: 'icon-bell',
      children: [
        {
          name: 'Alerts',
          url: '/dashboard/notifications/alerts',
          icon: 'icon-bell',
        },
        {
          name: 'Badges',
          url: '/dashboard/notifications/badges',
          icon: 'icon-bell',
        },
        {
          name: 'Modals',
          url: '/dashboard/notifications/modals',
          icon: 'icon-bell',
        },
      ],
    },
    {
      divider: true,
    },
    {
      title: true,
      name: 'Extras',
    },
    {
      name: 'Disabled',
      url: '/dashboard',
      icon: 'icon-ban',
      attributes: { disabled: true },
    },
    {
      name: 'Download CoreUI',
      url: 'https://coreui.io/react/',
      icon: 'icon-cloud-download',
      class: 'mt-auto',
      variant: 'success',
      attributes: { target: '_blank', rel: "noopener" },
    },
    {
      name: 'Try CoreUI PRO',
      url: 'https://coreui.io/pro/react/',
      icon: 'icon-layers',
      variant: 'danger',
      attributes: { target: '_blank', rel: "noopener" },
    },
  ],
};
