const {task,src,dest,watch,series,parallel} = require('gulp');
const load = require('gulp-load-plugins')();
const del = require('del');

//删除dist目录的内容
task('del',async ()=>{
    await del('./dist')
})

//处理html
task('html',async ()=>{
    src('./src/html/*.html')
    .pipe(dest('./dist/html'))
    .pipe(load.connect.reload())
});

//处理图片
task('img',async ()=>{
    src('./src/img/*.*')
    .pipe(dest('./dist/img'))
    .pipe(load.connect.reload())
});

//处理javascript
task('js',async ()=>{
    src('./src/js/*.js')
    .pipe(load.babel({presets:['@babel/preset-env']}))
    .on('error',function(err){console.log(err)})
    .pipe(dest('./dist/js'))
    .pipe(load.connect.reload())
});

//编译sass
task('sass',async ()=>{
    src('./src/sass/*.scss')
    .pipe(load.sassChina())
    .pipe(dest('./dist/css'))
    .pipe(load.connect.reload())
});

task('json',async ()=>{
    src('./src/json/*.json')
    .pipe(dest('./dist/json'))
})
task('slt',async ()=>{
    src('./src/font_powhtw0vnkg/*.*')
    .pipe(dest('./dist/font_powhtw0vnkg'))
})
task('php',async ()=>{
    src('./src/php/*.php')
    .pipe(dest('./dist/php'))
    .pipe(load.connect.reload())
} )
task('connect',async ()=>{
    load.connect.server({
        root: './dist',
        livereload:true,
        port:3000
    });
})

task('watch',async ()=>{
    watch('./src/html/*.html',series('html'));
    watch('./src/img/*.*',series('img'));
    watch('./src/sass/*.scss',series('sass'));
    watch('./src/js/*.js',series('js'));
    watch('./src/json/*.json',series('json'));
    watch('./src/php/*.php',series('php'));



});
task('dev',series('del','html','img','js','php','sass','slt','json','connect','watch'));




