import React, {memo} from 'react';
import AppContext from 'context/App';

function AppProvider({children}) {
    const context = {};

    return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}

const MemoizedAppProvider = memo(AppProvider);

export default MemoizedAppProvider;
