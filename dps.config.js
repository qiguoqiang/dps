
const dpsConfig = {
	url: 'http://localhost/bonus-account.html#/?routerKey=5872ebd0&token=d35001b1-0c75-4f68-8b85-59f33290d996',      // 待生成骨架屏页面的地址，用百度（https://baidu.com）试试也可以
	output: {
		filepath: '',   // 生成骨架屏的存放页面，一般为项目的入口页面
		injectSelector: '#app'  // 生成的骨架屏插入页面的节点
	},
	animation: 'skeleton-stripes 1s linear infinite;',
	device:"mobile",
	background: '#eee',
	pageBackground: "#fff",
	// header: {
	// 	height: 40,
	// 	background: '#3388ff'
	// },
	// animation: 'opacity 1s linear infinite;',
	// includeElement: function(node, draw) {
		// 定制某个节点画出来的样子，带上return false
		// if(node.id == 'ui-alert') {
			// 跳过该节点及其子节点
			// return false;
		// }
		// if(node.tagName.toLowerCase() === 'img') {
			// 对该图片生成宽100%，高8%，颜色为红色的色块
			// draw({
				// width: 100,
				// height: 8,
				// left: 0,
				// top: 0,
				// zIndex: 99999999,
				// background: 'red'
			// });
			// return false;
		// } 
	// },
	// writePageStructure: function(html) {
		// 自己处理生成的骨架屏
		// fs.writeFileSync(filepath, html);
		// console.log(html)
	// },
	init: function() {
		// document.querySelectorAll('.m-icon').forEach(item => item.parentNode.removeChild(item));
		// 生成骨架屏之前的操作，比如删除干扰节点
	}
}

module.exports = dpsConfig;
