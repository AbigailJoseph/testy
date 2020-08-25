import { authRoles } from "./auth/authRoles";

export const navigations = [
  {
    name: "Dashboard",
    path: "/dashboard/analytics",
    icon: "dashboard",
    // auth: authRoles.guest
  },
  {
    name: "Pages",
    icon: "file_copy",

    children: [
      {
        name: "User List",
        iconText: "L",
        children: [
          {
            name: "User List 1",
            path: "/pages/user-list-1",
            iconText: "U1",
          },
          {
            name: "User List 2",
            path: "/pages/user-list-2",
            iconText: "U2",
          },
          {
            name: "User List 3",
            path: "/pages/user-list-3",
            iconText: "U3",
          },
          {
            name: "User List 4",
            path: "/pages/user-list-4",
            iconText: "U3",
          },
        ]
      },
      {
        name: "Matx List",
        iconText: "M",
    
        children: [
          {
            name: "Infinite Scroll",
            path: "/infinite-scroll",
            iconText: "I",
          },
          {
            name: "List",
            path: "/matx-list",
            iconText: "L",
          },
        ],
      },
      {
        name: "Help Center",
        iconText: "H",
        children: [{
          name: "FAQ 1",
          path: "/pages/faq-1",
          iconText: "F1",
        },
        {
          name: "FAQ 2",
          path: "/pages/faq-2",
          iconText: "F2",
        },]
      },
      {
        name: "Session/Auth",
        iconText: "S",
        children: [
          {
            name: "Sign in",
            iconText: "SI",
            path: "/session/signin",
          },
          {
            name: "Sign up",
            iconText: "SU",
            path: "/session/signup",
          },
          {
            name: "Forgot Password",
            iconText: "FP",
            path: "/session/forgot-password",
          },
          {
            name: "Error",
            iconText: "404",
            path: "/session/404",
          },
        ],
      },
      {
        name: "Pricing",
        iconText: "P",
        path: "/others/pricing",
      },
      {
        name: "Left Sidebar Card",
        path: "/page-layouts/Left-sidebar-card",
        iconText: "L",
      },
    ],
  },
  {
    label: "Apps",
    type: "label",
  },
  {
    name: "Ecommerce",
    icon: "shopping_basket",

    children: [
      {
        name: "Shop",
        path: "/ecommerce/shop",
        iconText: "S",
      },
      {
        name: "Cart",
        path: "/ecommerce/cart",
        iconText: "C",
      },
      {
        name: "Checkout",
        path: "/ecommerce/checkout",
        iconText: "CO",
      },
    ],
  },
  {
    name: "Scrum Board",
    icon: "group_work",
    path: "/scrum-board/c5d7498bbcb84d81fc7454448871ac6a6e",
  },
  {
    name: "Invoice Builder",
    icon: "receipt",
    path: "/invoice/list",
  },
  {
    name: "Calendar",
    icon: "date_range",
    path: "/calendar",
  },
  {
    name: "Chat",
    icon: "chat",
    path: "/chat",
  },
  {
    name: "Inbox",
    icon: "inbox",
    path: "/inbox",
  },
  {
    name: "Todo",
    icon: "center_focus_strong",
    path: "/todo/list",
  },
  {
    label: "Data Table",
    type: "label",
  },
  {
    name: "CRUD Table",
    icon: "format_list_bulleted",
    path: "/crud-table",
  },
  {
    name: "Data Table",
    icon: "table_view",

    children: [
      {
        name: "Simple Mui Table",
        path: "/data-table/simple-mui-table",
        iconText: "T1",
      },
      {
        name: "Expandable Mui Table",
        path: "/data-table/expandable-mui-table",
        iconText: "T2",
      },
    ],
  },
  {
    label: "Components",
    type: "label",
  },
  {
    name: "Forms",
    icon: "description",
    children: [
      {
        name: "Basic",
        path: "/forms/basic",
        iconText: "B",
      },
      {
        name: "Editor",
        path: "/forms/editor",
        iconText: "E",
      },
      {
        name: "Upload",
        path: "/forms/upload",
        iconText: "U",
      },
      {
        name: "Wizard",
        path: "/forms/wizard",
        iconText: "W",
      },
    ],
  },
  {
    name: "Components",
    icon: "favorite",
    badge: { value: "30+", color: "secondary" },
    children: [
      {
        name: "Auto Complete",
        path: "/material/autocomplete",
        iconText: "A",
      },
      {
        name: "Buttons",
        path: "/material/buttons",
        iconText: "B",
      },
      {
        name: "Checkbox",
        path: "/material/checkbox",
        iconText: "C",
      },
      {
        name: "Dialog",
        path: "/material/dialog",
        iconText: "D",
      },
      {
        name: "Drag and Drop",
        iconText: "D",
        path: "/others/drag-and-drop",
      },
      {
        name: "Expansion Panel",
        path: "/material/expansion-panel",
        iconText: "E",
      },
      {
        name: "Form",
        path: "/material/form",
        iconText: "F",
      },
      {
        name: "Icons",
        path: "/material/icons",
        iconText: "I",
      },
      {
        name: "Menu",
        path: "/material/menu",
        iconText: "M",
      },
      {
        name: "Progress",
        path: "/material/progress",
        iconText: "P",
      },
      {
        name: "Radio",
        path: "/material/radio",
        iconText: "R",
      },
      {
        name: "Switch",
        path: "/material/switch",
        iconText: "S",
      },
      {
        name: "Slider",
        path: "/material/slider",
        iconText: "S",
      },
      {
        name: "Snackbar",
        path: "/material/snackbar",
        iconText: "S",
      },
      {
        name: "Table",
        path: "/material/table",
        iconText: "T",
      },
    ],
  },
  {
    name: "Charts",
    icon: "trending_up",

    children: [
      {
        name: "Echarts",
        path: "/charts/echarts",
        iconText: "E",
      },
      // {
      //   name: "Recharts",
      //   path: "/charts/recharts",
      //   iconText: "R",
      // },
      {
        name: "React Vis",
        path: "/charts/react-vis",
        iconText: "R",
      },
      {
        name: "Victory Chart",
        path: "/charts/victory-charts",
        iconText: "V",
      },
    ],
  },
  {
    name: "Map",
    icon: "add_location",
    path: "/map",
  },
  {
    name: "Utilities",
    icon: "format_list_bulleted",
    children: [
      {
        name: "Color",
        path: "/utilities/color",
        iconText: "C",
        auth: authRoles.admin,
      },
      {
        name: "Spacing",
        path: "/utilities/spacing",
        iconText: "S",
        auth: authRoles.admin,
      },
      {
        name: "Typography",
        path: "/utilities/typography",
        iconText: "T",
      },
      {
        name: "Display",
        path: "/utilities/display",
        iconText: "D",
      },
      {
        name: "Position",
        path: "/utilities/position",
        iconText: "P",
      },
      {
        name: "Shadow",
        path: "/utilities/shadow",
        iconText: "S",
      },
    ],
  },

  {
    name: "Documentation",
    icon: "launch",
    type: "extLink",
    path: "http://demos.ui-lib.com/matx-react-doc/",
  },
];
