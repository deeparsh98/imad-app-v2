var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();


var articleOne={
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

app.get('/article-one', function (req, res) {
  res.send(createTemplate(articleOne));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
