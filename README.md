comcamp_demo
============

demo application for community camp


1. install all packages using nuget
2. npm install
3. bower install
4. Add bellow scripts in 'Build Events' textbox from project property window (right mouse click on the project in visual studio)
```
if $(ConfigurationName) == Debug (
  cd $(SolutionDir)webapp\node_modules\.bin
  grunt.cmd vsdevbuild
) ELSE (
  cd $(SolutionDir)webapp\node_modules\.bin
  grunt.cmd vsdistbuild
)
```

Run !!
