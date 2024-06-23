console.log('Problem : Once your container is deleted the data in it is gone as well. To solve this docker Volume is used where we mout our data on the container.')


/*

Here the data is on our machine and it is in sync with the docker container. In a case of container lost/deleted we have our data stored on our local machine.

1 - create a code or data file
2 - run a node image (to install node)
3 - type command = docker run -it -v /local/folder/adress:/in/container/address node bash (here -v is for volume & node is the image we want to   run and lastly 'bash' this means open a bash terminal in the container)
4 - to check that both are connected we run 'npm install' & npm install -g(globally) nodemon(a utility that helps in automatically restarting your 
Node.js application when it detects changes in the source files)
5 - run 'nodemon xyz.js(file name)'
6 - try and edit the file on your local machine and you see the container refreshes automatically.

*/

console.log('Connected Successfully')
console.log('Connected Successfully 2')
console.log('Connected Successfully 3')

