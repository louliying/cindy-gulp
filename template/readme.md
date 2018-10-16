### 目录结构
---- src (开发源文件目录)
    ---- sass
        ---- index
            ---- index1.scss
            ---- index2.scss
            ....
    ---- js
        ----- index
            ---- index1.js
            ---- index2.js
    ---- img
        ---- index
            ---- _index1 (雪碧图前的源图)
                ---- index1.png
                ---- index2.png
    ---- temp
        ---- index
            ---- index1.temp.html
            ---- index2.temp.html
        index.debug.html
    ---- images (html里的img图， 不需要生成到dist里)
        ---- index
            ---- index1.jpg
---- config
    ---- config.js (生成dist的配置)


---- dist (gulp生成目录)
    ---- css
        ---- index.css
        ---- other.css
    ---- js
        ---- index.min.js
        ---- other.min.js
    ---- img
        ---- index
            ---- index[dash].png
    index.html
    other.html


