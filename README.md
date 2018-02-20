# NotifiCar

### Troubleshooting

If you get the following error:

````
error: bundling failed: Error: Unable to resolve module @firebase/app from ~\node_modules\@firebase\auth\dist\auth.js: Module does not exist in the module map
````

Do these steps:

1. Delete the ````node_modules```` folder
1. Remove "firebase" from ````package.json```` file
1. Install dependencies
1. Install the "firebase" package