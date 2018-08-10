import React from 'react';
import ReactDOM from 'react-dom';
import WhatNowApp from './components/WhatNowApp';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faServer, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
library.add(faServer, faMinusCircle )

ReactDOM.render(<WhatNowApp /> , document.getElementById('app'))