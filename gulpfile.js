const mode = process.argv[2] //获取 命令行输入的内容

switch(mode){
    case 'dev':
        require('./gulpfile-dev.js')
        break
    case 'build':
        require('./gulpfile-build.js')
}