Ember.TEMPLATES["about/skills"]=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push('<label>HTML5 / CSS3 + responsive design</label>\n<div class="progress progress-striped active">\n	<div class="progress-bar progress-bar-success"  role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%">\n		<span class="sr-only">100%</span>\n	</div>\n</div>\n\n<label>JavaScript + client / server frameworks</label>\n<div class="progress progress-striped active">\n	<div class="progress-bar progress-bar-success"  role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%">\n		<span class="sr-only">100%</span>\n	</div>\n</div>\n\n<label>PHP5 + MVC frameworks</label>\n<div class="progress progress-striped active">\n	<div class="progress-bar progress-bar-success"  role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%">\n		<span class="sr-only">100%</span>\n	</div>\n</div>\n\n<label>SQL - MySQL, PostgreSQL</label>\n<div class="progress progress-striped active">\n	<div class="progress-bar progress-bar-success"  role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%">\n		<span class="sr-only">100%</span>\n	</div>\n</div>\n\n<label>NoSQL - MongoDB</label>\n<div class="progress progress-striped active">\n	<div class="progress-bar progress-bar-success"  role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%">\n		<span class="sr-only">80%</span>\n	</div>\n</div>\n\n<label>Solr, ElasticSearch</label>\n<div class="progress progress-striped active">\n	<div class="progress-bar progress-bar-success"  role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%">\n		<span class="sr-only">80%</span>\n	</div>\n</div>\n\n<label>C#, Java, Ruby, Python</label>\n<div class="progress progress-striped active">\n	<div class="progress-bar progress-bar-success"  role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width: 70%">\n		<span class="sr-only">70%</span>\n	</div>\n</div>\n\n<label>Linux + server management</label>\n<div class="progress progress-striped active">\n	<div class="progress-bar progress-bar-success"  role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width: 90%">\n		<span class="sr-only">90%</span>\n	</div>\n</div>\n\n<label>Chef, Puppet, Vagrant</label>\n<div class="progress progress-striped active">\n	<div class="progress-bar progress-bar-success"  role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width: 70%">\n		<span class="sr-only">70%</span>\n	</div>\n</div>\n')}),Ember.TEMPLATES.application=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g,h,i,j="",k=c.helperMissing,l=this.escapeExpression;return e.buffer.push('<div id="wrap">\n	<div id="header">\n		'),g={},h={},i={hash:{},contexts:[b],types:["ID"],hashContexts:h,hashTypes:g,data:e},e.buffer.push(l((f=c.partial||b.partial,f?f.call(b,"header",i):k.call(b,"partial","header",i)))),e.buffer.push("\n	</div>\n\n	"),g={},h={},i={hash:{},contexts:[b],types:["ID"],hashContexts:h,hashTypes:g,data:e},e.buffer.push(l((f=c.partial||b.partial,f?f.call(b,"menu",i):k.call(b,"partial","menu",i)))),e.buffer.push('\n\n	<div id="main">\n		<div class="container">\n			<div id="content" class="row">\n				'),g={},h={},e.buffer.push(l(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:h,hashTypes:g,data:e}))),e.buffer.push('\n			</div>\n		</div>\n	</div>\n</div>\n\n<div id="footer">\n	footer\n</div>\n'),j}),Ember.TEMPLATES["articles/index"]=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push('<div class="col-xs-12">\n\n	<h3>Blog</h3>\n\nLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.\n\nLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.\n\nLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.\n\nLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.\n\nLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.\n\n<div id="thing"><h3>Thing</h3></div>\n\nLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.\n\nLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.\n\nLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.\n\n</div>')}),Ember.TEMPLATES["contact/index"]=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push('<div class="col-xs-12">\n\n	<h3>Contact</h3>\n\n</div>')}),Ember.TEMPLATES.container=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g,h="",i=this.escapeExpression;return e.buffer.push("Container\n\n"),f={},g={},e.buffer.push(i(c._triageMustache.call(b,"yield",{hash:{},contexts:[b],types:["ID"],hashContexts:g,hashTypes:f,data:e}))),h}),Ember.TEMPLATES.header=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push('<div id="sky">\n	<div class="container">\n		<div class="row">\n			<div id="title" class="col-xs-6">\n				<h1>Alex Crawford</h1>\n			</div>\n			<div id="social" class="col-xs-6">\n				<div class="pull-right">\n					<a href="http://twitter.com/awc737" target="_blank">\n						<i class="icon-twitter"></i>\n					</a>\n					<a href="http://github.com/awc737" target="_blank">\n						<i class="icon-github"></i>\n					</a>\n					<a href="http://coderbits.com/awc737" target="_blank">\n						<i class="icon-code"></i>\n					</a>\n				</div>\n			</div>\n		</div>\n	</div>\n</div>\n\n<div id="roof">\n	<div class="container">\n		<div class="row">\n			<div id="description" class="col-xs-8">\n				<div class="row">\n					<div class="col-xs-3">\n						<img src="/img/me.png">\n					</div>\n					<div class="col-xs-9">\n						<h2>Web / Application Developer</h2>\n						<p>\n							I am a problem solver and a leader. I seek challenges that require me to overcome obstacles and implement better solutions. I am fascinated by rapidly evolving technology and extremely passionate about my work.\n						</p>\n					</div>\n				</div>\n			</div>\n			<div id="contact" class="col-xs-4">\n				<ul class="nav nav-pills nav-stacked">						\n					<li>\n						<i class="icon-phone"></i>\n						<span>321-759-5293</span>\n					</li>\n					<li class="divider"></li>\n					<li>\n						<i class="icon-envelope-alt"></i>\n						<span>awc737@gmail.com</span>\n					</li>\n					<li class="divider"></li>\n					<li>\n						<a href="/files/alexcrawford-resume-2013.pdf">\n							<i class="icon-download-alt"></i>\n							<span>Download My Resume</span>\n						</a>\n					</li>\n				</ul>\n			</div>\n		</div>\n	</div>\n</div>')}),Ember.TEMPLATES.index=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g,h,i,j="",k=c.helperMissing,l=this.escapeExpression;return e.buffer.push('<div id="skills" class="col-xs-4">\n	<h3><i class="icon-gear"></i> Skills</h3>\n	'),g={},h={},i={hash:{},contexts:[b],types:["STRING"],hashContexts:h,hashTypes:g,data:e},e.buffer.push(l((f=c.partial||b.partial,f?f.call(b,"about/skills",i):k.call(b,"partial","about/skills",i)))),e.buffer.push('\n</div>\n\n<div id="overview" class="col-xs-8">\n	<h3><i class="icon-lightbulb"></i> Overview</h3>\n	<p>\n		With over 12 years of experience creating websites, pleasing aesthetics and effective functionality come naturally. As a developer I exhibit great strength in discovering technical problems, then quickly and accurately delivering solutions through code and logic. My vast experience in every facet of the application lifecycle has diversified my skillset, making me a viable asset to any area of a technical project.\n	</p>\n</div>\n\n<div id="projects" class="col-xs-8">\n	<h3><i class="icon-laptop"></i> Recent Projects</h3>\n	<p>\n		\n	</p>\n</div>'),j}),Ember.TEMPLATES.login=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push('<div class="container">\n	<form class="form-signin">\n		<input type="text" class="form-control" placeholder="Email address" autofocus>\n		<input type="password" class="form-control" placeholder="Password">\n		<label class="checkbox">\n			<input type="checkbox" value="remember-me"> \n			Remember me\n		</label>\n		<button class="btn btn-lg btn-primary btn-block" type="submit">\n			Sign in\n		</button>\n	</form>\n</div>')}),Ember.TEMPLATES.menu=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){b.buffer.push('\n						<i class="icon-user"></i>\n						<span>About</span>\n					')}function g(a,b){b.buffer.push('\n						<i class="icon-suitcase"></i>\n						<span>Portfolio</span>\n					')}function h(a,b){b.buffer.push('\n						<i class="icon-pencil"></i>\n						<span>Blog</span>\n					')}function i(a,b){b.buffer.push('\n						<i class="icon-envelope"></i>\n						<span>Contact</span>\n					')}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var j,k,l,m,n,o="",p=this,q=c.helperMissing;return e.buffer.push('<div id="menu-affix">\n	<nav id="menu" class="navbar navbar-default" role="navigation">\n		<div class="navbar-collapse collapse">\n			<ul class="nav navbar-nav">\n				<li>\n					'),l={},m={},n={hash:{},inverse:p.noop,fn:p.program(1,f,e),contexts:[b],types:["STRING"],hashContexts:m,hashTypes:l,data:e},j=c["link-to"]||b["link-to"],k=j?j.call(b,"index",n):q.call(b,"link-to","index",n),(k||0===k)&&e.buffer.push(k),e.buffer.push("\n				</li>\n				<li>\n					"),l={},m={},n={hash:{},inverse:p.noop,fn:p.program(3,g,e),contexts:[b],types:["STRING"],hashContexts:m,hashTypes:l,data:e},j=c["link-to"]||b["link-to"],k=j?j.call(b,"portfolio",n):q.call(b,"link-to","portfolio",n),(k||0===k)&&e.buffer.push(k),e.buffer.push("\n				</li>\n				<li>\n					"),l={},m={},n={hash:{},inverse:p.noop,fn:p.program(5,h,e),contexts:[b],types:["STRING"],hashContexts:m,hashTypes:l,data:e},j=c["link-to"]||b["link-to"],k=j?j.call(b,"articles",n):q.call(b,"link-to","articles",n),(k||0===k)&&e.buffer.push(k),e.buffer.push("\n				</li>\n				<li>\n					"),l={},m={},n={hash:{},inverse:p.noop,fn:p.program(7,i,e),contexts:[b],types:["STRING"],hashContexts:m,hashTypes:l,data:e},j=c["link-to"]||b["link-to"],k=j?j.call(b,"contact",n):q.call(b,"link-to","contact",n),(k||0===k)&&e.buffer.push(k),e.buffer.push('\n					</li>\n			</ul>\n			<form id="search" class="navbar-form navbar-right" role="search">\n				<div class="form-group">\n					<input type="text" class="form-control" placeholder="Search">\n				</div>\n\n				<button type="submit" class="btn btn-default">Submit</button>\n			</form>\n		</div>\n	</nav>\n</div>'),o}),Ember.TEMPLATES["portfolio/index"]=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push('<div class="col-xs-12">\n\n	<h3>Coming Soon!</h3>\n\n</div>')}),function(){window.App=Ember.Application.create({})}(),function(){App.ApplicationController=Ember.Controller.extend({scrollPos:0,observePath:function(){var a=$("#application").height();$("#application").height(a),"index"!==this.get("currentPath")?this.set("scrollPos",264):this.set("scrollPos",0)}.observes("currentPath"),transitionScroll:function(){"index"!==this.get("currentPath")?($("#content").css("min-height",$(window).height()-200),$("html, body").animate({scrollTop:264},300,"easeOutBounce",function(){$("#application").css("height","auto")})):($("#content").css("min-height","inherit"),$("html, body").animate({scrollTop:0},300,"easeOutBounce",function(){$("#application").css("height","auto")}))}})}(),function(){App.ApplicationView=Ember.View.extend({elementId:"application",didInsertElement:function(){this.controller.transitionScroll();var a=this;$("#application").height(),$(window).resize(function(){$("#content").css("min-height",$(window).height()-200);var b=$(window).scrollTop(),c=a.controller.get("scrollPos");c>b&&$(window).scrollTop(a.controller.get("scrollPos"))}),$("#menu-affix").affix({offset:{top:264}})}})}(),function(){if(App.Router.map(function(){this.route("login"),this.route("logout"),this.route("contact"),this.resource("articles",{path:"/blog"},function(){this.route("show",{path:"/:slug"})}),this.resource("portfolio",function(){this.route("show",{path:"/:slug"})})}),window.history&&window.history.pushState){if(window.location.hash){var a=window.location.hash.replace("#","");location.href="http://"+window.location.host+a}App.Router.reopen({location:"history"})}else if(!window.location.hash){var b="/#"+window.location.pathname;location.href="http://"+window.location.host+b}App.ApplicationRoute=Ember.Route.extend({actions:{willTransition:function(a){var b=this;a.then(function(){b.controllerFor("application").transitionScroll()})}}}),App.ContactRoute=Ember.Route.extend({renderTemplate:function(){this.render("contact/index")}})}();