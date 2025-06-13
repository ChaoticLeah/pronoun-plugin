Please start chrome with `--remote-debugging-port=9222 --no-sandbox --remote-allow-origins=*` and then run the ts file or the vscode task

Before all this you should be logged in on chrome to your account and you should have already installed the plugin manually once.

Also set up the relevent info inside of .vscode/tasks.json if you plan to use this such as what instance to run it on and so on.

## Shortcomings
For now these are known issues: 
If you change variables or any metadata of the plugin it wont live reload. In this case please re-manually add the plugin.