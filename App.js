import React from 'react';
import { createAppContainer, createStackNavigator, createSwitchNavigator } from "react-navigation";


import setTable from './src/screen/setTable'
import listMenu from './src/screen/listMenu'
import viewBill from './src/screen/viewBill'
import pay from './src/screen/pay'
// import { Provider } from 'react-redux'
// import store from './src/_redux/store'


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

const mainNav = createAppContainer(createSwitchNavigator({
  billPub: {
    screen: billPub
  },

  billPriv: {
    screen: billPriv
  }
})
)

export default mainNav

// const App = () => {
//   return (
//     <Provider store={store}>
//       <mainNav />
//     </Provider>
//   )
// }
// export default App