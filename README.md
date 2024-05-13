# pronoun-plugin
A fediverse *key plugin that adds pronouns to display names

## Features
 - Shows pronouns in the username on a post
 - Works with my plural plugin and fetches the right pronouns
 - Notifications when there is an update

## Setup
 - Copy the contents of plugin.is
 - go to your settings on your *key software
 - Go to the plugins tab
 - Click install plugins
 - Paste the code in
 - Hit install
 - It will ask you to accept some permissions. Accept them.

## How does it work
There are 2 algorithms. The basic one just scans descriptions and labels for basic pronouns like she/her and he/him, ect. The other one is more fancy and can find custom pronouns by detecting stuff with a slash inbetween them. Its smart and wont detect fractions and other things but from time to time it pulls the wrong thing. This is the new default. 

## What are the permissions I am accepting for?
write:notifications is used to send you a notification when a new version of the plugin is released. You can turn this off in the plugin settings once its installed
read:account is for the same thing (It is used to grab a json post so it can compare versions)

## Im plural how do I get it to find my pronouns?
This works with my plural plugin and detects ` - posted by ` so set that up first.

Then edit your profile description so that it has the headmates name (exactly as entered in the plural plugin) and then the pronouns underneath it (It doesn't matter where, just do it before the next headmates section) 

Here is an example:

![image](https://github.com/KevinWh0/pronoun-plugin/assets/45321184/1e664521-21eb-485d-a53c-b354c900f953)


## Known bugs we cant fix

> The pronouns only sometimes show up

This is a misskey bug that I cannot do anything about

> The plural pronouns part doesnt work when I click into a post

Again this is a misskey bug

## Extra notes and thanks
Tested in sharkey, and misskey

Thanks to [miaapancake](https://woem.men/@miaapancake) for allowing me to use the screenshots in this readme

If there are any bugs feel free to message me on [@ChaosKitsune@woem.men](https://woem.men/@ChaosKitsune)
