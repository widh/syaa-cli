/* IRONA Client Program is subject to the terms of the Mozilla Public License 2.0.
 * You can obtain a copy of MPL at LICENSE.md of root directory. */

import React from 'react';
import ReactDOM from 'react-dom';

import { loadTheme } from 'office-ui-fabric-react';

import AlertPage from './AlertPage';
import TitleBar from './TitleBar';

import * as theme from './theme';
import './style.scss';

// Set main theme
document.body.dataset.theme = 'dark';
loadTheme(theme.dark);

// Render main DOM
const primAlert = document.getElementById('primAlert');
ReactDOM.render(
  <div styleName="client">
    <TitleBar />
    <AlertPage />
  </div>,
  primAlert,
);
