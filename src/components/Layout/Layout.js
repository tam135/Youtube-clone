import React from 'react'
import './Layout.scss';
import Header from '../../containers/Header/Header'
import ScrollToTop from '../ScrollToTop/ScrollToTop';

export default function Layout(props) {
    return (
      <ScrollToTop>
        <div className="layout">
          <Header />
          {props.children}
        </div>
      </ScrollToTop>
    );
}
