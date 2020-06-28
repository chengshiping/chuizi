const {task,src,dest,watch,series,parallel} = require('gulp');
const load = require('gulp-load-plugins')();
const del = require('del')

// task('build',async ()=>{
//     src('./src/js/index.js')
//     .pipe(load.rev()) //生成带哈希值的文件名
//     .pipe(dest('./dist/js'))
//     .pipe(load.rev.manifest())
//     .pipe(dest('./rev/js'))
// })

//删除目录
async function delD(){
    await del('./dist')
}

//处理图片
async function img(){
    src('.src/img/*.*')
    .pipe(dest('./dist/img'))
}

//处理js
async function js(){
    src('./src/js/*.js')
    .pipe(load.babel({presets:['@babel/preset-env']}))
    .pipe(load.uglify())//压缩文件
    .pipe(load.rev())//给文件名后面添加哈希值
    .pipe(dest('./dist/js'))
    .pipe(load.rev.manifest())//生成记录版本号的json文件
    .pipe(dest('./rev/js'))
}

//处理sass
async function sass(){
    src('./src/sass/*.scss')
    .pipe(load.sassChina())
    .pipe(load.minifyCss())
    .pipe(load.rev())
    .pipe(dest('./dist/css'))
    .pipe(load.rev.manifest())
    .pipe(dest('./rev/css'))
}

//处理html
async function html(){
   return new Promise((resovle,reject)=>{
       setTimeout(()=>{
           resovle()
           src(['./rev/**/*.json','./src/html/*.html'])
           .pipe(load.revCollector({
               replaceReved: true
           }))
           .pipe(load.minifyHtml())
           .pipe(dest('./dist/html'))
       },2000)
   })
    
}
task('build',async ()=>{
    await delD()
    await img()
    await js()
    await sass()
    await html()
})







