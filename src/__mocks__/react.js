const React = jest.requireActual("react");
module.exports = { ...React, useEffect: React.useLayoutEffect };
