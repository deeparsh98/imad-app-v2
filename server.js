var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config={
    user: 'deeparsh98',
    database: 'deeparsh98',
    host: 'db.imad.hasura-app.io',
    port:'5432',
    password: process.env.DB_PASSWORD
    
};
var app = express();


var articles = {
        'article-one' : {
            title: 'Article 1 | Arsh Bhargav',
          
            content: ` <p>
                            This is the content for my first article. Here we are going to talk about the movie WORLD WAR :Z <br/>The movie which i think is known to you all, isn't it?
                            <br/>
                            It is really an amazing movie, so now you people will give comments about the same at the below link <br/> You can also see the comments given by others <br/>
                            <a href="http://deeparsh98.imad.hasura-app.io/a1/comments"><u>COMMENTS</u></a>
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
                                    <div class="comments">
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


var pool = new Pool(config);
app.get('/test-db',function(req,res){
pool.query('select *from test',function(err,result){
    if(err)
    res.status(500).send(err.toString());
    else{
        res.send(JSON.stringify(result.rows));
    }
});

    
});


var comments=[];
app.get('/a1',function(req, res){
    var newCom=req.query.newCom;
    comments.push(newCom);
    res.send(JSON.stringify(comments));
});


app.get('/a1/comments',function(req, res){
    res.sendFile(path.join(__dirname,'ui','comments.html'));
});




var names=[];
app.get('/submit-name', function(req, res){
  var name= req.query.name;
  names.push(name);
  res.send(JSON.stringify(names));
});

app.get('/articles/:articleName', function (req, res) {
    var articleName=req.params.articleName;
    
    pool.query("select * from article where title= '"+articleName +"'", function(err,result){
        if(err){
            res.status(500).send(err.toString());
        }
        else{
            if(result.rows.length===0)
            res.status(404).send('Resource not found !');
            else{
                var articleData=result.rows[0];
                res.send(createTemplate(articleData));
            }
        }
    });
  
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/com.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'com.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
