
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body'
import { Provider } from 'react-redux';
import store from './utils/store';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import VideoContainer from './Components/VideoContainer';
import WatchContainer from './Components/WatchContainer';

function App() {

  const routes = createBrowserRouter([{
    path:'/',
    element:<Body />,
    children:[{

      path:'/',
      element:<VideoContainer />,
    },{
      path:'/watch',
      element:<WatchContainer />
    }]
  }])


  return (
    <div className="App">

    <Provider store={store}>
      <Header />
      <RouterProvider router={routes} />
      </Provider>
    </div>
  );
}

export default App;
