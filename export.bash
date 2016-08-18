#! /bin/bash

cp src/index.html dist/

tar zcf - dist/  |ssh juno@104.131.38.162 tar zxf - -C git/github.com/remotejob/angular2-seed

cd src
tar zcf - assets/ |ssh juno@104.131.38.162 tar zxf - -C static/kvartira-tsentr.eu
tar zcf - assets/ |ssh juno@104.131.38.162 tar zxf - -C static/www.kvartira-tsentr.eu
cd ..

#scp juno@104.236.237.125:gojobextractor/mytags.csv .


