import React, {Component} from 'react';
import { createAppContainer, createStackNavigator, createSwitchNavigator } from "react-navigation";


import setTable from './src/screen/setTable'
import listMenu from './src/screen/listMenu'
import viewBill from './src/screen/viewBill'
import pay from './src/screen/pay'
import { Provider } from 'react-redux'
import store from './src/_redux/store'


//stack

const billPub = createStackNavigator(
  {
    setTable: {
      screen: setTable,
    },
  },
  {
    headerMode: 'none',
  }
)

const billPriv = createStackNavigator(
  {
    listMenu: {
      screen: listMenu,
    },

    viewBill: {
      screen: viewBill,
    },


    pay: {
      screen: pay,
    }
  },
  {
    headerMode: 'none',
  }
)

const Mainnav = createAppContainer (createSwitchNavigator(
  {
  billPub : billPub,
  billPriv : billPriv
  }
)
);

// const mainCont = createAppContainer(mainNav);

// export default mainNav

// const App = () => {
//   return (
//     <Provider store={store}>
//       <mainNav />
//     </Provider>
//   )
// }
// export default App

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Mainnav />
      </Provider>
    )
  }
}

export default App;