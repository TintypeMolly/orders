import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import StoreIcon from 'material-ui/svg-icons/action/store';
import RecordIcon from 'material-ui/svg-icons/action/assignment';

import HallPage from '../page/Hall';
import RecordPage from '../page/Record';


class AppFrame extends Component {
  render() {
    const bottomNavigationItems = [
      {
        address: '/hall',
        label: '홀',
        icon: <StoreIcon/>,
      },
      {
        address: '/record',
        label: '기록',
        icon: <RecordIcon/>,
      },
    ];
    const currentPath = this.props.match.url;
    const selectedIndex = bottomNavigationItems.findIndex((element) => currentPath.startsWith(element.address));
    return (
      <div>
        <AppBar
          title="Orders"
          iconStyleLeft={{display: 'none'}}
        />
        <div className="page-holder">
          <Route path="/hall" component={HallPage}/>
          <Route path="/record" component={RecordPage}/>
        </div>
        <BottomNavigation
          className="bottom-nav"
          selectedIndex={selectedIndex}
        >
          {bottomNavigationItems.map((item) => (
            <BottomNavigationItem
              key={item.label}
              {...item}
              containerElement={<Link className="bottom-nav-item" to={item.address}/>}
            />
          ))}
        </BottomNavigation>
      </div>
    );
  }
}

export default AppFrame;
