const {src,dest,series,watch,parallel} = require('gulp');
const browsersync=require('browser-sync').create();
const ts=require('gulp-typescript');
const sourcemaps =require('gulp-sourcemaps');
const babel = require('gulp-babel');

function tscompile(){
    var tsProject = ts.createProject('tsconfig.json');
    var tsResult = tsProject.src()
        .pipe(sourcemaps.init())          
        .pipe(tsProject())
    return tsResult.pipe(sourcemaps.write('./'))        
        .pipe(dest('src/js'));
}

function watchOnSave(){  
    watch('**/*.html',browserReload);  
    watch('**/*.css',browserReload);
    watch('src/**/*.ts',series(tscompile,browserReload));
}

function browserServe(cb){
    browsersync.init({
        server:{
            baseDir:'./src'
        }
    });
    cb();
}

function browserReload(cb){
    browsersync.reload();
    cb();
}

exports.build=tscompile;
exports.default=series(tscompile,browserServe,watchOnSave);
