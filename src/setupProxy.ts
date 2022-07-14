// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
const {createProxyMiddleware} = require("http-proxy-middleware");


module.exports = function (app:any) {
    app.use(
        createProxyMiddleware('/api',{
			target:'http://localhost:8000', //目标地址
			changeOrigin: true,
			pathRewrite:{'^/api':''}
		})
	)
};
