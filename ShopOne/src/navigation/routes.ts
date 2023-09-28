import { Drawer1, Drawer2, Drawer3, Drawer4, ItemScreen, PlaceOrder, SearchScreen, Tab1, Tab2, Tab3, Tab4 } from "@screens"
import { RouteObjectInterface } from "@customTypes/other"

const StackRoutes: RouteObjectInterface = {
  SearchScreen: {
    name: 'Search',
    component: SearchScreen,
    url: ''
  },
  ItemScreen: {
    name: 'Item',
    component: ItemScreen,
    url: ''
  },
  PlaceOrder: {
    name: 'Order',
    component: PlaceOrder,
    url: ''
  }
}


const DrawerRoutes: RouteObjectInterface = {
  Account: {
    name: 'Account',
    component: null,
    url: 'favorite',
  },
  Orders: {
    name: 'Orders',
    component: Drawer1,
    url: 'favorite',
    icon: 'view-list'
  },
  Notifications: {
    name: 'Notifications',
    component: Drawer2,
    url: 'favorite',
    icon: 'bell'
  },
  CustomerSupport: {
    name: 'Customer Support',
    component: Drawer3,
    url: 'headset',
    icon: 'headset'
  },
  Reviews: {
    name: 'Reviews',
    component: Drawer4,
    url: 'favorite',
    icon: 'star'
  }
};


const TabRoutes: RouteObjectInterface = {
  Home: {
    name: 'Home',
    component: Tab1,
    url: 'home',
    icon: 'home'
  },
  Products: {
    name: 'Products',
    component: Tab2,
    url: 'search',
    icon: 'shopping-search'
  },
  Cart: {
    name: 'Cart',
    component: Tab3,
    url: 'cart',
    icon: 'cart'
  },
  Favorites: {
    name: 'Favorites',
    component: Tab4,
    url: 'favorite',
    icon: 'heart'
  }
}

export const Routes = {
  // TABS
  tabs: TabRoutes,
  // DRAWER
  drawer: DrawerRoutes,
  // STACK
  stack: StackRoutes
}
