var g_APP = new Vue({
  el: "#mainApp",
  data: {
    datasetArr: []
  },
  created: function () {
  	this.datasetArr = [
  		{"name": "高麗菜", "picCover": "/static/image/logo.png","picNum": 10, "tagNum": 5},
  		{"name": "青江菜", "picCover": "/static/image/logo.png","picNum": 20, "tagNum": 20},
  		{"name": "百香果", "picCover": "/static/image/logo.png","picNum": 20, "tagNum": 20},
  		{"name": "甘蔗", "picCover": "/static/image/logo.png","picNum": 20, "tagNum": 20},
  	];
  },
  methods: {
    
  }
});

window.addEventListener('load', function() {
  
});

window.addEventListener('resize', function(e) {
  
});