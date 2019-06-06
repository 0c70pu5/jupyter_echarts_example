import React, {memo} from 'react';
import AppProvider from './AppProvider';

function App () {
    return (
        <AppProvider>
            <button>
                test caption
            </button>
        </AppProvider>
    );
}

const MemoizedApp = memo(App);

export default MemoizedApp;
