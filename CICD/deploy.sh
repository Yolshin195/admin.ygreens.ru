#!/bin/bash

DIRWEB=/var/www/admin.ygreens.local

if  [ -d $DIRWEB ]; then
    rm -rf $DIRWEB
fi

mkdir $DIRWEB
cp -r ./dist/admin-ygreens-ru/. $DIRWEB/.