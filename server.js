var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();


var articles = {
        'article-one' : {
            title: 'Article 1 | Arsh Bhargav',
          
            content: ` <p>
                            This is the content for my first article ...I have nothing to write here...
                        </p>
                    
                        <p>
                            This is the content for my first article ...I have nothing to write here...
                        </p>
                    
                        <p>
                            This is the content for my first article ...I have nothing to write here...
                        </p>
                    `,
            date : 'Feb 08,2017',
            heading : 'Article One'
        },
        'article-two' : {
            title: 'Article 2 | Arsh Bhargav',
          
            content: ` <p>
                            This is the content for my second article ...I have nothing to write here...
                        </p>
                    `,
            date : 'Feb 10,2017',
            heading : 'Article Two'
        },
        'article-three' : {
            title: 'Article 3 | Arsh Bhargav',
          
            content: ` <p>
                            This is the content for my third article ...I have nothing to write here...
                       </p>
                      `
                       ,
            date : 'Feb 15,2017',
            heading : 'Article Three'
        },
        
};
function createTemplate(data)
{
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    var htmlTemplate=`
                       <html>
                            <head>
                                <title>
                                    ${title}
                                </title>
                                <meta  name="viewport" contents="width=device-width, initial scale=1" />
                                <link href="/ui/style.css" rel="stylesheet" />
                            </head>
                            <body>
                                <div class="container">
                                    
                                    <div>
                                        <a href="/"> HOME </a>
                                    </div>
                                    <hr/>
                                    <h3>
                                        ${heading}
                                    </h3>
                                    <div>
                                        ${date}
                                    </div>
                                    <div>
                                        ${content}
                                    </div>
                                </div>
                            </body>
                        </html>
                        `;
    return htmlTemplate;
}
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter', function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});

app.get('/:articleName', function (req, res) {
    var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
