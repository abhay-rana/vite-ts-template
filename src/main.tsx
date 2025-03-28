import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';

// store initialization ( at the top always)
import store from '~/redux/store';

// Core Library Configurations
import dayjs from 'dayjs';
import 'dayjs/locale/en'; // Locale setup for dayjs
dayjs.locale('en');

// Global Styles
import 'antd/dist/reset.css'; // Ant Design v5
import './styles/antd-style.css';
import './styles/globals.css';

import App from '~/App';

// Providers
import { AntdThemeProvider, ThemeProvider } from '~/providers';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <>
        <Provider store={store}>
            <ThemeProvider>
                <AntdThemeProvider>
                    <App />
                </AntdThemeProvider>
            </ThemeProvider>
            <Toaster />
        </Provider>
    </>
);
