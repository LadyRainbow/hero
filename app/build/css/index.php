
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=1">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Nuts pages</title>
            <style>
                html {
                    min-height: 100%;
                    min-width: 100%;
                }
                body {
                    padding: 0;
                    margin: 0;
                    min-height: 100%;
                    min-width: 100%;
                }

                ul{
                    counter-reset: li;
                    list-style: none;
                    font: 15px 'trebuchet MS', 'lucida sans', sans-serif;
                    padding: 0;
                    margin-bottom: 4em;
                    margin-left: 2em;
                    text-shadow: 0 1px 0 rgba(255,255,255,.5);
                }

                ul a {
                    position: relative;
                    display: block;
                    padding: .4em .4em .4em 2em;
                    margin: 1.5em 0;
                    background: linear-gradient(to right, rgba(249,198,103,0.46) 0%,rgba(249,198,102,0.46) 1%,rgba(248,172,64,0) 55%,rgba(247,150,33,0) 100%);
                    color: #444;
                    text-decoration: none;
                    border-radius: .3em;
                }

                ul a:hover{
                    background: #eee;
                }

                ul a:before{
                    content: counter(li);
                    counter-increment: li;
                    position: absolute;
                    left: -1.3em;
                    top: 50%;
                    margin-top: -1.3em;
                    background: #f63;
                    height: 2em;
                    width: 2em;
                    line-height: 2em;
                    border: .3em solid #fff;
                    text-align: center;
                    font-weight: bold;
                    border-radius: 2em;
                }
            </style>
        </head>
        <body>
            <div class="app">
                <ul>
        <li>
            <a href="./pages/output/main.html">main</a>
        </li>
    </ul>
            </div>
        </body>
        </html>
    