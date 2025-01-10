import React from 'react'
import ReactDOM from 'react-dom'
import TagManager from 'react-gtm-module'
import App from './App'
import './index.css'

const tagManagerArgs = {
	gtmId: 'GTM-PRZNM8FL', // Thay bằng mã GTM của bạn
}

TagManager.initialize(tagManagerArgs)

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)
